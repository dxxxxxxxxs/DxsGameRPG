
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/UIGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL1VJR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQThFQztRQTVFRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQXdFM0IsQ0FBQztJQXZFYSx5QkFBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNLLDJCQUFVLEdBQWhCOzs7Ozs7O3dCQUVxQixxQkFBTSxjQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBekQsTUFBTSxHQUFHLFNBQWdEO3dCQUM3RCxNQUFNLENBQUMsV0FBVyxD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QUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsK0VBQStFO0lBQ25GLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVLLHlCQUFRLEdBQWQ7Ozs7OzRCQUNlLHFCQUFNLGNBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBbEUsSUFBSSxHQUFHLFNBQTJEO3dCQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OztLQUM1QjtJQTNFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0k7SUFKTixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEUxQjtJQUFELGFBQUM7Q0E5RUQsQUE4RUMsQ0E5RW1DLEVBQUUsQ0FBQyxTQUFTLEdBOEUvQztrQkE5RW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbW1vbi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0NvbW1vbi9HYW1lXCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gR2FtZVN0YXRlIHtcbiAgICBudWxsLFxuICAgIGdhbWUsXG4gICAgcGF1c2UsXG4gICAgb3Zlcixcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByZU1hcDogY2MuTm9kZSA9IG51bGw7XG4gICAgY3J1TWFwOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0TWFwKCk7XG4gICAgICAgIHRoaXMuaW5pdFBsYXllcigpO1xuICAgIH1cbiAgICBhc3luYyBpbml0UGxheWVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IGF3YWl0IEdhbWUuT2JqZWN0UG9vbC5TcGF3bihcInBsYXllclwiLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgcGxheWVyLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGluaXRNYXAoKSB7XG4gICAgICAgIGxldCB0ZW1wID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiArIDEpO1xuICAgICAgICB0aGlzLnByZU1hcCA9IGF3YWl0IEdhbWUuT2JqZWN0UG9vbC5TcGF3bihcIm1hcFwiICsgdGVtcCwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5jcnVNYXAgPSBhd2FpdCBHYW1lLk9iamVjdFBvb2wuU3Bhd24oXCJtYXBcIiArIHRlbXAsIHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMucHJlTWFwLnNldFBvc2l0aW9uKDAsIC1HYW1lTW9kZWwuZ2FtZUhlaWd0aCAvIDIpO1xuICAgICAgICB0aGlzLmNydU1hcC5zZXRQb3NpdGlvbih0aGlzLnByZU1hcC53aWR0aCArIDIwMCwgLUdhbWVNb2RlbC5nYW1lSGVpZ3RoIC8gMik7XG4gICAgfVxuICAgIGFzeW5jIGNyZWF0ZU9uZU1hcCgpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XG4gICAgICAgIGxldCBuZXh0TWFwID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwibWFwXCIgKyB0ZW1wLCB0aGlzLm5vZGUpO1xuICAgICAgICBuZXh0TWFwLnNldFBvc2l0aW9uKHRoaXMuY3J1TWFwLnggKyB0aGlzLnByZU1hcC53aWR0aCArIDIwMCwgLUdhbWVNb2RlbC5nYW1lSGVpZ3RoIC8gMik7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdENvaW4obmV4dE1hcC54KTtcbiAgICAgICAgbGV0IG9sZE1hcCA9IHRoaXMucHJlTWFwO1xuICAgICAgICB0aGlzLnByZU1hcCA9IHRoaXMuY3J1TWFwO1xuICAgICAgICB0aGlzLmNydU1hcCA9IG5leHRNYXA7XG4gICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduKG9sZE1hcCk7XG4gICAgfVxuICAgIGFzeW5jIGluaXRDb2luKHg6IG51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29pbiA9IGF3YWl0IEdhbWUuT2JqZWN0UG9vbC5TcGF3bihcIkNvaW5cIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICBjb2luLnNldFBvc2l0aW9uKHggKyBpICogKGkgPiAyID8gLTEwMCA6IDEwMCksIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMTAgOiA0MCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChHYW1lTW9kZWwuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5nYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnggKz0gR2FtZU1vZGVsLm1vdmVTcGVlZCAqIGR0O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmdcIikueCArPSBHYW1lTW9kZWwubW92ZVNwZWVkICogZHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZU92ZXIsIHRoaXMuZ2FtZU92ZXIsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dldENvaW4sIHRoaXMuVUlHZXRDb2luLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9DcmVhdGVNYXAsIHRoaXMuY3JlYXRlT25lTWFwLCB0aGlzKTtcbiAgICAgICAgLy9HYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVTdGFydCwgdGhpcy5nYW1lU3RhcnQsIHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lT3ZlciwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2V0Q29pbiwgdGhpcy5VSUdldENvaW4sIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0NyZWF0ZU1hcCwgdGhpcy5jcmVhdGVPbmVNYXAsIHRoaXMpO1xuICAgICAgICAvL0dhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZVN0YXJ0LCB0aGlzLmdhbWVTdGFydCwgdGhpcyk7XG4gICAgfVxuICAgIFVJR2V0Q29pbigpIHtcbiAgICAgICAgdGhpcy5zY29yZS5zdHJpbmcgPSBHYW1lTW9kZWwuZ2FtZVNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGxldCBvdmVyID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwiVUlHYW1lT3ZlclwiLCB0aGlzLmNhbWVyYS5ub2RlKTtcbiAgICAgICAgb3Zlci5zZXRQb3NpdGlvbigwLCAwLCAtMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG92ZXIuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=