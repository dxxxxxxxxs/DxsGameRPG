"use strict";
cc._RF.push(module, 'ef098Fxpe9HO7O/vqEBejkf', 'GameRWItem');
// Scripts/Src/UI/GameRWItem.ts

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
exports.RWState = void 0;
var Game_1 = require("../../Framework/Game");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RWState;
(function (RWState) {
    RWState[RWState["finish"] = 0] = "finish";
    RWState[RWState["go"] = 1] = "go";
    RWState[RWState["done"] = 2] = "done"; //任务完成了并且领取奖励了
})(RWState = exports.RWState || (exports.RWState = {}));
var GameRWItem = /** @class */ (function (_super) {
    __extends(GameRWItem, _super);
    function GameRWItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.RWName = null;
        _this.Bar = null;
        _this.money = null;
        _this.btnFinish = null;
        _this.btnGO = null;
        _this.btnDown = null;
        return _this;
    }
    GameRWItem.prototype.init = function (RWInfo) {
        //this.icon=RWInfo.Icon;
        this.RWName.string = RWInfo.RWName;
        this.money.string = RWInfo.Money.toString();
        this.bar = RWInfo.RWBar;
        this.rwState = RWInfo.RWState;
        this.updateUI();
    };
    GameRWItem.prototype.updateUI = function () {
        switch (this.rwState) {
            case RWState.finish:
                this.btnFinish.active = true;
                this.btnGO.active = false;
                this.btnDown.active = false;
                break;
            case RWState.go:
                this.btnFinish.active = false;
                this.btnGO.active = true;
                this.btnDown.active = false;
                break;
            case RWState.done:
                this.btnFinish.active = false;
                this.btnGO.active = false;
                this.btnDown.active = true;
                break;
        }
        this.Bar.progress = this.bar;
    };
    GameRWItem.prototype.onFinishBtnClick = function () {
        Game_1.default.Audio.playMusic("click");
        for (var i = 0; i < GameModel_1.default.RWInfos.length; i++) {
            if (GameModel_1.default.RWInfos[i].RWName == this.RWName.string) {
                GameModel_1.default.RWInfos[i].RWState = RWState.done;
                break;
            }
        }
        Game_1.default.Event.dispatch(GameConst_1.default.UI_FinishRW);
    };
    GameRWItem.prototype.onGoBtnClick = function () {
    };
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], GameRWItem.prototype, "RWName", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameRWItem.prototype, "Bar", void 0);
    __decorate([
        property(cc.Label)
    ], GameRWItem.prototype, "money", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnFinish", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnGO", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnDown", void 0);
    GameRWItem = __decorate([
        ccclass
    ], GameRWItem);
    return GameRWItem;
}(cc.Component));
exports.default = GameRWItem;

cc._RF.pop();