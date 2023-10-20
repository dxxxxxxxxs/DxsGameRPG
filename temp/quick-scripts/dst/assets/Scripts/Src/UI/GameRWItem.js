
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