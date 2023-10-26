
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbUVBQThEO0FBQzlELDBDQUFxQztBQUNyQyxnREFBMkM7QUFDM0MsOENBQXlDO0FBQ3pDLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUFvR0EsQ0FBQztJQW5HYSw0QkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO0lBQ1QsbUNBQWEsR0FBYjtRQUNJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELG1CQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksdUJBQWEsQ0FBQyxVQUFVLENBQUMs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LENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBbkdnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBb0cvQjtJQUFELGtCQUFDO0NBcEdELEFBb0dDLENBcEd3QyxFQUFFLENBQUMsU0FBUyxHQW9HcEQ7a0JBcEdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21tb24vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9Db21tb24vR2FtZVwiO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9TcmMvR2FtZUNvbnN0XCI7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi4vVUkvVUlHYW1lXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdEdhbWVNb2RlbCgpO1xuICAgICAgICB0aGlzLmluaXRCdW5kbGUoKTtcbiAgICB9XG5cbiAgICAvL+WIneWni+WMlua4uOaIj+aVsOaNrlxuICAgIGluaXRHYW1lTW9kZWwoKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lV2lkdGggPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGg7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lSGVpZ3RoID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodDtcbiAgICB9XG4gICAgaW5pdEJ1bmRsZSgpIHtcbiAgICAgICAgQnVuZGxlTWFuYWdlci5sb2FkQnVuZGxlKFwiT2JqZWN0UG9vbFwiKTtcbiAgICB9XG5cblxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FU1RBUlQsIHRoaXMuR2FtZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FT1ZFUiwgdGhpcy5HYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfQmFja1N0YXJ0LCB0aGlzLkdhbWVCYWNrU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdldENvaW4sIHRoaXMuR2V0Q29pbiwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR0FNRVNUQVJULCB0aGlzLkdhbWVTdGFydCwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR0FNRU9WRVIsIHRoaXMuR2FtZU92ZXIsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0JhY2tTdGFydCwgdGhpcy5HYW1lQmFja1N0YXJ0LCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HZXRDb2luLCB0aGlzLkdldENvaW4sIHRoaXMpO1xuICAgIH1cbiAgICBvbktleURvd24oZXZlbnQ6IGNjLkV2ZW50LkV2ZW50S2V5Ym9hcmQpIHtcbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLnBhdXNlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2FtZVBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHYW1lTW9kZWwuZ2FtZVN0YXRlICE9IEdhbWVTdGF0ZS5nYW1lKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XG4gICAgICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfUGxheWVyVXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9QbGF5ZXJVcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5wOlxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lUGF1c2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBHZXRDb2luKCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVNjb3JlKys7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX0dldENvaW4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+W8gOWni1xuICAgICAqL1xuICAgIEdhbWVTdGFydCgpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5nYW1lO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgICAvL3RoaXMuaW5pdFBsYXllcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTY29yZSA9IDA7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUub3ZlcjtcbiAgICAgICAgR2FtZU1vZGVsLmRpc3RhbmNlID0gMDtcbiAgICAgICAgR2FtZS5PYmplY3RQb29sLlVuU3Bhd25BbGwoKTtcbiAgICAgICAgR2FtZS5PYmplY3RQb29sLkNsZWFyKCk7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX0dhbWVPdmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+U5Zue5Li755WM6Z2iXG4gICAgICovXG4gICAgR2FtZUJhY2tTdGFydCgpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5udWxsO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTdGFydFwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5ri45oiP5pqC5YGcXG4gICAgICovXG4gICAgb25HYW1lUGF1c2UoKSB7XG4gICAgICAgIGlmIChHYW1lTW9kZWwuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5wYXVzZSkge1xuICAgICAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5nYW1lO1xuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChHYW1lTW9kZWwuZ2FtZVN0YXRlKSB7XG4gICAgICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLnBhdXNlO1xuICAgICAgICAgICAgY2MuZ2FtZS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19