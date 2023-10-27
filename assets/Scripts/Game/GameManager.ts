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
import { GameState } from "../UI/UIGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    protected onLoad(): void {
        cc.game.addPersistRootNode(this.node);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.addEvent();
        this.initGameModel();
        this.initBundle();
    }

    //初始化游戏数据
    initGameModel() {
        GameModel.gameWidth = cc.view.getVisibleSize().width;
        GameModel.gameHeigth = cc.view.getVisibleSize().height;
    }
    initBundle() {
        BundleManager.loadBundle("ObjectPool");
    }


    addEvent() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game.Event.addEventListener(GameConst.GAMESTART, this.GameStart, this);
        Game.Event.addEventListener(GameConst.GAMEOVER, this.GameOver, this);
        Game.Event.addEventListener(GameConst.UI_BackStart, this.GameBackStart, this);
        Game.Event.addEventListener(GameConst.GetCoin, this.GetCoin, this);
    }
    removeEvent() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game.Event.removeEventListener(GameConst.GAMESTART, this.GameStart, this);
        Game.Event.removeEventListener(GameConst.GAMEOVER, this.GameOver, this);
        Game.Event.removeEventListener(GameConst.UI_BackStart, this.GameBackStart, this);
        Game.Event.removeEventListener(GameConst.GetCoin, this.GetCoin, this);
    }
    onKeyDown(event: cc.Event.EventKeyboard) {
        if (GameModel.gameState == GameState.pause) {
            switch (event.keyCode) {
                case cc.macro.KEY.p:
                    this.onGamePause();
                    break;
            }
            return;
        }
        if (GameModel.gameState != GameState.game) return;
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Game.Event.dispatch(GameConst.UI_PlayerUp);
                break;
            case cc.macro.KEY.w:
                Game.Event.dispatch(GameConst.UI_PlayerUp);
                break;
            case cc.macro.KEY.p:
                this.onGamePause();
                break;
        }
    }
    GetCoin() {
        GameModel.gameScore++;
        Game.Event.dispatch(GameConst.UI_GetCoin);
    }

    /**
     * 游戏开始
     */
    GameStart() {
        GameModel.gameState = GameState.game;
        cc.director.loadScene("Game");
        //this.initPlayer();
    }
    /**
     * 游戏结束
     */
    GameOver() {
        GameModel.gameScore = 0;
        GameModel.gameState = GameState.over;
        GameModel.distance = 0;
        GameModel.moveSpeed = 200;
        Game.ObjectPool.UnSpawnAll();
        Game.ObjectPool.Clear();
        Game.Event.dispatch(GameConst.UI_GameOver);
    }
    /**
     * 返回主界面
     */
    GameBackStart() {
        GameModel.gameState = GameState.null;
        cc.director.loadScene("Start");
    }
    /**
     * 游戏暂停
     */
    onGamePause() {
        if (GameModel.gameState == GameState.pause) {
            GameModel.gameState = GameState.game;
            cc.game.resume();
        }
        else if (GameModel.gameState) {
            GameModel.gameState = GameState.pause;
            cc.game.pause();
        }
    }
}
