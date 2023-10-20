
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Framework/Audio/AudioManager');
require('./assets/Scripts/Framework/Audio/AudioRoot');
require('./assets/Scripts/Framework/Bundle/BundleManager');
require('./assets/Scripts/Framework/Event/EventManager');
require('./assets/Scripts/Framework/Game');
require('./assets/Scripts/Framework/Pool/IResultAble');
require('./assets/Scripts/Framework/Pool/ObjectPool');
require('./assets/Scripts/Framework/Pool/SubPool');
require('./assets/Scripts/Framework/Tools/CCTools');
require('./assets/Scripts/Framework/UI/UIManager');
require('./assets/Scripts/Framework/UI/UIView');
require('./assets/Scripts/Src/Game/Enemy');
require('./assets/Scripts/Src/Game/Share');
require('./assets/Scripts/Src/Game/UIGame');
require('./assets/Scripts/Src/GameConst');
require('./assets/Scripts/Src/Model/GameModel');
require('./assets/Scripts/Src/Model/RWInfo');
require('./assets/Scripts/Src/UI/FeedbackPanel');
require('./assets/Scripts/Src/UI/GameOverPanel');
require('./assets/Scripts/Src/UI/GameQianDaoPanel');
require('./assets/Scripts/Src/UI/GameRWItem');
require('./assets/Scripts/Src/UI/GameRWPanel');
require('./assets/Scripts/Src/UI/UI');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Game/Share.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b816Qiu/NIr7Tvb1q4Tpdj', 'Share');
// Scripts/Src/Game/Share.ts

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
var IResultAble_1 = require("../../Framework/Pool/IResultAble");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Share = /** @class */ (function (_super) {
    __extends(Share, _super);
    function Share() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Share.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Share.prototype.onSpawn = function () {
        console.log("share被取出");
    };
    Share.prototype.unSpawn = function () {
        console.log("share被收回");
    };
    Share = __decorate([
        ccclass
    ], Share);
    return Share;
}(IResultAble_1.default));
exports.default = Share;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lL1NoYXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLGdFQUEyRDtBQUVyRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBVztJQUE5Qzs7SUFVQSxDQUFDO0lBVGEsc0JBQU0sR0FBaEI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ00sdUJBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNNLHVCQUFPLEdBQWQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFUZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQVV6QjtJQUFELFlBQUM7Q0FWRCxBQVVDLENBVmtDLHFCQUFXLEdBVTdDO2tCQVZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBJUmVzdWx0QWJsZSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Bvb2wvSVJlc3VsdEFibGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZSBleHRlbmRzIElSZXN1bHRBYmxlIHtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICB9XG4gICAgcHVibGljIG9uU3Bhd24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhcmXooqvlj5blh7pcIik7XG4gICAgfVxuICAgIHB1YmxpYyB1blNwYXduKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNoYXJl6KKr5pS25ZueXCIpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e8daXazI1OnJ52fDZehiEG', 'Game');
// Scripts/Framework/Game.ts

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
var AudioManager_1 = require("./Audio/AudioManager");
var EventManager_1 = require("./Event/EventManager");
var ObjectPool_1 = require("./Pool/ObjectPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function () {
    function Game() {
    }
    Object.defineProperty(Game, "Event", {
        get: function () { return EventManager_1.EventManager.Instance; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game, "Audio", {
        get: function () { return AudioManager_1.AudioManager.Instance; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game, "ObjectPool", {
        get: function () { return ObjectPool_1.default.Instance; },
        enumerable: false,
        configurable: true
    });
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}());
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFFdEYscURBQW9EO0FBQ3BELHFEQUFvRDtBQUNwRCxnREFBMkM7QUFHckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBQTtJQUlBLENBQUM7SUFIRyxzQkFBa0IsYUFBSzthQUF2QixjQUEwQixPQUFPLDJCQUFZLENBQUMsUUFBUSxDQUFBLENBQUEsQ0FBQzs7O09BQUE7SUFDdkQsc0JBQWtCLGFBQUs7YUFBdkIsY0FBMEIsT0FBTywyQkFBWSxDQUFDLFFBQVEsQ0FBQSxDQUFBLENBQUM7OztPQUFBO0lBQ3ZELHNCQUFrQixrQkFBVTthQUE1QixjQUErQixPQUFPLG9CQUFVLENBQUMsUUFBUSxDQUFBLENBQUEsQ0FBQzs7O09BQUE7SUFIekMsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQUl4QjtJQUFELFdBQUM7Q0FKRCxBQUlDLElBQUE7a0JBSm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi9FdmVudC9FdmVudE1hbmFnZXJcIjtcbmltcG9ydCBPYmplY3RQb29sIGZyb20gXCIuL1Bvb2wvT2JqZWN0UG9vbFwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgRXZlbnQoKXtyZXR1cm4gRXZlbnRNYW5hZ2VyLkluc3RhbmNlfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEF1ZGlvKCl7cmV0dXJuIEF1ZGlvTWFuYWdlci5JbnN0YW5jZX1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBPYmplY3RQb29sKCl7cmV0dXJuIE9iamVjdFBvb2wuSW5zdGFuY2V9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Tools/CCTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac564/AKwJOR5oBIwU5DcEh', 'CCTools');
// Scripts/Framework/Tools/CCTools.ts

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
    CCTools = __decorate([
        ccclass
    ], CCTools);
    return CCTools;
}(cc.Component));
exports.default = CCTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Ub29scy9DQ1Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEOztJQVFBLENBQUM7SUFQaUIsb0JBQVksR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxhQUFhO1FBQ2IsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFFaEQsaUJBQWlCO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FRM0I7SUFBRCxjQUFDO0NBUkQsQUFRQyxDQVJvQyxFQUFFLENBQUMsU0FBUyxHQVFoRDtrQkFSb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENDVG9vbHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgLy8g6YKu566x5Zyw5Z2A55qE5q2j5YiZ6KGo6L6+5byPXG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcbiAgICAgICAgXG4gICAgICAgIC8vIOS9v+eUqOato+WImeihqOi+vuW8j+mqjOivgei+k+WFpeWtl+espuS4slxuICAgICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/GameQianDaoPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '769610eqh1GLLuwACEzN5+j', 'GameQianDaoPanel');
// Scripts/Src/UI/GameQianDaoPanel.ts

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
var GameModel_1 = require("../Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameQianDaoPanel = /** @class */ (function (_super) {
    __extends(GameQianDaoPanel, _super);
    function GameQianDaoPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.QianDaoMoneys = null;
        _this.btnQianDao = null;
        return _this;
    }
    GameQianDaoPanel.prototype.onLoad = function () {
        this.UpdateUI();
    };
    GameQianDaoPanel.prototype.UpdateUI = function () {
        var qiandaos = this.QianDaoMoneys.children;
        for (var i = 0; i < GameModel_1.default.QianDaoNumber - 1; i++) {
            qiandaos[i].children[0].active = true;
        }
        this.btnQianDao.getComponent(cc.Button).interactable = !GameModel_1.default.TodayQianDao;
    };
    GameQianDaoPanel.prototype.OnQianDaoClick = function () {
        if (GameModel_1.default.TodayQianDao)
            return;
        GameModel_1.default.QianDaoNumber++;
        GameModel_1.default.TodayQianDao = true;
        this.UpdateUI();
    };
    __decorate([
        property(cc.Node)
    ], GameQianDaoPanel.prototype, "QianDaoMoneys", void 0);
    __decorate([
        property(cc.Node)
    ], GameQianDaoPanel.prototype, "btnQianDao", void 0);
    GameQianDaoPanel = __decorate([
        ccclass
    ], GameQianDaoPanel);
    return GameQianDaoPanel;
}(cc.Component));
exports.default = GameQianDaoPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9HYW1lUWlhbkRhb1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXdCQztRQXRCRyxtQkFBYSxHQUFTLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFTLElBQUksQ0FBQzs7SUFvQjVCLENBQUM7SUFuQmEsaUNBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFFSSxJQUFJLFFBQVEsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsbUJBQVMsQ0FBQyxhQUFhLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUMzQztZQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxtQkFBUyxDQUFDLFlBQVksQ0FBQztJQUNqRixDQUFDO0lBQ0QseUNBQWMsR0FBZDtRQUVJLElBQUcsbUJBQVMsQ0FBQyxZQUFZO1lBQUMsT0FBTztRQUNqQyxtQkFBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLG1CQUFTLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ007SUFKUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXdCcEM7SUFBRCx1QkFBQztDQXhCRCxBQXdCQyxDQXhCNkMsRUFBRSxDQUFDLFNBQVMsR0F3QnpEO2tCQXhCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVRaWFuRGFvUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFFpYW5EYW9Nb25leXM6Y2MuTm9kZT1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blFpYW5EYW86Y2MuTm9kZT1udWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuVXBkYXRlVUkoKTtcbiAgICB9XG4gICAgVXBkYXRlVUkoKVxuICAgIHtcbiAgICAgICAgbGV0IHFpYW5kYW9zPXRoaXMuUWlhbkRhb01vbmV5cy5jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lTW9kZWwuUWlhbkRhb051bWJlci0xO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgcWlhbmRhb3NbaV0uY2hpbGRyZW5bMF0uYWN0aXZlPXRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5RaWFuRGFvLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZT0hR2FtZU1vZGVsLlRvZGF5UWlhbkRhbztcbiAgICB9XG4gICAgT25RaWFuRGFvQ2xpY2soKVxuICAgIHtcbiAgICAgICAgaWYoR2FtZU1vZGVsLlRvZGF5UWlhbkRhbylyZXR1cm47XG4gICAgICAgIEdhbWVNb2RlbC5RaWFuRGFvTnVtYmVyKys7XG4gICAgICAgIEdhbWVNb2RlbC5Ub2RheVFpYW5EYW89dHJ1ZTtcbiAgICAgICAgdGhpcy5VcGRhdGVVSSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3cf79IioxDwI2C1FU6mNxz', 'GameModel');
// Scripts/Src/Model/GameModel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    GameModel.RWSort = function () {
        this.RWInfos.sort(function (a, b) { return a.RWState - b.RWState; });
    };
    GameModel.EnemyCount = 10;
    GameModel.Gold = 0;
    GameModel.Score = 0;
    GameModel.BestScore = 0;
    GameModel.isMusic = true;
    GameModel.QianDaoNumber = 5;
    GameModel.TodayQianDao = false;
    GameModel.RWInfos = [];
    GameModel = __decorate([
        ccclass
    ], GameModel);
    return GameModel;
}());
exports.default = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9Nb2RlbC9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQU1oRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBY0EsQ0FBQztJQUppQixnQkFBTSxHQUFwQjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRyxPQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFaYSxvQkFBVSxHQUFRLEVBQUUsQ0FBQztJQUNyQixjQUFJLEdBQVEsQ0FBQyxDQUFDO0lBQ2QsZUFBSyxHQUFRLENBQUMsQ0FBQztJQUNmLG1CQUFTLEdBQVEsQ0FBQyxDQUFDO0lBQ25CLGlCQUFPLEdBQVMsSUFBSSxDQUFDO0lBQ3JCLHVCQUFhLEdBQVEsQ0FBQyxDQUFDO0lBQ3ZCLHNCQUFZLEdBQVMsS0FBSyxDQUFDO0lBQzNCLGlCQUFPLEdBQVUsRUFBRSxDQUFDO0lBUmpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FjN0I7SUFBRCxnQkFBQztDQWRELEFBY0MsSUFBQTtrQkFkb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Bvb2wvT2JqZWN0UG9vbFwiO1xuaW1wb3J0IHsgUldTdGF0ZSB9IGZyb20gXCIuLi9VSS9HYW1lUldJdGVtXCI7XG5pbXBvcnQgeyBSV0luZm8gfSBmcm9tIFwiLi9SV0luZm9cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kZWx7XG4gICAgcHVibGljIHN0YXRpYyBFbmVteUNvdW50Om51bWJlcj0xMDtcbiAgICBwdWJsaWMgc3RhdGljIEdvbGQ6bnVtYmVyPTA7XG4gICAgcHVibGljIHN0YXRpYyBTY29yZTpudW1iZXI9MDtcbiAgICBwdWJsaWMgc3RhdGljIEJlc3RTY29yZTpudW1iZXI9MDtcbiAgICBwdWJsaWMgc3RhdGljIGlzTXVzaWM6Ym9vbGVhbj10cnVlO1xuICAgIHB1YmxpYyBzdGF0aWMgUWlhbkRhb051bWJlcjpudW1iZXI9NTtcbiAgICBwdWJsaWMgc3RhdGljIFRvZGF5UWlhbkRhbzpib29sZWFuPWZhbHNlO1xuICAgIHB1YmxpYyBzdGF0aWMgUldJbmZvczpSV0luZm9bXT1bXTtcblxuICAgIHB1YmxpYyBzdGF0aWMgUldTb3J0KClcbiAgICB7XG4gICAgICAgIHRoaXMuUldJbmZvcy5zb3J0KChhLGIpPT5hLlJXU3RhdGUtYi5SV1N0YXRlKTtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Audio/AudioRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba65f5gPDhPD7aB64BsmlaE', 'AudioRoot');
// Scripts/Framework/Audio/AudioRoot.ts

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
var Game_1 = require("../Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioRoot = /** @class */ (function (_super) {
    __extends(AudioRoot, _super);
    function AudioRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        return _this;
    }
    AudioRoot.prototype.onLoad = function () {
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.audioSource = audioSource;
        Game_1.default.Audio.init(audioSource);
        console.log("audioManager Init!");
    };
    AudioRoot = __decorate([
        ccclass
    ], AudioRoot);
    return AudioRoot;
}(cc.Component));
exports.default = AudioRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9BdWRpby9BdWRpb1Jvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsZ0NBQTJCO0FBR3JCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBVUM7UUFURyxpQkFBVyxHQUFnQixJQUFJLENBQUM7O0lBU3BDLENBQUM7SUFQYSwwQkFBTSxHQUFoQjtRQUNJLElBQUksV0FBVyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztRQUM3QixjQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFdEMsQ0FBQztJQVRnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVTdCO0lBQUQsZ0JBQUM7Q0FWRCxBQVVDLENBVnNDLEVBQUUsQ0FBQyxTQUFTLEdBVWxEO2tCQVZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb1Jvb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGF1ZGlvU291cmNlOmNjLkF1ZGlvU291cmNlPW51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXVkaW9Tb3VyY2U9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2U9YXVkaW9Tb3VyY2U7XG4gICAgICAgIEdhbWUuQXVkaW8uaW5pdChhdWRpb1NvdXJjZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXVkaW9NYW5hZ2VyIEluaXQhXCIpO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/UI/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aec3eRSdSBEZbZM57XuSQn+', 'UIManager');
// Scripts/Framework/UI/UIManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function () {
    function UIManager() {
    }
    UIManager_1 = UIManager;
    Object.defineProperty(UIManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new UIManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var UIManager_1;
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}());
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9VSS9VSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUloRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO0lBQXNCLENBQUM7a0JBVk4sU0FBUztJQUUxQixzQkFBa0IscUJBQVE7YUFBMUI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUN2QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksV0FBUyxFQUFFLENBQUM7YUFDbEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBOztJQVRnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBYTdCO0lBQUQsZ0JBQUM7Q0FiRCxBQWFDLElBQUE7a0JBYm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFVJVmlldyBmcm9tIFwiLi9VSVZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpVSU1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBVSU1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgVUlNYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Game/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91ccaGASaRBTYXOU5/ra2QG', 'Enemy');
// Scripts/Src/Game/Enemy.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enemy.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    };
    Enemy.prototype.onMouseDown = function () {
        this.node.destroy();
        Game_1.default.Event.dispatch(GameConst_1.default.KillOneCount);
    };
    Enemy.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lL0VuZW15LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUN4QywwQ0FBcUM7QUFFL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7O0lBZUEsQ0FBQztJQWJhLHNCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNTLHlCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZXpCO0lBQUQsWUFBQztDQWZELEFBZUMsQ0Fma0MsRUFBRSxDQUFDLFNBQVMsR0FlOUM7a0JBZm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HYW1lXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsdGhpcy5vbk1vdXNlRG93bix0aGlzKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bigpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5LaWxsT25lQ291bnQpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Model/RWInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb8b9e+3z9DlZBEr4Hr7PlX', 'RWInfo');
// Scripts/Src/Model/RWInfo.ts

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
exports.RWInfo = void 0;
var GameRWItem_1 = require("../UI/GameRWItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RWInfo = /** @class */ (function () {
    function RWInfo(state, icon, rwbar, rwname, money) {
        this.RWState = GameRWItem_1.RWState.go;
        this.Icon = null;
        this.RWState = state;
        this.Icon = icon;
        this.RWBar = rwbar;
        this.RWName = rwname;
        this.Money = money;
    }
    RWInfo = __decorate([
        ccclass
    ], RWInfo);
    return RWInfo;
}());
exports.RWInfo = RWInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9Nb2RlbC9SV0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7QUFFdEYsK0NBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBTUksZ0JBQVksS0FBYSxFQUFDLElBQUksRUFBQyxLQUFZLEVBQUMsTUFBYSxFQUFDLEtBQVk7UUFML0QsWUFBTyxHQUFTLG9CQUFPLENBQUMsRUFBRSxDQUFDO1FBQzNCLFNBQUksR0FBQyxJQUFJLENBQUM7UUFNYixJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFiUSxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBY2xCO0lBQUQsYUFBQztDQWRELEFBY0MsSUFBQTtBQWRZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IFJXU3RhdGUgfSBmcm9tIFwiLi4vVUkvR2FtZVJXSXRlbVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBSV0luZm97XG4gICAgcHVibGljIFJXU3RhdGU6UldTdGF0ZT1SV1N0YXRlLmdvO1xuICAgIHB1YmxpYyBJY29uPW51bGw7XG4gICAgcHVibGljIFJXQmFyOm51bWJlcjtcbiAgICBwdWJsaWMgUldOYW1lOnN0cmluZztcbiAgICBwdWJsaWMgTW9uZXk6bnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHN0YXRlOlJXU3RhdGUsaWNvbixyd2JhcjpudW1iZXIscnduYW1lOnN0cmluZyxtb25leTpudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLlJXU3RhdGU9c3RhdGU7XG4gICAgICAgIHRoaXMuSWNvbj1pY29uO1xuICAgICAgICB0aGlzLlJXQmFyPXJ3YmFyO1xuICAgICAgICB0aGlzLlJXTmFtZT1yd25hbWU7XG4gICAgICAgIHRoaXMuTW9uZXk9bW9uZXk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/Game/UIGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7670aRWY6NKF7bbva7aT2/D', 'UIGame');
// Scripts/Src/Game/UIGame.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGame = /** @class */ (function (_super) {
    __extends(UIGame, _super);
    function UIGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    UIGame.prototype.start = function () {
        this.addEvent();
    };
    UIGame.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.GameStart, this.GameStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.KillOneCount, this.killOneEnemy, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_UpdateMusic, this.updateMusic, this);
    };
    UIGame.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.GameStart, this.GameStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.KillOneCount, this.killOneEnemy, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_UpdateMusic, this.updateMusic, this);
    };
    UIGame.prototype.GameStart = function () {
        GameModel_1.default.EnemyCount = 10;
        this.node.getChildByName("Enemys").active = true;
    };
    UIGame.prototype.killOneEnemy = function () {
        GameModel_1.default.EnemyCount--;
        if (GameModel_1.default.EnemyCount <= 0) {
            Game_1.default.Event.dispatch(GameConst_1.default.UI_GameOver);
        }
    };
    UIGame.prototype.updateMusic = function () {
        GameModel_1.default.isMusic = !GameModel_1.default.isMusic;
    };
    UIGame.prototype.onDestroy = function () {
        this.removeEvent();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lL1VJR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDs7SUF1Q0EsQ0FBQztJQXJDRyx3QkFBd0I7SUFDeEIsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUVJLGNBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0UsY0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCw0QkFBVyxHQUFYO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGNBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsbUJBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNELDBCQUFTLEdBQVQ7UUFFSSxtQkFBUyxDQUFDLFVBQVUsR0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBQ0QsNkJBQVksR0FBWjtRQUVJLG1CQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsSUFBRyxtQkFBUyxDQUFDLFVBQVUsSUFBRSxDQUFDLEVBQzFCO1lBQ0ksY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw0QkFBVyxHQUFYO1FBRUksbUJBQVMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBQ1MsMEJBQVMsR0FBbkI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXRDZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXVDMUI7SUFBRCxhQUFDO0NBdkNELEFBdUNDLENBdkNtQyxFQUFFLENBQUMsU0FBUyxHQXVDL0M7a0JBdkNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2FtZVwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR2FtZVN0YXJ0LHRoaXMuR2FtZVN0YXJ0LHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LktpbGxPbmVDb3VudCx0aGlzLmtpbGxPbmVFbmVteSx0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9VcGRhdGVNdXNpYyx0aGlzLnVwZGF0ZU11c2ljLHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudCgpXG4gICAge1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdhbWVTdGFydCx0aGlzLkdhbWVTdGFydCx0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5LaWxsT25lQ291bnQsdGhpcy5raWxsT25lRW5lbXksdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfVXBkYXRlTXVzaWMsdGhpcy51cGRhdGVNdXNpYyx0aGlzKTtcbiAgICB9XG4gICAgR2FtZVN0YXJ0KClcbiAgICB7XG4gICAgICAgIEdhbWVNb2RlbC5FbmVteUNvdW50PTEwO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJFbmVteXNcIikuYWN0aXZlPXRydWU7XG4gICAgfVxuICAgIGtpbGxPbmVFbmVteSgpXG4gICAge1xuICAgICAgICBHYW1lTW9kZWwuRW5lbXlDb3VudC0tO1xuICAgICAgICBpZihHYW1lTW9kZWwuRW5lbXlDb3VudDw9MClcbiAgICAgICAge1xuICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfR2FtZU92ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZU11c2ljKClcbiAgICB7XG4gICAgICAgIEdhbWVNb2RlbC5pc011c2ljPSFHYW1lTW9kZWwuaXNNdXNpYztcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93afeYf9iFHQ614c6aV+EOG', 'GameConst');
// Scripts/Src/GameConst.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameConst = /** @class */ (function () {
    function GameConst() {
    }
    GameConst.GameStart = "GameStart";
    GameConst.KillOneCount = "KillOneCount";
    GameConst.UI_GameOver = "UI_GameOver";
    GameConst.UI_UpdateMusic = "UI_UpdateMusic";
    GameConst.UI_FinishRW = "UI_FinishRW";
    GameConst = __decorate([
        ccclass
    ], GameConst);
    return GameConst;
}());
exports.default = GameConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBVUEsQ0FBQztJQVQwQixtQkFBUyxHQUFDLFdBQVcsQ0FBQztJQUV0QixzQkFBWSxHQUFDLGNBQWMsQ0FBQztJQUU1QixxQkFBVyxHQUFDLGFBQWEsQ0FBQztJQUUxQix3QkFBYyxHQUFDLGdCQUFnQixDQUFDO0lBRWhDLHFCQUFXLEdBQUMsYUFBYSxDQUFDO0lBVGhDLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FVN0I7SUFBRCxnQkFBQztDQVZELEFBVUMsSUFBQTtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25zdCB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHYW1lU3RhcnQ9XCJHYW1lU3RhcnRcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2lsbE9uZUNvdW50PVwiS2lsbE9uZUNvdW50XCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVJX0dhbWVPdmVyPVwiVUlfR2FtZU92ZXJcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUlfVXBkYXRlTXVzaWM9XCJVSV9VcGRhdGVNdXNpY1wiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSV9GaW5pc2hSVz1cIlVJX0ZpbmlzaFJXXCI7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/GameRWPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9HYW1lUldQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUczQywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrRUM7UUFoRUcsYUFBTyxHQUFTLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQTZEdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3RGEsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw4QkFBUSxHQUFSO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxpQ0FBVyxHQUFYO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDRCw0QkFBTSxHQUFOO1FBRUksbUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUNuRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMxQztZQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsSUFBVztRQUVoQix1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQzdDLGVBQWU7UUFDZixRQUFRO1FBQ1IsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUixLQUFLO1FBQ0wsOENBQThDO1FBQzlDLElBQUk7UUFDSiw4Q0FBOEM7UUFDOUMsUUFBUTtRQUNSLHVDQUF1QztRQUN2Qyx1RkFBdUY7UUFDdkYsc0NBQXNDO1FBQ3RDLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsSUFBSTtRQUNKLG1CQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDOUM7WUFDSSxJQUFHLENBQUMsR0FBQyxDQUFDLEdBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUMvQjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1NBQ0o7SUFFTCxDQUFDO0lBQ0QscUNBQWUsR0FBZixVQUFnQixNQUFhO1FBRXpCLElBQUksTUFBTSxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRTtJQUpMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrRS9CO0lBQUQsa0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRXdDLEVBQUUsQ0FBQyxTQUFTLEdBa0VwRDtrQkFsRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HYW1lXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgUldJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1JXSW5mb1wiO1xuaW1wb3J0IEdhbWVPdmVyUGFuZWwgZnJvbSBcIi4vR2FtZU92ZXJQYW5lbFwiO1xuaW1wb3J0IEdhbWVSV0l0ZW0gZnJvbSBcIi4vR2FtZVJXSXRlbVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVSV1BhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OmNjLk5vZGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIFJXSXRlbTpjYy5QcmVmYWI9bnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgfVxuICAgIGFkZEV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfRmluaXNoUlcsdGhpcy51cGRhdGVVSSx0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnQoKVxuICAgIHtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9GaW5pc2hSVyx0aGlzLnVwZGF0ZVVJLHRoaXMpOyAgXG4gICAgfVxuICAgIGluaXRVSSgpXG4gICAge1xuICAgICAgICBHYW1lTW9kZWwuUldTb3J0KCk7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQ9R2FtZU1vZGVsLlJXSW5mb3MubGVuZ3RoKjkwKzEwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVNb2RlbC5SV0luZm9zLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlT25lUldJdGVtKEdhbWVNb2RlbC5SV0luZm9zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVVSShuYW1lOnN0cmluZylcbiAgICB7XG4gICAgICAgIC8v5YWI5oqK5LmL5YmN55qE5Yig5o6J77yM5YaN6YeN5paw5Yib5bu677yI5oiW6ICF5ZCO57ut5Y+v5Lul5pS55LiA5LiL77yM57uZaXRlbemHjOmdouWKoOS4gOS4quiuvue9rnVp55qE5pa55rOV77yM5Y+v5Lul5LiN55So5Yig6ZmkaXRlbe+8iVxuICAgICAgICAvLyB0aGlzLHRoaXMuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgLy8gICAgIGlmKGl0ZW0pXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8R2FtZU1vZGVsLlJXSW5mb3MubGVuZ3RoO2krKylcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYoUldOYW1lPT1HYW1lTW9kZWwuUldJbmZvc1tpXS5SV05hbWUpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IHJ3PUdhbWVNb2RlbC5SV0luZm9zW2ldO1xuICAgICAgICAvLyAgICAgICAgIEdhbWVNb2RlbC5SV0luZm9zLnNwbGljZShHYW1lTW9kZWwuUldJbmZvcy5pbmRleE9mKEdhbWVNb2RlbC5SV0luZm9zW2ldKSwxKTtcbiAgICAgICAgLy8gICAgICAgICBHYW1lTW9kZWwuUldJbmZvcy5wdXNoKHJ3KTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBHYW1lTW9kZWwuUldTb3J0KCk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5jb250ZW50LmNoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGkrMT5HYW1lTW9kZWwuUldJbmZvcy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVSV0l0ZW0pLmluaXQoR2FtZU1vZGVsLlJXSW5mb3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjcmVhdGVPbmVSV0l0ZW0oUldJbmZvOlJXSW5mbylcbiAgICB7XG4gICAgICAgIGxldCByd0l0ZW09Y2MuaW5zdGFudGlhdGUodGhpcy5SV0l0ZW0pO1xuICAgICAgICByd0l0ZW0uc2V0UGFyZW50KHRoaXMuY29udGVudCk7XG4gICAgICAgIHJ3SXRlbS5nZXRDb21wb25lbnQoR2FtZVJXSXRlbSkuaW5pdChSV0luZm8pO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38c25i6GRIl7wXIvrjvczq', 'AudioManager');
// Scripts/Framework/Audio/AudioManager.ts

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
exports.AudioManager = void 0;
var BundleManager_1 = require("../Bundle/BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundVolume = 1;
        this.musicVolume = 1;
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AudioManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化音乐组件（全局一般只有一个音乐节点，只会初始化一次）
     * @param audioSource 音乐节点身上的AudioSource组件
     */
    AudioManager.prototype.init = function (audioSource) {
        AudioManager_1.audioSource = audioSource;
    };
    /**
     * 播放音乐（一般是背景音乐）
     * @param name 要播放的音乐名字
     * @param bundle 如果没错应该是AssetBundle的分包加载的名称，比如game，hall什么的
     */
    AudioManager.prototype.playMusic = function (name, bundle) {
        var _this = this;
        if (bundle === void 0) { bundle = "Audio"; }
        var audioSource = AudioManager_1.audioSource;
        var complete = (function () { return __awaiter(_this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, bundle)];
                    case 1:
                        clip = _a.sent();
                        cc.audioEngine.playMusic(clip, false);
                        return [2 /*return*/];
                }
            });
        }); });
        complete();
    };
    AudioManager.prototype.playSound = function () {
    };
    var AudioManager_1;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}());
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRzlDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBVUk7UUFFUSxnQkFBVyxHQUFRLENBQUMsQ0FBQztRQUNyQixnQkFBVyxHQUFRLENBQUMsQ0FBQztJQUhQLENBQUM7cUJBVmQsWUFBWTtJQUVyQixzQkFBa0Isd0JBQVE7YUFBMUI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUN2QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksY0FBWSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUF5QixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBS0Q7OztPQUdHO0lBQ0gsMkJBQUksR0FBSixVQUFLLFdBQTBCO1FBRTNCLGNBQVksQ0FBQyxXQUFXLEdBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZ0NBQVMsR0FBVCxVQUFVLElBQVcsRUFBQyxNQUFjO1FBQXBDLGlCQVFDO1FBUnFCLHVCQUFBLEVBQUEsZ0JBQWM7UUFFaEMsSUFBTSxXQUFXLEdBQUMsY0FBWSxDQUFDLFdBQVksQ0FBQztRQUM1QyxJQUFJLFFBQVEsR0FBQyxDQUFDOzs7OzRCQUNELHFCQUFNLHVCQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsRUFBQTs7d0JBQTFDLElBQUksR0FBQyxTQUFxQzt3QkFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQzs7OzthQUN6RCxDQUFDLENBQUE7UUFDRixRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRCxnQ0FBUyxHQUFUO0lBRUEsQ0FBQzs7SUF0Q1EsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQXVDeEI7SUFBRCxtQkFBQztDQXZDRCxBQXVDQyxJQUFBO0FBdkNZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkF1ZGlvTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEF1ZGlvTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSBhcyBBdWRpb01hbmFnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHJpdmF0ZSBzdGF0aWMgYXVkaW9Tb3VyY2U/OmNjLkF1ZGlvU291cmNlXG4gICAgcHJpdmF0ZSBzb3VuZFZvbHVtZTpudW1iZXI9MTtcbiAgICBwcml2YXRlIG11c2ljVm9sdW1lOm51bWJlcj0xO1xuICAgIC8qKlxuICAgICAqIOWIneWni+WMlumfs+S5kOe7hOS7tu+8iOWFqOWxgOS4gOiIrOWPquacieS4gOS4qumfs+S5kOiKgueCue+8jOWPquS8muWIneWni+WMluS4gOasoe+8iVxuICAgICAqIEBwYXJhbSBhdWRpb1NvdXJjZSDpn7PkuZDoioLngrnouqvkuIrnmoRBdWRpb1NvdXJjZee7hOS7tlxuICAgICAqL1xuICAgIGluaXQoYXVkaW9Tb3VyY2U6Y2MuQXVkaW9Tb3VyY2UpXG4gICAge1xuICAgICAgICBBdWRpb01hbmFnZXIuYXVkaW9Tb3VyY2U9YXVkaW9Tb3VyY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaSreaUvumfs+S5kO+8iOS4gOiIrOaYr+iDjOaZr+mfs+S5kO+8iVxuICAgICAqIEBwYXJhbSBuYW1lIOimgeaSreaUvueahOmfs+S5kOWQjeWtl1xuICAgICAqIEBwYXJhbSBidW5kbGUg5aaC5p6c5rKh6ZSZ5bqU6K+l5pivQXNzZXRCdW5kbGXnmoTliIbljIXliqDovb3nmoTlkI3np7DvvIzmr5TlpoJnYW1l77yMaGFsbOS7gOS5iOeahFxuICAgICAqL1xuICAgIHBsYXlNdXNpYyhuYW1lOnN0cmluZyxidW5kbGU9XCJBdWRpb1wiKVxuICAgIHtcbiAgICAgICAgY29uc3QgYXVkaW9Tb3VyY2U9QXVkaW9NYW5hZ2VyLmF1ZGlvU291cmNlITtcbiAgICAgICAgbGV0IGNvbXBsZXRlPShhc3luYyAoKT0+e1xuICAgICAgICAgICAgbGV0IGNsaXA9YXdhaXQgQnVuZGxlTWFuYWdlci5sb2FkKG5hbWUsYnVuZGxlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwIGFzIGNjLkF1ZGlvQ2xpcCwgZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICBjb21wbGV0ZSgpO1xuICAgIH1cbiAgICBwbGF5U291bmQoKVxuICAgIHtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39ae51oH/NGc7pKgBSh6txq', 'UI');
// Scripts/Src/UI/UI.ts

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
var AudioRoot_1 = require("../../Framework/Audio/AudioRoot");
var BundleManager_1 = require("../../Framework/Bundle/BundleManager");
var Game_1 = require("../../Framework/Game");
var CCTools_1 = require("../../Framework/Tools/CCTools");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var RWInfo_1 = require("../Model/RWInfo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI.prototype.onLoad = function () {
        this.addEvent();
        this.initUI();
        this.initBundle();
    };
    UI.prototype.initBundle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var audioNode, share;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audioNode = new cc.Node();
                        audioNode.addComponent(cc.AudioSource);
                        audioNode.addComponent(AudioRoot_1.default);
                        //await BundleManager.loadBundle("Prefab");
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("Audio")];
                    case 1:
                        //await BundleManager.loadBundle("Prefab");
                        _a.sent();
                        return [4 /*yield*/, BundleManager_1.default.loadBundle("ObjectPool")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("share", this.node)];
                    case 3:
                        share = _a.sent();
                        share.setPosition(360, 640);
                        this.scheduleOnce(function () {
                            Game_1.default.ObjectPool.UnSpawn(share);
                        }, 3);
                        return [2 /*return*/];
                }
            });
        });
    };
    UI.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GameOver, this.GameOver, this);
    };
    UI.prototype.GameStart = function () {
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").active = false;
        Game_1.default.Event.dispatch(GameConst_1.default.GameStart);
    };
    UI.prototype.GameOver = function () {
        this.node.getChildByName("Canvas").getChildByName("GameOverPanel").active = true;
    };
    UI.prototype.initUI = function () {
        this.updateUI();
        this.initRWInfos();
    };
    UI.prototype.initRWInfos = function () {
        var money = 100;
        for (var i = 0; i < 10; i++) {
            var state = Math.floor(Math.random() * 2);
            var rw = new RWInfo_1.RWInfo(state, null, 0.2, "任务" + i, money);
            GameModel_1.default.RWInfos.push(rw);
            money += 100;
        }
    };
    UI.prototype.updateRWInfos = function () {
    };
    UI.prototype.updateUI = function () {
        this.updateMusic();
    };
    UI.prototype.updateMusic = function () {
        console.log("改变静音");
        Game_1.default.Event.dispatch(GameConst_1.default.UI_UpdateMusic);
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOn").active = GameModel_1.default.isMusic;
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOff").active = !GameModel_1.default.isMusic;
    };
    UI.prototype.InputEmailEnter = function () {
        var string = this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string;
        if (CCTools_1.default.isValidEmail(string)) {
            console.log("发送邮件成功");
        }
        else {
            this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string = "";
            console.log("错误邮箱格式");
        }
    };
    UI.prototype.onDestroy = function () {
        this.removeEvent();
    };
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2REFBd0Q7QUFDeEQsc0VBQWlFO0FBQ2pFLDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFDcEQsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQywwQ0FBeUM7QUFFbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7O0lBd0ZBLENBQUM7SUF2RkcsbUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNZLHVCQUFVLEdBQXZCOzs7Ozs7d0JBRVEsU0FBUyxHQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUM1QixTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUM7d0JBQ2xDLDJDQUEyQzt3QkFDM0MscUJBQU0sdUJBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUR2QywyQ0FBMkM7d0JBQzNDLFNBQXVDLENBQUM7d0JBQ3hDLHFCQUFNLHVCQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzt3QkFDbkMscUJBQU0sY0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXBELEtBQUssR0FBQyxTQUE4Qzt3QkFDeEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2QsY0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25DLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTs7Ozs7S0FLUDtJQUNELHFCQUFRLEdBQVI7UUFFSSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELHdCQUFXLEdBQVg7UUFFSSxjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELHNCQUFTLEdBQVQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQ2pGLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHFCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztJQUNuRixDQUFDO0lBQ0QsbUJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHdCQUFXLEdBQVg7UUFFSSxJQUFJLEtBQUssR0FBQyxHQUFHLENBQUM7UUFDZCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUNwQjtZQUNJLElBQUksS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksRUFBRSxHQUFDLElBQUksZUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksR0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsbUJBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLEtBQUssSUFBRSxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7SUFDRCwwQkFBYSxHQUFiO0lBR0EsQ0FBQztJQUNELHFCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHdCQUFXLEdBQVg7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUM7UUFDckosSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQztJQUMzSixDQUFDO0lBQ0QsNEJBQWUsR0FBZjtRQUVJLElBQUksTUFBTSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuSixJQUFHLGlCQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUMvQjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7WUFDcEksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFDUyxzQkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBdkZnQixFQUFFO1FBRHRCLE9BQU87T0FDYSxFQUFFLENBd0Z0QjtJQUFELFNBQUM7Q0F4RkQsQUF3RkMsQ0F4RitCLEVBQUUsQ0FBQyxTQUFTLEdBd0YzQztrQkF4Rm9CLEVBQUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEF1ZGlvUm9vdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0F1ZGlvL0F1ZGlvUm9vdFwiO1xuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HYW1lXCI7XG5pbXBvcnQgQ0NUb29scyBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Rvb2xzL0NDVG9vbHNcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL0dhbWVDb25zdFwiO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgeyBSV0luZm8gfSBmcm9tIFwiLi4vTW9kZWwvUldJbmZvXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyBpbml0QnVuZGxlKClcbiAgICB7XG4gICAgICAgIGxldCBhdWRpb05vZGU9bmV3IGNjLk5vZGUoKTtcbiAgICAgICAgYXVkaW9Ob2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoQXVkaW9Sb290KTtcbiAgICAgICAgLy9hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJQcmVmYWJcIik7XG4gICAgICAgIGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZEJ1bmRsZShcIkF1ZGlvXCIpO1xuICAgICAgICBhd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJPYmplY3RQb29sXCIpO1xuICAgICAgICBsZXQgc2hhcmU9YXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwic2hhcmVcIix0aGlzLm5vZGUpO1xuICAgICAgICBzaGFyZS5zZXRQb3NpdGlvbigzNjAsNjQwKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduKHNoYXJlKTtcbiAgICAgICAgfSwzKVxuICAgICAgICAvLyBsZXQgUHJlZmFiPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KFwiR2FtZVJXUGFuZWxcIixcIlByZWZhYlwiKTtcbiAgICAgICAgLy8gbGV0IG5vZGU9Y2MuaW5zdGFudGlhdGUoUHJlZmFiKTtcbiAgICAgICAgLy8gbm9kZS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRFdmVudCgpXG4gICAge1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLHRoaXMuR2FtZU92ZXIsdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZU92ZXIsdGhpcy5HYW1lT3Zlcix0aGlzKTtcbiAgICB9XG4gICAgR2FtZVN0YXJ0KClcbiAgICB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR2FtZVN0YXJ0KTtcbiAgICB9XG4gICAgR2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJQYW5lbFwiKS5hY3RpdmU9dHJ1ZTtcbiAgICB9XG4gICAgaW5pdFVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgdGhpcy5pbml0UldJbmZvcygpO1xuICAgIH1cbiAgICBpbml0UldJbmZvcygpXG4gICAge1xuICAgICAgICBsZXQgbW9uZXk9MTAwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPDEwO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0YXRlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcbiAgICAgICAgICAgIGxldCBydz1uZXcgUldJbmZvKHN0YXRlLG51bGwsMC4yLFwi5Lu75YqhXCIraSxtb25leSk7XG4gICAgICAgICAgICBHYW1lTW9kZWwuUldJbmZvcy5wdXNoKHJ3KTtcbiAgICAgICAgICAgIG1vbmV5Kz0xMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUldJbmZvcygpXG4gICAge1xuXG4gICAgfVxuICAgIHVwZGF0ZVVJKClcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlTXVzaWMoKTtcbiAgICB9XG4gICAgdXBkYXRlTXVzaWMoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmlLnlj5jpnZnpn7NcIik7XG4gICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1VwZGF0ZU11c2ljKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLmdldENoaWxkQnlOYW1lKFwiR2FtZVN0YXJ0UGFuZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5NdXNpY1wiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljT25cIikuYWN0aXZlPUdhbWVNb2RlbC5pc011c2ljO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIikuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lU3RhcnRQYW5lbFwiKS5nZXRDaGlsZEJ5TmFtZShcImJ0bk11c2ljXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuTXVzaWNPZmZcIikuYWN0aXZlPSFHYW1lTW9kZWwuaXNNdXNpYztcbiAgICB9XG4gICAgSW5wdXRFbWFpbEVudGVyKClcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmc6c3RyaW5nPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xuICAgICAgICBpZihDQ1Rvb2xzLmlzVmFsaWRFbWFpbChzdHJpbmcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPkemAgemCruS7tuaIkOWKn1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVTdGFydFBhbmVsXCIpLmdldENoaWxkQnlOYW1lKFwiSW5wdXRFbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPVwiXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUmeivr+mCrueuseagvOW8j1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/GameRWItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef098Fxpe9HO7O/vqEBejkf', 'GameRWItem');
// Scripts/Src/UI/GameRWItem.ts

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
exports.RWState = void 0;
var Game_1 = require("../../Framework/Game");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RWState;
(function (RWState) {
    RWState[RWState["finish"] = 0] = "finish";
    RWState[RWState["go"] = 1] = "go";
    RWState[RWState["done"] = 2] = "done"; //任务完成了并且领取奖励了
})(RWState = exports.RWState || (exports.RWState = {}));
var GameRWItem = /** @class */ (function (_super) {
    __extends(GameRWItem, _super);
    function GameRWItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.RWName = null;
        _this.Bar = null;
        _this.money = null;
        _this.btnFinish = null;
        _this.btnGO = null;
        _this.btnDown = null;
        return _this;
    }
    GameRWItem.prototype.init = function (RWInfo) {
        //this.icon=RWInfo.Icon;
        this.RWName.string = RWInfo.RWName;
        this.money.string = RWInfo.Money.toString();
        this.bar = RWInfo.RWBar;
        this.rwState = RWInfo.RWState;
        this.updateUI();
    };
    GameRWItem.prototype.updateUI = function () {
        switch (this.rwState) {
            case RWState.finish:
                this.btnFinish.active = true;
                this.btnGO.active = false;
                this.btnDown.active = false;
                break;
            case RWState.go:
                this.btnFinish.active = false;
                this.btnGO.active = true;
                this.btnDown.active = false;
                break;
            case RWState.done:
                this.btnFinish.active = false;
                this.btnGO.active = false;
                this.btnDown.active = true;
                break;
        }
        this.Bar.progress = this.bar;
    };
    GameRWItem.prototype.onFinishBtnClick = function () {
        Game_1.default.Audio.playMusic("click");
        for (var i = 0; i < GameModel_1.default.RWInfos.length; i++) {
            if (GameModel_1.default.RWInfos[i].RWName == this.RWName.string) {
                GameModel_1.default.RWInfos[i].RWState = RWState.done;
                break;
            }
        }
        Game_1.default.Event.dispatch(GameConst_1.default.UI_FinishRW);
    };
    GameRWItem.prototype.onGoBtnClick = function () {
    };
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], GameRWItem.prototype, "RWName", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameRWItem.prototype, "Bar", void 0);
    __decorate([
        property(cc.Label)
    ], GameRWItem.prototype, "money", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnFinish", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnGO", void 0);
    __decorate([
        property(cc.Node)
    ], GameRWItem.prototype, "btnDown", void 0);
    GameRWItem = __decorate([
        ccclass
    ], GameRWItem);
    return GameRWItem;
}(cc.Component));
exports.default = GameRWItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9HYW1lUldJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd0Riw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUdyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUMxQyxJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFFZix5Q0FBTSxDQUFBO0lBQ04saUNBQUUsQ0FBQTtJQUNGLHFDQUFJLENBQUEsQ0FBSSxjQUFjO0FBQzFCLENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFHRDtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlFQztRQS9ERyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBRWxCLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFFckIsU0FBRyxHQUFnQixJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFVLElBQUksQ0FBQztRQUVwQixlQUFTLEdBQVMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBUyxJQUFJLENBQUM7UUFFbkIsYUFBTyxHQUFTLElBQUksQ0FBQzs7SUFtRHpCLENBQUM7SUFoREcseUJBQUksR0FBSixVQUFLLE1BQWE7UUFFZCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCw2QkFBUSxHQUFSO1FBRUksUUFBTyxJQUFJLENBQUMsT0FBTyxFQUNuQjtZQUNJLEtBQUssT0FBTyxDQUFDLE1BQU07Z0JBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssT0FBTyxDQUFDLElBQUk7Z0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztnQkFDekIsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUMvQixDQUFDO0lBQ0QscUNBQWdCLEdBQWhCO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDMUM7WUFDSSxJQUFHLG1CQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFDbEQ7Z0JBQ0ksbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLE1BQU07YUFDVDtTQUNKO1FBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsaUNBQVksR0FBWjtJQUdBLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDQTtJQUVsQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNFO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0Q7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDQztJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0M7SUFFbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRztJQWRKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRTlCO0lBQUQsaUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRXVDLEVBQUUsQ0FBQyxTQUFTLEdBaUVuRDtrQkFqRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXJcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2FtZVwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCB7IFJXSW5mbyB9IGZyb20gXCIuLi9Nb2RlbC9SV0luZm9cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBSV1N0YXRlXG57XG4gICAgZmluaXNoLCAvL+S7u+WKoeWujOaIkOS6huS9huaYr+i/mOayoeaciemihuWPluWlluWKsVxuICAgIGdvLCAgICAgLy/ku7vliqHmsqHlrozmiJBcbiAgICBkb25lICAgIC8v5Lu75Yqh5a6M5oiQ5LqG5bm25LiU6aKG5Y+W5aWW5Yqx5LqGXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUldJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uOmNjLk5vZGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgUldOYW1lOmNjLkxhYmVsPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIEJhcjpjYy5Qcm9ncmVzc0Jhcj1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtb25leTpjYy5MYWJlbD1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkZpbmlzaDpjYy5Ob2RlPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuR086Y2MuTm9kZT1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkRvd246Y2MuTm9kZT1udWxsO1xuICAgIHByaXZhdGUgcndTdGF0ZTpSV1N0YXRlO1xuICAgIHByaXZhdGUgYmFyOm51bWJlcjtcbiAgICBpbml0KFJXSW5mbzpSV0luZm8pXG4gICAge1xuICAgICAgICAvL3RoaXMuaWNvbj1SV0luZm8uSWNvbjtcbiAgICAgICAgdGhpcy5SV05hbWUuc3RyaW5nPVJXSW5mby5SV05hbWU7XG4gICAgICAgIHRoaXMubW9uZXkuc3RyaW5nPVJXSW5mby5Nb25leS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmJhcj1SV0luZm8uUldCYXI7XG4gICAgICAgIHRoaXMucndTdGF0ZT1SV0luZm8uUldTdGF0ZTtcbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgIH1cbiAgICB1cGRhdGVVSSgpXG4gICAge1xuICAgICAgICBzd2l0Y2godGhpcy5yd1N0YXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFJXU3RhdGUuZmluaXNoOlxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRmluaXNoLmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuR08uYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuRG93bi5hY3RpdmU9ZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJXU3RhdGUuZ286XG4gICAgICAgICAgICAgICAgdGhpcy5idG5GaW5pc2guYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuR08uYWN0aXZlPXRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Eb3duLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUldTdGF0ZS5kb25lOlxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRmluaXNoLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkdPLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd24uYWN0aXZlPXRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5CYXIucHJvZ3Jlc3M9dGhpcy5iYXI7XG4gICAgfVxuICAgIG9uRmluaXNoQnRuQ2xpY2soKVxuICAgIHsgICBcbiAgICAgICAgR2FtZS5BdWRpby5wbGF5TXVzaWMoXCJjbGlja1wiKTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lTW9kZWwuUldJbmZvcy5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihHYW1lTW9kZWwuUldJbmZvc1tpXS5SV05hbWU9PXRoaXMuUldOYW1lLnN0cmluZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBHYW1lTW9kZWwuUldJbmZvc1tpXS5SV1N0YXRlPVJXU3RhdGUuZG9uZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9GaW5pc2hSVyk7XG4gICAgfVxuICAgIG9uR29CdG5DbGljaygpXG4gICAge1xuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/GameOverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c34d639H/pHkaZ3fx3wSrmE', 'GameOverPanel');
// Scripts/Src/UI/GameOverPanel.ts

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
var GameOverPanel = /** @class */ (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverPanel.prototype.againGame = function () {
        cc.sys.openURL("https://docs.cocos.com/creator/2.4/manual/zh/");
        //cc.director.loadScene(cc.director.getScene().name);
    };
    GameOverPanel = __decorate([
        ccclass
    ], GameOverPanel);
    return GameOverPanel;
}(cc.Component));
exports.default = GameOverPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9HYW1lT3ZlclBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEOztJQU1BLENBQUM7SUFMRyxpQ0FBUyxHQUFUO1FBRUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUNoRSxxREFBcUQ7SUFDekQsQ0FBQztJQUxnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBTWpDO0lBQUQsb0JBQUM7Q0FORCxBQU1DLENBTjBDLEVBQUUsQ0FBQyxTQUFTLEdBTXREO2tCQU5vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2FtZVwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vR2FtZUNvbnN0XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXJQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgYWdhaW5HYW1lKClcbiAgICB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvemgvXCIpO1xuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Bundle/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb52auMM69Du59eQPvKj0pn', 'BundleManager');
// Scripts/Framework/Bundle/BundleManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleManager = /** @class */ (function () {
    function BundleManager() {
    }
    /**
     * 加载Bundle分包
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.loadBundle = function (bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) {
                        if (_this.bundleMap.get(bundleName)) {
                            resovlve(_this.bundleMap.get(bundleName));
                            return;
                        }
                        cc.assetManager.loadBundle(bundleName, function (err, bundle) {
                            if (err) {
                                console.error(err);
                                resovlve(null);
                            }
                            else {
                                console.log("加载分包" + bundleName + "成功");
                                _this.bundleMap.set(bundleName, bundle);
                                resovlve(bundle);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 根据分包加载资源
     * @param bundlePath 资源基于分包的相对路径
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.load = function (bundlePath, bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var bundle;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadBundle(bundleName)];
                                case 1:
                                    bundle = _a.sent();
                                    //let bundle =this.bundleMap.get(bundleName);
                                    if (bundle) {
                                        bundle.load(bundlePath, function (err, result) {
                                            if (err) {
                                                console.error(err);
                                                resovlve(null);
                                            }
                                            else {
                                                console.log("加载预制体成功");
                                                resovlve(result);
                                            }
                                        });
                                    }
                                    else {
                                        console.log("没有这个bundle分包" + bundleName);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    // private static _instance:BundleManager;
    // public static get Instance()
    // {
    //     if(this._instance==null)
    //     {
    //         this._instance=new BundleManager();
    //     }
    //     return this._instance as BundleManager;
    // }
    // private constructor(){}
    BundleManager.bundleMap = new Map();
    BundleManager = __decorate([
        ccclass
    ], BundleManager);
    return BundleManager;
}());
exports.default = BundleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9CdW5kbGUvQnVuZGxlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUEyRUEsQ0FBQztJQS9ERzs7OztPQUlHO0lBQ2lCLHdCQUFVLEdBQTlCLFVBQStCLFVBQWlCO3VDQUFFLE9BQU87OztnQkFFckQsc0JBQU8sSUFBSSxPQUFPLENBQXlCLFVBQUMsUUFBUTt3QkFDaEQsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDakM7NEJBQ0ksUUFBUSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ3pDLE9BQU87eUJBQ1Y7d0JBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFDLFVBQUMsR0FBUyxFQUFDLE1BQTZCOzRCQUMxRSxJQUFHLEdBQUcsRUFDTjtnQ0FDSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2xCO2lDQUVEO2dDQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NkJBQ3BCO3dCQUNMLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFBOzs7S0FFTDtJQUNEOzs7OztPQUtHO0lBQ2lCLGtCQUFJLEdBQXhCLFVBQTZDLFVBQWlCLEVBQUMsVUFBaUI7dUNBQUUsT0FBTzs7O2dCQUVyRixzQkFBTyxJQUFJLE9BQU8sQ0FBSSxVQUFNLFFBQVE7Ozs7d0NBQ3JCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUE7O29DQUF4QyxNQUFNLEdBQUMsU0FBaUM7b0NBQzVDLDZDQUE2QztvQ0FDN0MsSUFBRyxNQUFNLEVBQ1Q7d0NBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsVUFBQyxHQUFHLEVBQUMsTUFBUTs0Q0FDaEMsSUFBRyxHQUFHLEVBQ047Z0RBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnREFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZDQUNsQjtpREFFRDtnREFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dEQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7NkNBQ3BCO3dDQUNMLENBQUMsQ0FBQyxDQUFBO3FDQUNMO3lDQUVEO3dDQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUMxQzs7Ozt5QkFDSixDQUFDLEVBQUE7OztLQUdMO0lBekVELDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsSUFBSTtJQUNKLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsOENBQThDO0lBQzlDLFFBQVE7SUFDUiw4Q0FBOEM7SUFDOUMsSUFBSTtJQUNKLDBCQUEwQjtJQUNaLHVCQUFTLEdBQW9DLElBQUksR0FBRyxFQUFpQyxDQUFDO0lBWG5GLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyRWpDO0lBQUQsb0JBQUM7Q0EzRUQsQUEyRUMsSUFBQTtrQkEzRW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdW5kbGVNYW5hZ2VyIHtcbiAgICAvLyBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6QnVuZGxlTWFuYWdlcjtcbiAgICAvLyBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAgLy8ge1xuICAgIC8vICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEJ1bmRsZU1hbmFnZXIoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgQnVuZGxlTWFuYWdlcjtcbiAgICAvLyB9XG4gICAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cbiAgICBwdWJsaWMgc3RhdGljIGJ1bmRsZU1hcDpNYXA8c3RyaW5nLGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+PW5ldyBNYXA8c3RyaW5nLGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KCk7XG4gICAgLyoqXG4gICAgICog5Yqg6L29QnVuZGxl5YiG5YyFXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUg5YiG5YyF5ZCN56ewXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkQnVuZGxlKGJ1bmRsZU5hbWU6c3RyaW5nKTpQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4oKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5idW5kbGVNYXAuZ2V0KGJ1bmRsZU5hbWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc292bHZlKHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSwoZXJyOkVycm9yLGJ1bmRsZTpjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295YiG5YyFXCIrYnVuZGxlTmFtZStcIuaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idW5kbGVNYXAuc2V0KGJ1bmRsZU5hbWUsYnVuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUoYnVuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOagueaNruWIhuWMheWKoOi9vei1hOa6kFxuICAgICAqIEBwYXJhbSBidW5kbGVQYXRoIOi1hOa6kOWfuuS6juWIhuWMheeahOebuOWvuei3r+W+hFxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIOWIhuWMheWQjeensFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZDxUIGV4dGVuZHMgY2MuQXNzZXQ+KGJ1bmRsZVBhdGg6c3RyaW5nLGJ1bmRsZU5hbWU6c3RyaW5nKTpQcm9taXNlPFQ+XG4gICAgeyAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oYXN5bmMocmVzb3ZsdmUpPT57XG4gICAgICAgICAgICBsZXQgYnVuZGxlPWF3YWl0IHRoaXMubG9hZEJ1bmRsZShidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIC8vbGV0IGJ1bmRsZSA9dGhpcy5idW5kbGVNYXAuZ2V0KGJ1bmRsZU5hbWUpO1xuICAgICAgICAgICAgaWYoYnVuZGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKGJ1bmRsZVBhdGgsKGVycixyZXN1bHQ6VCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdmx2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L296aKE5Yi25L2T5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInov5nkuKpidW5kbGXliIbljIVcIitidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24aceh10CtOP7EwTclMxI41', 'EventManager');
// Scripts/Framework/Event/EventManager.ts

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
exports.EventManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EventManager = /** @class */ (function () {
    function EventManager() {
        /**用来存储所有已添加的事件和对应回调函数的字典集合，key：事件名，value：callbacktarget数组 */
        this.eventListeners = {};
    }
    EventManager_1 = EventManager;
    Object.defineProperty(EventManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new EventManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    //这个方法用于判断当前要添加的事件是否已经添加过了，如果说已经添加过了，就不再添加，如果没添加过继续添加就是一个eventName触发多个方法（因为这个方法只有当这个eventName对应的方法数组不为空时才会触发）
    EventManager.prototype.getEventListenersIndex = function (eventName, callBack, target) {
        var index = -1;
        for (var i = 0; i < this.eventListeners[eventName].length; i++) {
            var iterator = this.eventListeners[eventName][i];
            if (iterator.callBack == callBack && (!target || iterator.target == target)) {
                index = i;
                break;
            }
        }
        return index;
    };
    /**
     * 添加事件
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在脚本（一般是this）
     * @returns
     */
    EventManager.prototype.addEventListener = function (eventName, callBack, target) {
        if (!eventName) {
            console.log("事件名有错误");
            return;
        }
        if (callBack == null) {
            console.log("事件传入的方法为空");
            return false;
        }
        var callTarget = { callBack: callBack, target: target };
        if (this.eventListeners[eventName] == null) {
            this.eventListeners[eventName] = [callTarget];
        }
        else {
            var index = this.getEventListenersIndex(eventName, callBack, target);
            if (index == -1) {
                this.eventListeners[eventName].push(callTarget);
            }
        }
        return true;
    };
    /**
     * 设置事件名对应的事件函数
     * @param eventName
     * @param callBack
     * @param target
     * @returns
     */
    EventManager.prototype.setEventListener = function (eventName, callBack, target) {
        if (!eventName) {
            console.log("事件名为空");
            return;
        }
        if (callBack == null) {
            console.log("传入的事件函数为空");
            return false;
        }
        var callBackFunc = { callBack: callBack, target: target };
        this.eventListeners[eventName] = [callBackFunc];
    };
    /**
     * 删除函数
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在的脚本（一般是this）
     */
    EventManager.prototype.removeEventListener = function (eventName, callBack, target) {
        if (this.eventListeners[eventName] != null) {
            var index = this.getEventListenersIndex(eventName, callBack, target);
            if (index != -1) {
                this.eventListeners[eventName].splice(index, 1);
            }
        }
    };
    /**
     * 触发事件（如果事件对应的方法没有数据参数需求即可只传一个参数）
     * @param eventName 事件名参数
     * @param eventData 数据参数
     */
    EventManager.prototype.dispatch = function (eventName, eventData) {
        if (this.eventListeners[eventName] != null) {
            // 将所有回调提取出来，再调用，避免调用回调的时候操作了事件的删除
            var callBackList = [];
            for (var _i = 0, _a = this.eventListeners[eventName]; _i < _a.length; _i++) {
                var iterator = _a[_i];
                callBackList.push({ callBack: iterator.callBack, target: iterator.target });
            }
            for (var _b = 0, callBackList_1 = callBackList; _b < callBackList_1.length; _b++) {
                var iterator = callBackList_1[_b];
                //call方法意思是调用第一个参数（此时一般传入的是当时添加这个事件的脚本）脚本上callback方法，callback是一个EventManagerCallFunc类型，有两个参数，所以call后面两个参数就是传给这个target身上的callback方法的。第一个是事件名称，一般没用，第二个是传入的数据
                iterator.callBack.call(iterator.target, eventName, eventData);
            }
        }
    };
    var EventManager_1;
    EventManager = EventManager_1 = __decorate([
        ccclass
    ], EventManager);
    return EventManager;
}());
exports.EventManager = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9FdmVudC9FdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFjMUM7SUFVSTtRQUNBLDZEQUE2RDtRQUNyRCxtQkFBYyxHQUFpQyxFQUFFLENBQUM7SUFGcEMsQ0FBQztxQkFWZCxZQUFZO0lBRXJCLHNCQUFrQix3QkFBUTthQUExQjtZQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxJQUFJLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxjQUFZLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXlCLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFLRCw2R0FBNkc7SUFDckcsNkNBQXNCLEdBQTlCLFVBQStCLFNBQWdCLEVBQUMsUUFBNkIsRUFBQyxNQUFVO1FBRXBGLElBQUksS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN2RDtZQUNJLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFFLFFBQVEsSUFBRSxDQUFDLENBQUMsTUFBTSxJQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUUsTUFBTSxDQUFDLEVBQ2xFO2dCQUNJLEtBQUssR0FBQyxDQUFDLENBQUM7Z0JBQ1IsTUFBTTthQUNUO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsdUNBQWdCLEdBQWhCLFVBQWlCLFNBQWdCLEVBQUMsUUFBNkIsRUFBQyxNQUFXO1FBRXZFLElBQUcsQ0FBQyxTQUFTLEVBQ2I7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUcsUUFBUSxJQUFFLElBQUksRUFDakI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxVQUFVLEdBQWdCLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUM7UUFDaEUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFFLElBQUksRUFDdkM7WUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0M7YUFFRDtZQUNJLElBQUksS0FBSyxHQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUcsS0FBSyxJQUFFLENBQUMsQ0FBQyxFQUNaO2dCQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsdUNBQWdCLEdBQWhCLFVBQWlCLFNBQWdCLEVBQUMsUUFBNkIsRUFBQyxNQUFXO1FBRXZFLElBQUcsQ0FBQyxTQUFTLEVBQ2I7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE9BQU87U0FDVjtRQUNELElBQUcsUUFBUSxJQUFFLElBQUksRUFDakI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxZQUFZLEdBQWdCLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILDBDQUFtQixHQUFuQixVQUFvQixTQUFnQixFQUFDLFFBQTZCLEVBQUMsTUFBVztRQUUxRSxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUUsSUFBSSxFQUN2QztZQUNJLElBQUksS0FBSyxHQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUcsS0FBSyxJQUFFLENBQUMsQ0FBQyxFQUNaO2dCQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNsRDtTQUNKO0lBQ0wsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCwrQkFBUSxHQUFSLFVBQVMsU0FBZ0IsRUFBQyxTQUFjO1FBRXBDLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBRSxJQUFJLEVBQ3ZDO1lBQ0ksa0NBQWtDO1lBQ2xDLElBQUksWUFBWSxHQUFrQixFQUFFLENBQUM7WUFDckMsS0FBdUIsVUFBOEIsRUFBOUIsS0FBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUE5QixjQUE4QixFQUE5QixJQUE4QixFQUFFO2dCQUFsRCxJQUFNLFFBQVEsU0FBQTtnQkFDZixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQy9FO1lBQ0QsS0FBdUIsVUFBWSxFQUFaLDZCQUFZLEVBQVosMEJBQVksRUFBWixJQUFZLEVBQUU7Z0JBQWhDLElBQU0sUUFBUSxxQkFBQTtnQkFDZiwySkFBMko7Z0JBQzNKLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0o7SUFDTCxDQUFDOztJQXpIUSxZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBNEh4QjtJQUFELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7QUE1SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDlm57osIPlh73mlbDvvIzmnInkuKTkuKrlj4LmlbDvvIzkuovku7blkI3lkozlh73mlbDmiYDpnIDmlbDmja5cbiAqL1xuZXhwb3J0IHR5cGUgRXZlbnRNYW5hZ2VyQ2FsbEZ1bmM9KGV2ZW50TmFtZTpzdHJpbmcsZXZlbnREYXRhOmFueSk9PnZvaWQ7XG4vKipcbiAqIOS6i+S7tuWQjeWvueW6lOeahOWbnuiwg+WHveaVsO+8jGNhbGxiYWNr5piv6Kem5Y+R55qE5Ye95pWw77yMdGFyZ2V05piv5Ye95pWw5omA5Zyo55qE6ISa5pysXG4gKi9cbmludGVyZmFjZSBDYWxsQmFja1RhcmdldFxue1xuICAgIGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLFxuICAgIHRhcmdldDphbnksXG59XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkV2ZW50TWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEV2ZW50TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSBhcyBFdmVudE1hbmFnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgLyoq55So5p2l5a2Y5YKo5omA5pyJ5bey5re75Yqg55qE5LqL5Lu25ZKM5a+55bqU5Zue6LCD5Ye95pWw55qE5a2X5YW46ZuG5ZCI77yMa2V577ya5LqL5Lu25ZCN77yMdmFsdWXvvJpjYWxsYmFja3RhcmdldOaVsOe7hCAqL1xuICAgIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6e1trZXk6c3RyaW5nXTpDYWxsQmFja1RhcmdldFtdfT17fTtcblxuICAgIC8v6L+Z5Liq5pa55rOV55So5LqO5Yik5pat5b2T5YmN6KaB5re75Yqg55qE5LqL5Lu25piv5ZCm5bey57uP5re75Yqg6L+H5LqG77yM5aaC5p6c6K+05bey57uP5re75Yqg6L+H5LqG77yM5bCx5LiN5YaN5re75Yqg77yM5aaC5p6c5rKh5re75Yqg6L+H57un57ut5re75Yqg5bCx5piv5LiA5LiqZXZlbnROYW1l6Kem5Y+R5aSa5Liq5pa55rOV77yI5Zug5Li66L+Z5Liq5pa55rOV5Y+q5pyJ5b2T6L+Z5LiqZXZlbnROYW1l5a+55bqU55qE5pa55rOV5pWw57uE5LiN5Li656m65pe25omN5Lya6Kem5Y+R77yJXG4gICAgcHJpdmF0ZSBnZXRFdmVudExpc3RlbmVyc0luZGV4KGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0OmFueSk6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgaW5kZXg9LTE7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVyYXRvcj10aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV07XG4gICAgICAgICAgICBpZihpdGVyYXRvci5jYWxsQmFjaz09Y2FsbEJhY2smJighdGFyZ2V0fHxpdGVyYXRvci50YXJnZXQ9PXRhcmdldCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXg9aTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOS6i+S7tuWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg5Ye95pWw5omA5Zyo6ISa5pys77yI5LiA6Iis5pivdGhpc++8iVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOnN0cmluZyxjYWxsQmFjazpFdmVudE1hbmFnZXJDYWxsRnVuYyx0YXJnZXQ/OmFueSk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoIWV2ZW50TmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuovku7blkI3mnInplJnor69cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2FsbEJhY2s9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25Lyg5YWl55qE5pa55rOV5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYWxsVGFyZ2V0OkNhbGxCYWNrVGFyZ2V0PXtjYWxsQmFjazpjYWxsQmFjayx0YXJnZXQ6dGFyZ2V0fTtcbiAgICAgICAgaWYodGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV09W2NhbGxUYXJnZXRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4PXRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChldmVudE5hbWUsY2FsbEJhY2ssdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmKGluZGV4PT0tMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsVGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5LqL5Lu25ZCN5a+55bqU55qE5LqL5Lu25Ye95pWwXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sgXG4gICAgICogQHBhcmFtIHRhcmdldCBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzZXRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFldmVudE5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25ZCN5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNhbGxCYWNrPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS8oOWFpeeahOS6i+S7tuWHveaVsOS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FsbEJhY2tGdW5jOkNhbGxCYWNrVGFyZ2V0PXtjYWxsQmFjazpjYWxsQmFjayx0YXJnZXQ6dGFyZ2V0fTtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPVtjYWxsQmFja0Z1bmNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliKDpmaTlh73mlbBcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBjYWxsQmFjayDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOWHveaVsOaJgOWcqOeahOiEmuacrO+8iOS4gOiIrOaYr3RoaXPvvIlcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpXG4gICAge1xuICAgICAgICBpZih0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0hPW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmdldEV2ZW50TGlzdGVuZXJzSW5kZXgoZXZlbnROYW1lLGNhbGxCYWNrLHRhcmdldCk7XG4gICAgICAgICAgICBpZihpbmRleCE9LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDop6blj5Hkuovku7bvvIjlpoLmnpzkuovku7blr7nlupTnmoTmlrnms5XmsqHmnInmlbDmja7lj4LmlbDpnIDmsYLljbPlj6/lj6rkvKDkuIDkuKrlj4LmlbDvvIlcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjeWPguaVsFxuICAgICAqIEBwYXJhbSBldmVudERhdGEg5pWw5o2u5Y+C5pWwXG4gICAgICovXG4gICAgZGlzcGF0Y2goZXZlbnROYW1lOnN0cmluZyxldmVudERhdGE/OmFueSlcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSE9bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g5bCG5omA5pyJ5Zue6LCD5o+Q5Y+W5Ye65p2l77yM5YaN6LCD55So77yM6YG/5YWN6LCD55So5Zue6LCD55qE5pe25YCZ5pON5L2c5LqG5LqL5Lu255qE5Yig6ZmkXG4gICAgICAgICAgICBsZXQgY2FsbEJhY2tMaXN0OkNhbGxCYWNrVGFyZ2V0W109W107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrTGlzdC5wdXNoKHsgY2FsbEJhY2s6IGl0ZXJhdG9yLmNhbGxCYWNrLCB0YXJnZXQ6IGl0ZXJhdG9yLnRhcmdldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgY2FsbEJhY2tMaXN0KSB7XG4gICAgICAgICAgICAgICAgLy9jYWxs5pa55rOV5oSP5oCd5piv6LCD55So56ys5LiA5Liq5Y+C5pWw77yI5q2k5pe25LiA6Iis5Lyg5YWl55qE5piv5b2T5pe25re75Yqg6L+Z5Liq5LqL5Lu255qE6ISa5pys77yJ6ISa5pys5LiKY2FsbGJhY2vmlrnms5XvvIxjYWxsYmFja+aYr+S4gOS4qkV2ZW50TWFuYWdlckNhbGxGdW5j57G75Z6L77yM5pyJ5Lik5Liq5Y+C5pWw77yM5omA5LulY2FsbOWQjumdouS4pOS4quWPguaVsOWwseaYr+S8oOe7mei/meS4qnRhcmdldOi6q+S4iueahGNhbGxiYWNr5pa55rOV55qE44CC56ys5LiA5Liq5piv5LqL5Lu25ZCN56ew77yM5LiA6Iis5rKh55So77yM56ys5LqM5Liq5piv5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbEJhY2suY2FsbChpdGVyYXRvci50YXJnZXQsIGV2ZW50TmFtZSwgZXZlbnREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Scripts/Framework/Pool/ObjectPool.ts

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
var BundleManager_1 = require("../Bundle/BundleManager");
var SubPool_1 = require("./SubPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        this.pools = new Map();
    }
    ObjectPool_1 = ObjectPool;
    Object.defineProperty(ObjectPool, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ObjectPool_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 取出指定节点
     * @param name 节点预制体名字
     * @param parent 节点创建出来后的父节点
     * @returns 一个异步的cc.node对象，需要用await接收
     */
    ObjectPool.prototype.Spawn = function (name, parent) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var pool;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pool = null;
                                    if (!!this.pools.has(name)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.RegisterNew(name, parent)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    pool = this.pools.get(name);
                                    resovlve(pool.Spawn());
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 回收指定节点
     * @param node 要回收的节点
     */
    ObjectPool.prototype.UnSpawn = function (node) {
        var pool = null;
        this.pools.forEach(function (value, key) {
            if (value.Contains(node)) {
                pool = value;
                return;
            }
        });
        pool.UnSpawn(node);
    };
    /**
     * 回收所有节点
     */
    ObjectPool.prototype.UnSpawnAll = function () {
        this.pools.forEach(function (value, key) {
            value.UnSpawnAll();
        });
    };
    /**
     *  清除所有对象池
     */
    ObjectPool.prototype.Clear = function () {
        this.pools.clear();
    };
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池中所有对象的父节点
     */
    ObjectPool.prototype.RegisterNew = function (name, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var node, pool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, "ObjectPool")];
                    case 1:
                        node = _a.sent();
                        pool = new SubPool_1.default(node, parent);
                        this.pools.set(pool.poolName, pool);
                        return [2 /*return*/];
                }
            });
        });
    };
    var ObjectPool_1;
    ObjectPool = ObjectPool_1 = __decorate([
        ccclass
    ], ObjectPool);
    return ObjectPool;
}());
exports.default = ObjectPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Qb29sL09iamVjdFBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Rix5REFBb0Q7QUFFcEQscUNBQWdDO0FBRTFCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBVUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksR0FBRyxFQUFrQixDQUFDO0lBQ3pDLENBQUM7bUJBWmdCLFVBQVU7SUFFM0Isc0JBQWtCLHNCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLFlBQVUsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBdUIsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQU9EOzs7OztPQUtHO0lBQ1UsMEJBQUssR0FBbEIsVUFBbUIsSUFBVyxFQUFDLE1BQWM7dUNBQUUsT0FBTzs7O2dCQUVsRCxzQkFBTyxJQUFJLE9BQU8sQ0FBVSxVQUFPLFFBQVE7Ozs7O29DQUNuQyxJQUFJLEdBQVMsSUFBSSxDQUFDO3lDQUNuQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFyQix3QkFBcUI7b0NBRXBCLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxFQUFBOztvQ0FBbkMsU0FBbUMsQ0FBQzs7O29DQUV4QyxJQUFJLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Ozt5QkFDMUIsQ0FBQyxFQUFBOzs7S0FDTDtJQUNEOzs7T0FHRztJQUNJLDRCQUFPLEdBQWQsVUFBZSxJQUFZO1FBRXZCLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBQyxHQUFHO1lBQ3pCLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDdkI7Z0JBQ0ksSUFBSSxHQUFDLEtBQUssQ0FBQztnQkFDWCxPQUFPO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksK0JBQVUsR0FBakI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBQyxHQUFHO1lBQ3pCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRDs7T0FFRztJQUNJLDBCQUFLLEdBQVo7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0csZ0NBQVcsR0FBakIsVUFBa0IsSUFBVyxFQUFDLE1BQWM7Ozs7OzRCQUUvQixxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBWSxJQUFJLEVBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUEzRCxJQUFJLEdBQUMsU0FBc0Q7d0JBQzNELElBQUksR0FBQyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDOzs7OztLQUN0Qzs7SUE1RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RTlCO0lBQUQsaUJBQUM7Q0E3RUQsQUE2RUMsSUFBQTtrQkE3RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcbmltcG9ydCBTdWJQb29sIGZyb20gXCIuL1N1YlBvb2xcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQb29sIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6T2JqZWN0UG9vbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IE9iamVjdFBvb2woKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgT2JqZWN0UG9vbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBvb2xzPW5ldyBNYXA8c3RyaW5nLFN1YlBvb2w+KCk7XG4gICAgfVxuICAgIC8v5a+56LGh5rGgXG4gICAgcHJpdmF0ZSBwb29sczpNYXA8c3RyaW5nLFN1YlBvb2w+O1xuXG4gICAgLyoqXG4gICAgICog5Y+W5Ye65oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5hbWUg6IqC54K56aKE5Yi25L2T5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDoioLngrnliJvlu7rlh7rmnaXlkI7nmoTniLboioLngrlcbiAgICAgKiBAcmV0dXJucyDkuIDkuKrlvILmraXnmoRjYy5ub2Rl5a+56LGh77yM6ZyA6KaB55SoYXdhaXTmjqXmlLZcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgU3Bhd24obmFtZTpzdHJpbmcscGFyZW50OmNjLk5vZGUpOlByb21pc2U8Y2MuTm9kZT5cbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5Ob2RlPihhc3luYyAocmVzb3ZsdmUpPT57XG4gICAgICAgICAgICBsZXQgcG9vbDpTdWJQb29sPW51bGw7XG4gICAgICAgICAgICBpZighdGhpcy5wb29scy5oYXMobmFtZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5SZWdpc3Rlck5ldyhuYW1lLHBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb29sPXRoaXMucG9vbHMuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgcmVzb3ZsdmUocG9vbC5TcGF3bigpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Zue5pS25oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg6KaB5Zue5pS255qE6IqC54K5XG4gICAgICovXG4gICAgcHVibGljIFVuU3Bhd24obm9kZTpjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgbGV0IHBvb2w6U3ViUG9vbD1udWxsO1xuICAgICAgICB0aGlzLnBvb2xzLmZvckVhY2goKHZhbHVlLGtleSk9PntcbiAgICAgICAgICAgIGlmKHZhbHVlLkNvbnRhaW5zKG5vZGUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvb2w9dmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBwb29sLlVuU3Bhd24obm9kZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWbnuaUtuaJgOacieiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBVblNwYXduQWxsKClcbiAgICB7XG4gICAgICAgIHRoaXMucG9vbHMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e1xuICAgICAgICAgICAgdmFsdWUuVW5TcGF3bkFsbCgpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiAg5riF6Zmk5omA5pyJ5a+56LGh5rGgXG4gICAgICovXG4gICAgcHVibGljIENsZWFyKClcbiAgICB7XG4gICAgICAgIHRoaXMucG9vbHMuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5paw5bu65LiA5Liq5a+56LGh5rGgXG4gICAgICogQHBhcmFtIG5hbWUg5a+56LGh5rGg5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDlr7nosaHmsaDkuK3miYDmnInlr7nosaHnmoTniLboioLngrlcbiAgICAgKi9cbiAgICBhc3luYyBSZWdpc3Rlck5ldyhuYW1lOnN0cmluZyxwYXJlbnQ6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCBub2RlPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KG5hbWUsXCJPYmplY3RQb29sXCIpO1xuICAgICAgICBsZXQgcG9vbD1uZXcgU3ViUG9vbChub2RlLHBhcmVudCk7XG4gICAgICAgIHRoaXMucG9vbHMuc2V0KHBvb2wucG9vbE5hbWUscG9vbCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/IResultAble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '089d3tcVZlNOayZqjJHxm/X', 'IResultAble');
// Scripts/Framework/Pool/IResultAble.ts

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
var IResultAble = /** @class */ (function (_super) {
    __extends(IResultAble, _super);
    function IResultAble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IResultAble.prototype.onLoad = function () {
        this.node.on("OnSpawn", this.onSpawn);
        this.node.on("UnSpawn", this.unSpawn);
    };
    IResultAble = __decorate([
        ccclass
    ], IResultAble);
    return IResultAble;
}(cc.Component));
exports.default = IResultAble;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Qb29sL0lSZXN1bHRBYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtELCtCQUFZO0lBQTlEOztJQWFBLENBQUM7SUFaYSw0QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSnlCLFdBQVc7UUFEeEMsT0FBTztPQUNzQixXQUFXLENBYXhDO0lBQUQsa0JBQUM7Q0FiRCxBQWFDLENBYmlELEVBQUUsQ0FBQyxTQUFTLEdBYTdEO2tCQWI2QixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSVJlc3VsdEFibGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihcIk9uU3Bhd25cIix0aGlzLm9uU3Bhd24pO1xuICAgICAgICB0aGlzLm5vZGUub24oXCJVblNwYXduXCIsdGhpcy51blNwYXduKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Y+W5Ye66IqC54K55pe25omn6KGMXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IG9uU3Bhd24oKTtcbiAgICAvKipcbiAgICAgKiDmlLblm57oioLngrnml7bmiafooYxcbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgdW5TcGF3bigpO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/SubPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5755gz6m5LQrVRIXDW/yhM', 'SubPool');
// Scripts/Framework/Pool/SubPool.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SubPool = /** @class */ (function () {
    function SubPool(prefab, parent) {
        this.nodeArray = [];
        this.myPrefab = null;
        this.myParent = null;
        this.myPrefab = prefab;
        this.myParent = parent;
    }
    Object.defineProperty(SubPool.prototype, "poolName", {
        get: function () { return this.myPrefab.name; },
        enumerable: false,
        configurable: true
    });
    SubPool.prototype.init = function () {
        //this.myPrefab = await BundleManager.load<cc.Prefab>(this.poolName,"ObjectPool");
    };
    SubPool.prototype.Spawn = function () {
        var go = null;
        this.nodeArray.forEach(function (node) {
            if (!node.active) {
                go = node;
            }
        });
        if (go == null) {
            go = cc.instantiate(this.myPrefab);
            go.setParent(this.myParent);
            this.nodeArray.push(go);
        }
        go.active = true;
        go.emit("OnSpawn");
        return go;
    };
    SubPool.prototype.UnSpawn = function (node) {
        if (this.Contains(node)) {
            node.emit("UnSpawn");
            node.active = false;
        }
    };
    SubPool.prototype.UnSpawnAll = function () {
        var _this = this;
        this.nodeArray.forEach(function (node) {
            if (node.active) {
                _this.UnSpawn(node);
            }
        });
    };
    SubPool.prototype.Contains = function (node) {
        return this.nodeArray.indexOf(node) > -1;
    };
    SubPool = __decorate([
        ccclass
    ], SubPool);
    return SubPool;
}());
exports.default = SubPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Qb29sL1N1YlBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUtoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUtJLGlCQUFZLE1BQWdCLEVBQUMsTUFBYztRQUhuQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFTLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBUkQsc0JBQVcsNkJBQVE7YUFBbkIsY0FBdUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7OztPQUFBO0lBU2xELHNCQUFJLEdBQUo7UUFFSSxrRkFBa0Y7SUFDdEYsQ0FBQztJQUNNLHVCQUFLLEdBQVo7UUFFSSxJQUFJLEVBQUUsR0FBUyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNmO2dCQUNJLEVBQUUsR0FBQyxJQUFJLENBQUM7YUFDWDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBRyxFQUFFLElBQUUsSUFBSSxFQUNYO1lBQ0ksRUFBRSxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsRUFBRSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDZixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxJQUFZO1FBRXZCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDdEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO2dCQUNJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLElBQVk7UUFFeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBckRnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc0QzQjtJQUFELGNBQUM7Q0F0REQsQUFzREMsSUFBQTtrQkF0RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJQb29sIHtcbiAgICBwdWJsaWMgZ2V0IHBvb2xOYW1lKCl7IHJldHVybiB0aGlzLm15UHJlZmFiLm5hbWU7fVxuICAgIHByaXZhdGUgbm9kZUFycmF5OmNjLk5vZGVbXT1bXTtcbiAgICBwcml2YXRlIG15UHJlZmFiOmNjLlByZWZhYj1udWxsO1xuICAgIHByaXZhdGUgbXlQYXJlbnQ6Y2MuTm9kZT1udWxsO1xuICAgIGNvbnN0cnVjdG9yKHByZWZhYjpjYy5QcmVmYWIscGFyZW50OmNjLk5vZGUpXG4gICAge1xuICAgICAgICB0aGlzLm15UHJlZmFiPXByZWZhYjtcbiAgICAgICAgdGhpcy5teVBhcmVudD1wYXJlbnQ7XG4gICAgfVxuICAgIGluaXQoKVxuICAgIHtcbiAgICAgICAgLy90aGlzLm15UHJlZmFiID0gYXdhaXQgQnVuZGxlTWFuYWdlci5sb2FkPGNjLlByZWZhYj4odGhpcy5wb29sTmFtZSxcIk9iamVjdFBvb2xcIik7XG4gICAgfVxuICAgIHB1YmxpYyBTcGF3bigpOmNjLk5vZGVcbiAgICB7XG4gICAgICAgIGxldCBnbzpjYy5Ob2RlPW51bGw7XG4gICAgICAgIHRoaXMubm9kZUFycmF5LmZvckVhY2goKG5vZGUpPT57XG4gICAgICAgICAgICBpZighbm9kZS5hY3RpdmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ289bm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoZ289PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdvPWNjLmluc3RhbnRpYXRlKHRoaXMubXlQcmVmYWIpO1xuICAgICAgICAgICAgZ28uc2V0UGFyZW50KHRoaXMubXlQYXJlbnQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlQXJyYXkucHVzaChnbyk7XG4gICAgICAgIH1cbiAgICAgICAgZ28uYWN0aXZlPXRydWU7XG4gICAgICAgIGdvLmVtaXQoXCJPblNwYXduXCIpO1xuICAgICAgICByZXR1cm4gZ287XG4gICAgfVxuICAgIHB1YmxpYyBVblNwYXduKG5vZGU6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuQ29udGFpbnMobm9kZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUuZW1pdChcIlVuU3Bhd25cIik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGVBcnJheS5mb3JFYWNoKChub2RlKT0+e1xuICAgICAgICAgICAgaWYobm9kZS5hY3RpdmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5VblNwYXduKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgQ29udGFpbnMobm9kZTpjYy5Ob2RlKTpib29sZWFuXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlQXJyYXkuaW5kZXhPZihub2RlKT4tMTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
