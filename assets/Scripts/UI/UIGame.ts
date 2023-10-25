// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../../Common/Bundle/BundleManager";
import Game from "../../Common/Game";
import GameModel from "../Model/GameModel";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

export enum GameState {
    null,
    game,
    pause,
    over,
}
@ccclass
export default class UIGame extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;
    @property(cc.Label)
    score: cc.Label = null;
    protected onEnable(): void {
        this.addEvent();
        this.initPlayer();
        this.initCoin();

    }
    async initPlayer() {
        try {
            let player = await Game.ObjectPool.Spawn("player", this.node);
            player.setPosition(0, 0);
        } catch (error) {
            console.log(error);
        }
    }
    async initCoin() {
        try {
            for (let i = 0; i < 100; i++) {
                let coin = await Game.ObjectPool.Spawn("Coin", this.node);
                coin.setPosition(i * 100, i * 5)
            }
        } catch (error) {
            console.log(error);
        }
    }
    protected onDisable(): void {
        this.removeEvent();
    }
    protected update(dt: number): void {
        if (GameModel.gameState == GameState.game) {
            this.camera.node.x += GameModel.moveSpeed * dt;
            this.node.getChildByName("Bg").x += GameModel.moveSpeed * dt;
        }
    }
    addEvent() {
        Game.Event.addEventListener(GameConst.UI_GameOver, this.gameOver, this);
        Game.Event.addEventListener(GameConst.UI_GetCoin, this.UIGetCoin, this);
        //Game.Event.addEventListener(GameConst.UI_GameStart, this.gameStart, this);
    }
    removeEvent() {
        Game.Event.removeEventListener(GameConst.UI_GameOver, this.gameOver, this);
        Game.Event.removeEventListener(GameConst.UI_GetCoin, this.UIGetCoin, this);
        //Game.Event.removeEventListener(GameConst.UI_GameStart, this.gameStart, this);
    }
    UIGetCoin() {
        this.score.string = GameModel.gameScore.toString();
    }

    async gameOver() {
        let over = await Game.ObjectPool.Spawn("UIGameOver", this.camera.node);
        over.setPosition(0, 0, -1);
        console.log(over.getPosition());
        this.node.active = false;
    }
}
