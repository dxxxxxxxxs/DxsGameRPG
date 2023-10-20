
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