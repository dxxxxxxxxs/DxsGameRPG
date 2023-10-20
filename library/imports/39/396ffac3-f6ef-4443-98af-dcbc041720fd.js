"use strict";
cc._RF.push(module, '396ffrD9u9EQ5iv3LwEFyD9', 'GameRWPanel');
// Scripts/Src/UI/GameRWPanel.ts

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
var Game_1 = require("../../Framework/Game");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var GameRWItem_1 = require("./GameRWItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRWPanel = /** @class */ (function (_super) {
    __extends(GameRWPanel, _super);
    function GameRWPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.RWItem = null;
        return _this;
        // update (dt) {}
    }
    GameRWPanel.prototype.onLoad = function () {
        this.addEvent();
        this.initUI();
    };
    GameRWPanel.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_FinishRW, this.updateUI, this);
    };
    GameRWPanel.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_FinishRW, this.updateUI, this);
    };
    GameRWPanel.prototype.initUI = function () {
        GameModel_1.default.RWSort();
        this.content.height = GameModel_1.default.RWInfos.length * 90 + 10;
        for (var i = 0; i < GameModel_1.default.RWInfos.length; i++) {
            this.createOneRWItem(GameModel_1.default.RWInfos[i]);
        }
    };
    GameRWPanel.prototype.updateUI = function (name) {
        //先把之前的删掉，再重新创建（或者后续可以改一下，给item里面加一个设置ui的方法，可以不用删除item）
        // this,this.content.children.forEach(item=>{
        //     if(item)
        //     {
        //         item.destroy();
        //     }
        // })
        // for(let i=0;i<GameModel.RWInfos.length;i++)
        // {
        //     if(RWName==GameModel.RWInfos[i].RWName)
        //     {
        //         let rw=GameModel.RWInfos[i];
        //         GameModel.RWInfos.splice(GameModel.RWInfos.indexOf(GameModel.RWInfos[i]),1);
        //         GameModel.RWInfos.push(rw);
        //         break;
        //     }
        // }
        GameModel_1.default.RWSort();
        for (var i = 0; i < this.content.children.length; i++) {
            if (i + 1 > GameModel_1.default.RWInfos.length) {
                this.content.children[i].destroy();
            }
            else {
                this.content.children[i].getComponent(GameRWItem_1.default).init(GameModel_1.default.RWInfos[i]);
            }
        }
    };
    GameRWPanel.prototype.createOneRWItem = function (RWInfo) {
        var rwItem = cc.instantiate(this.RWItem);
        rwItem.setParent(this.content);
        rwItem.getComponent(GameRWItem_1.default).init(RWInfo);
    };
    __decorate([
        property(cc.Node)
    ], GameRWPanel.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameRWPanel.prototype, "RWItem", void 0);
    GameRWPanel = __decorate([
        ccclass
    ], GameRWPanel);
    return GameRWPanel;
}(cc.Component));
exports.default = GameRWPanel;

cc._RF.pop();