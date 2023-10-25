
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDBDQUFxQztBQUNyQyw2REFBd0Q7QUFDeEQsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBVztJQUEvQztRQUFBLHFFQW9EQztRQWxEVyxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUFrRHhDLENBQUM7SUEvQ2EseUJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNTLDBCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sd0JBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELDRCQUFXLEdBQVg7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELE1BQU07SUFDSSx1QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksbUJBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUNELElBQUk7SUFDSiwyQkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUs7WUFBRSxPQUFPO1FBQ3JDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCwrQkFBYyxHQUFkLFVBQWUsT0FBMEIsRUFBRSxZQUFzQyxFQUFFLGFBQW9DO1FBQ25ILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDRCw2QkFBWSxHQUFaLFVBQWEsT0FBMEIsRUFBRSxZQUFzQyxFQUFFLGFBQW9DO1FBQ2pILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxpQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNoQixjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7SUFuRGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FvRDFCO0lBQUQsYUFBQztDQXBERCxBQW9EQyxDQXBEbUMscUJBQVcsR0FvRDlDO2tCQXBEb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vQ29tbW9uL0dhbWVcIjtcbmltcG9ydCBJUmVzdWx0QWJsZSBmcm9tIFwiLi4vLi4vQ29tbW9uL1Bvb2wvSVJlc3VsdEFibGVcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IEdhbWVDb25zdCBmcm9tIFwiLi4vU3JjL0dhbWVDb25zdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGxheWVyIGV4dGVuZHMgSVJlc3VsdEFibGUge1xuXG4gICAgcHJpdmF0ZSBjYW5LZXlEb3duOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxuICAgIHB1YmxpYyBvblNwYXduKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIueOqeWutuW3sueUn+aIkFwiKTtcbiAgICB9XG4gICAgcHVibGljIHVuU3Bhd24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi546p5a625bey5q275LqhXCIpO1xuICAgIH1cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9QbGF5ZXJVcCwgdGhpcy5vblBsYXllclVwLCB0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfUGxheWVyVXAsIHRoaXMub25QbGF5ZXJVcCwgdGhpcyk7XG4gICAgfVxuICAgIC8v5byA5aeL56e75YqoXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtNjQwKSB7XG4gICAgICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR0FNRU9WRVIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IEdhbWVNb2RlbC5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+i3s+i3g1xuICAgIG9uUGxheWVyVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbktleURvd24gPT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgbGV0IHJpZ2lkYm9keTIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHJpZ2lkYm9keTIuYXBwbHlGb3JjZVRvQ2VudGVyKGNjLnYyKDAsIDEwMCkubXVsU2VsZig3MDApLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jYW5LZXlEb3duID0gZmFsc2U7XG4gICAgfVxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0JveENvbGxpZGVyKSB7XG4gICAgICAgIHRoaXMuY2FuS2V5RG93biA9IHRydWU7XG4gICAgfVxuICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlcikge1xuICAgICAgICB0aGlzLmNhbktleURvd24gPSBmYWxzZTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIudGFnID09IDkpIHtcbiAgICAgICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduKG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR2V0Q29pbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=