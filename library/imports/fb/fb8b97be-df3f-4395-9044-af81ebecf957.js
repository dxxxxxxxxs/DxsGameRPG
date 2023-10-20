"use strict";
cc._RF.push(module, 'fb8b9e+3z9DlZBEr4Hr7PlX', 'RWInfo');
// Scripts/Src/Model/RWInfo.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RWInfo = void 0;
var GameRWItem_1 = require("../UI/GameRWItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RWInfo = /** @class */ (function () {
    function RWInfo(state, icon, rwbar, rwname, money) {
        this.RWState = GameRWItem_1.RWState.go;
        this.Icon = null;
        this.RWState = state;
        this.Icon = icon;
        this.RWBar = rwbar;
        this.RWName = rwname;
        this.Money = money;
    }
    RWInfo = __decorate([
        ccclass
    ], RWInfo);
    return RWInfo;
}());
exports.RWInfo = RWInfo;

cc._RF.pop();