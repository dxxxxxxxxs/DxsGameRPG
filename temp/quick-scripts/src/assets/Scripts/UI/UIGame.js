"use strict";
cc._RF.push(module, '646ab+HRMxK67m9lX07Y5wO', 'UIGame');
// Scripts/UI/UIGame.ts

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
exports.GameState = void 0;
var Game_1 = require("../../Common/Game");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["null"] = 0] = "null";
    GameState[GameState["game"] = 1] = "game";
    GameState[GameState["pause"] = 2] = "pause";
    GameState[GameState["over"] = 3] = "over";
})(GameState = exports.GameState || (exports.GameState = {}));
var UIGame = /** @class */ (function (_super) {
    __extends(UIGame, _super);
    function UIGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.score = null;
        _this.preMap = null;
        _this.cruMap = null;
        return _this;
    }
    UIGame.prototype.onEnable = function () {
        this.addEvent();
        this.initMap();
        this.initPlayer();
    };
    UIGame.prototype.initPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var player, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("player", this.node)];
                    case 1:
                        player = _a.sent();
                        player.setPosition(0, 0);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        temp = Math.floor(Math.random() * 2 + 1);
                        _a = this;
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("map" + temp, this.node)];
                    case 1:
                        _a.preMap = _c.sent();
                        _b = this;
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("map" + temp, this.node)];
                    case 2:
                        _b.cruMap = _c.sent();
                        this.preMap.setPosition(0, -GameModel_1.default.gameHeigth / 2);
                        this.cruMap.setPosition(this.preMap.width + 200, -GameModel_1.default.gameHeigth / 2);
                        return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.createOneMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp, nextMap, oldMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temp = Math.floor(Math.random() * 2 + 1);
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("map" + temp, this.node)];
                    case 1:
                        nextMap = _a.sent();
                        nextMap.setPosition(this.cruMap.x + this.preMap.width + 200, -GameModel_1.default.gameHeigth / 2);
                        return [4 /*yield*/, this.initCoin(nextMap.x)];
                    case 2:
                        _a.sent();
                        oldMap = this.preMap;
                        this.preMap = this.cruMap;
                        this.cruMap = nextMap;
                        Game_1.default.ObjectPool.UnSpawn(oldMap);
                        return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.initCoin = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var i, coin, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("Coin", this.node)];
                    case 2:
                        coin = _a.sent();
                        coin.setPosition(x + i * (i > 2 ? -100 : 100), (Math.random() > 0.5 ? 10 : 40));
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.onDisable = function () {
        this.removeEvent();
    };
    UIGame.prototype.update = function (dt) {
        if (GameModel_1.default.gameState == GameState.game) {
            this.camera.node.x += GameModel_1.default.moveSpeed * dt;
            this.node.getChildByName("Bg").x += GameModel_1.default.moveSpeed * dt;
        }
    };
    UIGame.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GameOver, this.gameOver, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GetCoin, this.UIGetCoin, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_CreateMap, this.createOneMap, this);
        //Game.Event.addEventListener(GameConst.UI_GameStart, this.gameStart, this);
    };
    UIGame.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GameOver, this.gameOver, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GetCoin, this.UIGetCoin, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_CreateMap, this.createOneMap, this);
        //Game.Event.removeEventListener(GameConst.UI_GameStart, this.gameStart, this);
    };
    UIGame.prototype.UIGetCoin = function () {
        this.score.string = GameModel_1.default.gameScore.toString();
    };
    UIGame.prototype.gameOver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var over;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("UIGameOver", this.camera.node)];
                    case 1:
                        over = _a.sent();
                        over.setPosition(0, 0, -1);
                        console.log(over.getPosition());
                        this.node.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Camera)
    ], UIGame.prototype, "camera", void 0);
    __decorate([
        property(cc.Label)
    ], UIGame.prototype, "score", void 0);
    UIGame = __decorate([
        ccclass
    ], UIGame);
    return UIGame;
}(cc.Component));
exports.default = UIGame;

cc._RF.pop();