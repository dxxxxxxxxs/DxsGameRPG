"use strict";
cc._RF.push(module, '2d13f/osa1LeK0UwYAj5TwM', 'GameStartPanel');
// Scripts/UI/GameStartPanel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("../../Common/Game");
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStartPanel = /** @class */ (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.bar = null;
        return _this;
    }
    GameStartPanel.prototype.onBtnStartGame = function () {
        var _this = this;
        this.loading.active = true;
        cc.director.preloadScene("Game", function (completedCount, totalCount, item) {
            // 更新进度条
            _this.bar.progress = completedCount / totalCount;
        }, function (error) {
            if (!error) {
                Game_1.default.Event.dispatch(GameConst_1.default.GAMESTART);
            }
            else {
                console.error("Failed to preload scene: ", error);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], GameStartPanel.prototype, "loading", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameStartPanel.prototype, "bar", void 0);
    GameStartPanel = __decorate([
        ccclass
    ], GameStartPanel);
    return GameStartPanel;
}(cc.Component));
exports.default = GameStartPanel;

cc._RF.pop();