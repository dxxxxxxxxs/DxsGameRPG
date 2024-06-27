// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../../Common/Bundle/BundleManager";
import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { uiManager } from "../../Common/UI/UIManager";
import { UIView } from "../../Common/UI/UIView";
import { Card } from "../Game/Card";
import { UIID } from "../GameConfig";
import GameModel, { PropType } from "../Model/GameModel";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

export enum GameState {
    null,
    game,
    pause,
    over,
}
//每个位置的生成状态（根据关卡提供的数组数据）
export enum CreateState {
    /**不生成 */
    null = 0,
    /**生成可能偏移 */
    create,
    /**生成但是不偏移 */
    onlycreate
}
@ccclass
export default class UIGame extends UIView {

    @property(cc.Node)
    btn_Set: cc.Node = null;
    @property(cc.Node)
    derk: cc.Node = null;
    @property(cc.Node)
    posNodeArray: cc.Node[] = [];
    @property(cc.Node)
    pickDerk: cc.Node = null;
    @property(cc.Node)
    btn_revoke: cc.Node = null;
    @property(cc.Node)
    btn_tips: cc.Node = null;
    @property(cc.Node)
    btn_shuffle: cc.Node = null;
    @property(cc.SpriteFrame)
    iconFrames: cc.SpriteFrame[] = [];

    /**当前关卡生成的所有方块 */
    private cards: Set<Card>;
    private cardArray: number[] = [0, 0, 0, 0, 0];
    public init(...args: any[]): void {
        this.initProp();
        CCTools.fixedClick(this.btn_Set, () => { uiManager.open(UIID.UISet); }, this);
        CCTools.fixedClick(this.btn_revoke, this.btnRevokeDown, this);
        CCTools.fixedClick(this.btn_tips, this.btnTipsDown, this);
        CCTools.fixedClick(this.btn_shuffle, this.btnShuffleDown, this);

    }

    onOpen(): void {
        this.addEvent();
        this.createCards();
        GameModel.m_PosNodeArray = this.posNodeArray;
        GameModel.indexArray = [-1, -1, -1, -1, -1, -1, -1];
    }

    addEvent() {
        Game.Event.addEventListener(GameConst.UI_AgainGame, this.againGame, this);
        Game.Event.addEventListener(GameConst.UI_CardGoIn, this.CardGoIn, this);
        Game.Event.addEventListener(GameConst.UI_SortCard, this.sortCard, this);
    }

    /**初始化道具数量 */
    initProp() {
        GameModel.propMap = new Map<PropType, number>();
        GameModel.propMap.set(PropType.revoke, 1);
        GameModel.propMap.set(PropType.tips, 1);
        GameModel.propMap.set(PropType.shuffle, 1);
    }

    /**生成牌堆 */
    async createCards() {

        this.derk.setPosition(-(GameModel.col * GameModel.cardWight / 2), 450);
        this.cards = new Set<Card>();
        this.randomCard();
        let cardId = 0;
        for (let z = 0; z < GameModel.layer; z++) {
            for (let y = 0; y < GameModel.row; y++) {
                for (let x = 0; x < GameModel.col; x++) {
                    //判断当前列是否会偏移
                    let isMoveX = CCTools.Random(0, 2);
                    let dirX = 0;
                    //判断当前行是否会偏移
                    let isMoveY = CCTools.Random(0, 2);
                    let dirY = 0;
                    let isCreate = true;
                    const cs: CreateState = GameModel.centerDeck[z][y][x];
                    switch (cs) {
                        case CreateState.null:
                            isCreate = false;
                            break;
                        case CreateState.create:
                            if (isMoveX) {
                                //判断偏移方向
                                dirX = CCTools.Random(0, 2) == 0 ? 1 : -1;
                            }
                            if (isMoveY) {
                                //判断偏移方向
                                dirY = CCTools.Random(0, 2) == 0 ? 1 : -1;
                            }
                            break;
                        case CreateState.onlycreate:
                            break;
                        default:
                            break;
                    }
                    if (isCreate) {
                        let card = await Game.ObjectPool.Spawn("Card", this.derk, "Game");
                        card.setPosition(GameModel.cardWight * (x + 0.5 * dirX), -GameModel.cardHeight * (y + 0.5 * dirY));
                        let cardts = card.getComponent(Card);
                        const iconNumber = this.getCardIcon();
                        cardts.init(this.iconFrames[iconNumber], iconNumber, x, y, z, cardId);
                        cardId++;
                        this.determineCover(cardts);
                        this.cards.add(cardts);
                    }
                }
            }
        }
    }

    /**随机出每种方块的数量 */
    randomCard() {
        const c = Math.floor((GameModel.cardNumber / (this.cardArray.length * 3)));
        let rest = GameModel.cardNumber - c * 3 * this.cardArray.length;
        for (let i = 0; i < this.cardArray.length; i++) {
            this.cardArray[i] = c * 3;
        }
        while (rest > 0) {
            let random = CCTools.Random(0, this.cardArray.length - 1);
            this.cardArray[random] += 3;
            rest -= 3;
        }
    }

    /**获取一个可用的格子icon */
    getCardIcon(): number {
        const type = CCTools.Random(0, this.cardArray.length - 1);
        this.cardArray[type]--;
        return type;
    }

    /**判断和其他方块的覆盖关系 */
    determineCover(card: Card) {
        for (const item of this.cards) {
            card.setCoverCardState(item);
        }
    }

    /**方块进入下方框中 */
    CardGoIn(event: string, card: Card) {
        this.clearCard(card);
        this.scheduleOnce(() => {
            this.SortGridPos();
        }, 0.05);
    }

    /**排序卡牌和id */
    sortCard() {
        for (const iterator of this.pickDerk.children) {
            console.log(iterator.name + "父节点排序后");
        }
        for (let i = 0; i < GameModel.m_PosNodeArray.length; i++) {
            this.posNodeArray[i] = this.pickDerk.children[i];
            GameModel.m_PosNodeArray[i] = this.pickDerk.children[i];
            let CardTS = null;
            if (this.pickDerk.children[i].childrenCount > 0) {
                CardTS = this.pickDerk.children[i].children[0].getComponent(Card);
            }
            GameModel.indexArray[i] = CardTS ? CardTS.cardType : -1;
        }
        for (const iterator of GameModel.m_PosNodeArray) {
            console.log(iterator.name + "节点排序后");
        }
        for (const iterator of GameModel.indexArray) {
            console.log(iterator + "id排序后");
        }
    }

    /**消除 */
    clearCard(card: Card) {
        let sameCount = 0;
        let clearArray = [];
        for (let i = 0; i < GameModel.indexArray.length; i++) {
            if (GameModel.indexArray[i] == -1) break;
            if (GameModel.indexArray[i] === card.cardType) {
                sameCount++;
                clearArray.push(GameModel.m_PosNodeArray[i].children[0]);
            }
            if (sameCount >= 3 && clearArray.length >= 3) {
                for (let j = 0; j < clearArray.length; j++) {
                    if (clearArray[j].getComponent(Card).isFly) {
                        return;
                    }
                }
                for (let j = 0; j < clearArray.length; j++) {
                    GameModel.indexArray[j] = -1;
                    Game.ObjectPool.UnSpawn(clearArray[j]);
                }
                break;
            }
            if (i >= GameModel.indexArray.length - 1) {
                Game.Event.dispatch(GameConst.GAMEOVER);
            }
        }
        // let sameCount = 0;
        // let id = -1;
        // let startIndex = -1;
        // for (let i = 0; i < GameModel.indexArray.length; i++) {
        //     if (GameModel.indexArray[i] == -1) break;
        //     if (sameCount == 0) {
        //         sameCount = 1;
        //         id = GameModel.indexArray[i];
        //         startIndex = i;
        //     } else {
        //         if (id === GameModel.indexArray[i]) {
        //             sameCount++;
        //         } else {
        //             sameCount = 1;
        //             id = GameModel.indexArray[i];
        //             startIndex = i;
        //         }
        //     }
        //     if (sameCount >= 3) {
        //         //消除
        //         for (let j = startIndex; j < startIndex + 3; j++) {
        //             GameModel.indexArray[j] = -1;
        //             Game.ObjectPool.UnSpawn(GameModel.m_PosNodeArray[j].children[0]);
        //         }
        //         break;
        //     }
        //     if (i >= GameModel.indexArray.length - 1) {
        //         Game.Event.dispatch(GameConst.GAMEOVER);
        //     }
        // }
    }

    /**消除后填充框 */
    SortGridPos() {
        for (let i = 0; i < GameModel.indexArray.length; i++) {
            if (GameModel.m_PosNodeArray[i].childrenCount <= 0) {
                GameModel.m_PosNodeArray[i].setSiblingIndex(6);
            }
        }
        this.sortCard();
    }


    /**点击撤销道具 */
    btnRevokeDown() {

    }

    /**点击提示道具 */
    btnTipsDown() {

    }

    /**点击洗牌道具 */
    btnShuffleDown() {

    }

    /**重新开始游戏 */
    againGame() {

    }

}
