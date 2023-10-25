
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/UI/UIView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5d99XfdgNJRLu36EMbMqJ/', 'UIView');
// Common/UI/UIView.ts

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
exports.UIView = exports.UIShowTypes = void 0;
var UIManager_1 = require("./UIManager");
var UINode_1 = require("./UINode");
/**
 * UIView界面基础类
 *
 * 1. 快速关闭与屏蔽点击的选项配置
 * 2. 界面缓存设置（开启后界面关闭不会被释放，以便下次快速打开）
 * 3. 界面显示类型配置
 *
 * 4. 加载资源接口（随界面释放自动释放），this.loadRes(xxx)
 * 5. 由UIManager释放
 *
 * 5. 界面初始化回调（只调用一次）
 * 6. 界面打开回调（每次打开回调）
 * 7. 界面打开动画播放结束回调（动画播放完回调）
 * 8. 界面关闭回调
 * 9. 界面置顶回调
 *
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 界面展示类型 */
var UIShowTypes;
(function (UIShowTypes) {
    UIShowTypes[UIShowTypes["UIFullScreen"] = 0] = "UIFullScreen";
    UIShowTypes[UIShowTypes["UIAddition"] = 1] = "UIAddition";
    UIShowTypes[UIShowTypes["UISingle"] = 2] = "UISingle";
})(UIShowTypes = exports.UIShowTypes || (exports.UIShowTypes = {}));
;
var UIView = /** @class */ (function (_super) {
    __extends(UIView, _super);
    function UIView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 快速关闭 */
        _this.quickClose = false;
        /** 屏蔽点击选项 在UIConf设置屏蔽点击*/
        // @property
        // preventTouch: boolean = true;
        /** 缓存选项 */
        _this.cache = false;
        /** 界面显示类型 */
        _this.showType = UIShowTypes.UISingle;
        /** 界面id */
        _this.uiId = 0;
        return _this;
    }
    Object.defineProperty(UIView.prototype, "uiNode", {
        get: function () {
            if (this._uiNode == null) {
                this._uiNode = new UINode_1.UINode(this.node);
            }
            return this._uiNode;
        },
        enumerable: false,
        configurable: true
    });
    /********************** UI的回调 ***********************/
    /**
     * 当界面被创建时回调，生命周期内只调用
     * @param args 可变参数
     */
    UIView.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 当界面被打开时回调，每次调用Open时回调
     * @param fromUI 从哪个UI打开的
     * @param args 可变参数
     */
    UIView.prototype.onOpen = function (fromUI) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    /**
     * 每次界面Open动画播放完毕时回调
     */
    UIView.prototype.onOpenAniOver = function () {
    };
    /**
     * 当界面被关闭时回调，每次调用Close时回调
     * 返回值会传递给下一个界面
     */
    UIView.prototype.onClose = function () {
    };
    /**
     * 当界面被置顶时回调，Open时并不会回调该函数
     * @param preID 前一个ui
     * @param args 可变参数，
     */
    UIView.prototype.onTop = function (preID) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    UIView.prototype.onBtn_close = function () {
        UIManager_1.uiManager.close(this);
    };
    /**  静态变量，用于区分相同界面的不同实例 */
    UIView.uiIndex = 0;
    __decorate([
        property
    ], UIView.prototype, "quickClose", void 0);
    __decorate([
        property
    ], UIView.prototype, "cache", void 0);
    __decorate([
        property({ type: cc.Enum(UIShowTypes) })
    ], UIView.prototype, "showType", void 0);
    UIView = __decorate([
        ccclass
    ], UIView);
    return UIView;
}(cc.Component));
exports.UIView = UIView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Rix5Q0FBd0M7QUFDeEMsbUNBQWtDO0FBRWxDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsYUFBYTtBQUNiLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiw2REFBWSxDQUFBO0lBQ1oseURBQVUsQ0FBQTtJQUNWLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFBQSxDQUFDO0FBR0Y7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUF3RUM7UUF0RUcsV0FBVztRQUVYLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osZ0NBQWdDO1FBQ2hDLFdBQVc7UUFFWCxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGFBQWE7UUFFYixjQUFRLEdBQWdCLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0MsV0FBVztRQUNKLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBeUQ1QixDQUFDO0lBbkRHLHNCQUFJLDBCQUFNO2FBQVY7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNEQUFzRDtJQUN0RDs7O09BR0c7SUFDSSxxQkFBSSxHQUFYO1FBQVksY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O0lBRXJDLENBQUM7SUFFRDs7T0FFRztJQUNJLDhCQUFhLEdBQXBCO0lBQ0EsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNCQUFLLEdBQVosVUFBYSxLQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7SUFFbkMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0kscUJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXZERCwwQkFBMEI7SUFDWCxjQUFPLEdBQVcsQ0FBQyxDQUFDO0lBYm5DO1FBREMsUUFBUTs4Q0FDbUI7SUFNNUI7UUFEQyxRQUFRO3lDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzs0Q0FDSTtJQWJwQyxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBd0VsQjtJQUFELGFBQUM7Q0F4RUQsQUF3RUMsQ0F4RTJCLEVBQUUsQ0FBQyxTQUFTLEdBd0V2QztBQXhFWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyB1aU1hbmFnZXIgfSBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IFVJTm9kZSB9IGZyb20gXCIuL1VJTm9kZVwiO1xuXG4vKipcbiAqIFVJVmlld+eVjOmdouWfuuehgOexu1xuICogXG4gKiAxLiDlv6vpgJ/lhbPpl63kuI7lsY/olL3ngrnlh7vnmoTpgInpobnphY3nva5cbiAqIDIuIOeVjOmdoue8k+WtmOiuvue9ru+8iOW8gOWQr+WQjueVjOmdouWFs+mXreS4jeS8muiiq+mHiuaUvu+8jOS7peS+v+S4i+asoeW/q+mAn+aJk+W8gO+8iVxuICogMy4g55WM6Z2i5pi+56S657G75Z6L6YWN572uXG4gKiBcbiAqIDQuIOWKoOi9vei1hOa6kOaOpeWPo++8iOmaj+eVjOmdoumHiuaUvuiHquWKqOmHiuaUvu+8ie+8jHRoaXMubG9hZFJlcyh4eHgpXG4gKiA1LiDnlLFVSU1hbmFnZXLph4rmlL5cbiAqIFxuICogNS4g55WM6Z2i5Yid5aeL5YyW5Zue6LCD77yI5Y+q6LCD55So5LiA5qyh77yJXG4gKiA2LiDnlYzpnaLmiZPlvIDlm57osIPvvIjmr4/mrKHmiZPlvIDlm57osIPvvIlcbiAqIDcuIOeVjOmdouaJk+W8gOWKqOeUu+aSreaUvue7k+adn+Wbnuiwg++8iOWKqOeUu+aSreaUvuWujOWbnuiwg++8iVxuICogOC4g55WM6Z2i5YWz6Zet5Zue6LCDXG4gKiA5LiDnlYzpnaLnva7pobblm57osINcbiAqIFxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDnlYzpnaLlsZXnpLrnsbvlnosgKi9cbmV4cG9ydCBlbnVtIFVJU2hvd1R5cGVzIHtcbiAgICBVSUZ1bGxTY3JlZW4sICAgICAgIC8vIOWFqOWxj+aYvuekuu+8jOWFqOWxj+eVjOmdouS9v+eUqOivpemAiemhueWPr+iOt+W+l+abtOmrmOaAp+iDvVxuICAgIFVJQWRkaXRpb24sICAgICAgICAgLy8g5Y+g5Yqg5pi+56S677yM5oCn6IO96L6D5beuXG4gICAgVUlTaW5nbGUsICAgICAgICAgICAvLyDljZXnlYzpnaLmmL7npLrvvIzlj6rmmL7npLrlvZPliY3nlYzpnaLlkozog4zmma/nlYzpnaLvvIzmgKfog73ovoPlpb1cbn07XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVUlWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qKiDlv6vpgJ/lhbPpl60gKi9cbiAgICBAcHJvcGVydHlcbiAgICBxdWlja0Nsb3NlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOWxj+iUveeCueWHu+mAiemhuSDlnKhVSUNvbmborr7nva7lsY/olL3ngrnlh7sqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHByZXZlbnRUb3VjaDogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqIOe8k+WtmOmAiemhuSAqL1xuICAgIEBwcm9wZXJ0eVxuICAgIGNhY2hlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOeVjOmdouaYvuekuuexu+WeiyAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlTaG93VHlwZXMpIH0pXG4gICAgc2hvd1R5cGU6IFVJU2hvd1R5cGVzID0gVUlTaG93VHlwZXMuVUlTaW5nbGU7XG4gICAgLyoqIOeVjOmdomlkICovXG4gICAgcHVibGljIHVpSWQ6IG51bWJlciA9IDA7XG4gICAgLyoqICDpnZnmgIHlj5jph4/vvIznlKjkuo7ljLrliIbnm7jlkIznlYzpnaLnmoTkuI3lkIzlrp7kvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB1aUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfdWlOb2RlOiBVSU5vZGU7XG5cbiAgICBnZXQgdWlOb2RlKCk6IFVJTm9kZSB7XG4gICAgICAgIGlmICh0aGlzLl91aU5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdWlOb2RlID0gbmV3IFVJTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl91aU5vZGU7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKiogVUnnmoTlm57osIMgKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5Yib5bu65pe25Zue6LCD77yM55Sf5ZG95ZGo5pyf5YaF5Y+q6LCD55SoXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+v5Y+Y5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGluaXQoLi4uYXJncyk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5omT5byA5pe25Zue6LCD77yM5q+P5qyh6LCD55SoT3BlbuaXtuWbnuiwg1xuICAgICAqIEBwYXJhbSBmcm9tVUkg5LuO5ZOq5LiqVUnmiZPlvIDnmoRcbiAgICAgKiBAcGFyYW0gYXJncyDlj6/lj5jlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgb25PcGVuKGZyb21VSTogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmr4/mrKHnlYzpnaJPcGVu5Yqo55S75pKt5pS+5a6M5q+V5pe25Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIG9uT3BlbkFuaU92ZXIoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5YWz6Zet5pe25Zue6LCD77yM5q+P5qyh6LCD55SoQ2xvc2Xml7blm57osINcbiAgICAgKiDov5Tlm57lgLzkvJrkvKDpgJLnu5nkuIvkuIDkuKrnlYzpnaJcbiAgICAgKi9cbiAgICBwdWJsaWMgb25DbG9zZSgpOiBhbnkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr572u6aG25pe25Zue6LCD77yMT3BlbuaXtuW5tuS4jeS8muWbnuiwg+ivpeWHveaVsFxuICAgICAqIEBwYXJhbSBwcmVJRCDliY3kuIDkuKp1aVxuICAgICAqIEBwYXJhbSBhcmdzIOWPr+WPmOWPguaVsO+8jFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvcChwcmVJRDogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25CdG5fY2xvc2UoKSB7XG4gICAgICAgIHVpTWFuYWdlci5jbG9zZSh0aGlzKTtcbiAgICB9XG59XG4iXX0=