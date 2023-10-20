
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
require('./assets/Common/Audio/AudioManager');
require('./assets/Common/Audio/AudioRoot');
require('./assets/Common/Bundle/BundleManager');
require('./assets/Common/Event/EventManager');
require('./assets/Common/Game');
require('./assets/Common/Pool/IResultAble');
require('./assets/Common/Pool/ObjectPool');
require('./assets/Common/Pool/SubPool');
require('./assets/Common/Tools/CCTools');
require('./assets/Common/UI/UIManager');
require('./assets/Common/UI/UIView');
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
require('./assets/Scripts/Src/GameConst');

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
                    var __filename = 'preview-scripts/assets/Common/Tools/CCTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVG9vbHMvQ0NUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFRQSxDQUFDO0lBUGlCLG9CQUFZLEdBQTFCLFVBQTJCLEtBQWE7UUFDcEMsYUFBYTtRQUNiLElBQU0sVUFBVSxHQUFHLDRCQUE0QixDQUFDO1FBRWhELGlCQUFpQjtRQUNqQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVBnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBUTNCO0lBQUQsY0FBQztDQVJELEFBUUMsQ0FSb0MsRUFBRSxDQUFDLFNBQVMsR0FRaEQ7a0JBUm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDQ1Rvb2xzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGlzVmFsaWRFbWFpbChlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIOmCrueuseWcsOWdgOeahOato+WImeihqOi+vuW8j1xuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gICAgICAgIFxuICAgICAgICAvLyDkvb/nlKjmraPliJnooajovr7lvI/pqozor4HovpPlhaXlrZfnrKbkuLJcbiAgICAgICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdChlbWFpbCk7XG4gICAgfVxufVxuIl19
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
cc._RF.push(module, '62c0aUY+7BHeakKCGk4hiS5', 'UIView');
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
                    var __filename = 'preview-scripts/assets/Common/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '695af5fXb9Kaq9f3MY+NaWz', 'Game');
// Common/Game.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7O0FBRXRGLHFEQUFvRDtBQUNwRCxxREFBb0Q7QUFDcEQsZ0RBQTJDO0FBR3JDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUFJQSxDQUFDO0lBSEcsc0JBQWtCLGFBQUs7YUFBdkIsY0FBMEIsT0FBTywyQkFBWSxDQUFDLFFBQVEsQ0FBQSxDQUFBLENBQUM7OztPQUFBO0lBQ3ZELHNCQUFrQixhQUFLO2FBQXZCLGNBQTBCLE9BQU8sMkJBQVksQ0FBQyxRQUFRLENBQUEsQ0FBQSxDQUFDOzs7T0FBQTtJQUN2RCxzQkFBa0Isa0JBQVU7YUFBNUIsY0FBK0IsT0FBTyxvQkFBVSxDQUFDLFFBQVEsQ0FBQSxDQUFBLENBQUM7OztPQUFBO0lBSHpDLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FJeEI7SUFBRCxXQUFDO0NBSkQsQUFJQyxJQUFBO2tCQUpvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuL0F1ZGlvL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4vRXZlbnQvRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgT2JqZWN0UG9vbCBmcm9tIFwiLi9Qb29sL09iamVjdFBvb2xcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEV2ZW50KCl7cmV0dXJuIEV2ZW50TWFuYWdlci5JbnN0YW5jZX1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBBdWRpbygpe3JldHVybiBBdWRpb01hbmFnZXIuSW5zdGFuY2V9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgT2JqZWN0UG9vbCgpe3JldHVybiBPYmplY3RQb29sLkluc3RhbmNlfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba65f5gPDhPD7aB64BsmlaE', 'AudioRoot');
// Common/Audio/AudioRoot.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9Sb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLGdDQUEyQjtBQUdyQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQVVDO1FBVEcsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDOztJQVNwQyxDQUFDO0lBUGEsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxXQUFXLENBQUM7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFUZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVU3QjtJQUFELGdCQUFDO0NBVkQsQUFVQyxDQVZzQyxFQUFFLENBQUMsU0FBUyxHQVVsRDtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Sb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBhdWRpb1NvdXJjZTpjYy5BdWRpb1NvdXJjZT1udWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgICAgICBHYW1lLkF1ZGlvLmluaXQoYXVkaW9Tb3VyY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1ZGlvTWFuYWdlciBJbml0IVwiKTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/IResultAble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '089d3tcVZlNOayZqjJHxm/X', 'IResultAble');
// Common/Pool/IResultAble.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9JUmVzdWx0QWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCwrQkFBWTtJQUE5RDs7SUFhQSxDQUFDO0lBWmEsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUp5QixXQUFXO1FBRHhDLE9BQU87T0FDc0IsV0FBVyxDQWF4QztJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJpRCxFQUFFLENBQUMsU0FBUyxHQWE3RDtrQkFiNkIsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIElSZXN1bHRBYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJPblNwYXduXCIsdGhpcy5vblNwYXduKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiVW5TcGF3blwiLHRoaXMudW5TcGF3bik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWPluWHuuiKgueCueaXtuaJp+ihjFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBvblNwYXduKCk7XG4gICAgLyoqXG4gICAgICog5pS25Zue6IqC54K55pe25omn6KGMXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHVuU3Bhd24oKTtcbn1cbiJdfQ==
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
cc._RF.push(module, 'c659cvQHjdHKJ7/FjPrgB7A', 'AudioRoot');
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
                    var __filename = 'preview-scripts/assets/Common/UI/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aec3eRSdSBEZbZM57XuSQn+', 'UIManager');
// Common/UI/UIManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFVSTtJQUFzQixDQUFDO2tCQVZOLFNBQVM7SUFFMUIsc0JBQWtCLHFCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLFdBQVMsRUFBRSxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBc0IsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7SUFUZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxJQUFBO2tCQWJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVSVZpZXcgZnJvbSBcIi4vVUlWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6VUlNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3RhbmNlKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuX2luc3RhbmNlPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZT1uZXcgVUlNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIFVJTWFuYWdlcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe31cblxuXG59XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/Scripts/Framework/UI/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bce47DMBlpC45hxKsMJgfXB', 'UIManager');
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
                    var __filename = 'preview-scripts/assets/Common/Event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24aceh10CtOP7EwTclMxI41', 'EventManager');
// Common/Event/EventManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vRXZlbnQvRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7O0FBSWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBYzFDO0lBVUk7UUFDQSw2REFBNkQ7UUFDckQsbUJBQWMsR0FBaUMsRUFBRSxDQUFDO0lBRnBDLENBQUM7cUJBVmQsWUFBWTtJQUVyQixzQkFBa0Isd0JBQVE7YUFBMUI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUN2QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksY0FBWSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUF5QixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBS0QsNkdBQTZHO0lBQ3JHLDZDQUFzQixHQUE5QixVQUErQixTQUFnQixFQUFDLFFBQTZCLEVBQUMsTUFBVTtRQUVwRixJQUFJLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDdkQ7WUFDSSxJQUFJLFFBQVEsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUcsUUFBUSxDQUFDLFFBQVEsSUFBRSxRQUFRLElBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBRSxRQUFRLENBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxFQUNsRTtnQkFDSSxLQUFLLEdBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU07YUFDVDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILHVDQUFnQixHQUFoQixVQUFpQixTQUFnQixFQUFDLFFBQTZCLEVBQUMsTUFBVztRQUV2RSxJQUFHLENBQUMsU0FBUyxFQUNiO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7UUFDRCxJQUFHLFFBQVEsSUFBRSxJQUFJLEVBQ2pCO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksVUFBVSxHQUFnQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFDO1FBQ2hFLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBRSxJQUFJLEVBQ3ZDO1lBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO2FBRUQ7WUFDSSxJQUFJLEtBQUssR0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFHLEtBQUssSUFBRSxDQUFDLENBQUMsRUFDWjtnQkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuRDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNILHVDQUFnQixHQUFoQixVQUFpQixTQUFnQixFQUFDLFFBQTZCLEVBQUMsTUFBVztRQUV2RSxJQUFHLENBQUMsU0FBUyxFQUNiO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFHLFFBQVEsSUFBRSxJQUFJLEVBQ2pCO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksWUFBWSxHQUFnQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCwwQ0FBbUIsR0FBbkIsVUFBb0IsU0FBZ0IsRUFBQyxRQUE2QixFQUFDLE1BQVc7UUFFMUUsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFFLElBQUksRUFDdkM7WUFDSSxJQUFJLEtBQUssR0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFHLEtBQUssSUFBRSxDQUFDLENBQUMsRUFDWjtnQkFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7U0FDSjtJQUNMLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsK0JBQVEsR0FBUixVQUFTLFNBQWdCLEVBQUMsU0FBYztRQUVwQyxJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUUsSUFBSSxFQUN2QztZQUNJLGtDQUFrQztZQUNsQyxJQUFJLFlBQVksR0FBa0IsRUFBRSxDQUFDO1lBQ3JDLEtBQXVCLFVBQThCLEVBQTlCLEtBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBOUIsY0FBOEIsRUFBOUIsSUFBOEIsRUFBRTtnQkFBbEQsSUFBTSxRQUFRLFNBQUE7Z0JBQ2YsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUMvRTtZQUNELEtBQXVCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO2dCQUFoQyxJQUFNLFFBQVEscUJBQUE7Z0JBQ2YsMkpBQTJKO2dCQUMzSixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNqRTtTQUNKO0lBQ0wsQ0FBQzs7SUF6SFEsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTRIeEI7SUFBRCxtQkFBQztDQTVIRCxBQTRIQyxJQUFBO0FBNUhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICog5Zue6LCD5Ye95pWw77yM5pyJ5Lik5Liq5Y+C5pWw77yM5LqL5Lu25ZCN5ZKM5Ye95pWw5omA6ZyA5pWw5o2uXG4gKi9cbmV4cG9ydCB0eXBlIEV2ZW50TWFuYWdlckNhbGxGdW5jPShldmVudE5hbWU6c3RyaW5nLGV2ZW50RGF0YTphbnkpPT52b2lkO1xuLyoqXG4gKiDkuovku7blkI3lr7nlupTnmoTlm57osIPlh73mlbDvvIxjYWxsYmFja+aYr+inpuWPkeeahOWHveaVsO+8jHRhcmdldOaYr+WHveaVsOaJgOWcqOeahOiEmuacrFxuICovXG5pbnRlcmZhY2UgQ2FsbEJhY2tUYXJnZXRcbntcbiAgICBjYWxsQmFjazpFdmVudE1hbmFnZXJDYWxsRnVuYyxcbiAgICB0YXJnZXQ6YW55LFxufVxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpFdmVudE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgRXZlbnRNYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIC8qKueUqOadpeWtmOWCqOaJgOacieW3sua3u+WKoOeahOS6i+S7tuWSjOWvueW6lOWbnuiwg+WHveaVsOeahOWtl+WFuOmbhuWQiO+8jGtlee+8muS6i+S7tuWQje+8jHZhbHVl77yaY2FsbGJhY2t0YXJnZXTmlbDnu4QgKi9cbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOntba2V5OnN0cmluZ106Q2FsbEJhY2tUYXJnZXRbXX09e307XG5cbiAgICAvL+i/meS4quaWueazleeUqOS6juWIpOaWreW9k+WJjeimgea3u+WKoOeahOS6i+S7tuaYr+WQpuW3sue7j+a3u+WKoOi/h+S6hu+8jOWmguaenOivtOW3sue7j+a3u+WKoOi/h+S6hu+8jOWwseS4jeWGjea3u+WKoO+8jOWmguaenOayoea3u+WKoOi/h+e7p+e7rea3u+WKoOWwseaYr+S4gOS4qmV2ZW50TmFtZeinpuWPkeWkmuS4quaWueazle+8iOWboOS4uui/meS4quaWueazleWPquacieW9k+i/meS4qmV2ZW50TmFtZeWvueW6lOeahOaWueazleaVsOe7hOS4jeS4uuepuuaXtuaJjeS8muinpuWPke+8iVxuICAgIHByaXZhdGUgZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldDphbnkpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4PS0xO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0b3I9dGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldO1xuICAgICAgICAgICAgaWYoaXRlcmF0b3IuY2FsbEJhY2s9PWNhbGxCYWNrJiYoIXRhcmdldHx8aXRlcmF0b3IudGFyZ2V0PT10YXJnZXQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZGV4PWk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuovku7ZcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBjYWxsQmFjayDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOWHveaVsOaJgOWcqOiEmuacrO+8iOS4gOiIrOaYr3RoaXPvvIlcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFldmVudE5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25ZCN5pyJ6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNhbGxCYWNrPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6i+S7tuS8oOWFpeeahOaWueazleS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FsbFRhcmdldDpDYWxsQmFja1RhcmdldD17Y2FsbEJhY2s6Y2FsbEJhY2ssdGFyZ2V0OnRhcmdldH07XG4gICAgICAgIGlmKHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPVtjYWxsVGFyZ2V0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmdldEV2ZW50TGlzdGVuZXJzSW5kZXgoZXZlbnROYW1lLGNhbGxCYWNrLHRhcmdldCk7XG4gICAgICAgICAgICBpZihpbmRleD09LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbFRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruS6i+S7tuWQjeWvueW6lOeahOS6i+S7tuWHveaVsFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc2V0RXZlbnRMaXN0ZW5lcihldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldD86YW55KTpib29sZWFuXG4gICAge1xuICAgICAgICBpZighZXZlbnROYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6i+S7tuWQjeS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZihjYWxsQmFjaz09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvKDlhaXnmoTkuovku7blh73mlbDkuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbGxCYWNrRnVuYzpDYWxsQmFja1RhcmdldD17Y2FsbEJhY2s6Y2FsbEJhY2ssdGFyZ2V0OnRhcmdldH07XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXT1bY2FsbEJhY2tGdW5jXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yig6Zmk5Ye95pWwXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5LqL5Lu25Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCDlh73mlbDmiYDlnKjnmoTohJrmnKzvvIjkuIDoiKzmmK90aGlz77yJXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldD86YW55KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdIT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5kZXg9dGhpcy5nZXRFdmVudExpc3RlbmVyc0luZGV4KGV2ZW50TmFtZSxjYWxsQmFjayx0YXJnZXQpO1xuICAgICAgICAgICAgaWYoaW5kZXghPS0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5Y+R5LqL5Lu277yI5aaC5p6c5LqL5Lu25a+55bqU55qE5pa55rOV5rKh5pyJ5pWw5o2u5Y+C5pWw6ZyA5rGC5Y2z5Y+v5Y+q5Lyg5LiA5Liq5Y+C5pWw77yJXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI3lj4LmlbBcbiAgICAgKiBAcGFyYW0gZXZlbnREYXRhIOaVsOaNruWPguaVsFxuICAgICAqL1xuICAgIGRpc3BhdGNoKGV2ZW50TmFtZTpzdHJpbmcsZXZlbnREYXRhPzphbnkpXG4gICAge1xuICAgICAgICBpZih0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0hPW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOWwhuaJgOacieWbnuiwg+aPkOWPluWHuuadpe+8jOWGjeiwg+eUqO+8jOmBv+WFjeiwg+eUqOWbnuiwg+eahOaXtuWAmeaTjeS9nOS6huS6i+S7tueahOWIoOmZpFxuICAgICAgICAgICAgbGV0IGNhbGxCYWNrTGlzdDpDYWxsQmFja1RhcmdldFtdPVtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFja0xpc3QucHVzaCh7IGNhbGxCYWNrOiBpdGVyYXRvci5jYWxsQmFjaywgdGFyZ2V0OiBpdGVyYXRvci50YXJnZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNhbGxCYWNrTGlzdCkge1xuICAgICAgICAgICAgICAgIC8vY2FsbOaWueazleaEj+aAneaYr+iwg+eUqOesrOS4gOS4quWPguaVsO+8iOatpOaXtuS4gOiIrOS8oOWFpeeahOaYr+W9k+aXtua3u+WKoOi/meS4quS6i+S7tueahOiEmuacrO+8ieiEmuacrOS4imNhbGxiYWNr5pa55rOV77yMY2FsbGJhY2vmmK/kuIDkuKpFdmVudE1hbmFnZXJDYWxsRnVuY+exu+Wei++8jOacieS4pOS4quWPguaVsO+8jOaJgOS7pWNhbGzlkI7pnaLkuKTkuKrlj4LmlbDlsLHmmK/kvKDnu5nov5nkuKp0YXJnZXTouqvkuIrnmoRjYWxsYmFja+aWueazleeahOOAguesrOS4gOS4quaYr+S6i+S7tuWQjeensO+8jOS4gOiIrOayoeeUqO+8jOesrOS6jOS4quaYr+S8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGxCYWNrLmNhbGwoaXRlcmF0b3IudGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
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
cc._RF.push(module, 'c6226MGmq1EFJUZsuOWxr8h', 'BundleManager');
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
                    var __filename = 'preview-scripts/assets/Common/Bundle/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb52auMM69Du59eQPvKj0pn', 'BundleManager');
// Common/Bundle/BundleManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQnVuZGxlL0J1bmRsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBMkVBLENBQUM7SUEvREc7Ozs7T0FJRztJQUNpQix3QkFBVSxHQUE5QixVQUErQixVQUFpQjt1Q0FBRSxPQUFPOzs7Z0JBRXJELHNCQUFPLElBQUksT0FBTyxDQUF5QixVQUFDLFFBQVE7d0JBQ2hELElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQ2pDOzRCQUNJLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUN6QyxPQUFPO3lCQUNWO3dCQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQyxVQUFDLEdBQVMsRUFBQyxNQUE2Qjs0QkFDMUUsSUFBRyxHQUFHLEVBQ047Z0NBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNsQjtpQ0FFRDtnQ0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQztnQ0FDdEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUNwQjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFDRDs7Ozs7T0FLRztJQUNpQixrQkFBSSxHQUF4QixVQUE2QyxVQUFpQixFQUFDLFVBQWlCO3VDQUFFLE9BQU87OztnQkFFckYsc0JBQU8sSUFBSSxPQUFPLENBQUksVUFBTSxRQUFROzs7O3dDQUNyQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOztvQ0FBeEMsTUFBTSxHQUFDLFNBQWlDO29DQUM1Qyw2Q0FBNkM7b0NBQzdDLElBQUcsTUFBTSxFQUNUO3dDQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFVBQUMsR0FBRyxFQUFDLE1BQVE7NENBQ2hDLElBQUcsR0FBRyxFQUNOO2dEQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0RBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDbEI7aURBRUQ7Z0RBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnREFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZDQUNwQjt3Q0FDTCxDQUFDLENBQUMsQ0FBQTtxQ0FDTDt5Q0FFRDt3Q0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxVQUFVLENBQUMsQ0FBQztxQ0FDMUM7Ozs7eUJBQ0osQ0FBQyxFQUFBOzs7S0FHTDtJQXpFRCwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLElBQUk7SUFDSiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsOENBQThDO0lBQzlDLElBQUk7SUFDSiwwQkFBMEI7SUFDWix1QkFBUyxHQUFvQyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztJQVhuRixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkVqQztJQUFELG9CQUFDO0NBM0VELEFBMkVDLElBQUE7a0JBM0VvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlTWFuYWdlciB7XG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBCdW5kbGVNYW5hZ2VyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIEJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHVibGljIHN0YXRpYyBidW5kbGVNYXA6TWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPj1uZXcgTWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPigpO1xuICAgIC8qKlxuICAgICAqIOWKoOi9vUJ1bmRsZeWIhuWMhVxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIOWIhuWMheWQjeensFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZShidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KChyZXNvdmx2ZSk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNvdmx2ZSh0aGlzLmJ1bmRsZU1hcC5nZXQoYnVuZGxlTmFtZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVycjpFcnJvcixidW5kbGU6Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSk9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9veWIhuWMhVwiK2J1bmRsZU5hbWUrXCLmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVuZGxlTWFwLnNldChidW5kbGVOYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7liIbljIXliqDovb3otYTmupBcbiAgICAgKiBAcGFyYW0gYnVuZGxlUGF0aCDotYTmupDln7rkuo7liIbljIXnmoTnm7jlr7not6/lvoRcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSDliIbljIXlkI3np7BcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihidW5kbGVQYXRoOnN0cmluZyxidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxUPlxuICAgIHsgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KGFzeW5jKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgbGV0IGJ1bmRsZT1hd2FpdCB0aGlzLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICAvL2xldCBidW5kbGUgPXRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIGlmKGJ1bmRsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChidW5kbGVQYXRoLChlcnIscmVzdWx0OlQpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vemihOWItuS9k+aIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc292bHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ6L+Z5LiqYnVuZGxl5YiG5YyFXCIrYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG4iXX0=
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
cc._RF.push(module, 'beea08mg75O5qgxbj8wPJUy', 'EventManager');
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
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/IResultAble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90b7aUnfdFNMr6pkDfBYSvc', 'IResultAble');
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
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Tools/CCTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a8fa9Gw+tJQY8n7WyGyBbE', 'CCTools');
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
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38c25i6GRIl7wXIvrjvczq', 'AudioManager');
// Common/Audio/AudioManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHlEQUFvRDtBQUc5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO1FBRVEsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUFIUCxDQUFDO3FCQVZkLFlBQVk7SUFFckIsc0JBQWtCLHdCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLGNBQVksRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBeUIsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtEOzs7T0FHRztJQUNILDJCQUFJLEdBQUosVUFBSyxXQUEwQjtRQUUzQixjQUFZLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFXLEVBQUMsTUFBYztRQUFwQyxpQkFRQztRQVJxQix1QkFBQSxFQUFBLGdCQUFjO1FBRWhDLElBQU0sV0FBVyxHQUFDLGNBQVksQ0FBQyxXQUFZLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQUMsQ0FBQzs7Ozs0QkFDRCxxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUExQyxJQUFJLEdBQUMsU0FBcUM7d0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7YUFDekQsQ0FBQyxDQUFBO1FBQ0YsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtJQUVBLENBQUM7O0lBdENRLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0F1Q3hCO0lBQUQsbUJBQUM7Q0F2Q0QsQUF1Q0MsSUFBQTtBQXZDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpBdWRpb01hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgQXVkaW9NYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGF1ZGlvU291cmNlPzpjYy5BdWRpb1NvdXJjZVxuICAgIHByaXZhdGUgc291bmRWb2x1bWU6bnVtYmVyPTE7XG4gICAgcHJpdmF0ZSBtdXNpY1ZvbHVtZTpudW1iZXI9MTtcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpn7PkuZDnu4Tku7bvvIjlhajlsYDkuIDoiKzlj6rmnInkuIDkuKrpn7PkuZDoioLngrnvvIzlj6rkvJrliJ3lp4vljJbkuIDmrKHvvIlcbiAgICAgKiBAcGFyYW0gYXVkaW9Tb3VyY2Ug6Z+z5LmQ6IqC54K56Lqr5LiK55qEQXVkaW9Tb3VyY2Xnu4Tku7ZcbiAgICAgKi9cbiAgICBpbml0KGF1ZGlvU291cmNlOmNjLkF1ZGlvU291cmNlKVxuICAgIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7pn7PkuZDvvIjkuIDoiKzmmK/og4zmma/pn7PkuZDvvIlcbiAgICAgKiBAcGFyYW0gbmFtZSDopoHmkq3mlL7nmoTpn7PkuZDlkI3lrZdcbiAgICAgKiBAcGFyYW0gYnVuZGxlIOWmguaenOayoemUmeW6lOivpeaYr0Fzc2V0QnVuZGxl55qE5YiG5YyF5Yqg6L2955qE5ZCN56ew77yM5q+U5aaCZ2FtZe+8jGhhbGzku4DkuYjnmoRcbiAgICAgKi9cbiAgICBwbGF5TXVzaWMobmFtZTpzdHJpbmcsYnVuZGxlPVwiQXVkaW9cIilcbiAgICB7XG4gICAgICAgIGNvbnN0IGF1ZGlvU291cmNlPUF1ZGlvTWFuYWdlci5hdWRpb1NvdXJjZSE7XG4gICAgICAgIGxldCBjb21wbGV0ZT0oYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGxldCBjbGlwPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZChuYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCBhcyBjYy5BdWRpb0NsaXAsIGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICB9XG4gICAgcGxheVNvdW5kKClcbiAgICB7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Common/Pool/ObjectPool.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9PYmplY3RQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRXBELHFDQUFnQztBQUUxQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUN6QyxDQUFDO21CQVpnQixVQUFVO0lBRTNCLHNCQUFrQixzQkFBUTthQUExQjtZQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxJQUFJLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXVCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFPRDs7Ozs7T0FLRztJQUNVLDBCQUFLLEdBQWxCLFVBQW1CLElBQVcsRUFBQyxNQUFjO3VDQUFFLE9BQU87OztnQkFFbEQsc0JBQU8sSUFBSSxPQUFPLENBQVUsVUFBTyxRQUFROzs7OztvQ0FDbkMsSUFBSSxHQUFTLElBQUksQ0FBQzt5Q0FDbkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsd0JBQXFCO29DQUVwQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsRUFBQTs7b0NBQW5DLFNBQW1DLENBQUM7OztvQ0FFeEMsSUFBSSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7eUJBQzFCLENBQUMsRUFBQTs7O0tBQ0w7SUFDRDs7O09BR0c7SUFDSSw0QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUV2QixJQUFJLElBQUksR0FBUyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUMsR0FBRztZQUN6QixJQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3ZCO2dCQUNJLElBQUksR0FBQyxLQUFLLENBQUM7Z0JBQ1gsT0FBTzthQUNWO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7T0FFRztJQUNJLCtCQUFVLEdBQWpCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUMsR0FBRztZQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Q7O09BRUc7SUFDSSwwQkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNHLGdDQUFXLEdBQWpCLFVBQWtCLElBQVcsRUFBQyxNQUFjOzs7Ozs0QkFFL0IscUJBQU0sdUJBQWEsQ0FBQyxJQUFJLENBQVksSUFBSSxFQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBM0QsSUFBSSxHQUFDLFNBQXNEO3dCQUMzRCxJQUFJLEdBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7S0FDdEM7O0lBNUVnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkU5QjtJQUFELGlCQUFDO0NBN0VELEFBNkVDLElBQUE7a0JBN0VvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IElSZXN1bHRBYmxlIGZyb20gXCIuL0lSZXN1bHRBYmxlXCI7XG5pbXBvcnQgU3ViUG9vbCBmcm9tIFwiLi9TdWJQb29sXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0UG9vbCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOk9iamVjdFBvb2w7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBPYmplY3RQb29sKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIE9iamVjdFBvb2w7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wb29scz1uZXcgTWFwPHN0cmluZyxTdWJQb29sPigpO1xuICAgIH1cbiAgICAvL+WvueixoeaxoFxuICAgIHByaXZhdGUgcG9vbHM6TWFwPHN0cmluZyxTdWJQb29sPjtcblxuICAgIC8qKlxuICAgICAqIOWPluWHuuaMh+WumuiKgueCuVxuICAgICAqIEBwYXJhbSBuYW1lIOiKgueCuemihOWItuS9k+WQjeWtl1xuICAgICAqIEBwYXJhbSBwYXJlbnQg6IqC54K55Yib5bu65Ye65p2l5ZCO55qE54i26IqC54K5XG4gICAgICogQHJldHVybnMg5LiA5Liq5byC5q2l55qEY2Mubm9kZeWvueixoe+8jOmcgOimgeeUqGF3YWl05o6l5pS2XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIFNwYXduKG5hbWU6c3RyaW5nLHBhcmVudDpjYy5Ob2RlKTpQcm9taXNlPGNjLk5vZGU+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuTm9kZT4oYXN5bmMgKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgbGV0IHBvb2w6U3ViUG9vbD1udWxsO1xuICAgICAgICAgICAgaWYoIXRoaXMucG9vbHMuaGFzKG5hbWUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuUmVnaXN0ZXJOZXcobmFtZSxwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9vbD10aGlzLnBvb2xzLmdldChuYW1lKTtcbiAgICAgICAgICAgIHJlc292bHZlKHBvb2wuU3Bhd24oKSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWbnuaUtuaMh+WumuiKgueCuVxuICAgICAqIEBwYXJhbSBub2RlIOimgeWbnuaUtueahOiKgueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBVblNwYXduKG5vZGU6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGxldCBwb29sOlN1YlBvb2w9bnVsbDtcbiAgICAgICAgdGhpcy5wb29scy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57XG4gICAgICAgICAgICBpZih2YWx1ZS5Db250YWlucyhub2RlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb29sPXZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcG9vbC5VblNwYXduKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlm57mlLbmiYDmnInoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpXG4gICAge1xuICAgICAgICB0aGlzLnBvb2xzLmZvckVhY2goKHZhbHVlLGtleSk9PntcbiAgICAgICAgICAgIHZhbHVlLlVuU3Bhd25BbGwoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICogIOa4hemZpOaJgOacieWvueixoeaxoFxuICAgICAqL1xuICAgIHB1YmxpYyBDbGVhcigpXG4gICAge1xuICAgICAgICB0aGlzLnBvb2xzLmNsZWFyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaWsOW7uuS4gOS4quWvueixoeaxoFxuICAgICAqIEBwYXJhbSBuYW1lIOWvueixoeaxoOWQjeWtl1xuICAgICAqIEBwYXJhbSBwYXJlbnQg5a+56LGh5rGg5Lit5omA5pyJ5a+56LGh55qE54i26IqC54K5XG4gICAgICovXG4gICAgYXN5bmMgUmVnaXN0ZXJOZXcobmFtZTpzdHJpbmcscGFyZW50OmNjLk5vZGUpXG4gICAge1xuICAgICAgICBsZXQgbm9kZT1hd2FpdCBCdW5kbGVNYW5hZ2VyLmxvYWQ8Y2MuUHJlZmFiPihuYW1lLFwiT2JqZWN0UG9vbFwiKTtcbiAgICAgICAgbGV0IHBvb2w9bmV3IFN1YlBvb2wobm9kZSxwYXJlbnQpO1xuICAgICAgICB0aGlzLnBvb2xzLnNldChwb29sLnBvb2xOYW1lLHBvb2wpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/SubPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5755gz6m5LQrVRIXDW/yhM', 'SubPool');
// Common/Pool/SubPool.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9TdWJQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFLaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFLSSxpQkFBWSxNQUFnQixFQUFDLE1BQWM7UUFIbkMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBUyxJQUFJLENBQUM7UUFHMUIsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQVJELHNCQUFXLDZCQUFRO2FBQW5CLGNBQXVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDOzs7T0FBQTtJQVNsRCxzQkFBSSxHQUFKO1FBRUksa0ZBQWtGO0lBQ3RGLENBQUM7SUFDTSx1QkFBSyxHQUFaO1FBRUksSUFBSSxFQUFFLEdBQVMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN4QixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDZjtnQkFDSSxFQUFFLEdBQUMsSUFBSSxDQUFDO2FBQ1g7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUcsRUFBRSxJQUFFLElBQUksRUFDWDtZQUNJLEVBQUUsR0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUNELEVBQUUsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTSx5QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUV2QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3RCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDTSw0QkFBVSxHQUFqQjtRQUFBLGlCQVFDO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtnQkFDSSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sMEJBQVEsR0FBZixVQUFnQixJQUFZO1FBRXhCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXJEZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXNEM0I7SUFBRCxjQUFDO0NBdERELEFBc0RDLElBQUE7a0JBdERvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IElSZXN1bHRBYmxlIGZyb20gXCIuL0lSZXN1bHRBYmxlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViUG9vbCB7XG4gICAgcHVibGljIGdldCBwb29sTmFtZSgpeyByZXR1cm4gdGhpcy5teVByZWZhYi5uYW1lO31cbiAgICBwcml2YXRlIG5vZGVBcnJheTpjYy5Ob2RlW109W107XG4gICAgcHJpdmF0ZSBteVByZWZhYjpjYy5QcmVmYWI9bnVsbDtcbiAgICBwcml2YXRlIG15UGFyZW50OmNjLk5vZGU9bnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6Y2MuUHJlZmFiLHBhcmVudDpjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgdGhpcy5teVByZWZhYj1wcmVmYWI7XG4gICAgICAgIHRoaXMubXlQYXJlbnQ9cGFyZW50O1xuICAgIH1cbiAgICBpbml0KClcbiAgICB7XG4gICAgICAgIC8vdGhpcy5teVByZWZhYiA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KHRoaXMucG9vbE5hbWUsXCJPYmplY3RQb29sXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgU3Bhd24oKTpjYy5Ob2RlXG4gICAge1xuICAgICAgICBsZXQgZ286Y2MuTm9kZT1udWxsO1xuICAgICAgICB0aGlzLm5vZGVBcnJheS5mb3JFYWNoKChub2RlKT0+e1xuICAgICAgICAgICAgaWYoIW5vZGUuYWN0aXZlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdvPW5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKGdvPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbz1jYy5pbnN0YW50aWF0ZSh0aGlzLm15UHJlZmFiKTtcbiAgICAgICAgICAgIGdvLnNldFBhcmVudCh0aGlzLm15UGFyZW50KTtcbiAgICAgICAgICAgIHRoaXMubm9kZUFycmF5LnB1c2goZ28pO1xuICAgICAgICB9XG4gICAgICAgIGdvLmFjdGl2ZT10cnVlO1xuICAgICAgICBnby5lbWl0KFwiT25TcGF3blwiKTtcbiAgICAgICAgcmV0dXJuIGdvO1xuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bihub2RlOmNjLk5vZGUpXG4gICAge1xuICAgICAgICBpZih0aGlzLkNvbnRhaW5zKG5vZGUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmVtaXQoXCJVblNwYXduXCIpO1xuICAgICAgICAgICAgbm9kZS5hY3RpdmU9ZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFVuU3Bhd25BbGwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlQXJyYXkuZm9yRWFjaCgobm9kZSk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuYWN0aXZlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuVW5TcGF3bihub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHVibGljIENvbnRhaW5zKG5vZGU6Y2MuTm9kZSk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZUFycmF5LmluZGV4T2Yobm9kZSk+LTE7XG4gICAgfVxufVxuIl19
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
cc._RF.push(module, '2cfaf+f7odMmpbGDBzXwot8', 'AudioManager');
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
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/SubPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a612iWQOxIIJvFwJpbJM9+', 'SubPool');
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
cc._RF.push(module, '6865fktnfdMcbJFlwi+Gdit', 'ObjectPool');
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
