"use strict";
cc._RF.push(module, '81a73D9sYtG26t7FPsbH0+6', 'FeedbackPanel');
// Scripts/Src/UI/FeedbackPanel.ts

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
var CCTools_1 = require("../../Framework/Tools/CCTools");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FeedbackPanel = /** @class */ (function (_super) {
    __extends(FeedbackPanel, _super);
    function FeedbackPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = null;
        _this.addImagebtn = null;
        _this.inputEmail = null;
        _this.sps = [];
        _this.imageMaxNumber = 5;
        return _this;
    }
    FeedbackPanel.prototype.onBtnAddImage = function () {
        if (this.images.children.length >= 4 && this.addImagebtn == null) {
            return;
        }
        var newImage = cc.instantiate(this.addImagebtn);
        newImage.removeComponent(cc.Button);
        var m = Math.floor(Math.random() * 2);
        newImage.getComponent(cc.Sprite).spriteFrame = this.sps[m];
        if (this.images.children.length == 4 && this.addImagebtn != null) {
            this.addImagebtn.destroy();
        }
        this.images.addChild(newImage, -this.images.childrenCount);
        //this.images.getComponent(cc.Layout).updateLayout();
        this.imageMaxNumber++;
    };
    FeedbackPanel.prototype.InputEmailEnd = function () {
        if (CCTools_1.default.isValidEmail(this.inputEmail.string)) {
            console.log("正确邮箱地址");
        }
        else {
            console.log("错误邮箱地址");
        }
    };
    __decorate([
        property(cc.Node)
    ], FeedbackPanel.prototype, "images", void 0);
    __decorate([
        property(cc.Node)
    ], FeedbackPanel.prototype, "addImagebtn", void 0);
    __decorate([
        property(cc.EditBox)
    ], FeedbackPanel.prototype, "inputEmail", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], FeedbackPanel.prototype, "sps", void 0);
    FeedbackPanel = __decorate([
        ccclass
    ], FeedbackPanel);
    return FeedbackPanel;
}(cc.Component));
exports.default = FeedbackPanel;

cc._RF.pop();