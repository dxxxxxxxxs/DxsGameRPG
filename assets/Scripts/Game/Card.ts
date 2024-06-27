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
        CCTools.fixedClick(this.node, this.cardDown, this);
        CCTools.findChild(this.node, "icon").getComponent(cc.Sprite).spriteFrame = icon;
        this.mask = CCTools.findChild(this.node, "mask");
    }

    /**设置覆盖关系(实际上只用设置其他被自己覆盖的卡牌，因为越后生成的层级越高) */
    setCoverCardState(target: Card) {

        if (Math.abs(this.node.x - target.node.x) < GameModel.cardWight && Math.abs(this.node.y - target.node.y) < GameModel.cardHeight) {
            if (target.cardId < this.cardId) {
                target.addAboveCard(this);
                target.coverCard(true);
                this.coverCardArray.add(target);;
            } else {
                this.addAboveCard(target);
                this.coverCard(true);
                target.coverCardArray.add(this);
            }
        }
    }

    /**自己处理覆盖关系 */
    coverCard(state: boolean) {
        this.mask.active = state;
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
            cc.tween(this.node).to(0.3, { position: cc.v3(0, 0, 0) }, { easing: 'sineOut' }).call(() => {
                Game.Event.dispatch(GameConst.UI_CardGoIn);
            }).start();
        }, 0.01);
    }
}


