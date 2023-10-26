"use strict";
cc._RF.push(module, '5c1d1bdjzpP4oocLOqr3ZjG', 'GameManager');
// Scripts/Game/GameManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BundleManager_1 = require("../../Common/Bundle/BundleManager");
var Game_1 = require("../../Common/Game");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var UIGame_1 = require("../UI/UIGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameManager.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.addEvent();
        this.initGameModel();
        this.initBundle();
    };
    //初始化游戏数据
    GameManager.prototype.initGameModel = function () {
        GameModel_1.default.gameWidth = cc.view.getVisibleSize().width;
        GameModel_1.default.gameHeigth = cc.view.getVisibleSize().height;
    };
    GameManager.prototype.initBundle = function () {
        BundleManager_1.default.loadBundle("ObjectPool");
    };
    GameManager.prototype.addEvent = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GAMESTART, this.GameStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GAMEOVER, this.GameOver, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_BackStart, this.GameBackStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GetCoin, this.GetCoin, this);
    };
    GameManager.prototype.removeEvent = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GAMESTART, this.GameStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GAMEOVER, this.GameOver, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_BackStart, this.GameBackStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GetCoin, this.GetCoin, this);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (GameModel_1.default.gameState == UIGame_1.GameState.pause) {
            switch (event.keyCode) {
                case cc.macro.KEY.p:
                    this.onGamePause();
                    break;
            }
            return;
        }
        if (GameModel_1.default.gameState != UIGame_1.GameState.game)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Game_1.default.Event.dispatch(GameConst_1.default.UI_PlayerUp);
                break;
            case cc.macro.KEY.w:
                Game_1.default.Event.dispatch(GameConst_1.default.UI_PlayerUp);
                break;
            case cc.macro.KEY.p:
                this.onGamePause();
                break;
        }
    };
    GameManager.prototype.GetCoin = function () {
        GameModel_1.default.gameScore++;
        Game_1.default.Event.dispatch(GameConst_1.default.UI_GetCoin);
    };
    /**
     * 游戏开始
     */
    GameManager.prototype.GameStart = function () {
        GameModel_1.default.gameState = UIGame_1.GameState.game;
        cc.director.loadScene("Game");
        //this.initPlayer();
    };
    /**
     * 游戏结束
     */
    GameManager.prototype.GameOver = function () {
        GameModel_1.default.gameScore = 0;
        GameModel_1.default.gameState = UIGame_1.GameState.over;
        GameModel_1.default.distance = 0;
        Game_1.default.ObjectPool.UnSpawnAll();
        Game_1.default.ObjectPool.Clear();
        Game_1.default.Event.dispatch(GameConst_1.default.UI_GameOver);
    };
    /**
     * 返回主界面
     */
    GameManager.prototype.GameBackStart = function () {
        GameModel_1.default.gameState = UIGame_1.GameState.null;
        cc.director.loadScene("Start");
    };
    /**
     * 游戏暂停
     */
    GameManager.prototype.onGamePause = function () {
        if (GameModel_1.default.gameState == UIGame_1.GameState.pause) {
            GameModel_1.default.gameState = UIGame_1.GameState.game;
            cc.game.resume();
        }
        else if (GameModel_1.default.gameState) {
            GameModel_1.default.gameState = UIGame_1.GameState.pause;
            cc.game.pause();
        }
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();