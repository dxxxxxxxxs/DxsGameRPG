"use strict";
cc._RF.push(module, '7670aRWY6NKF7bbva7aT2/D', 'UIGame');
// Scripts/Src/Game/UIGame.ts

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
var Game_1 = require("../../Framework/Game");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGame = /** @class */ (function (_super) {
    __extends(UIGame, _super);
    function UIGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    UIGame.prototype.start = function () {
        this.addEvent();
    };
    UIGame.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.GameStart, this.GameStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.KillOneCount, this.killOneEnemy, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_UpdateMusic, this.updateMusic, this);
    };
    UIGame.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.GameStart, this.GameStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.KillOneCount, this.killOneEnemy, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_UpdateMusic, this.updateMusic, this);
    };
    UIGame.prototype.GameStart = function () {
        GameModel_1.default.EnemyCount = 10;
        this.node.getChildByName("Enemys").active = true;
    };
    UIGame.prototype.killOneEnemy = function () {
        GameModel_1.default.EnemyCount--;
        if (GameModel_1.default.EnemyCount <= 0) {
            Game_1.default.Event.dispatch(GameConst_1.default.UI_GameOver);
        }
    };
    UIGame.prototype.updateMusic = function () {
        GameModel_1.default.isMusic = !GameModel_1.default.isMusic;
    };
    UIGame.prototype.onDestroy = function () {
        this.removeEvent();
    };
    UIGame = __decorate([
        ccclass
    ], UIGame);
    return UIGame;
}(cc.Component));
exports.default = UIGame;

cc._RF.pop();