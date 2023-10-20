
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