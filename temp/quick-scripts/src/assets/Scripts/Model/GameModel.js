"use strict";
cc._RF.push(module, '15c44HP14RFPqRMMRnGlUVV', 'GameModel');
// Scripts/Model/GameModel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var UIGame_1 = require("../UI/UIGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    Object.defineProperty(GameModel, "gameState", {
        get: function () {
            return this.GameState;
        },
        set: function (state) {
            if (state) {
                switch (state) {
                    case UIGame_1.GameState.game:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.pause:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.over:
                        this.GameState = state;
                        break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**屏幕可视化宽度 */
    GameModel.gameWidth = 0;
    /**屏幕可视化高度 */
    GameModel.gameHeigth = 0;
    /**玩家移动速度 */
    GameModel.moveSpeed = 200;
    /**当前游戏分数 */
    GameModel.gameScore = 0;
    GameModel.distance = 0;
    /**当前游戏状态 */
    GameModel.GameState = UIGame_1.GameState.null;
    GameModel = __decorate([
        ccclass
    ], GameModel);
    return GameModel;
}());
exports.default = GameModel;

cc._RF.pop();