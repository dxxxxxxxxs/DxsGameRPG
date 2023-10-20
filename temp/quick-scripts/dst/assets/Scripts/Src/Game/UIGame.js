
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