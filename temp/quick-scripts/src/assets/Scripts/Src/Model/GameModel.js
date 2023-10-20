"use strict";
cc._RF.push(module, 'e3cf79IioxDwI2C1FU6mNxz', 'GameModel');
// Scripts/Src/Model/GameModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    GameModel.RWSort = function () {
        this.RWInfos.sort(function (a, b) { return a.RWState - b.RWState; });
    };
    GameModel.EnemyCount = 10;
    GameModel.Gold = 0;
    GameModel.Score = 0;
    GameModel.BestScore = 0;
    GameModel.isMusic = true;
    GameModel.QianDaoNumber = 5;
    GameModel.TodayQianDao = false;
    GameModel.RWInfos = [];
    GameModel = __decorate([
        ccclass
    ], GameModel);
    return GameModel;
}());
exports.default = GameModel;

cc._RF.pop();