"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Scripts/Framework/Pool/ObjectPool.ts

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