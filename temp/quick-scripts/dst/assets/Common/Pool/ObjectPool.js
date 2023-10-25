
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
                                    // else {
                                    //     setTimeout(() => {
                                    //     }, 0.01);
                                    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9PYmplY3RQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRXBELHFDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQVFJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztJQUM1QyxDQUFDO21CQVZnQixVQUFVO0lBRTNCLHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXVCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFPRDs7Ozs7T0FLRztJQUNVLDBCQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxNQUFlO3VDQUFHLE9BQU87OztnQkFDdEQsc0JBQU8sSUFBSSxPQUFPLENBQVUsVUFBTyxRQUFROzs7OztvQ0FDbkMsSUFBSSxHQUFZLElBQUksQ0FBQzt5Q0FDckIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsd0JBQXFCO29DQUNyQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBQTs7b0NBQXBDLFNBQW9DLENBQUM7OztvQ0FJekMsU0FBUztvQ0FDVCx5QkFBeUI7b0NBQ3pCLGdCQUFnQjtvQ0FDaEIsSUFBSTtvQ0FDSixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Ozt5QkFDMUIsQ0FBQyxFQUFBOzs7S0FDTDtJQUNEOzs7T0FHRztJQUNJLDRCQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQzFCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDYixPQUFPO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksK0JBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQzFCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRDs7T0FFRztJQUNJLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0csZ0NBQVcsR0FBakIsVUFBa0IsSUFBWSxFQUFFLE1BQWU7Ozs7OzRCQUNoQyxxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBWSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUE7O3dCQUE5RCxJQUFJLEdBQUcsU0FBdUQ7d0JBQzlELElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7OztLQUN2Qzs7SUF6RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EwRTlCO0lBQUQsaUJBQUM7Q0ExRUQsQUEwRUMsSUFBQTtrQkExRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcbmltcG9ydCBTdWJQb29sIGZyb20gXCIuL1N1YlBvb2xcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogT2JqZWN0UG9vbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE9iamVjdFBvb2woKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgT2JqZWN0UG9vbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb29scyA9IG5ldyBNYXA8c3RyaW5nLCBTdWJQb29sPigpO1xuICAgIH1cbiAgICAvL+WvueixoeaxoFxuICAgIHByaXZhdGUgcG9vbHM6IE1hcDxzdHJpbmcsIFN1YlBvb2w+O1xuXG4gICAgLyoqXG4gICAgICog5Y+W5Ye65oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5hbWUg6IqC54K56aKE5Yi25L2T5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDoioLngrnliJvlu7rlh7rmnaXlkI7nmoTniLboioLngrlcbiAgICAgKiBAcmV0dXJucyDkuIDkuKrlvILmraXnmoRjYy5ub2Rl5a+56LGh77yM6ZyA6KaB55SoYXdhaXTmjqXmlLZcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgU3Bhd24obmFtZTogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUpOiBQcm9taXNlPGNjLk5vZGU+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLk5vZGU+KGFzeW5jIChyZXNvdmx2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvb2w6IFN1YlBvb2wgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuUmVnaXN0ZXJOZXcobmFtZSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAvLyBwb29sID0gdGhpcy5wb29scy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gcmVzb3ZsdmUocG9vbC5TcGF3bigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIH0sIDAuMDEpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcG9vbCA9IHRoaXMucG9vbHMuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgcmVzb3ZsdmUocG9vbC5TcGF3bigpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Zue5pS25oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg6KaB5Zue5pS255qE6IqC54K5XG4gICAgICovXG4gICAgcHVibGljIFVuU3Bhd24obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcG9vbDogU3ViUG9vbCA9IG51bGw7XG4gICAgICAgIHRoaXMucG9vbHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLkNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcG9vbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcG9vbC5VblNwYXduKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlm57mlLbmiYDmnInoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpIHtcbiAgICAgICAgdGhpcy5wb29scy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5VblNwYXduQWxsKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqICDmuIXpmaTmiYDmnInlr7nosaHmsaBcbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMucG9vbHMuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5paw5bu65LiA5Liq5a+56LGh5rGgXG4gICAgICogQHBhcmFtIG5hbWUg5a+56LGh5rGg5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDlr7nosaHmsaDkuK3miYDmnInlr7nosaHnmoTniLboioLngrlcbiAgICAgKi9cbiAgICBhc3luYyBSZWdpc3Rlck5ldyhuYW1lOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSkge1xuICAgICAgICBsZXQgbm9kZSA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KG5hbWUsIFwiT2JqZWN0UG9vbFwiKTtcbiAgICAgICAgbGV0IHBvb2wgPSBuZXcgU3ViUG9vbChub2RlLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBvb2xzLnNldChwb29sLnBvb2xOYW1lLCBwb29sKTtcbiAgICB9XG59XG4iXX0=