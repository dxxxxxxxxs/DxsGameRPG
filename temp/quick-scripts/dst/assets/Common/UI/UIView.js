
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIView = /** @class */ (function (_super) {
    __extends(UIView, _super);
    function UIView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
        //uiManager.close(this);
    };
    UIView = __decorate([
        ccclass
    ], UIView);
    return UIView;
}(cc.Component));
exports.default = UIView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQThDQSxDQUFDO0lBNUNHLHNEQUFzRDtJQUN0RDs7O09BR0c7SUFDSSxxQkFBSSxHQUFYO1FBQVksY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O0lBRXJDLENBQUM7SUFFRDs7T0FFRztJQUNJLDhCQUFhLEdBQXBCO0lBQ0EsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNCQUFLLEdBQVosVUFBYSxLQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7SUFFbkMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksd0JBQXdCO0lBQzVCLENBQUM7SUE3Q2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4QzFCO0lBQUQsYUFBQztDQTlDRCxBQThDQyxDQTlDbUMsRUFBRSxDQUFDLFNBQVMsR0E4Qy9DO2tCQTlDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKiogVUnnmoTlm57osIMgKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5Yib5bu65pe25Zue6LCD77yM55Sf5ZG95ZGo5pyf5YaF5Y+q6LCD55SoXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+v5Y+Y5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGluaXQoLi4uYXJncyk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5omT5byA5pe25Zue6LCD77yM5q+P5qyh6LCD55SoT3BlbuaXtuWbnuiwg1xuICAgICAqIEBwYXJhbSBmcm9tVUkg5LuO5ZOq5LiqVUnmiZPlvIDnmoRcbiAgICAgKiBAcGFyYW0gYXJncyDlj6/lj5jlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgb25PcGVuKGZyb21VSTogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmr4/mrKHnlYzpnaJPcGVu5Yqo55S75pKt5pS+5a6M5q+V5pe25Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIG9uT3BlbkFuaU92ZXIoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5YWz6Zet5pe25Zue6LCD77yM5q+P5qyh6LCD55SoQ2xvc2Xml7blm57osINcbiAgICAgKiDov5Tlm57lgLzkvJrkvKDpgJLnu5nkuIvkuIDkuKrnlYzpnaJcbiAgICAgKi9cbiAgICBwdWJsaWMgb25DbG9zZSgpOiBhbnkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr572u6aG25pe25Zue6LCD77yMT3BlbuaXtuW5tuS4jeS8muWbnuiwg+ivpeWHveaVsFxuICAgICAqIEBwYXJhbSBwcmVJRCDliY3kuIDkuKp1aVxuICAgICAqIEBwYXJhbSBhcmdzIOWPr+WPmOWPguaVsO+8jFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvcChwcmVJRDogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25CdG5fY2xvc2UoKSB7XG4gICAgICAgIC8vdWlNYW5hZ2VyLmNsb3NlKHRoaXMpO1xuICAgIH1cbn1cblxuXG4iXX0=