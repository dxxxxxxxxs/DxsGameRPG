
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