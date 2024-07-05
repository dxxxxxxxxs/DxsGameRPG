// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../Common/Bundle/BundleManager";
import { Game } from "../Common/Game";
import CCTools from "../Common/Tools/CCTools";
import JsonManager from "../Common/Tools/JsonManager";
import { uiManager } from "../Common/UI/UIManager";
import { UICF, UIID } from "./GameConfig";
import GameModel from "./Model/GameModel";
import GameConst from "./Src/GameConst";
import { GameState } from "./UI/UIGame";


const { ccclass, property } = cc._decorator;

@ccclass
export class GameManager extends cc.Component {
    protected onLoad(): void {


        let complete = async () => {
            this.initadaptation();
            Game.initialize();
            await this.initJson();
            await this.initMusic();
            await this.initLevel();
            cc.game.addPersistRootNode(this.node);
            this.addEvent();
            uiManager.open(UIID.UIGameStart);
        }
        complete();
    }

    /**初始化音量 */
    async initMusic() {
        GameModel.musicVolume = await Game.Storage.getWXItem("music", 1);
        GameModel.soundVolume = await Game.Storage.getWXItem("sound", 1);
        Game.Audio.setMusicVolume(GameModel.musicVolume);
        Game.Audio.setSoundVolume(GameModel.soundVolume);
        Game.Audio.playMusic("bg", "Audio");
        console.log("本地数据音乐" + GameModel.musicVolume);
    }

    /**初始化json数据 */
    async initJson() {
        GameModel.levelJson = await JsonManager.Instance.jsonConvert("levels");
    }

    /**初始化关卡 */
    async initLevel() {
        const level = await Game.Storage.getWXItem("level", 1)
        GameModel.level = level ? level : 1;
        console.log("本地数据等级" + level);
        console.log("gamemodel数据等级" + GameModel.level);
    }

    //初始化适配
    initadaptation() {
        GameModel.gameWidth = cc.view.getVisibleSize().width;
        GameModel.gameHeigth = cc.view.getVisibleSize().height;
        const canvas = CCTools.findChild(cc.director.getScene(), "Canvas");
        const canvasComp = canvas.getComponent(cc.Canvas);
        canvasComp.designResolution = new cc.Size(GameModel.gameWidth, GameModel.gameHeigth);
        cc.view.setDesignResolutionSize(GameModel.gameWidth, GameModel.gameHeigth, cc.ResolutionPolicy.EXACT_FIT);
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
