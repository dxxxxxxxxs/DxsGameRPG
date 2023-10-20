
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Bundle/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb52auMM69Du59eQPvKj0pn', 'BundleManager');
// Scripts/Framework/Bundle/BundleManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9CdW5kbGUvQnVuZGxlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUEyRUEsQ0FBQztJQS9ERzs7OztPQUlHO0lBQ2lCLHdCQUFVLEdBQTlCLFVBQStCLFVBQWlCO3VDQUFFLE9BQU87OztnQkFFckQsc0JBQU8sSUFBSSxPQUFPLENBQXlCLFVBQUMsUUFBUTt3QkFDaEQsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDakM7NEJBQ0ksUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ3pDLE9BQU87eUJBQ1Y7d0JBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFDLFVBQUMsR0FBUyxFQUFDLE1BQTZCOzRCQUMxRSxJQUFHLEdBQUcsRUFDTjtnQ0FDSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2xCO2lDQUVEO2dDQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3BCO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFBOzs7S0FFTDtJQUNEOzs7OztPQUtHO0lBQ2lCLGtCQUFJLEdBQXhCLFVBQTZDLFVBQWlCLEVBQUMsVUFBaUI7dUNBQUUsT0FBTzs7O2dCQUVyRixzQkFBTyxJQUFJLE9BQU8sQ0FBSSxVQUFNLFFBQVE7Ozs7d0NBQ3JCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUE7O29DQUF4QyxNQUFNLEdBQUMsU0FBaUM7b0NBQzVDLDZDQUE2QztvQ0FDN0MsSUFBRyxNQUFNLEVBQ1Q7d0NBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsVUFBQyxHQUFHLEVBQUMsTUFBUTs0Q0FDaEMsSUFBRyxHQUFHLEVBQ047Z0RBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnREFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZDQUNsQjtpREFFRDtnREFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dEQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NkNBQ3BCO3dDQUNMLENBQUMsQ0FBQyxDQUFBO3FDQUNMO3lDQUVEO3dDQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUMxQzs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUdMO0lBekVELDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsSUFBSTtJQUNKLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsOENBQThDO0lBQzlDLFFBQVE7SUFDUiw4Q0FBOEM7SUFDOUMsSUFBSTtJQUNKLDBCQUEwQjtJQUNaLHVCQUFTLEdBQW9DLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBWG5GLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyRWpDO0lBQUQsb0JBQUM7Q0EzRUQsQUEyRUMsSUFBQTtrQkEzRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdW5kbGVNYW5hZ2VyIHtcbiAgICAvLyBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6QnVuZGxlTWFuYWdlcjtcbiAgICAvLyBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAgLy8ge1xuICAgIC8vICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEJ1bmRsZU1hbmFnZXIoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgQnVuZGxlTWFuYWdlcjtcbiAgICAvLyB9XG4gICAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cbiAgICBwdWJsaWMgc3RhdGljIGJ1bmRsZU1hcDpNYXA8c3RyaW5nLGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+PW5ldyBNYXA8c3RyaW5nLGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KCk7XG4gICAgLyoqXG4gICAgICog5Yqg6L29QnVuZGxl5YiG5YyFXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUg5YiG5YyF5ZCN56ewXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkQnVuZGxlKGJ1bmRsZU5hbWU6c3RyaW5nKTpQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4oKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5idW5kbGVNYXAuZ2V0KGJ1bmRsZU5hbWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc292bHZlKHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSwoZXJyOkVycm9yLGJ1bmRsZTpjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295YiG5YyFXCIrYnVuZGxlTmFtZStcIuaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idW5kbGVNYXAuc2V0KGJ1bmRsZU5hbWUsYnVuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUoYnVuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOagueaNruWIhuWMheWKoOi9vei1hOa6kFxuICAgICAqIEBwYXJhbSBidW5kbGVQYXRoIOi1hOa6kOWfuuS6juWIhuWMheeahOebuOWvuei3r+W+hFxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIOWIhuWMheWQjeensFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZDxUIGV4dGVuZHMgY2MuQXNzZXQ+KGJ1bmRsZVBhdGg6c3RyaW5nLGJ1bmRsZU5hbWU6c3RyaW5nKTpQcm9taXNlPFQ+XG4gICAgeyAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oYXN5bmMocmVzb3ZsdmUpPT57XG4gICAgICAgICAgICBsZXQgYnVuZGxlPWF3YWl0IHRoaXMubG9hZEJ1bmRsZShidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIC8vbGV0IGJ1bmRsZSA9dGhpcy5idW5kbGVNYXAuZ2V0KGJ1bmRsZU5hbWUpO1xuICAgICAgICAgICAgaWYoYnVuZGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKGJ1bmRsZVBhdGgsKGVycixyZXN1bHQ6VCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdmx2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L296aKE5Yi25L2T5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInov5nkuKpidW5kbGXliIbljIVcIitidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==