
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBVUEsQ0FBQztJQVQwQixtQkFBUyxHQUFDLFdBQVcsQ0FBQztJQUV0QixzQkFBWSxHQUFDLGNBQWMsQ0FBQztJQUU1QixxQkFBVyxHQUFDLGFBQWEsQ0FBQztJQUUxQix3QkFBYyxHQUFDLGdCQUFnQixDQUFDO0lBRWhDLHFCQUFXLEdBQUMsYUFBYSxDQUFDO0lBVGhDLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FVN0I7SUFBRCxnQkFBQztDQVZELEFBVUMsSUFBQTtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25zdCB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHYW1lU3RhcnQ9XCJHYW1lU3RhcnRcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2lsbE9uZUNvdW50PVwiS2lsbE9uZUNvdW50XCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVJX0dhbWVPdmVyPVwiVUlfR2FtZU92ZXJcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUlfVXBkYXRlTXVzaWM9XCJVSV9VcGRhdGVNdXNpY1wiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSV9GaW5pc2hSVz1cIlVJX0ZpbmlzaFJXXCI7XG59XG4iXX0=