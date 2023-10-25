"use strict";
cc._RF.push(module, '87c24q/SvBAmZegb7kQ0lSk', 'Coin');
// Scripts/Game/Coin.ts

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
var IResultAble_1 = require("../../Common/Pool/IResultAble");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coin.prototype.onEnable = function () {
        var tween1 = cc.tween(this.node).to(0.5, { scaleX: 0.4 }, { easing: 'sineOut' });
        var tween2 = cc.tween(this.node).to(0.5, { scaleX: 1 }, { easing: 'sineOut' });
        var tween3 = cc.tween(this.node).sequence(tween1, tween2);
        cc.tween(this.node).repeatForever(tween3).start();
    };
    Coin.prototype.onSpawn = function () {
    };
    Coin.prototype.unSpawn = function () {
    };
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(IResultAble_1.default));
exports.default = Coin;

cc._RF.pop();