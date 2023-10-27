
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        GameModel_1.default.moveSpeed = 200;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbUVBQThEO0FBQzlELDBDQUFxQztBQUNyQyxnREFBMkM7QUFDM0MsOENBQXlDO0FBQ3pDLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUFxR0EsQ0FBQztJQXBHYSw0QkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO0lBQ1QsbUNBQWEsR0FBYjtRQUNJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELG1CQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksdUJBQWEsQ0FBQyxVQUFVLENBQUMs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QztZQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQXBHZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFHL0I7SUFBRCxrQkFBQztDQXJHRCxBQXFHQyxDQXJHd0MsRUFBRSxDQUFDLFNBQVMsR0FxR3BEO2tCQXJHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tbW9uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vQ29tbW9uL0dhbWVcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vU3JjL0dhbWVDb25zdFwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL1VJL1VJR2FtZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRHYW1lTW9kZWwoKTtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlKCk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJbmuLjmiI/mlbDmja5cbiAgICBpbml0R2FtZU1vZGVsKCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVdpZHRoID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoO1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZUhlaWd0aCA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XG4gICAgfVxuICAgIGluaXRCdW5kbGUoKSB7XG4gICAgICAgIEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIk9iamVjdFBvb2xcIik7XG4gICAgfVxuXG5cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR0FNRVNUQVJULCB0aGlzLkdhbWVTdGFydCwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR0FNRU9WRVIsIHRoaXMuR2FtZU92ZXIsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0JhY2tTdGFydCwgdGhpcy5HYW1lQmFja1N0YXJ0LCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HZXRDb2luLCB0aGlzLkdldENvaW4sIHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVTVEFSVCwgdGhpcy5HYW1lU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVPVkVSLCB0aGlzLkdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9CYWNrU3RhcnQsIHRoaXMuR2FtZUJhY2tTdGFydCwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR2V0Q29pbiwgdGhpcy5HZXRDb2luLCB0aGlzKTtcbiAgICB9XG4gICAgb25LZXlEb3duKGV2ZW50OiBjYy5FdmVudC5FdmVudEtleWJvYXJkKSB7XG4gICAgICAgIGlmIChHYW1lTW9kZWwuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5wYXVzZSkge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVQYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZU1vZGVsLmdhbWVTdGF0ZSAhPSBHYW1lU3RhdGUuZ2FtZSkgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1BsYXllclVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfUGxheWVyVXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2FtZVBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgR2V0Q29pbigpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTY29yZSsrO1xuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9HZXRDb2luKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lvIDlp4tcbiAgICAgKi9cbiAgICBHYW1lU3RhcnQoKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuZ2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICAgICAgLy90aGlzLmluaXRQbGF5ZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICovXG4gICAgR2FtZU92ZXIoKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU2NvcmUgPSAwO1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLm92ZXI7XG4gICAgICAgIEdhbWVNb2RlbC5kaXN0YW5jZSA9IDA7XG4gICAgICAgIEdhbWVNb2RlbC5tb3ZlU3BlZWQgPSAyMDA7XG4gICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduQWxsKCk7XG4gICAgICAgIEdhbWUuT2JqZWN0UG9vbC5DbGVhcigpO1xuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9HYW1lT3Zlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/lOWbnuS4u+eVjOmdolxuICAgICAqL1xuICAgIEdhbWVCYWNrU3RhcnQoKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUubnVsbDtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4uOaIj+aaguWBnFxuICAgICAqL1xuICAgIG9uR2FtZVBhdXNlKCkge1xuICAgICAgICBpZiAoR2FtZU1vZGVsLmdhbWVTdGF0ZSA9PSBHYW1lU3RhdGUucGF1c2UpIHtcbiAgICAgICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuZ2FtZTtcbiAgICAgICAgICAgIGNjLmdhbWUucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoR2FtZU1vZGVsLmdhbWVTdGF0ZSkge1xuICAgICAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5wYXVzZTtcbiAgICAgICAgICAgIGNjLmdhbWUucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==