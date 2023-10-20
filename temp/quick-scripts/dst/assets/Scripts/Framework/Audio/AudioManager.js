
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38c25i6GRIl7wXIvrjvczq', 'AudioManager');
// Scripts/Framework/Audio/AudioManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRzlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBVUk7UUFFUSxnQkFBVyxHQUFRLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFRLENBQUMsQ0FBQztJQUhQLENBQUM7cUJBVmQsWUFBWTtJQUVyQixzQkFBa0Isd0JBQVE7YUFBMUI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUN2QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksY0FBWSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUF5QixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBS0Q7OztPQUdHO0lBQ0gsMkJBQUksR0FBSixVQUFLLFdBQTBCO1FBRTNCLGNBQVksQ0FBQyxXQUFXLEdBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZ0NBQVMsR0FBVCxVQUFVLElBQVcsRUFBQyxNQUFjO1FBQXBDLGlCQVFDO1FBUnFCLHVCQUFBLEVBQUEsZ0JBQWM7UUFFaEMsSUFBTSxXQUFXLEdBQUMsY0FBWSxDQUFDLFdBQVksQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBQyxDQUFDOzs7OzRCQUNELHFCQUFNLHVCQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFDLElBQUksR0FBQyxTQUFxQzt3QkFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQzs7OzthQUN6RCxDQUFDLENBQUE7UUFDRixRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxnQ0FBUyxHQUFUO0lBRUEsQ0FBQzs7SUF0Q1EsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQXVDeEI7SUFBRCxtQkFBQztDQXZDRCxBQXVDQyxJQUFBO0FBdkNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkF1ZGlvTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEF1ZGlvTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSBhcyBBdWRpb01hbmFnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXVkaW9Tb3VyY2U/OmNjLkF1ZGlvU291cmNlXG4gICAgcHJpdmF0ZSBzb3VuZFZvbHVtZTpudW1iZXI9MTtcbiAgICBwcml2YXRlIG11c2ljVm9sdW1lOm51bWJlcj0xO1xuICAgIC8qKlxuICAgICAqIOWIneWni+WMlumfs+S5kOe7hOS7tu+8iOWFqOWxgOS4gOiIrOWPquacieS4gOS4qumfs+S5kOiKgueCue+8jOWPquS8muWIneWni+WMluS4gOasoe+8iVxuICAgICAqIEBwYXJhbSBhdWRpb1NvdXJjZSDpn7PkuZDoioLngrnouqvkuIrnmoRBdWRpb1NvdXJjZee7hOS7tlxuICAgICAqL1xuICAgIGluaXQoYXVkaW9Tb3VyY2U6Y2MuQXVkaW9Tb3VyY2UpXG4gICAge1xuICAgICAgICBBdWRpb01hbmFnZXIuYXVkaW9Tb3VyY2U9YXVkaW9Tb3VyY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaSreaUvumfs+S5kO+8iOS4gOiIrOaYr+iDjOaZr+mfs+S5kO+8iVxuICAgICAqIEBwYXJhbSBuYW1lIOimgeaSreaUvueahOmfs+S5kOWQjeWtl1xuICAgICAqIEBwYXJhbSBidW5kbGUg5aaC5p6c5rKh6ZSZ5bqU6K+l5pivQXNzZXRCdW5kbGXnmoTliIbljIXliqDovb3nmoTlkI3np7DvvIzmr5TlpoJnYW1l77yMaGFsbOS7gOS5iOeahFxuICAgICAqL1xuICAgIHBsYXlNdXNpYyhuYW1lOnN0cmluZyxidW5kbGU9XCJBdWRpb1wiKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXVkaW9Tb3VyY2U9QXVkaW9NYW5hZ2VyLmF1ZGlvU291cmNlITtcbiAgICAgICAgbGV0IGNvbXBsZXRlPShhc3luYyAoKT0+e1xuICAgICAgICAgICAgbGV0IGNsaXA9YXdhaXQgQnVuZGxlTWFuYWdlci5sb2FkKG5hbWUsYnVuZGxlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwIGFzIGNjLkF1ZGlvQ2xpcCwgZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICBjb21wbGV0ZSgpO1xuICAgIH1cbiAgICBwbGF5U291bmQoKVxuICAgIHtcbiAgICB9XG59XG4iXX0=