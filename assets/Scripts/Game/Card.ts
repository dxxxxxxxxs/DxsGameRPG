// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { Game } from "../../Common/Game";
import IResultAble from "../../Common/Pool/IResultAble";
import ObjectPool from "../../Common/Pool/ObjectPool";
import CCTools from "../../Common/Tools/CCTools";
import GameModel from "../Model/GameModel";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export class Card extends IResultAble {

    /**方块序号 */
    cardId: number = 0;
    /**方块所在层 */
    layer: number = 0;
    /**方块所在列 */
    col: number = 0;
    /**方块所在行 */
    row: number = 0;
    /**方块类型 */
    cardType: number = 0;

    /**当前方块的遮罩 */
    private mask: cc.Node = null;
    /**覆盖当前方块的所有方块 */
    private aboveCardArray: Set<Card>;
    /**当前方块覆盖的所有方块 */
    private coverCardArray: Set<Card>;

    /**在方块堆时的位置 */
    private curPos: cc.Vec2 = null;

    /**能点击 */
    public isCanClick: boolean = true;

    /**是否在飞行中 */
    public isFly: boolean = false;


    public onSpawn() {

    }

    public unSpawn() {

    }

    /**初始化 */
    init(icon: cc.SpriteFrame, iconNumber: number, x: number, y: number, z: number, cardid: number) {
        this.layer = z;
        this.col = x;
        this.row = y;
        this.cardType = iconNumber;
        this.cardId = cardid;
        this.aboveCardArray = new Set<Card>();
        this.coverCardArray = new Set<Card>();
        this.curPos = this.node.getPosition();
        CCTools.fixedClick(this.node, this.cardDown, this);
        CCTools.findChild(this.node, "icon").getComponent(cc.Sprite).spriteFrame = icon;
        this.mask = CCTools.findChild(this.node, "mask");
        this.node.setSiblingIndex(this.cardId);
        console.log(this.node.getSiblingIndex() + "方块在父节点下的索引");
    }

    /**设置覆盖关系(实际上只用设置其他被自己覆盖的卡牌，因为越后生成的层级越高) */
    setCoverCardState(target: Card) {
        if (Math.abs(this.node.x - target.node.x) < GameModel.cardWight && Math.abs(this.node.y - target.node.y) < GameModel.cardHeight) {
            target.addAboveCard(this);
            target.coverCard(true);
            this.coverCardArray.add(target);
        }
    }

    /**自己处理覆盖关系 */
    coverCard(state: boolean) {
        this.mask.active = state;
        this.isCanClick = !state;
    }

    /**添加覆盖当前方块的方块 */
    addAboveCard(card: Card) {
        this.aboveCardArray.add(card);
    }

    /**覆盖当前方块的方块被点击移动后触发 */
    removeAboveCard(card: Card) {
        if (this.aboveCardArray.has(card)) {
            this.aboveCardArray.delete(card);
            if (this.aboveCardArray.size == 0) {
                this.coverCard(false);
            }
        }
    }
    /**点击方块 */
    cardDown() {
        console.log("点击方块的索引" + this.cardId);
        CCTools.controlClicks(this.node, false);
        this.isFly = true;
        GameModel.preCard = this;
        for (const item of this.coverCardArray) {
            item.removeAboveCard(this);
        }
        let cardPos = { card: this, posId: -1 };
        const cur = GameModel.GetPickDeckTargetTrans(cardPos);
        let newParent = cur;
        if (cur.childrenCount > 0) {
            newParent = GameModel.GetEmptyPickDeckTargetTrans(cardPos.posId);
        }
        this.scheduleOnce(() => {
            CCTools.changeParentAndKeepPosition(this.node, newParent);
            Game.Event.dispatch(GameConst.UI_SortCard);
            cc.tween(this.node).to(0.2, { position: cc.v3(0, 0, 0) }, { easing: 'sineOut' }).call(() => {
                this.isFly = false;
                this.isCanClick = false;
                Game.Event.dispatch(GameConst.UI_CardGoIn, this);
            }).start();
        }, 0.01);
    }

    /**撤销道具 */
    revokeCard() {
        this.isFly = true;
        Game.Event.dispatch(GameConst.UI_SortCard);
        cc.tween(this.node).to(0.2, { position: cc.v3(this.curPos) }, { easing: 'sineOut' }).call(() => {
            this.isFly = false;
            CCTools.controlClicks(this.node, true);
            Game.Event.dispatch(GameConst.UI_CardRevoke, this);
        }).start();
    }

    /**提示 */
    cardTips() {
        let tween1 = cc.tween(this.node).to(0.05, { color: cc.Color.RED });
        let tween2 = cc.tween(this.node).to(0.05, { color: cc.Color.WHITE });
        cc.tween(this.node).sequence(tween1, tween2).repeat(2).start();
    }

    /**洗牌 */
    shuffle(icon: cc.SpriteFrame) {
        CCTools.findChild(this.node, "icon").getComponent(cc.Sprite).spriteFrame = icon;
    }

}


