"use strict";
cc._RF.push(module, 'ac564/AKwJOR5oBIwU5DcEh', 'CCTools');
// Common/Tools/CCTools.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CCTools = /** @class */ (function (_super) {
    __extends(CCTools, _super);
    function CCTools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCTools.isValidEmail = function (email) {
        // 邮箱地址的正则表达式 
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // 使用正则表达式验证输入字符串
        return emailRegex.test(email);
    };
    /**
     * 添加一个节点
     * @param parent 父节点
     * @param name 节点名称
     * @param size 节点大小
     */
    CCTools.addNode = function (parent, name, size) {
        if (size === void 0) { size = cc.view.getVisibleSize(); }
        var node = new cc.Node(name);
        node.setContentSize(size);
        parent.addChild(node);
        return node;
    };
    /**
     * 将传入的邮箱地址变为（首字符+****+尾字符+@+首字符+****+尾字符）
     * @param email 需要隐藏的邮箱地址
     * @returns
     */
    CCTools.prototype.convertEmail = function (email) {
        var atIndex = email.indexOf('@'); // 获取邮箱中 @ 符号的索引位置
        var firstChar = email.charAt(0); // 获取邮箱的首字符
        var lastChar = email.charAt(atIndex - 1);
        var firstChar2 = email.charAt(atIndex + 1);
        var lastChar2 = email.charAt(email.length - 1);
        var convertedEmail = firstChar + "****" + lastChar + "@" + firstChar2 + "****" + lastChar2; // 拼接转换后的邮箱字符串
        return convertedEmail;
    };
    CCTools = __decorate([
        ccclass
    ], CCTools);
    return CCTools;
}(cc.Component));
exports.default = CCTools;

cc._RF.pop();