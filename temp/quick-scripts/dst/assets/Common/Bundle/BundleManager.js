
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Bundle/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb52auMM69Du59eQPvKj0pn', 'BundleManager');
// Common/Bundle/BundleManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleManager = /** @class */ (function () {
    function BundleManager() {
    }
    /**
     * 加载Bundle分包
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.loadBundle = function (bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) {
                        if (_this.bundleMap.get(bundleName)) {
                            resovlve(_this.bundleMap.get(bundleName));
                            return;
                        }
                        cc.assetManager.loadBundle(bundleName, function (err, bundle) {
                            if (err) {
                                console.error(err);
                                resovlve(null);
                            }
                            else {
                                console.log("加载分包" + bundleName + "成功");
                                _this.bundleMap.set(bundleName, bundle);
                                resovlve(bundle);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 根据分包加载资源
     * @param bundlePath 资源基于分包的相对路径
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.load = function (bundlePath, bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var bundle;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadBundle(bundleName)];
                                case 1:
                                    bundle = _a.sent();
                                    //let bundle =this.bundleMap.get(bundleName);
                                    if (bundle) {
                                        bundle.load(bundlePath, function (err, result) {
                                            if (err) {
                                                console.error(err);
                                                resovlve(null);
                                            }
                                            else {
                                                console.log("加载预制体成功");
                                                resovlve(result);
                                            }
                                        });
                                    }
                                    else {
                                        console.log("没有这个bundle分包" + bundleName);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    // private static _instance:BundleManager;
    // public static get Instance()
    // {
    //     if(this._instance==null)
    //     {
    //         this._instance=new BundleManager();
    //     }
    //     return this._instance as BundleManager;
    // }
    // private constructor(){}
    BundleManager.bundleMap = new Map();
    BundleManager = __decorate([
        ccclass
    ], BundleManager);
    return BundleManager;
}());
exports.default = BundleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQnVuZGxlL0J1bmRsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBMkVBLENBQUM7SUEvREc7Ozs7T0FJRztJQUNpQix3QkFBVSxHQUE5QixVQUErQixVQUFpQjt1Q0FBRSxPQUFPOzs7Z0JBRXJELHNCQUFPLElBQUksT0FBTyxDQUF5QixVQUFDLFFBQVE7d0JBQ2hELElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQ2pDOzRCQUNJLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUN6QyxPQUFPO3lCQUNWO3dCQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQyxVQUFDLEdBQVMsRUFBQyxNQUE2Qjs0QkFDMUUsSUFBRyxHQUFHLEVBQ047Z0NBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNsQjtpQ0FFRDtnQ0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQztnQ0FDdEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUNwQjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFDRDs7Ozs7T0FLRztJQUNpQixrQkFBSSxHQUF4QixVQUE2QyxVQUFpQixFQUFDLFVBQWlCO3VDQUFFLE9BQU87OztnQkFFckYsc0JBQU8sSUFBSSxPQUFPLENBQUksVUFBTSxRQUFROzs7O3dDQUNyQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOztvQ0FBeEMsTUFBTSxHQUFDLFNBQWlDO29DQUM1Qyw2Q0FBNkM7b0NBQzdDLElBQUcsTUFBTSxFQUNUO3dDQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFVBQUMsR0FBRyxFQUFDLE1BQVE7NENBQ2hDLElBQUcsR0FBRyxFQUNOO2dEQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0RBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDbEI7aURBRUQ7Z0RBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnREFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZDQUNwQjt3Q0FDTCxDQUFDLENBQUMsQ0FBQTtxQ0FDTDt5Q0FFRDt3Q0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxVQUFVLENBQUMsQ0FBQztxQ0FDMUM7Ozs7eUJBQ0osQ0FBQyxFQUFBOzs7S0FHTDtJQXpFRCwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLElBQUk7SUFDSiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsOENBQThDO0lBQzlDLElBQUk7SUFDSiwwQkFBMEI7SUFDWix1QkFBUyxHQUFvQyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztJQVhuRixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkVqQztJQUFELG9CQUFDO0NBM0VELEFBMkVDLElBQUE7a0JBM0VvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlTWFuYWdlciB7XG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBCdW5kbGVNYW5hZ2VyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIEJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHVibGljIHN0YXRpYyBidW5kbGVNYXA6TWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPj1uZXcgTWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPigpO1xuICAgIC8qKlxuICAgICAqIOWKoOi9vUJ1bmRsZeWIhuWMhVxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIOWIhuWMheWQjeensFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZShidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KChyZXNvdmx2ZSk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNvdmx2ZSh0aGlzLmJ1bmRsZU1hcC5nZXQoYnVuZGxlTmFtZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVycjpFcnJvcixidW5kbGU6Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSk9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9veWIhuWMhVwiK2J1bmRsZU5hbWUrXCLmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVuZGxlTWFwLnNldChidW5kbGVOYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7liIbljIXliqDovb3otYTmupBcbiAgICAgKiBAcGFyYW0gYnVuZGxlUGF0aCDotYTmupDln7rkuo7liIbljIXnmoTnm7jlr7not6/lvoRcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSDliIbljIXlkI3np7BcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihidW5kbGVQYXRoOnN0cmluZyxidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxUPlxuICAgIHsgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KGFzeW5jKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgbGV0IGJ1bmRsZT1hd2FpdCB0aGlzLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICAvL2xldCBidW5kbGUgPXRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIGlmKGJ1bmRsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChidW5kbGVQYXRoLChlcnIscmVzdWx0OlQpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vemihOWItuS9k+aIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc292bHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ6L+Z5LiqYnVuZGxl5YiG5YyFXCIrYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG4iXX0=