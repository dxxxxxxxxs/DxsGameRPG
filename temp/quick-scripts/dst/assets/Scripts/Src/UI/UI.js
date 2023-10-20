
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39ae51oH/NGc7pKgBSh6txq', 'UI');
// Scripts/Src/UI/UI.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioRoot_1 = require("../../Framework/Audio/AudioRoot");
var BundleManager_1 = require("../../Framework/Bundle/BundleManager");
var Game_1 = require("../../Framework/Game");
var CCTools_1 = require("../../Framework/Tools/CCTools");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var RWInfo_1 = require("../Model/RWInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI.prototype.onLoad = function () {
        this.addEvent();
        this.initUI();
        this.initBundle();
    };
    UI.prototype.initBundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audioNode, share;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audioNode = new cc.Node();
                        audioNode.addComponent(cc.AudioSource);
                        audioNode.addComponent(AudioRoot_1.default);
                        //await BundleManager.loadBundle("Prefab");
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("Audio")];
                    case 1:
                        //await BundleManager.loadBundle("Prefab");
                        _a.sent();
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("ObjectPool")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("share", this.node)];
                    case 3:
                        share = _a.sent();
                        share.setPosition(360, 640);
                        this.scheduleOnce(function () {
                            Game_1.default.ObjectPool.UnSpawn(share);
                        }, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    UI.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.GameStart = function () {
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").active = false;
        Game_1.default.Event.dispatch(GameConst_1.default.GameStart);
    };
    UI.prototype.GameOver = function () {
        this.node.getChildByName("Canvas").getChildByName("GameOverPanel").active = true;
    };
    UI.prototype.initUI = function () {
        this.updateUI();
        this.initRWInfos();
    };
    UI.prototype.initRWInfos = function () {
        var money = 100;
        for (var i = 0; i < 10; i++) {
            var state = Math.floor(Math.random() * 2);
            var rw = new RWInfo_1.RWInfo(state, null, 0.2, "任务" + i, money);
            GameModel_1.default.RWInfos.push(rw);
            money += 100;
        }
    };
    UI.prototype.updateRWInfos = function () {
    };
    UI.prototype.updateUI = function () {
        this.updateMusic();
    };
    UI.prototype.updateMusic = function () {
        console.log("改变静音");
        Game_1.default.Event.dispatch(GameConst_1.default.UI_UpdateMusic);
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOn").active = GameModel_1.default.isMusic;
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOff").active = !GameModel_1.default.isMusic;
    };
    UI.prototype.InputEmailEnter = function () {
        var string = this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string;
        if (CCTools_1.default.isValidEmail(string)) {
            console.log("发送邮件成功");
        }
        else {
            this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string = "";
            console.log("错误邮箱格式");
        }
    };
    UI.prototype.onDestroy = function () {
        this.removeEvent();
    };
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2REFBd0Q7QUFDeEQsc0VBQWlFO0FBQ2pFLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQywwQ0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7O0lBd0ZBLENBQUM7SUF2RkcsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNZLHVCQUFVLEdBQXZCOzs7Ozs7d0JBRVEsU0FBUyxHQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUM1QixTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7d0JBQ2xDLDJDQUEyQzt3QkFDM0MscUJBQU0sdUJBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUR2QywyQ0FBMkM7d0JBQzNDLFNBQXVDLENBQUM7d0JBQ3hDLHFCQUFNLHVCQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzt3QkFDbkMscUJBQU0sY0FBSSxDQUFDLFVBQVUsQ0FB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QUFDO0lBQ0QsNEJBQWUsR0FBZjtRQUVJLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuSixJQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUMvQjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7WUFDcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDUyxzQkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBdkZnQixFQUFFO1FBRHRCLE9BQU87T0FDYSxFQUFFLENBd0Z0QjtJQUFELFNBQUM7Q0F4RkQsQUF3RkMsQ0F4RitCLEVBQUUsQ0FBQyxTQUFTLEdBd0YzQztrQkF4Rm9CLEVBQUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEF1ZGlvUm9vdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0F1ZGlvL0F1ZGlvUm9vdFwiO1xuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HYW1lXCI7XG5pbXBvcnQgQ0NUb29scyBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Rvb2xzL0NDVG9vbHNcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBSV0luZm8gfSBmcm9tIFwiLi4vTW9kZWwvUldJbmZvXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBpbml0QnVuZGxlKClcbiAgICB7XG4gICAgICAgIGxldCBhdWRpb05vZGU9bmV3IGNjLk5vZGUoKTtcbiAgICAgICAgYXVkaW9Ob2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoQXVkaW9Sb290KTtcbiAgICAgICAgLy9hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJQcmVmYWJcIik7XG4gICAgICAgIGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIkF1ZGlvXCIpO1xuICAgICAgICBhd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJPYmplY3RQb29sXCIpO1xuICAgICAgICBsZXQgc2hhcmU9YXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwic2hhcmVcIix0aGlzLm5vZGUpO1xuICAgICAgICBzaGFyZS5zZXRQb3NpdGlvbigzNjAsNjQwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduKHNoYXJlKTtcbiAgICAgICAgfSwzKVxuICAgICAgICAvLyBsZXQgUHJlZmFiPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KFwiR2FtZVJXUGFuZWxcIixcIlByZWZhYlwiKTtcbiAgICAgICAgLy8gbGV0IG5vZGU9Y2MuaW5zdGFudGlhdGUoUHJlZmFiKTtcbiAgICAgICAgLy8gbm9kZS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLHRoaXMuR2FtZU92ZXIsdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZU92ZXIsdGhpcy5HYW1lT3Zlcix0aGlzKTtcbiAgICB9XG4gICAgR2FtZVN0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR2FtZVN0YXJ0KTtcbiAgICB9XG4gICAgR2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJQYW5lbFwiKS5hY3RpdmU9dHJ1ZTtcbiAgICB9XG4gICAgaW5pdFVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5pbml0UldJbmZvcygpO1xuICAgIH1cbiAgICBpbml0UldJbmZvcygpXG4gICAge1xuICAgICAgICBsZXQgbW9uZXk9MTAwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDEwO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXRlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgICAgIGxldCBydz1uZXcgUldJbmZvKHN0YXRlLG51bGwsMC4yLFwi5Lu75YqhXCIraSxtb25leSk7XG4gICAgICAgICAgICBHYW1lTW9kZWwuUldJbmZvcy5wdXNoKHJ3KTtcbiAgICAgICAgICAgIG1vbmV5Kz0xMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUldJbmZvcygpXG4gICAge1xuXG4gICAgfVxuICAgIHVwZGF0ZVVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlTXVzaWMoKTtcbiAgICB9XG4gICAgdXBkYXRlTXVzaWMoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmlLnlj5jpnZnpn7NcIik7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1VwZGF0ZU11c2ljKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZVN0YXJ0UGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NdXNpY1wiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljT25cIikuYWN0aXZlPUdhbWVNb2RlbC5pc011c2ljO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuTXVzaWNPZmZcIikuYWN0aXZlPSFHYW1lTW9kZWwuaXNNdXNpYztcbiAgICB9XG4gICAgSW5wdXRFbWFpbEVudGVyKClcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmc6c3RyaW5nPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBpZihDQ1Rvb2xzLmlzVmFsaWRFbWFpbChzdHJpbmcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPkemAgemCruS7tuaIkOWKn1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPVwiXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUmeivr+mCrueuseagvOW8j1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxufVxuXG4iXX0=