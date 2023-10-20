
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba65f5gPDhPD7aB64BsmlaE', 'AudioRoot');
// Common/Audio/AudioRoot.ts

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
var Game_1 = require("../Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioRoot = /** @class */ (function (_super) {
    __extends(AudioRoot, _super);
    function AudioRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        return _this;
    }
    AudioRoot.prototype.onLoad = function () {
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.audioSource = audioSource;
        Game_1.default.Audio.init(audioSource);
        console.log("audioManager Init!");
    };
    AudioRoot = __decorate([
        ccclass
    ], AudioRoot);
    return AudioRoot;
}(cc.Component));
exports.default = AudioRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9Sb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLGdDQUEyQjtBQUdyQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQVVDO1FBVEcsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDOztJQVNwQyxDQUFDO0lBUGEsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxXQUFXLENBQUM7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFUZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVU3QjtJQUFELGdCQUFDO0NBVkQsQUFVQyxDQVZzQyxFQUFFLENBQUMsU0FBUyxHQVVsRDtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Sb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBhdWRpb1NvdXJjZTpjYy5BdWRpb1NvdXJjZT1udWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgICAgICBHYW1lLkF1ZGlvLmluaXQoYXVkaW9Tb3VyY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1ZGlvTWFuYWdlciBJbml0IVwiKTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19