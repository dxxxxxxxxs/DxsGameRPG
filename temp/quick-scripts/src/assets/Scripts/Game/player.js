"use strict";
cc._RF.push(module, '9302atw+Y1KS6Uv3OWgRUsS', 'player');
// Scripts/Game/player.ts

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
var Game_1 = require("../../Common/Game");
var IResultAble_1 = require("../../Common/Pool/IResultAble");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var player = /** @class */ (function (_super) {
    __extends(player, _super);
    function player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canKeyDown = false;
        return _this;
    }
    player.prototype.onEnable = function () {
        this.addEvent();
    };
    player.prototype.onDisable = function () {
        this.removeEvent();
    };
    player.prototype.onSpawn = function () {
        console.log("玩家已生成");
    };
    player.prototype.unSpawn = function () {
        console.log("玩家已死亡");
    };
    player.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_PlayerUp, this.onPlayerUp, this);
    };
    player.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_PlayerUp, this.onPlayerUp, this);
    };
    //开始移动
    player.prototype.update = function (dt) {
        if (this.node.active) {
            if (this.node.y < -640) {
                Game_1.default.Event.dispatch(GameConst_1.default.GAMEOVER);
                return;
            }
            this.node.x += GameModel_1.default.moveSpeed * dt;
            GameModel_1.default.distance += GameModel_1.default.moveSpeed * dt;
            if (GameModel_1.default.distance >= 1200) {
                Game_1.default.Event.dispatch(GameConst_1.default.UI_CreateMap);
                GameModel_1.default.distance = 0;
                GameModel_1.default.moveSpeed += 20;
            }
        }
    };
    //跳跃
    player.prototype.onPlayerUp = function () {
        if (this.canKeyDown == false)
            return;
        var rigidbody2 = this.node.getComponent(cc.RigidBody);
        rigidbody2.applyForceToCenter(cc.v2(0, 100).mulSelf(700), true);
        this.canKeyDown = false;
    };
    player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        this.canKeyDown = true;
    };
    player.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        this.canKeyDown = false;
    };
    player.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 9) {
            Game_1.default.ObjectPool.UnSpawn(other.node);
            Game_1.default.Event.dispatch(GameConst_1.default.GetCoin);
        }
    };
    player = __decorate([
        ccclass
    ], player);
    return player;
}(IResultAble_1.default));
exports.default = player;

cc._RF.pop();