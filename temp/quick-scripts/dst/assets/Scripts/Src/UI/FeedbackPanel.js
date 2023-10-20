
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/FeedbackPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9GZWVkYmFja1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXlDQztRQXZDRyxZQUFNLEdBQVMsSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVMsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFNBQUcsR0FBa0IsRUFBRSxDQUFDO1FBQ2hCLG9CQUFjLEdBQVEsQ0FBQyxDQUFDOztJQWdDcEMsQ0FBQztJQS9CRyxxQ0FBYSxHQUFiO1FBRUksSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQyxXQUFXLElBQUUsSUFBSSxFQUN6RDtZQUNJLE9BQU87U0FDVjtRQUNELElBQUksUUFBUSxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFFLENBQUMsSUFBRSxJQUFJLENBQUMsV0FBVyxJQUFFLElBQUksRUFDekQ7WUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQ0FBYSxHQUFiO1FBRUksSUFBRyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUMvQztZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7YUFFRDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3FEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ0Q7SUFSUCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeUNqQztJQUFELG9CQUFDO0NBekNELEFBeUNDLENBekMwQyxFQUFFLENBQUMsU0FBUyxHQXlDdEQ7a0JBekNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDQ1Rvb2xzIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvVG9vbHMvQ0NUb29sc1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGltYWdlczpjYy5Ob2RlPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWRkSW1hZ2VidG46Y2MuTm9kZT1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGlucHV0RW1haWw6Y2MuRWRpdEJveD1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHM6Y2MuU3ByaXRlRnJhbWVbXT1bXTtcbiAgICBwcml2YXRlIGltYWdlTWF4TnVtYmVyOm51bWJlcj01O1xuICAgIG9uQnRuQWRkSW1hZ2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5pbWFnZXMuY2hpbGRyZW4ubGVuZ3RoPj00JiZ0aGlzLmFkZEltYWdlYnRuPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0ltYWdlPWNjLmluc3RhbnRpYXRlKHRoaXMuYWRkSW1hZ2VidG4pO1xuICAgICAgICBuZXdJbWFnZS5yZW1vdmVDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgbGV0IG09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICBuZXdJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLnNwc1ttXTtcbiAgICAgICAgaWYodGhpcy5pbWFnZXMuY2hpbGRyZW4ubGVuZ3RoPT00JiZ0aGlzLmFkZEltYWdlYnRuIT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmFkZEltYWdlYnRuLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5pbWFnZXMuYWRkQ2hpbGQobmV3SW1hZ2UsLXRoaXMuaW1hZ2VzLmNoaWxkcmVuQ291bnQpO1xuICAgICAgICAvL3RoaXMuaW1hZ2VzLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xuICAgICAgICB0aGlzLmltYWdlTWF4TnVtYmVyKys7XG4gICAgfVxuICAgIElucHV0RW1haWxFbmQoKVxuICAgIHtcbiAgICAgICAgaWYoQ0NUb29scy5pc1ZhbGlkRW1haWwodGhpcy5pbnB1dEVtYWlsLnN0cmluZykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5q2j56Gu6YKu566x5Zyw5Z2AXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLplJnor6/pgq7nrrHlnLDlnYBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==