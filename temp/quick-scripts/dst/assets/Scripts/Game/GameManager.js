
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbUVBQThEO0FBQzlELDBDQUFxQztBQUNyQyxnREFBMkM7QUFDM0MsOENBQXlDO0FBQ3pDLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUFtR0EsQ0FBQztJQWxHYSw0QkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO0lBQ1QsbUNBQWEsR0FBYjtRQUNJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELG1CQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksdUJBQWEsQ0FBQyxVQUFVLENBQUMs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L0IsT0FBTztPQUNhLFdBQVcsQ0FtRy9CO0lBQUQsa0JBQUM7Q0FuR0QsQUFtR0MsQ0FuR3dDLEVBQUUsQ0FBQyxTQUFTLEdBbUdwRDtrQkFuR29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbW1vbi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0NvbW1vbi9HYW1lXCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9VSS9VSUdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZU1vZGVsKCk7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZSgpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ri45oiP5pWw5o2uXG4gICAgaW5pdEdhbWVNb2RlbCgpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVIZWlndGggPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0O1xuICAgIH1cbiAgICBpbml0QnVuZGxlKCkge1xuICAgICAgICBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJPYmplY3RQb29sXCIpO1xuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVTVEFSVCwgdGhpcy5HYW1lU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVPVkVSLCB0aGlzLkdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9CYWNrU3RhcnQsIHRoaXMuR2FtZUJhY2tTdGFydCwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR2V0Q29pbiwgdGhpcy5HZXRDb2luLCB0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FU1RBUlQsIHRoaXMuR2FtZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FT1ZFUiwgdGhpcy5HYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfQmFja1N0YXJ0LCB0aGlzLkdhbWVCYWNrU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdldENvaW4sIHRoaXMuR2V0Q29pbiwgdGhpcyk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBpZiAoR2FtZU1vZGVsLmdhbWVTdGF0ZSA9PSBHYW1lU3RhdGUucGF1c2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lUGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgIT0gR2FtZVN0YXRlLmdhbWUpIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9QbGF5ZXJVcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1BsYXllclVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnA6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVQYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdldENvaW4oKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU2NvcmUrKztcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfR2V0Q29pbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5byA5aeLXG4gICAgICovXG4gICAgR2FtZVN0YXJ0KCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLmdhbWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgIC8vdGhpcy5pbml0UGxheWVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn1xuICAgICAqL1xuICAgIEdhbWVPdmVyKCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVNjb3JlID0gMDtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5vdmVyO1xuICAgICAgICBHYW1lLk9iamVjdFBvb2wuVW5TcGF3bkFsbCgpO1xuICAgICAgICBHYW1lLk9iamVjdFBvb2wuQ2xlYXIoKTtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfR2FtZU92ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuLvnlYzpnaJcbiAgICAgKi9cbiAgICBHYW1lQmFja1N0YXJ0KCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLm51bGw7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuLjmiI/mmoLlgZxcbiAgICAgKi9cbiAgICBvbkdhbWVQYXVzZSgpIHtcbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLnBhdXNlKSB7XG4gICAgICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLmdhbWU7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUpIHtcbiAgICAgICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUucGF1c2U7XG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=