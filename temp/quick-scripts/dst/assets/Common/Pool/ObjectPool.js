
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Common/Pool/ObjectPool.ts

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
var BundleManager_1 = require("../Bundle/BundleManager");
var SubPool_1 = require("./SubPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        this.pools = new Map();
    }
    ObjectPool_1 = ObjectPool;
    Object.defineProperty(ObjectPool, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ObjectPool_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 取出指定节点
     * @param name 节点预制体名字
     * @param parent 节点创建出来后的父节点
     * @returns 一个异步的cc.node对象，需要用await接收
     */
    ObjectPool.prototype.Spawn = function (name, parent) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var pool;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pool = null;
                                    if (!!this.pools.has(name)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.RegisterNew(name, parent)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    pool = this.pools.get(name);
                                    resovlve(pool.Spawn());
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 回收指定节点
     * @param node 要回收的节点
     */
    ObjectPool.prototype.UnSpawn = function (node) {
        var pool = null;
        this.pools.forEach(function (value, key) {
            if (value.Contains(node)) {
                pool = value;
                return;
            }
        });
        pool.UnSpawn(node);
    };
    /**
     * 回收所有节点
     */
    ObjectPool.prototype.UnSpawnAll = function () {
        this.pools.forEach(function (value, key) {
            value.UnSpawnAll();
        });
    };
    /**
     *  清除所有对象池
     */
    ObjectPool.prototype.Clear = function () {
        this.pools.clear();
    };
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池中所有对象的父节点
     */
    ObjectPool.prototype.RegisterNew = function (name, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var node, pool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, "ObjectPool")];
                    case 1:
                        node = _a.sent();
                        pool = new SubPool_1.default(node, parent);
                        this.pools.set(pool.poolName, pool);
                        return [2 /*return*/];
                }
            });
        });
    };
    var ObjectPool_1;
    ObjectPool = ObjectPool_1 = __decorate([
        ccclass
    ], ObjectPool);
    return ObjectPool;
}());
exports.default = ObjectPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9PYmplY3RQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRXBELHFDQUFnQztBQUUxQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUN6QyxDQUFDO21CQVpnQixVQUFVO0lBRTNCLHNCQUFrQixzQkFBUTthQUExQjtZQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxJQUFJLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXVCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFPRDs7Ozs7T0FLRztJQUNVLDBCQUFLLEdBQWxCLFVBQW1CLElBQVcsRUFBQyxNQUFjO3VDQUFFLE9BQU87OztnQkFFbEQsc0JBQU8sSUFBSSxPQUFPLENBQVUsVUFBTyxRQUFROzs7OztvQ0FDbkMsSUFBSSxHQUFTLElBQUksQ0FBQzt5Q0FDbkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsd0JBQXFCO29DQUVwQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsRUFBQTs7b0NBQW5DLFNBQW1DLENBQUM7OztvQ0FFeEMsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7eUJBQzFCLENBQUMsRUFBQTs7O0tBQ0w7SUFDRDs7O09BR0c7SUFDSSw0QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUV2QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUMsR0FBRztZQUN6QixJQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3ZCO2dCQUNJLElBQUksR0FBQyxLQUFLLENBQUM7Z0JBQ1gsT0FBTzthQUNWO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7T0FFRztJQUNJLCtCQUFVLEdBQWpCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUMsR0FBRztZQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Q7O09BRUc7SUFDSSwwQkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNHLGdDQUFXLEdBQWpCLFVBQWtCLElBQVcsRUFBQyxNQUFjOzs7Ozs0QkFFL0IscUJBQU0sdUJBQWEsQ0FBQyxJQUFJLENBQVksSUFBSSxFQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBM0QsSUFBSSxHQUFDLFNBQXNEO3dCQUMzRCxJQUFJLEdBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7S0FDdEM7O0lBNUVnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkU5QjtJQUFELGlCQUFDO0NBN0VELEFBNkVDLElBQUE7a0JBN0VvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IElSZXN1bHRBYmxlIGZyb20gXCIuL0lSZXN1bHRBYmxlXCI7XG5pbXBvcnQgU3ViUG9vbCBmcm9tIFwiLi9TdWJQb29sXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOk9iamVjdFBvb2w7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBPYmplY3RQb29sKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIE9iamVjdFBvb2w7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb29scz1uZXcgTWFwPHN0cmluZyxTdWJQb29sPigpO1xuICAgIH1cbiAgICAvL+WvueixoeaxoFxuICAgIHByaXZhdGUgcG9vbHM6TWFwPHN0cmluZyxTdWJQb29sPjtcblxuICAgIC8qKlxuICAgICAqIOWPluWHuuaMh+WumuiKgueCuVxuICAgICAqIEBwYXJhbSBuYW1lIOiKgueCuemihOWItuS9k+WQjeWtl1xuICAgICAqIEBwYXJhbSBwYXJlbnQg6IqC54K55Yib5bu65Ye65p2l5ZCO55qE54i26IqC54K5XG4gICAgICogQHJldHVybnMg5LiA5Liq5byC5q2l55qEY2Mubm9kZeWvueixoe+8jOmcgOimgeeUqGF3YWl05o6l5pS2XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIFNwYXduKG5hbWU6c3RyaW5nLHBhcmVudDpjYy5Ob2RlKTpQcm9taXNlPGNjLk5vZGU+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuTm9kZT4oYXN5bmMgKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgbGV0IHBvb2w6U3ViUG9vbD1udWxsO1xuICAgICAgICAgICAgaWYoIXRoaXMucG9vbHMuaGFzKG5hbWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuUmVnaXN0ZXJOZXcobmFtZSxwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9vbD10aGlzLnBvb2xzLmdldChuYW1lKTtcbiAgICAgICAgICAgIHJlc292bHZlKHBvb2wuU3Bhd24oKSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWbnuaUtuaMh+WumuiKgueCuVxuICAgICAqIEBwYXJhbSBub2RlIOimgeWbnuaUtueahOiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBVblNwYXduKG5vZGU6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCBwb29sOlN1YlBvb2w9bnVsbDtcbiAgICAgICAgdGhpcy5wb29scy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57XG4gICAgICAgICAgICBpZih2YWx1ZS5Db250YWlucyhub2RlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb29sPXZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcG9vbC5VblNwYXduKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlm57mlLbmiYDmnInoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpXG4gICAge1xuICAgICAgICB0aGlzLnBvb2xzLmZvckVhY2goKHZhbHVlLGtleSk9PntcbiAgICAgICAgICAgIHZhbHVlLlVuU3Bhd25BbGwoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICogIOa4hemZpOaJgOacieWvueixoeaxoFxuICAgICAqL1xuICAgIHB1YmxpYyBDbGVhcigpXG4gICAge1xuICAgICAgICB0aGlzLnBvb2xzLmNsZWFyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaWsOW7uuS4gOS4quWvueixoeaxoFxuICAgICAqIEBwYXJhbSBuYW1lIOWvueixoeaxoOWQjeWtl1xuICAgICAqIEBwYXJhbSBwYXJlbnQg5a+56LGh5rGg5Lit5omA5pyJ5a+56LGh55qE54i26IqC54K5XG4gICAgICovXG4gICAgYXN5bmMgUmVnaXN0ZXJOZXcobmFtZTpzdHJpbmcscGFyZW50OmNjLk5vZGUpXG4gICAge1xuICAgICAgICBsZXQgbm9kZT1hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWQ8Y2MuUHJlZmFiPihuYW1lLFwiT2JqZWN0UG9vbFwiKTtcbiAgICAgICAgbGV0IHBvb2w9bmV3IFN1YlBvb2wobm9kZSxwYXJlbnQpO1xuICAgICAgICB0aGlzLnBvb2xzLnNldChwb29sLnBvb2xOYW1lLHBvb2wpO1xuICAgIH1cbn1cbiJdfQ==