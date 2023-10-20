"use strict";
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