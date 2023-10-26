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
    preMap: cc.Node = null;
    cruMap: cc.Node = null;
    protected onEnable(): void {
        this.addEvent();
        this.initMap();
        this.initPlayer();
    }
    async initPlayer() {
        try {
            let player = await Game.ObjectPool.Spawn("player", this.node);
            player.setPosition(0, 0);
        } catch (error) {
            console.log(error);
        }
    }
    async initMap() {
        let temp = Math.floor(Math.random() * 2 + 1);
        this.preMap = await Game.ObjectPool.Spawn("map" + temp, this.node);
        this.cruMap = await Game.ObjectPool.Spawn("map" + temp, this.node);
        this.preMap.setPosition(0, -GameModel.gameHeigth / 2);
        this.cruMap.setPosition(this.preMap.width + 200, -GameModel.gameHeigth / 2);
    }
    async createOneMap() {
        let temp = Math.floor(Math.random() * 2 + 1);
        let nextMap = await Game.ObjectPool.Spawn("map" + temp, this.node);
        nextMap.setPosition(this.cruMap.x + this.preMap.width + 200, -GameModel.gameHeigth / 2);
        await this.initCoin(nextMap.x);
        let oldMap = this.preMap;
        this.preMap = this.cruMap;
        this.cruMap = nextMap;
        Game.ObjectPool.UnSpawn(oldMap);
    }
    async initCoin(x: number) {
        try {
            for (let i = 0; i < 5; i++) {
                let coin = await Game.ObjectPool.Spawn("Coin", this.node);
                coin.setPosition(x + i * (i > 2 ? -100 : 100), (Math.random() > 0.5 ? 10 : 40));
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
        Game.Event.addEventListener(GameConst.UI_CreateMap, this.createOneMap, this);
        //Game.Event.addEventListener(GameConst.UI_GameStart, this.gameStart, this);
    }
    removeEvent() {
        Game.Event.removeEventListener(GameConst.UI_GameOver, this.gameOver, this);
        Game.Event.removeEventListener(GameConst.UI_GetCoin, this.UIGetCoin, this);
        Game.Event.removeEventListener(GameConst.UI_CreateMap, this.createOneMap, this);
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
