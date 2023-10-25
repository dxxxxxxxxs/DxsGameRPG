// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameState } from "../UI/UIGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameModel {
    /**屏幕可视化宽度 */
    public static gameWidth: number = 0;
    /**屏幕可视化高度 */
    public static gameHeigth: number = 0;
    /**玩家移动速度 */
    public static moveSpeed: number = 200;
    /**当前游戏分数 */
    public static gameScore: number = 0;

    /**当前游戏状态 */
    private static GameState: GameState = GameState.null;
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
}
