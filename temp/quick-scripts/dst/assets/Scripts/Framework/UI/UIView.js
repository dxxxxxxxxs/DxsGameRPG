
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/UI/UIView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5d99XfdgNJRLu36EMbMqJ/', 'UIView');
// Scripts/Framework/UI/UIView.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9VSS9VSVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBOENBLENBQUM7SUE1Q0csc0RBQXNEO0lBQ3REOzs7T0FHRztJQUNJLHFCQUFJLEdBQVg7UUFBWSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztJQUVuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVCQUFNLEdBQWIsVUFBYyxNQUFjO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7SUFFckMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOEJBQWEsR0FBcEI7SUFDQSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksd0JBQU8sR0FBZDtJQUVBLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQUssR0FBWixVQUFhLEtBQWE7UUFBRSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztJQUVuQyxDQUFDO0lBRU0sNEJBQVcsR0FBbEI7UUFDSSx3QkFBd0I7SUFDNUIsQ0FBQztJQTdDZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThDMUI7SUFBRCxhQUFDO0NBOUNELEFBOENDLENBOUNtQyxFQUFFLENBQUMsU0FBUyxHQThDL0M7a0JBOUNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKiBVSeeahOWbnuiwgyAqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKipcbiAgICAgKiDlvZPnlYzpnaLooqvliJvlu7rml7blm57osIPvvIznlJ/lkb3lkajmnJ/lhoXlj6rosIPnlKhcbiAgICAgKiBAcGFyYW0gYXJncyDlj6/lj5jlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdCguLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvZPnlYzpnaLooqvmiZPlvIDml7blm57osIPvvIzmr4/mrKHosIPnlKhPcGVu5pe25Zue6LCDXG4gICAgICogQHBhcmFtIGZyb21VSSDku47lk6rkuKpVSeaJk+W8gOeahFxuICAgICAqIEBwYXJhbSBhcmdzIOWPr+WPmOWPguaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBvbk9wZW4oZnJvbVVJOiBudW1iZXIsIC4uLmFyZ3MpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOavj+asoeeVjOmdok9wZW7liqjnlLvmkq3mlL7lrozmr5Xml7blm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgb25PcGVuQW5pT3ZlcigpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvZPnlYzpnaLooqvlhbPpl63ml7blm57osIPvvIzmr4/mrKHosIPnlKhDbG9zZeaXtuWbnuiwg1xuICAgICAqIOi/lOWbnuWAvOS8muS8oOmAkue7meS4i+S4gOS4queVjOmdolxuICAgICAqL1xuICAgIHB1YmxpYyBvbkNsb3NlKCk6IGFueSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvZPnlYzpnaLooqvnva7pobbml7blm57osIPvvIxPcGVu5pe25bm25LiN5Lya5Zue6LCD6K+l5Ye95pWwXG4gICAgICogQHBhcmFtIHByZUlEIOWJjeS4gOS4qnVpXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+v5Y+Y5Y+C5pWw77yMXG4gICAgICovXG4gICAgcHVibGljIG9uVG9wKHByZUlEOiBudW1iZXIsIC4uLmFyZ3MpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bl9jbG9zZSgpIHtcbiAgICAgICAgLy91aU1hbmFnZXIuY2xvc2UodGhpcyk7XG4gICAgfVxufVxuXG5cbiJdfQ==