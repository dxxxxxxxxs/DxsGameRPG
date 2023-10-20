"use strict";
cc._RF.push(module, '93afeYf9iFHQ614c6aV+EOG', 'GameConst');
// Scripts/Src/GameConst.ts

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
var GameConst = /** @class */ (function () {
    function GameConst() {
    }
    GameConst.GameStart = "GameStart";
    GameConst.KillOneCount = "KillOneCount";
    GameConst.UI_GameOver = "UI_GameOver";
    GameConst.UI_UpdateMusic = "UI_UpdateMusic";
    GameConst.UI_FinishRW = "UI_FinishRW";
    GameConst = __decorate([
        ccclass
    ], GameConst);
    return GameConst;
}());
exports.default = GameConst;

cc._RF.pop();