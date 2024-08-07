// Learn TypeScript:
//  - https://docs.cocos.com/creator/0.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/0.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/0.4/manual/en/scripting/life-cycle-callbacks.html

import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { Card } from "../Game/Card";
import GameConst from "../Src/GameConst";
import { GameState } from "../UI/UIGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameModel {
    /**屏幕可视化宽度 */
    public static gameWidth: number = 0;
    /**屏幕可视化高度 */
    public static gameHeigth: number = 0;

    /**格子高度 */
    public static cardHeight: number = 90;
    /**格子宽度 */
    public static cardWight: number = 90;
    /**行 */
    public static row: number = 7;
    /**列 */
    public static col: number = 7;
    /**层 */
    public static layer: number = 0;
    /**当前关卡方块总数 */
    private static cardNumber: number = -1;
    /**道具数量 */
    public static propMap: Map<PropType, number> = null;

    /**格子中的位置节点 */
    public static m_PosNodeArray: cc.Node[] = [];
    public static indexArray: number[] = [];

    /**上一次点击的方块 */
    public static preCard: Card = null;

    /**当前关卡 */
    public static level: number = 0;

    /**音量 */
    public static musicVolume: number = -1;
    public static soundVolume: number = -1;

    /**关卡json文件 */
    public static levelJson: cc.JsonAsset = null;

    public static centerDeck = [];

    /**当前游戏状态 */
    private static GameState: GameState = GameState.null;

    static get CardNumber() {
        return this.cardNumber;
    }

    static set CardNumber(value: number) {
        this.cardNumber = value;
        console.log("方块数" + this.cardNumber);
        if (this.cardNumber == 0) {
            //过关了
            this.level++;
            Game.Storage.setWXItem("level", this.level);
            Game.Event.dispatch(GameConst.UI_PassLevel);
            console.log("过关");
        }
    }

    static get gameState() {
        return this.GameState;
    }
    static set gameState(state) {
        if (state) {
            switch (state) {
                case GameState.game:
                    this.GameState = state;
                    break;
                case GameState.pause:
                    this.GameState = state;
                    break;
                case GameState.over:
                    this.GameState = state;
                    break;
            }
        }
    }

    /**获取一个空格子的位置 */
    static GetPickDeckTargetTrans(cardPos: CardPos): cc.Node {
        cardPos.posId = -1;
        for (let i = this.indexArray.length - 2; i >= 0; i--) {
            if (this.indexArray[i] == cardPos.card.cardType && i + 1 <= this.indexArray.length) {
                //这里是需要移动到相同图案的方块后面一格
                cardPos.posId = i + 1;
                return this.m_PosNodeArray[i + 1];
            }
        }

        const node = this.GetEmptyPickDeckTargetTrans();
        if (node) {
            return node;
        }
        Game.Event.dispatch(GameConst.GAMEOVER);
    }


    static GetEmptyPickDeckTargetTrans(posId: number = -1): cc.Node {
        for (let i = 0; i < this.indexArray.length; i++) {
            if (this.indexArray[i] == -1) {
                if (posId != -1) {
                    this.m_PosNodeArray[i].setSiblingIndex(posId);
                    this.m_PosNodeArray[i].parent.getComponent(cc.Layout).updateLayout();
                }
                return this.m_PosNodeArray[i];
            }
        }
        return null;
    }
}


export interface CardPos {
    card: Card;
    posId: number;
}

export enum PropType {
    /**撤销 */
    revoke,
    /**提示 */
    tips,
    /**洗牌 */
    shuffle,
}