
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