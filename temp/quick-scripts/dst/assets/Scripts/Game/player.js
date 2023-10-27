
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9302atw+Y1KS6Uv3OWgRUsS', 'player');
// Scripts/Game/player.ts

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
var Game_1 = require("../../Common/Game");
var IResultAble_1 = require("../../Common/Pool/IResultAble");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var player = /** @class */ (function (_super) {
    __extends(player, _super);
    function player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canKeyDown = false;
        return _this;
    }
    player.prototype.onEnable = function () {
        this.addEvent();
    };
    player.prototype.onDisable = function () {
        this.removeEvent();
    };
    player.prototype.onSpawn = function () {
        console.log("玩家已生成");
    };
    player.prototype.unSpawn = function () {
        console.log("玩家已死亡");
    };
    player.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_PlayerUp, this.onPlayerUp, this);
    };
    player.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_PlayerUp, this.onPlayerUp, this);
    };
    //开始移动
    player.prototype.update = function (dt) {
        if (this.node.active) {
            if (this.node.y < -640) {
                Game_1.default.Event.dispatch(GameConst_1.default.GAMEOVER);
                return;
            }
            this.node.x += GameModel_1.default.moveSpeed * dt;
            GameModel_1.default.distance += GameModel_1.default.moveSpeed * dt;
            if (GameModel_1.default.distance >= 1200) {
                Game_1.default.Event.dispatch(GameConst_1.default.UI_CreateMap);
                GameModel_1.default.distance = 0;
                GameModel_1.default.moveSpeed += 20;
            }
        }
    };
    //跳跃
    player.prototype.onPlayerUp = function () {
        if (this.canKeyDown == false)
            return;
        var rigidbody2 = this.node.getComponent(cc.RigidBody);
        rigidbody2.applyForceToCenter(cc.v2(0, 100).mulSelf(700), true);
        this.canKeyDown = false;
    };
    player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        this.canKeyDown = true;
    };
    player.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        this.canKeyDown = false;
    };
    player.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 9) {
            Game_1.default.ObjectPool.UnSpawn(other.node);
            Game_1.default.Event.dispatch(GameConst_1.default.GetCoin);
        }
    };
    player = __decorate([
        ccclass
    ], player);
    return player;
}(IResultAble_1.default));
exports.default = player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDBDQUFxQztBQUNyQyw2REFBd0Q7QUFDeEQsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBVztJQUEvQztRQUFBLHFFQTBEQztRQXhEVyxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUF3RHhDLENBQUM7SUFyRGEseUJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNTLDBCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sd0JBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELDRCQUFXLEdBQVg7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELE1BQU07SUFDSSx1QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksbUJBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxJQUFJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMvQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDNUIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUMsbUJBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixtQkFBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFDRCxJQUFJO0lBQ0osMkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLO1lBQUUsT0FBTztRQUNyQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsK0JBQWMsR0FBZCxVQUFlLE9BQTBCLEVBQUUsWUFBc0MsRUFBRSxhQUFvQztRQUNuSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsNkJBQVksR0FBWixVQUFhLE9BQTBCLEVBQUUsWUFBc0MsRUFBRSxhQUFvQztRQUNqSCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsY0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBekRnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEQxQjtJQUFELGFBQUM7Q0ExREQsQUEwREMsQ0ExRG1DLHFCQUFXLEdBMEQ5QztrQkExRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0NvbW1vbi9HYW1lXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4uLy4uL0NvbW1vbi9Qb29sL0lSZXN1bHRBYmxlXCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllciBleHRlbmRzIElSZXN1bHRBYmxlIHtcblxuICAgIHByaXZhdGUgY2FuS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbiAgICBwdWJsaWMgb25TcGF3bigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnjqnlrrblt7LnlJ/miJBcIik7XG4gICAgfVxuICAgIHB1YmxpYyB1blNwYXduKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIueOqeWutuW3suatu+S6oVwiKTtcbiAgICB9XG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfUGxheWVyVXAsIHRoaXMub25QbGF5ZXJVcCwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX1BsYXllclVwLCB0aGlzLm9uUGxheWVyVXAsIHRoaXMpO1xuICAgIH1cbiAgICAvL+W8gOWni+enu+WKqFxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLTY0MCkge1xuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LkdBTUVPVkVSKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSBHYW1lTW9kZWwubW92ZVNwZWVkICogZHQ7XG4gICAgICAgICAgICBHYW1lTW9kZWwuZGlzdGFuY2UgKz0gR2FtZU1vZGVsLm1vdmVTcGVlZCAqIGR0O1xuICAgICAgICAgICAgaWYgKEdhbWVNb2RlbC5kaXN0YW5jZSA+PSAxMjAwKSB7XG4gICAgICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfQ3JlYXRlTWFwKTtcbiAgICAgICAgICAgICAgICBHYW1lTW9kZWwuZGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICAgIEdhbWVNb2RlbC5tb3ZlU3BlZWQgKz0gMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ot7Pot4NcbiAgICBvblBsYXllclVwKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5LZXlEb3duID09IGZhbHNlKSByZXR1cm47XG4gICAgICAgIGxldCByaWdpZGJvZHkyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICByaWdpZGJvZHkyLmFwcGx5Rm9yY2VUb0NlbnRlcihjYy52MigwLCAxMDApLm11bFNlbGYoNzAwKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FuS2V5RG93biA9IGZhbHNlO1xuICAgIH1cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlcikge1xuICAgICAgICB0aGlzLmNhbktleURvd24gPSB0cnVlO1xuICAgIH1cbiAgICBvbkVuZENvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyLCBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIpIHtcbiAgICAgICAgdGhpcy5jYW5LZXlEb3duID0gZmFsc2U7XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSA5KSB7XG4gICAgICAgICAgICBHYW1lLk9iamVjdFBvb2wuVW5TcGF3bihvdGhlci5ub2RlKTtcbiAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LkdldENvaW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19