
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9Nb2RlbC9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQU1oRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBY0EsQ0FBQztJQUppQixnQkFBTSxHQUFwQjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFaYSxvQkFBVSxHQUFRLEVBQUUsQ0FBQztJQUNyQixjQUFJLEdBQVEsQ0FBQyxDQUFDO0lBQ2QsZUFBSyxHQUFRLENBQUMsQ0FBQztJQUNmLG1CQUFTLEdBQVEsQ0FBQyxDQUFDO0lBQ25CLGlCQUFPLEdBQVMsSUFBSSxDQUFDO0lBQ3JCLHVCQUFhLEdBQVEsQ0FBQyxDQUFDO0lBQ3ZCLHNCQUFZLEdBQVMsS0FBSyxDQUFDO0lBQzNCLGlCQUFPLEdBQVUsRUFBRSxDQUFDO0lBUmpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FjN0I7SUFBRCxnQkFBQztDQWRELEFBY0MsSUFBQTtrQkFkb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Bvb2wvT2JqZWN0UG9vbFwiO1xuaW1wb3J0IHsgUldTdGF0ZSB9IGZyb20gXCIuLi9VSS9HYW1lUldJdGVtXCI7XG5pbXBvcnQgeyBSV0luZm8gfSBmcm9tIFwiLi9SV0luZm9cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kZWx7XG4gICAgcHVibGljIHN0YXRpYyBFbmVteUNvdW50Om51bWJlcj0xMDtcbiAgICBwdWJsaWMgc3RhdGljIEdvbGQ6bnVtYmVyPTA7XG4gICAgcHVibGljIHN0YXRpYyBTY29yZTpudW1iZXI9MDtcbiAgICBwdWJsaWMgc3RhdGljIEJlc3RTY29yZTpudW1iZXI9MDtcbiAgICBwdWJsaWMgc3RhdGljIGlzTXVzaWM6Ym9vbGVhbj10cnVlO1xuICAgIHB1YmxpYyBzdGF0aWMgUWlhbkRhb051bWJlcjpudW1iZXI9NTtcbiAgICBwdWJsaWMgc3RhdGljIFRvZGF5UWlhbkRhbzpib29sZWFuPWZhbHNlO1xuICAgIHB1YmxpYyBzdGF0aWMgUldJbmZvczpSV0luZm9bXT1bXTtcblxuICAgIHB1YmxpYyBzdGF0aWMgUldTb3J0KClcbiAgICB7XG4gICAgICAgIHRoaXMuUldJbmZvcy5zb3J0KChhLGIpPT5hLlJXU3RhdGUtYi5SV1N0YXRlKTtcbiAgICB9XG59XG5cbiJdfQ==