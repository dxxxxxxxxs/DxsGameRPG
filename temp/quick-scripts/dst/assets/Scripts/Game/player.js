
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDBDQUFxQztBQUNyQyw2REFBd0Q7QUFDeEQsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBVztJQUEvQztRQUFBLHFFQXlEQztRQXZEVyxnQkFBVSxHQUFZLEtBQUssQ0FBQzs7SUF1RHhDLENBQUM7SUFwRGEseUJBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNTLDBCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sd0JBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELDRCQUFXLEdBQVg7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELE1BQU07SUFDSSx1QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksbUJBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3hDLG1CQUFTLENBQUMsUUFBUSxJQUFJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMvQyxJQUFJLG1CQUFTLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDNUIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUMsbUJBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsSUFBSTtJQUNKLDJCQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSztZQUFFLE9BQU87UUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELCtCQUFjLEdBQWQsVUFBZSxPQUEwQixFQUFFLFlBQXNDLEVBQUUsYUFBb0M7UUFDbkgsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELDZCQUFZLEdBQVosVUFBYSxPQUEwQixFQUFFLFlBQXNDLEVBQUUsYUFBb0M7UUFDakgsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELGlDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLGNBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxjQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQztJQXhEZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXlEMUI7SUFBRCxhQUFDO0NBekRELEFBeURDLENBekRtQyxxQkFBVyxHQXlEOUM7a0JBekRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9Db21tb24vR2FtZVwiO1xuaW1wb3J0IElSZXN1bHRBYmxlIGZyb20gXCIuLi8uLi9Db21tb24vUG9vbC9JUmVzdWx0QWJsZVwiO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9TcmMvR2FtZUNvbnN0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5ZXIgZXh0ZW5kcyBJUmVzdWx0QWJsZSB7XG5cbiAgICBwcml2YXRlIGNhbktleURvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9XG4gICAgcHVibGljIG9uU3Bhd24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi546p5a625bey55Sf5oiQXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgdW5TcGF3bigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnjqnlrrblt7LmrbvkuqFcIik7XG4gICAgfVxuICAgIGFkZEV2ZW50KCkge1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX1BsYXllclVwLCB0aGlzLm9uUGxheWVyVXAsIHRoaXMpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9QbGF5ZXJVcCwgdGhpcy5vblBsYXllclVwLCB0aGlzKTtcbiAgICB9XG4gICAgLy/lvIDlp4vnp7vliqhcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA8IC02NDApIHtcbiAgICAgICAgICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5HQU1FT1ZFUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gR2FtZU1vZGVsLm1vdmVTcGVlZCAqIGR0O1xuICAgICAgICAgICAgR2FtZU1vZGVsLmRpc3RhbmNlICs9IEdhbWVNb2RlbC5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgICAgIGlmIChHYW1lTW9kZWwuZGlzdGFuY2UgPj0gMTIwMCkge1xuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX0NyZWF0ZU1hcCk7XG4gICAgICAgICAgICAgICAgR2FtZU1vZGVsLmRpc3RhbmNlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+i3s+i3g1xuICAgIG9uUGxheWVyVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbktleURvd24gPT0gZmFsc2UpIHJldHVybjtcbiAgICAgICAgbGV0IHJpZ2lkYm9keTIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIHJpZ2lkYm9keTIuYXBwbHlGb3JjZVRvQ2VudGVyKGNjLnYyKDAsIDEwMCkubXVsU2VsZig3MDApLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jYW5LZXlEb3duID0gZmFsc2U7XG4gICAgfVxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3Q6IGNjLlBoeXNpY3NDb250YWN0LCBzZWxmQ29sbGlkZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlciwgb3RoZXJDb2xsaWRlcjogY2MuUGh5c2ljc0JveENvbGxpZGVyKSB7XG4gICAgICAgIHRoaXMuY2FuS2V5RG93biA9IHRydWU7XG4gICAgfVxuICAgIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlcikge1xuICAgICAgICB0aGlzLmNhbktleURvd24gPSBmYWxzZTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIudGFnID09IDkpIHtcbiAgICAgICAgICAgIEdhbWUuT2JqZWN0UG9vbC5VblNwYXduKG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuR2V0Q29pbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=