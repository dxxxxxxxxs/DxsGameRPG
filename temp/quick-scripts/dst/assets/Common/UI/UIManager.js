
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