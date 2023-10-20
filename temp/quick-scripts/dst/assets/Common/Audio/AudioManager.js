
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38c25i6GRIl7wXIvrjvczq', 'AudioManager');
// Common/Audio/AudioManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManager = void 0;
var BundleManager_1 = require("../Bundle/BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundVolume = 1;
        this.musicVolume = 1;
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AudioManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化音乐组件（全局一般只有一个音乐节点，只会初始化一次）
     * @param audioSource 音乐节点身上的AudioSource组件
     */
    AudioManager.prototype.init = function (audioSource) {
        AudioManager_1.audioSource = audioSource;
    };
    /**
     * 播放音乐（一般是背景音乐）
     * @param name 要播放的音乐名字
     * @param bundle 如果没错应该是AssetBundle的分包加载的名称，比如game，hall什么的
     */
    AudioManager.prototype.playMusic = function (name, bundle) {
        var _this = this;
        if (bundle === void 0) { bundle = "Audio"; }
        var audioSource = AudioManager_1.audioSource;
        var complete = (function () { return __awaiter(_this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, bundle)];
                    case 1:
                        clip = _a.sent();
                        cc.audioEngine.playMusic(clip, false);
                        return [2 /*return*/];
                }
            });
        }); });
        complete();
    };
    AudioManager.prototype.playSound = function () {
    };
    var AudioManager_1;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}());
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHlEQUFvRDtBQUc5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO1FBRVEsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUFIUCxDQUFDO3FCQVZkLFlBQVk7SUFFckIsc0JBQWtCLHdCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLGNBQVksRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBeUIsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtEOzs7T0FHRztJQUNILDJCQUFJLEdBQUosVUFBSyxXQUEwQjtRQUUzQixjQUFZLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFXLEVBQUMsTUFBYztRQUFwQyxpQkFRQztRQVJxQix1QkFBQSxFQUFBLGdCQUFjO1FBRWhDLElBQU0sV0FBVyxHQUFDLGNBQVksQ0FBQyxXQUFZLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQUMsQ0FBQzs7Ozs0QkFDRCxxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUExQyxJQUFJLEdBQUMsU0FBcUM7d0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7YUFDekQsQ0FBQyxDQUFBO1FBQ0YsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtJQUVBLENBQUM7O0lBdENRLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0F1Q3hCO0lBQUQsbUJBQUM7Q0F2Q0QsQUF1Q0MsSUFBQTtBQXZDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpBdWRpb01hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgQXVkaW9NYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGF1ZGlvU291cmNlPzpjYy5BdWRpb1NvdXJjZVxuICAgIHByaXZhdGUgc291bmRWb2x1bWU6bnVtYmVyPTE7XG4gICAgcHJpdmF0ZSBtdXNpY1ZvbHVtZTpudW1iZXI9MTtcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpn7PkuZDnu4Tku7bvvIjlhajlsYDkuIDoiKzlj6rmnInkuIDkuKrpn7PkuZDoioLngrnvvIzlj6rkvJrliJ3lp4vljJbkuIDmrKHvvIlcbiAgICAgKiBAcGFyYW0gYXVkaW9Tb3VyY2Ug6Z+z5LmQ6IqC54K56Lqr5LiK55qEQXVkaW9Tb3VyY2Xnu4Tku7ZcbiAgICAgKi9cbiAgICBpbml0KGF1ZGlvU291cmNlOmNjLkF1ZGlvU291cmNlKVxuICAgIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7pn7PkuZDvvIjkuIDoiKzmmK/og4zmma/pn7PkuZDvvIlcbiAgICAgKiBAcGFyYW0gbmFtZSDopoHmkq3mlL7nmoTpn7PkuZDlkI3lrZdcbiAgICAgKiBAcGFyYW0gYnVuZGxlIOWmguaenOayoemUmeW6lOivpeaYr0Fzc2V0QnVuZGxl55qE5YiG5YyF5Yqg6L2955qE5ZCN56ew77yM5q+U5aaCZ2FtZe+8jGhhbGzku4DkuYjnmoRcbiAgICAgKi9cbiAgICBwbGF5TXVzaWMobmFtZTpzdHJpbmcsYnVuZGxlPVwiQXVkaW9cIilcbiAgICB7XG4gICAgICAgIGNvbnN0IGF1ZGlvU291cmNlPUF1ZGlvTWFuYWdlci5hdWRpb1NvdXJjZSE7XG4gICAgICAgIGxldCBjb21wbGV0ZT0oYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGxldCBjbGlwPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZChuYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCBhcyBjYy5BdWRpb0NsaXAsIGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICB9XG4gICAgcGxheVNvdW5kKClcbiAgICB7XG4gICAgfVxufVxuIl19