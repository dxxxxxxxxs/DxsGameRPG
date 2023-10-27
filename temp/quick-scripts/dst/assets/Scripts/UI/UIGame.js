
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL1VJR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQStFQztRQTdFRyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFZixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBd0VuQyxDQUFDO0lBdkVhLHlCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0ssMkJBQVUsR0FBaEI7Ozs7Ozs7d0JBRXFCLHFCQUFNLGNBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUF6RCxNQUFNLEdBQUcsU0FBZ0Q7d0JBQzdELE1BQU0sQ0FBQyxXQUFXLENB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SSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRiwrRUFBK0U7SUFDbkYsQ0FBQztJQUNELDBCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUsseUJBQVEsR0FBZDs7Ozs7NEJBQ2UscUJBQU0sY0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFsRSxJQUFJLEdBQUcsU0FBMkQ7d0JBQ3RFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0tBQzVCO0lBNUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDSTtJQUpOLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErRTFCO0lBQUQsYUFBQztDQS9FRCxBQStFQyxDQS9FbUMsRUFBRSxDQUFDLFNBQVMsR0ErRS9DO2tCQS9Fb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29tbW9uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vQ29tbW9uL0dhbWVcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vU3JjL0dhbWVDb25zdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBHYW1lU3RhdGUge1xuICAgIG51bGwsXG4gICAgZ2FtZSxcbiAgICBwYXVzZSxcbiAgICBvdmVyLFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkNhbWVyYSlcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHByZU1hcDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjcnVNYXA6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRNYXAoKTtcbiAgICAgICAgdGhpcy5pbml0UGxheWVyKCk7XG4gICAgfVxuICAgIGFzeW5jIGluaXRQbGF5ZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwicGxheWVyXCIsIHRoaXMubm9kZSk7XG4gICAgICAgICAgICBwbGF5ZXIuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaW5pdE1hcCgpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XG4gICAgICAgIHRoaXMucHJlTWFwID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwibWFwXCIgKyB0ZW1wLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmNydU1hcCA9IGF3YWl0IEdhbWUuT2JqZWN0UG9vbC5TcGF3bihcIm1hcFwiICsgdGVtcCwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5wcmVNYXAuc2V0UG9zaXRpb24oMCwgLUdhbWVNb2RlbC5nYW1lSGVpZ3RoIC8gMik7XG4gICAgICAgIHRoaXMuY3J1TWFwLnNldFBvc2l0aW9uKHRoaXMucHJlTWFwLndpZHRoICsgMjAwLCAtR2FtZU1vZGVsLmdhbWVIZWlndGggLyAyKTtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlT25lTWFwKCkge1xuICAgICAgICBsZXQgdGVtcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKyAxKTtcbiAgICAgICAgbGV0IG5leHRNYXAgPSBhd2FpdCBHYW1lLk9iamVjdFBvb2wuU3Bhd24oXCJtYXBcIiArIHRlbXAsIHRoaXMubm9kZSk7XG4gICAgICAgIG5leHRNYXAuc2V0UG9zaXRpb24odGhpcy5jcnVNYXAueCArIHRoaXMucHJlTWFwLndpZHRoICsgMjAwLCAtR2FtZU1vZGVsLmdhbWVIZWlndGggLyAyKTtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0Q29pbihuZXh0TWFwLngpO1xuICAgICAgICBsZXQgb2xkTWFwID0gdGhpcy5wcmVNYXA7XG4gICAgICAgIHRoaXMucHJlTWFwID0gdGhpcy5jcnVNYXA7XG4gICAgICAgIHRoaXMuY3J1TWFwID0gbmV4dE1hcDtcbiAgICAgICAgR2FtZS5PYmplY3RQb29sLlVuU3Bhd24ob2xkTWFwKTtcbiAgICB9XG4gICAgYXN5bmMgaW5pdENvaW4oeDogbnVtYmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb2luID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwiQ29pblwiLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oeCArIGkgKiAoaSA+IDIgPyAtMTAwIDogMTAwKSwgKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxMCA6IDQwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLmdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUueCArPSBHYW1lTW9kZWwubW92ZVNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCZ1wiKS54ICs9IEdhbWVNb2RlbC5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lT3ZlciwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2V0Q29pbiwgdGhpcy5VSUdldENvaW4sIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0NyZWF0ZU1hcCwgdGhpcy5jcmVhdGVPbmVNYXAsIHRoaXMpO1xuICAgICAgICAvL0dhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZVN0YXJ0LCB0aGlzLmdhbWVTdGFydCwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HZXRDb2luLCB0aGlzLlVJR2V0Q29pbiwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfQ3JlYXRlTWFwLCB0aGlzLmNyZWF0ZU9uZU1hcCwgdGhpcyk7XG4gICAgICAgIC8vR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lU3RhcnQsIHRoaXMuZ2FtZVN0YXJ0LCB0aGlzKTtcbiAgICB9XG4gICAgVUlHZXRDb2luKCkge1xuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IEdhbWVNb2RlbC5nYW1lU2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnYW1lT3ZlcigpIHtcbiAgICAgICAgbGV0IG92ZXIgPSBhd2FpdCBHYW1lLk9iamVjdFBvb2wuU3Bhd24oXCJVSUdhbWVPdmVyXCIsIHRoaXMuY2FtZXJhLm5vZGUpO1xuICAgICAgICBvdmVyLnNldFBvc2l0aW9uKDAsIDAsIC0xKTtcbiAgICAgICAgY29uc29sZS5sb2cob3Zlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==