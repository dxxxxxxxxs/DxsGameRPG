// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../Common/Bundle/BundleManager";
import { Game } from "../Common/Game";
import { uiManager } from "../Common/UI/UIManager";
import { UICF, UIID } from "./GameConfig";
import GameModel from "./Model/GameModel";
import GameConst from "./Src/GameConst";
import { GameState } from "./UI/UIGame";


const { ccclass, property } = cc._decorator;

@ccclass
export class GameManager extends cc.Component {
    protected onLoad(): void {
        Game.initialize();
        cc.game.addPersistRootNode(this.node);
        this.addEvent();
        this.initGameModel();
        this.initBundle();
        uiManager.open(UIID.UIGameStart);
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
        Game.Event.addEventListener(GameConst.GAMESTART, this.GameStart, this);
        Game.Event.addEventListener(GameConst.GAMEOVER, this.GameOver, this);
        Game.Event.addEventListener(GameConst.UI_BackStart, this.GameBackStart, this);
    }
    removeEvent() {
        Game.Event.removeEventListener(GameConst.GAMESTART, this.GameStart, this);
        Game.Event.removeEventListener(GameConst.GAMEOVER, this.GameOver, this);
        Game.Event.removeEventListener(GameConst.UI_BackStart, this.GameBackStart, this);
    }

    /**
     * 游戏开始
     */
    GameStart() {
        GameModel.gameState = GameState.game;
        uiManager.open(UIID.UIGame);
    }
    /**
     * 游戏结束
     */
    GameOver() {
        GameModel.gameState = GameState.over;
        Game.ObjectPool.UnSpawnAll();
        Game.ObjectPool.Clear();
        cc.Tween.stopAll();
        uiManager.open(UIID.UIGameOver);
    }
    /**
     * 返回主界面
     */
    GameBackStart() {
        GameModel.gameState = GameState.null;
        uiManager.open(UIID.UIGameStart);
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
