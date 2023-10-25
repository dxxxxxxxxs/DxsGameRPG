
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Common/Audio/AudioManager');
require('./assets/Common/Audio/AudioRoot');
require('./assets/Common/Bundle/BundleManager');
require('./assets/Common/Event/EventManager');
require('./assets/Common/Game');
require('./assets/Common/Pool/IResultAble');
require('./assets/Common/Pool/ObjectPool');
require('./assets/Common/Pool/SubPool');
require('./assets/Common/Tools/CCTools');
require('./assets/Common/UI/UIManager');
require('./assets/Common/UI/UINode');
require('./assets/Common/UI/UIView');
require('./assets/Scripts/Game/Coin');
require('./assets/Scripts/Game/GameManager');
require('./assets/Scripts/Game/player');
require('./assets/Scripts/Model/GameModel');
require('./assets/Scripts/Src/GameConst');
require('./assets/Scripts/UI/GameStartPanel');
require('./assets/Scripts/UI/UIGame');
require('./assets/Scripts/UI/UIGameOver');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/UI/UINode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a08c7aL7dBJwZdBuCiBtBK+', 'UINode');
// Common/UI/UINode.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UINode = void 0;
var UINode = /** @class */ (function () {
    function UINode(ccNode) {
        this.ccNode = ccNode;
        this.cacheChildren = new Map();
    }
    UINode.prototype.child = function (path, cache) {
        if (cache === void 0) { cache = true; }
        if (this.cacheChildren.has(path)) {
            return this.cacheChildren.get(path);
        }
        else {
            var ccn = this.ccNode.getChildByName(path);
            if (ccn == null) {
                return null;
            }
            else {
                var n = new UINode(ccn);
                if (cache === true) {
                    this.cacheChildren.set(path, n);
                }
                return n;
            }
        }
    };
    Object.defineProperty(UINode.prototype, "node", {
        get: function () {
            return this.ccNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UINode.prototype, "sprite", {
        get: function () {
            return this.ccNode.getComponent(cc.Sprite);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UINode.prototype, "button", {
        get: function () {
            return this.ccNode.getComponent(cc.Button);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UINode.prototype, "layout", {
        get: function () {
            return this.ccNode.getComponent(cc.Layout);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UINode.prototype, "label", {
        get: function () {
            return this.ccNode.getComponent(cc.Label);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UINode.prototype, "editBox", {
        get: function () {
            return this.ccNode.getComponent(cc.EditBox);
        },
        enumerable: false,
        configurable: true
    });
    return UINode;
}());
exports.UINode = UINode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBR0ksZ0JBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFDbkQsQ0FBQztJQUVELHNCQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7YUFDWjtTQUNKO0lBQ0wsQ0FBQztJQUVELHNCQUFJLHdCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5QkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVSU5vZGUge1xuICAgIHByaXZhdGUgY2FjaGVDaGlsZHJlbjogTWFwPHN0cmluZywgVUlOb2RlPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2NOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVDaGlsZHJlbiA9IG5ldyBNYXA8c3RyaW5nLCBVSU5vZGU+KCk7XG4gICAgfVxuXG4gICAgY2hpbGQocGF0aDogc3RyaW5nLCBjYWNoZSA9IHRydWUpOiBVSU5vZGUge1xuICAgICAgICBpZiAodGhpcy5jYWNoZUNoaWxkcmVuLmhhcyhwYXRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVDaGlsZHJlbi5nZXQocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2NuID0gdGhpcy5jY05vZGUuZ2V0Q2hpbGRCeU5hbWUocGF0aCk7XG4gICAgICAgICAgICBpZiAoY2NuID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSBuZXcgVUlOb2RlKGNjbik7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVDaGlsZHJlbi5zZXQocGF0aCwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5vZGUoKTogY2MuTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNjTm9kZTtcbiAgICB9XG5cbiAgICBnZXQgc3ByaXRlKCk6IGNjLlNwcml0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNjTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uKCk6IGNjLkJ1dHRvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNjTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB9XG5cbiAgICBnZXQgbGF5b3V0KCk6IGNjLkxheW91dCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNjTm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKTogY2MuTGFiZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5jY05vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdEJveCgpOiBjYy5FZGl0Qm94IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2NOb2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15c44HP14RFPqRMMRnGlUVV', 'GameModel');
// Scripts/Model/GameModel.ts

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
var UIGame_1 = require("../UI/UIGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    Object.defineProperty(GameModel, "gameState", {
        get: function () {
            return this.GameState;
        },
        set: function (state) {
            if (state) {
                switch (state) {
                    case UIGame_1.GameState.game:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.pause:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.over:
                        this.GameState = state;
                        break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**屏幕可视化宽度 */
    GameModel.gameWidth = 0;
    /**屏幕可视化高度 */
    GameModel.gameHeigth = 0;
    /**玩家移动速度 */
    GameModel.moveSpeed = 200;
    /**当前游戏分数 */
    GameModel.gameScore = 0;
    /**当前游戏状态 */
    GameModel.GameState = UIGame_1.GameState.null;
    GameModel = __decorate([
        ccclass
    ], GameModel);
    return GameModel;
}());
exports.default = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01vZGVsL0dhbWVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7O0FBRXRGLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBOEJBLENBQUM7SUFsQkcsc0JBQVcsc0JBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXFCLEtBQUs7WUFDdEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsUUFBUSxLQUFLLEVBQUU7b0JBQ1gsS0FBSyxrQkFBUyxDQUFDLElBQUk7d0JBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLE1BQU07b0JBQ1YsS0FBSyxrQkFBUyxDQUFDLEtBQUs7d0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNO29CQUNWLEtBQUssa0JBQVMsQ0FBQyxJQUFJO3dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNO2lCQUNiO2FBQ0o7UUFDTCxDQUFDOzs7T0FmQTtJQWJELGFBQWE7SUFDQyxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUNwQyxhQUFhO0lBQ0Msb0JBQVUsR0FBVyxDQUFDLENBQUM7SUFDckMsWUFBWTtJQUNFLG1CQUFTLEdBQVcsR0FBRyxDQUFDO0lBQ3RDLFlBQVk7SUFDRSxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUVwQyxZQUFZO0lBQ0csbUJBQVMsR0FBYyxrQkFBUyxDQUFDLElBQUksQ0FBQztJQVhwQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEI3QjtJQUFELGdCQUFDO0NBOUJELEFBOEJDLElBQUE7a0JBOUJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9VSS9VSUdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNb2RlbCB7XG4gICAgLyoq5bGP5bmV5Y+v6KeG5YyW5a695bqmICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lV2lkdGg6IG51bWJlciA9IDA7XG4gICAgLyoq5bGP5bmV5Y+v6KeG5YyW6auY5bqmICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lSGVpZ3RoOiBudW1iZXIgPSAwO1xuICAgIC8qKueOqeWutuenu+WKqOmAn+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbW92ZVNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgLyoq5b2T5YmN5ri45oiP5YiG5pWwICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICAvKirlvZPliY3muLjmiI/nirbmgIEgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBHYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5udWxsO1xuICAgIHN0YXRpYyBnZXQgZ2FtZVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5HYW1lU3RhdGU7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQgZ2FtZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLmdhbWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZVN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLnBhdXNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5vdmVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Tools/CCTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac564/AKwJOR5oBIwU5DcEh', 'CCTools');
// Common/Tools/CCTools.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CCTools = /** @class */ (function (_super) {
    __extends(CCTools, _super);
    function CCTools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CCTools.isValidEmail = function (email) {
        // 邮箱地址的正则表达式 
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // 使用正则表达式验证输入字符串
        return emailRegex.test(email);
    };
    /**
     * 添加一个节点
     * @param parent 父节点
     * @param name 节点名称
     * @param size 节点大小
     */
    CCTools.addNode = function (parent, name, size) {
        if (size === void 0) { size = cc.view.getVisibleSize(); }
        var node = new cc.Node(name);
        node.setContentSize(size);
        parent.addChild(node);
        return node;
    };
    CCTools = __decorate([
        ccclass
    ], CCTools);
    return CCTools;
}(cc.Component));
exports.default = CCTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVG9vbHMvQ0NUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDs7SUFxQkEsQ0FBQztJQXBCaUIsb0JBQVksR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxjQUFjO1FBQ2QsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFFaEQsaUJBQWlCO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxlQUFPLEdBQXJCLFVBQXNCLE1BQWUsRUFBRSxJQUFhLEVBQUUsSUFBd0M7UUFBeEMscUJBQUEsRUFBQSxPQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUMxRixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFwQmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FxQjNCO0lBQUQsY0FBQztDQXJCRCxBQXFCQyxDQXJCb0MsRUFBRSxDQUFDLFNBQVMsR0FxQmhEO2tCQXJCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ0NUb29scyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICAvLyDpgq7nrrHlnLDlnYDnmoTmraPliJnooajovr7lvI8gXG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcblxuICAgICAgICAvLyDkvb/nlKjmraPliJnooajovr7lvI/pqozor4HovpPlhaXlrZfnrKbkuLJcbiAgICAgICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5re75Yqg5LiA5Liq6IqC54K5XG4gICAgICogQHBhcmFtIHBhcmVudCDniLboioLngrkgXG4gICAgICogQHBhcmFtIG5hbWUg6IqC54K55ZCN56ewXG4gICAgICogQHBhcmFtIHNpemUg6IqC54K55aSn5bCPXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhZGROb2RlKHBhcmVudDogY2MuTm9kZSwgbmFtZT86IHN0cmluZywgc2l6ZTogY2MuU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKSk6IGNjLk5vZGUge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKG5hbWUpO1xuICAgICAgICBub2RlLnNldENvbnRlbnRTaXplKHNpemUpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/SubPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5755gz6m5LQrVRIXDW/yhM', 'SubPool');
// Common/Pool/SubPool.ts

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
var SubPool = /** @class */ (function () {
    function SubPool(prefab, parent) {
        this.nodeArray = [];
        this.myPrefab = null;
        this.myParent = null;
        this.myPrefab = prefab;
        this.myParent = parent;
    }
    Object.defineProperty(SubPool.prototype, "poolName", {
        get: function () { return this.myPrefab.name; },
        enumerable: false,
        configurable: true
    });
    SubPool.prototype.init = function () {
        //this.myPrefab = await BundleManager.load<cc.Prefab>(this.poolName,"ObjectPool");
    };
    SubPool.prototype.Spawn = function () {
        var _this = this;
        var go = null;
        this.nodeArray.forEach(function (node) {
            if (!node.active) {
                go = node;
                go.setParent(_this.myParent);
                console.log(_this.myParent.name);
            }
        });
        if (go == null) {
            go = cc.instantiate(this.myPrefab);
            go.setParent(this.myParent);
            this.nodeArray.push(go);
        }
        go.active = true;
        go.emit("OnSpawn");
        return go;
    };
    SubPool.prototype.UnSpawn = function (node) {
        if (this.Contains(node)) {
            node.emit("UnSpawn");
            node.active = false;
        }
    };
    SubPool.prototype.UnSpawnAll = function () {
        var _this = this;
        this.nodeArray.forEach(function (node) {
            if (node.active) {
                _this.UnSpawn(node);
            }
        });
    };
    SubPool.prototype.Contains = function (node) {
        return this.nodeArray.indexOf(node) > -1;
    };
    SubPool = __decorate([
        ccclass
    ], SubPool);
    return SubPool;
}());
exports.default = SubPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9TdWJQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFLaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFLSSxpQkFBWSxNQUFpQixFQUFFLE1BQWU7UUFIdEMsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQVBELHNCQUFXLDZCQUFRO2FBQW5CLGNBQXdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQVFwRCxzQkFBSSxHQUFKO1FBQ0ksa0ZBQWtGO0lBQ3RGLENBQUM7SUFDTSx1QkFBSyxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksRUFBRSxHQUFZLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDVixFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDWixFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7UUFDRCxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLElBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBN0NnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEMzQjtJQUFELGNBQUM7Q0E5Q0QsQUE4Q0MsSUFBQTtrQkE5Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YlBvb2wge1xuICAgIHB1YmxpYyBnZXQgcG9vbE5hbWUoKSB7IHJldHVybiB0aGlzLm15UHJlZmFiLm5hbWU7IH1cbiAgICBwcml2YXRlIG5vZGVBcnJheTogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBteVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIG15UGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6IGNjLlByZWZhYiwgcGFyZW50OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubXlQcmVmYWIgPSBwcmVmYWI7XG4gICAgICAgIHRoaXMubXlQYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vdGhpcy5teVByZWZhYiA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KHRoaXMucG9vbE5hbWUsXCJPYmplY3RQb29sXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgU3Bhd24oKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBnbzogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZUFycmF5LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZ28gPSBub2RlO1xuICAgICAgICAgICAgICAgIGdvLnNldFBhcmVudCh0aGlzLm15UGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15UGFyZW50Lm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoZ28gPT0gbnVsbCkge1xuICAgICAgICAgICAgZ28gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm15UHJlZmFiKTtcbiAgICAgICAgICAgIGdvLnNldFBhcmVudCh0aGlzLm15UGFyZW50KTtcbiAgICAgICAgICAgIHRoaXMubm9kZUFycmF5LnB1c2goZ28pO1xuICAgICAgICB9XG4gICAgICAgIGdvLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGdvLmVtaXQoXCJPblNwYXduXCIpO1xuICAgICAgICByZXR1cm4gZ287XG4gICAgfVxuICAgIHB1YmxpYyBVblNwYXduKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuQ29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUuZW1pdChcIlVuU3Bhd25cIik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBVblNwYXduQWxsKCkge1xuICAgICAgICB0aGlzLm5vZGVBcnJheS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlVuU3Bhd24obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBDb250YWlucyhub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVBcnJheS5pbmRleE9mKG5vZGUpID4gLTE7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba65f5gPDhPD7aB64BsmlaE', 'AudioRoot');
// Common/Audio/AudioRoot.ts

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
var Game_1 = require("../Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioRoot = /** @class */ (function (_super) {
    __extends(AudioRoot, _super);
    function AudioRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        return _this;
    }
    AudioRoot.prototype.onLoad = function () {
        var audioSource = this.node.getComponent(cc.AudioSource);
        this.audioSource = audioSource;
        Game_1.default.Audio.init(audioSource);
        console.log("audioManager Init!");
    };
    AudioRoot = __decorate([
        ccclass
    ], AudioRoot);
    return AudioRoot;
}(cc.Component));
exports.default = AudioRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9Sb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLGdDQUEyQjtBQUdyQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQVVDO1FBVEcsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDOztJQVNwQyxDQUFDO0lBUGEsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBQyxXQUFXLENBQUM7UUFDN0IsY0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFUZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQVU3QjtJQUFELGdCQUFDO0NBVkQsQUFVQyxDQVZzQyxFQUFFLENBQUMsU0FBUyxHQVVsRDtrQkFWb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vR2FtZVwiO1xuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Sb290IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBhdWRpb1NvdXJjZTpjYy5BdWRpb1NvdXJjZT1udWxsO1xuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGF1ZGlvU291cmNlPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgICAgICBHYW1lLkF1ZGlvLmluaXQoYXVkaW9Tb3VyY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1ZGlvTWFuYWdlciBJbml0IVwiKTtcbiAgICAgICAgXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93afeYf9iFHQ614c6aV+EOG', 'GameConst');
// Scripts/Src/GameConst.ts

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
var GameConst = /** @class */ (function () {
    function GameConst() {
    }
    GameConst.UI_GameStart = "UI_GameStart";
    GameConst.GAMESTART = "GAMESTART";
    GameConst.KillOneCount = "KillOneCount";
    GameConst.UI_GameOver = "UI_GameOver";
    GameConst.GAMEOVER = "GAMEOVER";
    GameConst.UI_UpdateMusic = "UI_UpdateMusic";
    GameConst.UI_FinishRW = "UI_FinishRW";
    GameConst.UI_PlayerUp = "UI_PlayerUp";
    GameConst.UI_BackStart = "UI_BackStart";
    GameConst.GetCoin = "GetCoin";
    GameConst.UI_GetCoin = "UI_GetCoin";
    GameConst = __decorate([
        ccclass
    ], GameConst);
    return GameConst;
}());
exports.default = GameConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9HYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBc0JBLENBQUM7SUFyQjBCLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBRTlCLG1CQUFTLEdBQUcsV0FBVyxDQUFDO0lBRXhCLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBRTlCLHFCQUFXLEdBQUcsYUFBYSxDQUFDO0lBRTVCLGtCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRXRCLHdCQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFFbEMscUJBQVcsR0FBRyxhQUFhLENBQUM7SUFFNUIscUJBQVcsR0FBRyxhQUFhLENBQUM7SUFFNUIsc0JBQVksR0FBRyxjQUFjLENBQUM7SUFFOUIsaUJBQU8sR0FBRyxTQUFTLENBQUM7SUFFcEIsb0JBQVUsR0FBRyxZQUFZLENBQUM7SUFyQmhDLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FzQjdCO0lBQUQsZ0JBQUM7Q0F0QkQsQUFzQkMsSUFBQTtrQkF0Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25zdCB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSV9HYW1lU3RhcnQgPSBcIlVJX0dhbWVTdGFydFwiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHQU1FU1RBUlQgPSBcIkdBTUVTVEFSVFwiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLaWxsT25lQ291bnQgPSBcIktpbGxPbmVDb3VudFwiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSV9HYW1lT3ZlciA9IFwiVUlfR2FtZU92ZXJcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR0FNRU9WRVIgPSBcIkdBTUVPVkVSXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVJX1VwZGF0ZU11c2ljID0gXCJVSV9VcGRhdGVNdXNpY1wiO1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBVSV9GaW5pc2hSVyA9IFwiVUlfRmluaXNoUldcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUlfUGxheWVyVXAgPSBcIlVJX1BsYXllclVwXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVJX0JhY2tTdGFydCA9IFwiVUlfQmFja1N0YXJ0XCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdldENvaW4gPSBcIkdldENvaW5cIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUlfR2V0Q29pbiA9IFwiVUlfR2V0Q29pblwiO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/GameStartPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d13f/osa1LeK0UwYAj5TwM', 'GameStartPanel');
// Scripts/UI/GameStartPanel.ts

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
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStartPanel = /** @class */ (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = null;
        _this.bar = null;
        return _this;
    }
    GameStartPanel.prototype.onBtnStartGame = function () {
        var _this = this;
        this.loading.active = true;
        cc.director.preloadScene("Game", function (completedCount, totalCount, item) {
            // 更新进度条
            _this.bar.progress = completedCount / totalCount;
        }, function (error) {
            if (!error) {
                Game_1.default.Event.dispatch(GameConst_1.default.GAMESTART);
            }
            else {
                console.error("Failed to preload scene: ", error);
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], GameStartPanel.prototype, "loading", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameStartPanel.prototype, "bar", void 0);
    GameStartPanel = __decorate([
        ccclass
    ], GameStartPanel);
    return GameStartPanel;
}(cc.Component));
exports.default = GameStartPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL0dhbWVTdGFydFBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDBDQUFxQztBQUNyQyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFrQkM7UUFoQkcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQW1CLElBQUksQ0FBQzs7SUFjL0IsQ0FBQztJQWJHLHVDQUFjLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUk7WUFDOUQsUUFBUTtZQUNSLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxVQUFVLENBQUM7UUFDcEQsQ0FBQyxFQUFFLFVBQUMsS0FBWTtZQUNaLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBZkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNFO0lBSlYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWtCbEM7SUFBRCxxQkFBQztDQWxCRCxBQWtCQyxDQWxCMkMsRUFBRSxDQUFDLFNBQVMsR0FrQnZEO2tCQWxCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vQ29tbW9uL0dhbWVcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGFydFBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG4gICAgb25CdG5TdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lXCIsIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgLy8g5pu05paw6L+b5bqm5p2hXG4gICAgICAgICAgICB0aGlzLmJhci5wcm9ncmVzcyA9IGNvbXBsZXRlZENvdW50IC8gdG90YWxDb3VudDtcbiAgICAgICAgfSwgKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LkdBTUVTVEFSVCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcHJlbG9hZCBzY2VuZTogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game/Coin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87c24q/SvBAmZegb7kQ0lSk', 'Coin');
// Scripts/Game/Coin.ts

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
var IResultAble_1 = require("../../Common/Pool/IResultAble");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coin.prototype.onEnable = function () {
        var tween1 = cc.tween(this.node).to(0.5, { scaleX: 0.4 }, { easing: 'sineOut' });
        var tween2 = cc.tween(this.node).to(0.5, { scaleX: 1 }, { easing: 'sineOut' });
        var tween3 = cc.tween(this.node).sequence(tween1, tween2);
        cc.tween(this.node).repeatForever(tween3).start();
    };
    Coin.prototype.onSpawn = function () {
    };
    Coin.prototype.unSpawn = function () {
    };
    Coin = __decorate([
        ccclass
    ], Coin);
    return Coin;
}(IResultAble_1.default));
exports.default = Coin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvQ29pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVc7SUFBN0M7O0lBV0EsQ0FBQztJQVZVLHVCQUFRLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFDTSxzQkFBTyxHQUFkO0lBQ0EsQ0FBQztJQUNNLHNCQUFPLEdBQWQ7SUFDQSxDQUFDO0lBVmdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FXeEI7SUFBRCxXQUFDO0NBWEQsQUFXQyxDQVhpQyxxQkFBVyxHQVc1QztrQkFYb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4uLy4uL0NvbW1vbi9Qb29sL0lSZXN1bHRBYmxlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIGV4dGVuZHMgSVJlc3VsdEFibGUge1xuICAgIHB1YmxpYyBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHR3ZWVuMSA9IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCB7IHNjYWxlWDogMC40IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XG4gICAgICAgIGxldCB0d2VlbjIgPSBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgeyBzY2FsZVg6IDEgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KTtcbiAgICAgICAgbGV0IHR3ZWVuMyA9IGNjLnR3ZWVuKHRoaXMubm9kZSkuc2VxdWVuY2UodHdlZW4xLCB0d2VlbjIpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnJlcGVhdEZvcmV2ZXIodHdlZW4zKS5zdGFydCgpO1xuICAgIH1cbiAgICBwdWJsaWMgb25TcGF3bigpIHtcbiAgICB9XG4gICAgcHVibGljIHVuU3Bhd24oKSB7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/UI/UIView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5d99XfdgNJRLu36EMbMqJ/', 'UIView');
// Common/UI/UIView.ts

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
exports.UIView = exports.UIShowTypes = void 0;
var UIManager_1 = require("./UIManager");
var UINode_1 = require("./UINode");
/**
 * UIView界面基础类
 *
 * 1. 快速关闭与屏蔽点击的选项配置
 * 2. 界面缓存设置（开启后界面关闭不会被释放，以便下次快速打开）
 * 3. 界面显示类型配置
 *
 * 4. 加载资源接口（随界面释放自动释放），this.loadRes(xxx)
 * 5. 由UIManager释放
 *
 * 5. 界面初始化回调（只调用一次）
 * 6. 界面打开回调（每次打开回调）
 * 7. 界面打开动画播放结束回调（动画播放完回调）
 * 8. 界面关闭回调
 * 9. 界面置顶回调
 *
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 界面展示类型 */
var UIShowTypes;
(function (UIShowTypes) {
    UIShowTypes[UIShowTypes["UIFullScreen"] = 0] = "UIFullScreen";
    UIShowTypes[UIShowTypes["UIAddition"] = 1] = "UIAddition";
    UIShowTypes[UIShowTypes["UISingle"] = 2] = "UISingle";
})(UIShowTypes = exports.UIShowTypes || (exports.UIShowTypes = {}));
;
var UIView = /** @class */ (function (_super) {
    __extends(UIView, _super);
    function UIView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 快速关闭 */
        _this.quickClose = false;
        /** 屏蔽点击选项 在UIConf设置屏蔽点击*/
        // @property
        // preventTouch: boolean = true;
        /** 缓存选项 */
        _this.cache = false;
        /** 界面显示类型 */
        _this.showType = UIShowTypes.UISingle;
        /** 界面id */
        _this.uiId = 0;
        return _this;
    }
    Object.defineProperty(UIView.prototype, "uiNode", {
        get: function () {
            if (this._uiNode == null) {
                this._uiNode = new UINode_1.UINode(this.node);
            }
            return this._uiNode;
        },
        enumerable: false,
        configurable: true
    });
    /********************** UI的回调 ***********************/
    /**
     * 当界面被创建时回调，生命周期内只调用
     * @param args 可变参数
     */
    UIView.prototype.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    /**
     * 当界面被打开时回调，每次调用Open时回调
     * @param fromUI 从哪个UI打开的
     * @param args 可变参数
     */
    UIView.prototype.onOpen = function (fromUI) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    /**
     * 每次界面Open动画播放完毕时回调
     */
    UIView.prototype.onOpenAniOver = function () {
    };
    /**
     * 当界面被关闭时回调，每次调用Close时回调
     * 返回值会传递给下一个界面
     */
    UIView.prototype.onClose = function () {
    };
    /**
     * 当界面被置顶时回调，Open时并不会回调该函数
     * @param preID 前一个ui
     * @param args 可变参数，
     */
    UIView.prototype.onTop = function (preID) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    UIView.prototype.onBtn_close = function () {
        UIManager_1.uiManager.close(this);
    };
    /**  静态变量，用于区分相同界面的不同实例 */
    UIView.uiIndex = 0;
    __decorate([
        property
    ], UIView.prototype, "quickClose", void 0);
    __decorate([
        property
    ], UIView.prototype, "cache", void 0);
    __decorate([
        property({ type: cc.Enum(UIShowTypes) })
    ], UIView.prototype, "showType", void 0);
    UIView = __decorate([
        ccclass
    ], UIView);
    return UIView;
}(cc.Component));
exports.UIView = UIView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Rix5Q0FBd0M7QUFDeEMsbUNBQWtDO0FBRWxDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsYUFBYTtBQUNiLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQiw2REFBWSxDQUFBO0lBQ1oseURBQVUsQ0FBQTtJQUNWLHFEQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFBQSxDQUFDO0FBR0Y7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUF3RUM7UUF0RUcsV0FBVztRQUVYLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLDBCQUEwQjtRQUMxQixZQUFZO1FBQ1osZ0NBQWdDO1FBQ2hDLFdBQVc7UUFFWCxXQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGFBQWE7UUFFYixjQUFRLEdBQWdCLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDN0MsV0FBVztRQUNKLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBeUQ1QixDQUFDO0lBbkRHLHNCQUFJLDBCQUFNO2FBQVY7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNEQUFzRDtJQUN0RDs7O09BR0c7SUFDSSxxQkFBSSxHQUFYO1FBQVksY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUFFLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O0lBRXJDLENBQUM7SUFFRDs7T0FFRztJQUNJLDhCQUFhLEdBQXBCO0lBQ0EsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHNCQUFLLEdBQVosVUFBYSxLQUFhO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7SUFFbkMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0kscUJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXZERCwwQkFBMEI7SUFDWCxjQUFPLEdBQVcsQ0FBQyxDQUFDO0lBYm5DO1FBREMsUUFBUTs4Q0FDbUI7SUFNNUI7UUFEQyxRQUFRO3lDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzs0Q0FDSTtJQWJwQyxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBd0VsQjtJQUFELGFBQUM7Q0F4RUQsQUF3RUMsQ0F4RTJCLEVBQUUsQ0FBQyxTQUFTLEdBd0V2QztBQXhFWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyB1aU1hbmFnZXIgfSBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcbmltcG9ydCB7IFVJTm9kZSB9IGZyb20gXCIuL1VJTm9kZVwiO1xuXG4vKipcbiAqIFVJVmlld+eVjOmdouWfuuehgOexu1xuICogXG4gKiAxLiDlv6vpgJ/lhbPpl63kuI7lsY/olL3ngrnlh7vnmoTpgInpobnphY3nva5cbiAqIDIuIOeVjOmdoue8k+WtmOiuvue9ru+8iOW8gOWQr+WQjueVjOmdouWFs+mXreS4jeS8muiiq+mHiuaUvu+8jOS7peS+v+S4i+asoeW/q+mAn+aJk+W8gO+8iVxuICogMy4g55WM6Z2i5pi+56S657G75Z6L6YWN572uXG4gKiBcbiAqIDQuIOWKoOi9vei1hOa6kOaOpeWPo++8iOmaj+eVjOmdoumHiuaUvuiHquWKqOmHiuaUvu+8ie+8jHRoaXMubG9hZFJlcyh4eHgpXG4gKiA1LiDnlLFVSU1hbmFnZXLph4rmlL5cbiAqIFxuICogNS4g55WM6Z2i5Yid5aeL5YyW5Zue6LCD77yI5Y+q6LCD55So5LiA5qyh77yJXG4gKiA2LiDnlYzpnaLmiZPlvIDlm57osIPvvIjmr4/mrKHmiZPlvIDlm57osIPvvIlcbiAqIDcuIOeVjOmdouaJk+W8gOWKqOeUu+aSreaUvue7k+adn+Wbnuiwg++8iOWKqOeUu+aSreaUvuWujOWbnuiwg++8iVxuICogOC4g55WM6Z2i5YWz6Zet5Zue6LCDXG4gKiA5LiDnlYzpnaLnva7pobblm57osINcbiAqIFxuICovXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDnlYzpnaLlsZXnpLrnsbvlnosgKi9cbmV4cG9ydCBlbnVtIFVJU2hvd1R5cGVzIHtcbiAgICBVSUZ1bGxTY3JlZW4sICAgICAgIC8vIOWFqOWxj+aYvuekuu+8jOWFqOWxj+eVjOmdouS9v+eUqOivpemAiemhueWPr+iOt+W+l+abtOmrmOaAp+iDvVxuICAgIFVJQWRkaXRpb24sICAgICAgICAgLy8g5Y+g5Yqg5pi+56S677yM5oCn6IO96L6D5beuXG4gICAgVUlTaW5nbGUsICAgICAgICAgICAvLyDljZXnlYzpnaLmmL7npLrvvIzlj6rmmL7npLrlvZPliY3nlYzpnaLlkozog4zmma/nlYzpnaLvvIzmgKfog73ovoPlpb1cbn07XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVUlWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qKiDlv6vpgJ/lhbPpl60gKi9cbiAgICBAcHJvcGVydHlcbiAgICBxdWlja0Nsb3NlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOWxj+iUveeCueWHu+mAiemhuSDlnKhVSUNvbmborr7nva7lsY/olL3ngrnlh7sqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHByZXZlbnRUb3VjaDogYm9vbGVhbiA9IHRydWU7XG4gICAgLyoqIOe8k+WtmOmAiemhuSAqL1xuICAgIEBwcm9wZXJ0eVxuICAgIGNhY2hlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIOeVjOmdouaYvuekuuexu+WeiyAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlTaG93VHlwZXMpIH0pXG4gICAgc2hvd1R5cGU6IFVJU2hvd1R5cGVzID0gVUlTaG93VHlwZXMuVUlTaW5nbGU7XG4gICAgLyoqIOeVjOmdomlkICovXG4gICAgcHVibGljIHVpSWQ6IG51bWJlciA9IDA7XG4gICAgLyoqICDpnZnmgIHlj5jph4/vvIznlKjkuo7ljLrliIbnm7jlkIznlYzpnaLnmoTkuI3lkIzlrp7kvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB1aUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBfdWlOb2RlOiBVSU5vZGU7XG5cbiAgICBnZXQgdWlOb2RlKCk6IFVJTm9kZSB7XG4gICAgICAgIGlmICh0aGlzLl91aU5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fdWlOb2RlID0gbmV3IFVJTm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl91aU5vZGU7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKiogVUnnmoTlm57osIMgKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5Yib5bu65pe25Zue6LCD77yM55Sf5ZG95ZGo5pyf5YaF5Y+q6LCD55SoXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+v5Y+Y5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIGluaXQoLi4uYXJncyk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5omT5byA5pe25Zue6LCD77yM5q+P5qyh6LCD55SoT3BlbuaXtuWbnuiwg1xuICAgICAqIEBwYXJhbSBmcm9tVUkg5LuO5ZOq5LiqVUnmiZPlvIDnmoRcbiAgICAgKiBAcGFyYW0gYXJncyDlj6/lj5jlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgb25PcGVuKGZyb21VSTogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmr4/mrKHnlYzpnaJPcGVu5Yqo55S75pKt5pS+5a6M5q+V5pe25Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIG9uT3BlbkFuaU92ZXIoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr5YWz6Zet5pe25Zue6LCD77yM5q+P5qyh6LCD55SoQ2xvc2Xml7blm57osINcbiAgICAgKiDov5Tlm57lgLzkvJrkvKDpgJLnu5nkuIvkuIDkuKrnlYzpnaJcbiAgICAgKi9cbiAgICBwdWJsaWMgb25DbG9zZSgpOiBhbnkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b2T55WM6Z2i6KKr572u6aG25pe25Zue6LCD77yMT3BlbuaXtuW5tuS4jeS8muWbnuiwg+ivpeWHveaVsFxuICAgICAqIEBwYXJhbSBwcmVJRCDliY3kuIDkuKp1aVxuICAgICAqIEBwYXJhbSBhcmdzIOWPr+WPmOWPguaVsO+8jFxuICAgICAqL1xuICAgIHB1YmxpYyBvblRvcChwcmVJRDogbnVtYmVyLCAuLi5hcmdzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25CdG5fY2xvc2UoKSB7XG4gICAgICAgIHVpTWFuYWdlci5jbG9zZSh0aGlzKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiManager = exports.UIManager = exports.ScreenType = void 0;
var BundleManager_1 = require("../Bundle/BundleManager");
var CCTools_1 = require("../Tools/CCTools");
var UIView_1 = require("./UIView");
var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["Long"] = 0] = "Long";
    ScreenType[ScreenType["Short"] = 1] = "Short";
    ScreenType[ScreenType["Pad"] = 2] = "Pad"; //平板
})(ScreenType = exports.ScreenType || (exports.ScreenType = {}));
var UIManager = /** @class */ (function () {
    function UIManager() {
        /** 资源加载计数器，用于生成唯一的资源占用key */
        this.useCount = 0;
        /** 背景UI（有若干层UI是作为背景UI，而不受切换等影响）*/
        this.BackGroundUI = 0;
        /** 是否正在关闭UI */
        this.isClosing = false;
        /** 是否正在打开UI */
        this.isOpening = false;
        /** UI界面缓存（key为UIId，value为UIView节点）*/
        this.UICache = {};
        /** UI界面栈（{UIID + UIView + UIArgs}数组）*/
        this.UIStack = [];
        /** UI待打开列表 */
        this.UIOpenQueue = [];
        /** UI待关闭列表 */
        this.UICloseQueue = [];
        /** UI配置 */
        this.UIConf = {};
        /** 所有UI层级 */
        this.layers = new Map();
        /** UI打开前回调 */
        this.uiOpenBeforeDelegate = null;
        /** UI打开回调 */
        this.uiOpenDelegate = null;
        /** UI关闭回调 */
        this.uiCloseDelegate = null;
        this.screenType = ScreenType.Long;
        // public addAudioRoot() {
        //     //音效节点
        //     let audioNode = new Node("audioNode");
        //     audioNode.addComponent(AudioSource)
        //     audioNode.addComponent(audioRoot)
        //     this.uiRootCanvasNode.addChild(audioNode)
        // }
    }
    /**
     * 初始化所有UI的配置对象
     * @param conf 配置对象
     */
    UIManager.prototype.initUIConf = function (conf) {
        this.UIConf = conf;
        var winSize = cc.view.getFrameSize();
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (winSize.height / winSize.width < 1.77) {
            // 平板
            this.screenType = ScreenType.Pad;
        }
        else if (winSize.height / winSize.width < 2) {
            // 短手机
            this.screenType = ScreenType.Short;
        }
        else {
            // 长屏幕手机
            this.screenType = ScreenType.Long;
        }
    };
    /**
     * 设置或覆盖某uiId的配置
     * @param uiId 要设置的界面id
     * @param conf 要设置的配置
     */
    UIManager.prototype.setUIConf = function (uiId, conf) {
        this.UIConf[uiId] = conf;
    };
    /****************** 私有方法，UIManager内部的功能和基础规则 *******************/
    /**
     * 添加防触摸层
     * @param zOrder 屏蔽层的层级
     */
    UIManager.prototype.preventTouch = function (zOrder) {
        var child = cc.director.getScene().getChildByName('Canvas');
        var node = CCTools_1.default.addNode(child, 'preventTouch');
        node.on(cc.Node.EventType.TOUCH_START, function (event) {
        }, node);
        child.addChild(node);
        return node;
    };
    /** 自动执行下一个待关闭或待打开的界面 */
    UIManager.prototype.autoExecNextUI = function () {
        // 逻辑上是先关后开
        if (this.UICloseQueue.length > 0) {
            var uiQueueInfo = this.UICloseQueue[0];
            this.UICloseQueue.splice(0, 1);
            this.close(uiQueueInfo);
        }
        else if (this.UIOpenQueue.length > 0) {
            var uiQueueInfo = this.UIOpenQueue[0];
            this.UIOpenQueue.splice(0, 1);
            this.open(uiQueueInfo.uiId, uiQueueInfo.uiArgs);
        }
    };
    /**
     * 自动检测动画组件以及特定动画，如存在则播放动画，无论动画是否播放，都执行回调
     * @param aniName 动画名
     * @param aniOverCallback 动画播放完成回调
     */
    UIManager.prototype.autoExecAnimation = function (uiView, aniName, aniOverCallback) {
        // 暂时先省略动画播放的逻辑
        if (uiView.getComponent(cc.Animation)) {
            var ani = uiView.getComponent(cc.Animation);
            ani.play(aniName);
            ani.on('stop', function () {
                aniOverCallback();
            }, this);
        }
        else {
            aniOverCallback();
        }
    };
    /**
     * 自动检测资源预加载组件，如果存在则加载完成后调用completeCallback，否则直接调用
     * @param completeCallback 资源加载完成回调
     */
    UIManager.prototype.autoLoadRes = function (uiView, completeCallback) {
        // 暂时先省略
        completeCallback();
    };
    /** 生成唯一的资源占用key */
    UIManager.prototype.makeUseKey = function () {
        return "UIMgr_" + ++this.useCount;
    };
    /**
     * 异步加载一个UI的prefab，成功加载了一个prefab之后
     * @param uiId 界面id
     * @param processCallback 加载进度回调
     * @param completeCallback 加载完成回调
     * @param uiArgs 初始化参数
     */
    UIManager.prototype.getOrCreateUI = function (uiId, completeCallback, uiArgs) {
        var _this = this;
        // 如果找到缓存对象，则直接返回
        var uiView = this.UICache[uiId];
        if (uiView) {
            completeCallback(uiView);
            return;
        }
        // 找到UI配置
        var uiPath = this.UIConf[uiId].prefab;
        var uiBundle = null;
        if (null == uiPath) {
            completeCallback(null);
            return;
        }
        this.makeUseKey();
        var complete = function () {
            (uiBundle ? uiBundle : cc.resources).load(uiPath, function (err, prefab) {
                // 检查加载资源错误
                if (err) {
                    // Log.print(`getOrCreateUI loadRes ${uiId} faile, path: ${uiPath} error: ${err}`);
                    // completeCallback(null);
                    BundleManager_1.default.load(uiPath, function (err, prefab) {
                        if (err) {
                            console.error("getOrCreateUI loadRes " + uiId + " faile, path: " + uiPath + " error: " + err);
                            completeCallback(null);
                        }
                        else {
                            _this.compleateCreateUI(uiId, uiPath, uiView, prefab, completeCallback, uiArgs);
                        }
                    });
                }
                else {
                    _this.compleateCreateUI(uiId, uiPath, uiView, prefab, completeCallback, uiArgs);
                }
            });
        };
        if (this.UIConf[uiId].bundle) {
            if (App.bundles.get(this.UIConf[uiId].bundle)) {
                uiBundle = App.bundles.get(this.UIConf[uiId].bundle);
                complete();
            }
            else {
                cc.assetManager.loadBundle(this.UIConf[uiId].bundle, function (err, bundle) {
                    if (!err) {
                        App.bundles.set(_this.UIConf[uiId].bundle, bundle);
                        uiBundle = bundle;
                        complete();
                    }
                    ;
                });
            }
        }
        else {
            complete();
        }
    };
    UIManager.prototype.compleateCreateUI = function (uiId, uiPath, uiView, prefab, completeCallback, uiArgs) {
        // 检查实例化错误
        var uiNode = instantiate(prefab);
        if (null == uiNode) {
            Log.print("getOrCreateUI instantiate " + uiId + " faile, path: " + uiPath);
            completeCallback(null);
            // resLoader.release(prefab);
            return;
        }
        // 检查组件获取错误
        uiView = uiNode.getComponent(UIView_1.UIView);
        // 设置一下uiId
        uiView.uiId = uiId;
        if (null == uiView) {
            Log.print("getOrCreateUI getComponent " + uiId + " faile, path: " + uiPath);
            uiNode.destroy();
            completeCallback(null);
            // resLoader.release(prefab);
            return;
        }
        // 异步加载UI预加载的资源
        this.autoLoadRes(uiView, function () {
            uiView.init(uiArgs);
            completeCallback(uiView);
            // uiView.cacheAsset(prefab);
        });
    };
    /**
     * UI被打开时回调，对UI进行初始化设置，刷新其他界面的显示，并根据
     * @param uiId 哪个界面被打开了
     * @param uiView 界面对象
     * @param uiInfo 界面栈对应的信息结构
     * @param uiArgs 界面初始化参数
     */
    UIManager.prototype.onUIOpen = function (uiId, uiView, uiInfo, uiArgs) {
        var _this = this;
        if (null == uiView) {
            return;
        }
        // 激活界面
        uiInfo.uiView = uiView;
        uiView.node.active = true;
        //uiView.node.zIndex = uiInfo.zOrder || this.UIStack.length;
        // 快速关闭界面的设置，绑定界面中的background，实现快速关闭
        if (uiView.quickClose) {
            var backGround = uiView.node.getChildByName('background');
            if (!backGround) {
                Utils.addNode(uiView.node, 'background');
            }
            backGround.targetOff(Node.EventType.TOUCH_START);
            backGround.on(Node.EventType.TOUCH_START, function (event) {
                _this.close(uiView);
            }, backGround);
        }
        // 添加到场景中
        var child = director.getScene().getChildByName('Canvas');
        var nodeName = '';
        switch (uiView.showType) {
            case UIShowTypes.UIFullScreen:
                nodeName = 'bottom';
                break;
            case UIShowTypes.UIAddition:
                nodeName = 'middle';
                break;
            case UIShowTypes.UISingle:
                nodeName = 'top';
                break;
            default:
                break;
        }
        child = director.getScene().getChildByName('Canvas').getChildByName(nodeName);
        child.addChild(uiView.node);
        if (!GlobalConfig.isRelease) {
            var time = new Date().toLocaleString();
            Log.print("%c[open-view %s]>>> %s", "color:blue", time, uiInfo.uiView.name);
        }
        // 刷新其他UI
        this.updateUI();
        // 从那个界面打开的
        var fromUIID = 0;
        if (this.UIStack.length > 1) {
            fromUIID = this.UIStack[this.UIStack.length - 2].uiId;
        }
        // 打开界面之前回调
        if (this.uiOpenBeforeDelegate) {
            this.uiOpenBeforeDelegate(uiId, fromUIID);
        }
        //阿拉伯语处理
        if (App.isAr()) {
            this.arabicUI(uiView.node);
        }
        // 执行onOpen回调
        uiView.onOpen(fromUIID, uiArgs);
        this.autoExecAnimation(uiView, "uiOpen", function () {
            uiView.onOpenAniOver();
            if (_this.uiOpenDelegate) {
                _this.uiOpenDelegate(uiId, fromUIID);
            }
        });
    };
    /** 打开界面并添加到界面栈中 */
    UIManager.prototype.open = function (uiId, uiArgs) {
        var _this = this;
        var _a;
        if (uiArgs === void 0) { uiArgs = null; }
        var uiInfo = {
            uiId: uiId,
            uiArgs: uiArgs,
            uiView: null,
        };
        if (this.isOpening || this.isClosing) {
            if (this.isOpening && this.openingUIId === uiId) {
                console.error("\u754C\u9762" + uiId + "\u5DF2\u7ECF\u5728\u6253\u5F00\u4E2D");
                return;
            }
            // 插入待打开队列
            if (this.UIOpenQueue.find(function (obj) { return obj.uiId === uiInfo.uiId; }) != null) {
                console.error("\u754C\u9762" + uiId + "\u5DF2\u7ECF\u5728\u6392\u961F\u4E2D");
                return;
            }
            console.error("\u754C\u9762" + uiId + "\u63D2\u5165\u6253\u5F00\u961F\u5217");
            this.UIOpenQueue.push(uiInfo);
            return;
        }
        var uiIndex = this.getUIIndex(uiId);
        if (-1 != uiIndex) {
            // 重复打开了同一个界面，直接回到该界面
            console.error("\u91CD\u590D\u6253\u5F00\u754C\u9762" + uiId);
            this.closeToUI(uiId, uiArgs);
            return;
        }
        // 设置UI的zOrder
        uiInfo.zOrder = (uiArgs && uiArgs.zOrder) || this.UIStack.length + 1;
        console.log(uiInfo.zOrder);
        this.UIStack.push(uiInfo);
        // 先屏蔽点击
        if ((_a = this.UIConf[uiId]) === null || _a === void 0 ? void 0 : _a.preventTouch) {
            uiInfo.preventNode = this.preventTouch(uiInfo.zOrder);
        }
        this.isOpening = true;
        this.openingUIId = uiId;
        // 预加载资源，并在资源加载完成后自动打开界面
        this.getOrCreateUI(uiId, function (uiView) {
            // 如果界面已经被关闭或创建失败
            if (uiInfo.isClose || null == uiView) {
                Log.print("getOrCreateUI " + uiId + " faile!\n                        close state : " + uiInfo.isClose + " , uiView : " + uiView);
                _this.isOpening = false;
                _this.openingUIId = null;
                if (uiInfo.preventNode) {
                    uiInfo.preventNode.destroy();
                    uiInfo.preventNode = null;
                }
                return;
            }
            // 打开UI，执行配置
            // 逻辑层函数异常处理,防止卡主ui queue
            try {
                _this.onUIOpen(uiId, uiView, uiInfo, uiArgs);
                if (uiInfo.uiArgs != null && uiInfo.uiArgs.onOpenCallback != null) {
                    uiInfo.uiArgs.onOpenCallback(uiView);
                }
            }
            catch (error) {
                Log.error(error);
            }
            _this.isOpening = false;
            _this.openingUIId = null;
            _this.autoExecNextUI();
        }, uiArgs);
    };
    /** 替换栈顶界面 */
    UIManager.prototype.replace = function (uiId, uiArgs) {
        if (uiArgs === void 0) { uiArgs = null; }
        this.close(this.UIStack[this.UIStack.length - 1].uiView);
        this.open(uiId, uiArgs);
    };
    /**
     * 根据uiid关闭界面
     * @param uiId
     */
    UIManager.prototype.closeById = function (uiId) {
        var uiView = this.getUI(uiId);
        if (uiView) {
            this.close(uiView);
        }
    };
    /**
     * 关闭当前界面
     * @param closeUI 要关闭的界面
     */
    UIManager.prototype.close = function (closeUI) {
        var _this = this;
        var uiCount = this.UIStack.length;
        if (uiCount < 1 || this.isClosing || this.isOpening) {
            if (closeUI) {
                // 插入待关闭队列
                if (this.UICloseQueue.find(function (obj) { return obj.uiId === closeUI.uiId; }) != null) {
                    Log.print(closeUI.uiId + " \u5DF2\u5728\u7B49\u5F85\u5173\u95ED\u4E2D");
                    return;
                }
                this.UICloseQueue.push(closeUI);
            }
            return;
        }
        var uiInfo;
        if (closeUI) {
            for (var index = this.UIStack.length - 1; index >= 0; index--) {
                var ui = this.UIStack[index];
                if (ui.uiView === closeUI) {
                    uiInfo = ui;
                    this.UIStack.splice(index, 1);
                    break;
                }
            }
            // 找不到这个UI
            if (uiInfo === undefined) {
                return;
            }
        }
        else {
            uiInfo = this.UIStack.pop();
        }
        // 关闭当前界面
        var uiId = uiInfo.uiId;
        var uiView = uiInfo.uiView;
        uiInfo.isClose = true;
        // 回收遮罩层
        if (uiInfo.preventNode) {
            uiInfo.preventNode.destroy();
            uiInfo.preventNode = null;
        }
        if (null == uiView) {
            return;
        }
        var preUIInfo = this.UIStack[uiCount - 2];
        // 处理显示模式
        this.updateUI();
        var close = function () {
            _this.isClosing = false;
            // 显示之前的界面
            if (preUIInfo && preUIInfo.uiView && _this.isTopUI(preUIInfo.uiId)) {
                // 如果之前的界面弹到了最上方（中间有肯能打开了其他界面）
                preUIInfo.uiView.node.active = true;
                // 回调onTop
                preUIInfo.uiView.onTop(uiId, uiView.onClose());
            }
            else {
                uiView.onClose();
            }
            if (_this.uiCloseDelegate) {
                _this.uiCloseDelegate(uiId);
            }
            if (uiView.cache) {
                _this.UICache[uiId] = uiView;
                uiView.node.removeFromParent();
                Log.print("uiView removeFromParent " + uiInfo.uiId);
            }
            else {
                uiView.node.destroy();
                if (!GlobalConfig.isRelease) {
                    var time = new Date().toLocaleString();
                    Log.print("%c[close-view %s]>>> %s", "color:gray", time, uiInfo.uiView.name);
                }
            }
            _this.autoExecNextUI();
        };
        // 执行关闭动画
        this.autoExecAnimation(uiView, "uiClose", close);
    };
    /** 关闭所有界面 */
    UIManager.prototype.closeAll = function () {
        // 不播放动画，也不清理缓存
        for (var _i = 0, _a = this.UIStack; _i < _a.length; _i++) {
            var uiInfo = _a[_i];
            uiInfo.isClose = true;
            if (uiInfo.preventNode) {
                uiInfo.preventNode.destroy();
                uiInfo.preventNode = null;
            }
            if (uiInfo.uiView) {
                uiInfo.uiView.onClose();
                uiInfo.uiView.node.destroy();
            }
        }
        this.UIOpenQueue = [];
        this.UICloseQueue = [];
        this.UIStack = [];
        this.isOpening = false;
        this.openingUIId = null;
        this.isClosing = false;
    };
    /**
     * 关闭界面，一直关闭到顶部为uiId的界面，为避免循环打开UI导致UI栈溢出
     * @param uiId 要关闭到的uiId（关闭其顶部的ui）
     * @param uiArgs 打开的参数
     * @param bOpenSelf
     */
    UIManager.prototype.closeToUI = function (uiId, uiArgs, bOpenSelf) {
        if (bOpenSelf === void 0) { bOpenSelf = true; }
        var idx = this.getUIIndex(uiId);
        if (-1 == idx) {
            return;
        }
        idx = bOpenSelf ? idx : idx + 1;
        for (var i = this.UIStack.length - 1; i >= idx; --i) {
            var uiInfo = this.UIStack.pop();
            var uiId_1 = uiInfo.uiId;
            var uiView = uiInfo.uiView;
            uiInfo.isClose = true;
            // 回收屏蔽层
            if (uiInfo.preventNode) {
                uiInfo.preventNode.destroy();
                uiInfo.preventNode = null;
            }
            if (this.uiCloseDelegate) {
                this.uiCloseDelegate(uiId_1);
            }
            if (uiView) {
                uiView.onClose();
                if (uiView.cache) {
                    this.UICache[uiId_1] = uiView;
                    uiView.node.removeFromParent();
                }
                else {
                    uiView.node.destroy();
                }
            }
        }
        this.updateUI();
        this.UIOpenQueue = [];
        this.UICloseQueue = [];
        bOpenSelf && this.open(uiId, uiArgs);
    };
    /** 清理界面缓存 */
    UIManager.prototype.clearCache = function () {
        for (var key in this.UICache) {
            var ui = this.UICache[key];
            if (isValid(ui.node)) {
                ui.node.destroy();
            }
        }
        this.UICache = {};
    };
    /******************** UI的便捷接口 *******************/
    UIManager.prototype.isTopUI = function (uiId) {
        if (this.UIStack.length == 0) {
            return false;
        }
        return this.UIStack[this.UIStack.length - 1].uiId == uiId;
    };
    UIManager.prototype.getUI = function (uiId) {
        for (var index = 0; index < this.UIStack.length; index++) {
            var element = this.UIStack[index];
            if (uiId == element.uiId) {
                return element.uiView;
            }
        }
        return null;
    };
    UIManager.prototype.getTopUI = function () {
        if (this.UIStack.length > 0) {
            return this.UIStack[this.UIStack.length - 1].uiView;
        }
        return null;
    };
    UIManager.prototype.getUIIndex = function (uiId) {
        for (var index = 0; index < this.UIStack.length; index++) {
            var element = this.UIStack[index];
            if (uiId == element.uiId) {
                return index;
            }
        }
        return -1;
    };
    UIManager.prototype.initialize = function () {
        var _this = this;
        this.layers = new Map();
        this.uiRootCanvasNode = director.getScene().getChildByName('Canvas');
        var designSize = this.uiRootCanvasNode.getComponent(cc.Canvas).designResolution;
        uiLayers.forEach(function (layer) {
            if (_this.layers[layer.layerName] == null) {
                var layerNode = new Node(layer.layerName);
                _this.layers[layer.layerName] = layerNode;
                var widget = layerNode.addComponent(Widget);
                _this.uiRootCanvasNode.addChild(layerNode);
                layerNode.setContentSize(designSize);
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
                widget.isAlignBottom = true;
                widget.isAlignTop = true;
            }
        });
    };
    return UIManager;
}());
exports.UIManager = UIManager;
exports.uiManager = new UIManager();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7O0FBRXRGLHlEQUFvRDtBQUVwRCw0Q0FBdUM7QUFDdkMsbUNBQWtDO0FBK0JsQyxJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsMkNBQUksQ0FBQTtJQUNKLDZDQUFLLENBQUE7SUFDTCx5Q0FBRyxDQUFBLENBQVMsSUFBSTtBQUNwQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFFRDtJQUFBO1FBQ0ksNkJBQTZCO1FBQ3JCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDckIsa0NBQWtDO1FBQzFCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGVBQWU7UUFDUCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGVBQWU7UUFDUCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRzFCLHFDQUFxQztRQUM3QixZQUFPLEdBQStCLEVBQUUsQ0FBQztRQUNqRCx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUMvQixjQUFjO1FBQ04sZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDbkMsY0FBYztRQUNOLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLFdBQVc7UUFDSCxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUUvQyxhQUFhO1FBQ0wsV0FBTSxHQUFzQixJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUk1RCxjQUFjO1FBQ1AseUJBQW9CLEdBQTRDLElBQUksQ0FBQztRQUM1RSxhQUFhO1FBQ04sbUJBQWMsR0FBNEMsSUFBSSxDQUFDO1FBQ3RFLGFBQWE7UUFDTixvQkFBZSxHQUEyQixJQUFJLENBQUM7UUFFL0MsZUFBVSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENB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QzFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVUwsZ0JBQUM7QUFBRCxDQTVtQkEsQUE0bUJDLElBQUE7QUE1bUJZLDhCQUFTO0FBOG1CWCxRQUFBLFNBQVMsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCBDQ1Rvb2xzIGZyb20gXCIuLi9Ub29scy9DQ1Rvb2xzXCI7XG5pbXBvcnQgeyBVSVZpZXcgfSBmcm9tIFwiLi9VSVZpZXdcIjtcbi8qKlxuICogVUlNYW5hZ2Vy55WM6Z2i566h55CG57G7XG4gKiBcbiAqIDEu5omT5byA55WM6Z2i77yM5qC55o2u6YWN572u6Ieq5Yqo5Yqg6L2955WM6Z2i44CB6LCD55So5Yid5aeL5YyW44CB5pKt5pS+5omT5byA5Yqo55S744CB6ZqQ6JeP5YW25LuW55WM6Z2i44CB5bGP6JS95LiL5pa555WM6Z2i54K55Ye7XG4gKiAyLuWFs+mXreeVjOmdou+8jOagueaNrumFjee9ruiHquWKqOWFs+mXreeVjOmdouOAgeaSreaUvuWFs+mXreWKqOeUu+OAgeaBouWkjeWFtuS7lueVjOmdolxuICogMy7liIfmjaLnlYzpnaLvvIzkuI7miZPlvIDnlYzpnaLnsbvkvLzvvIzkvYbmmK/mmK/lsIblvZPliY3moIjpobbnmoTnlYzpnaLliIfmjaLmiJDmlrDnmoTnlYzpnaLvvIjlhYjlhbPpl63lho3miZPlvIDvvIlcbiAqIDQu5o+Q5L6b55WM6Z2i57yT5a2Y5Yqf6IO9XG4gKlxuICovXG5cbi8qKiBVSeagiOe7k+aehOS9kyAqL1xuZXhwb3J0IGludGVyZmFjZSBVSUluZm8ge1xuICAgIHVpSWQ6IG51bWJlcjtcbiAgICB1aVZpZXc6IFVJVmlldztcbiAgICB1aUFyZ3M6IGFueTtcbiAgICBwcmV2ZW50Tm9kZT86IGNjLk5vZGU7XG4gICAgek9yZGVyPzogbnVtYmVyO1xuICAgIG9wZW5UeXBlPzogJ3F1aWV0JyB8ICdvdGhlcic7XG4gICAgaXNDbG9zZT86IGJvb2xlYW47XG4gICAgcmVzVG9DbGVhcj86IHN0cmluZ1tdO1xuICAgIHJlc0NhY2hlPzogc3RyaW5nW107XG59XG5cbi8qKiBVSemFjee9rue7k+aehOS9kyAqL1xuZXhwb3J0IGludGVyZmFjZSBVSUNvbmYge1xuICAgIHByZWZhYjogc3RyaW5nO1xuICAgIGJ1bmRsZT86IHN0cmluZztcbiAgICBwcmV2ZW50VG91Y2g/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBTY3JlZW5UeXBlIHtcbiAgICBMb25nLCAgICAgICAvL+mVv+Wxj1xuICAgIFNob3J0LCAgICAgIC8v55+t5bGPXG4gICAgUGFkICAgICAgICAgLy/lubPmnb9cbn1cblxuZXhwb3J0IGNsYXNzIFVJTWFuYWdlciB7XG4gICAgLyoqIOi1hOa6kOWKoOi9veiuoeaVsOWZqO+8jOeUqOS6jueUn+aIkOWUr+S4gOeahOi1hOa6kOWNoOeUqGtleSAqL1xuICAgIHByaXZhdGUgdXNlQ291bnQgPSAwO1xuICAgIC8qKiDog4zmma9VSe+8iOacieiLpeW5suWxglVJ5piv5L2c5Li66IOM5pmvVUnvvIzogIzkuI3lj5fliIfmjaLnrYnlvbHlk43vvIkqL1xuICAgIHByaXZhdGUgQmFja0dyb3VuZFVJID0gMDtcbiAgICAvKiog5piv5ZCm5q2j5Zyo5YWz6ZetVUkgKi9cbiAgICBwcml2YXRlIGlzQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8qKiDmmK/lkKbmraPlnKjmiZPlvIBVSSAqL1xuICAgIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvcGVuaW5nVUlJZDogbnVtYmVyO1xuXG4gICAgLyoqIFVJ55WM6Z2i57yT5a2Y77yIa2V55Li6VUlJZO+8jHZhbHVl5Li6VUlWaWV36IqC54K577yJKi9cbiAgICBwcml2YXRlIFVJQ2FjaGU6IHsgW1VJSWQ6IG51bWJlcl06IFVJVmlldyB9ID0ge307XG4gICAgLyoqIFVJ55WM6Z2i5qCI77yIe1VJSUQgKyBVSVZpZXcgKyBVSUFyZ3N95pWw57uE77yJKi9cbiAgICBwcml2YXRlIFVJU3RhY2s6IFVJSW5mb1tdID0gW107XG4gICAgLyoqIFVJ5b6F5omT5byA5YiX6KGoICovXG4gICAgcHJpdmF0ZSBVSU9wZW5RdWV1ZTogVUlJbmZvW10gPSBbXTtcbiAgICAvKiogVUnlvoXlhbPpl63liJfooaggKi9cbiAgICBwcml2YXRlIFVJQ2xvc2VRdWV1ZTogVUlWaWV3W10gPSBbXTtcbiAgICAvKiogVUnphY3nva4gKi9cbiAgICBwcml2YXRlIFVJQ29uZjogeyBba2V5OiBudW1iZXJdOiBVSUNvbmYgfSA9IHt9O1xuXG4gICAgLyoqIOaJgOaciVVJ5bGC57qnICovXG4gICAgcHJpdmF0ZSBsYXllcnM6IE1hcDxzdHJpbmcsIE5vZGU+ID0gbmV3IE1hcDxzdHJpbmcsIE5vZGU+KCk7XG4gICAgLyoqIFVJIFJvb3QgQ2FudmFzICovXG4gICAgcHJpdmF0ZSB1aVJvb3RDYW52YXNOb2RlOiBjYy5Ob2RlO1xuXG4gICAgLyoqIFVJ5omT5byA5YmN5Zue6LCDICovXG4gICAgcHVibGljIHVpT3BlbkJlZm9yZURlbGVnYXRlOiAodWlJZDogbnVtYmVyLCBwcmVVSUlkOiBudW1iZXIpID0+IHZvaWQgPSBudWxsO1xuICAgIC8qKiBVSeaJk+W8gOWbnuiwgyAqL1xuICAgIHB1YmxpYyB1aU9wZW5EZWxlZ2F0ZTogKHVpSWQ6IG51bWJlciwgcHJlVUlJZDogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcbiAgICAvKiogVUnlhbPpl63lm57osIMgKi9cbiAgICBwdWJsaWMgdWlDbG9zZURlbGVnYXRlOiAodWlJZDogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIHB1YmxpYyBzY3JlZW5UeXBlOiBTY3JlZW5UeXBlID0gU2NyZWVuVHlwZS5Mb25nO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omA5pyJVUnnmoTphY3nva7lr7nosaFcbiAgICAgKiBAcGFyYW0gY29uZiDphY3nva7lr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFVJQ29uZihjb25mOiB7IFtrZXk6IG51bWJlcl06IFVJQ29uZiB9KTogdm9pZCB7XG4gICAgICAgIHRoaXMuVUlDb25mID0gY29uZjtcblxuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGxldCByZXNvbHV0aW9uU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDwgMS43Nykge1xuICAgICAgICAgICAgLy8g5bmz5p2/XG4gICAgICAgICAgICB0aGlzLnNjcmVlblR5cGUgPSBTY3JlZW5UeXBlLlBhZDtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5TaXplLmhlaWdodCAvIHdpblNpemUud2lkdGggPCAyKSB7XG4gICAgICAgICAgICAvLyDnn63miYvmnLpcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuVHlwZSA9IFNjcmVlblR5cGUuU2hvcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDplb/lsY/luZXmiYvmnLpcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuVHlwZSA9IFNjcmVlblR5cGUuTG9uZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaIluimhuebluafkHVpSWTnmoTphY3nva5cbiAgICAgKiBAcGFyYW0gdWlJZCDopoHorr7nva7nmoTnlYzpnaJpZFxuICAgICAqIEBwYXJhbSBjb25mIOimgeiuvue9rueahOmFjee9rlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRVSUNvbmYodWlJZDogbnVtYmVyLCBjb25mOiBVSUNvbmYpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5VSUNvbmZbdWlJZF0gPSBjb25mO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKiog56eB5pyJ5pa55rOV77yMVUlNYW5hZ2Vy5YaF6YOo55qE5Yqf6IO95ZKM5Z+656GA6KeE5YiZICoqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDpmLLop6bmkbjlsYJcbiAgICAgKiBAcGFyYW0gek9yZGVyIOWxj+iUveWxgueahOWxgue6p1xuICAgICAqL1xuICAgIHByaXZhdGUgcHJldmVudFRvdWNoKHpPcmRlcjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpIGFzIHVua25vd24gYXMgY2MuTm9kZTtcbiAgICAgICAgbGV0IG5vZGUgPSBDQ1Rvb2xzLmFkZE5vZGUoY2hpbGQsICdwcmV2ZW50VG91Y2gnKVxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIH0sIG5vZGUpO1xuICAgICAgICBjaGlsZC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqIOiHquWKqOaJp+ihjOS4i+S4gOS4quW+heWFs+mXreaIluW+heaJk+W8gOeahOeVjOmdoiAqL1xuICAgIHByaXZhdGUgYXV0b0V4ZWNOZXh0VUkoKSB7XG4gICAgICAgIC8vIOmAu+i+keS4iuaYr+WFiOWFs+WQjuW8gFxuICAgICAgICBpZiAodGhpcy5VSUNsb3NlUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHVpUXVldWVJbmZvID0gdGhpcy5VSUNsb3NlUXVldWVbMF07XG4gICAgICAgICAgICB0aGlzLlVJQ2xvc2VRdWV1ZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHVpUXVldWVJbmZvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlVJT3BlblF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB1aVF1ZXVlSW5mbyA9IHRoaXMuVUlPcGVuUXVldWVbMF07XG4gICAgICAgICAgICB0aGlzLlVJT3BlblF1ZXVlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHRoaXMub3Blbih1aVF1ZXVlSW5mby51aUlkLCB1aVF1ZXVlSW5mby51aUFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Ieq5Yqo5qOA5rWL5Yqo55S757uE5Lu25Lul5Y+K54m55a6a5Yqo55S777yM5aaC5a2Y5Zyo5YiZ5pKt5pS+5Yqo55S777yM5peg6K665Yqo55S75piv5ZCm5pKt5pS+77yM6YO95omn6KGM5Zue6LCDXG4gICAgICogQHBhcmFtIGFuaU5hbWUg5Yqo55S75ZCNXG4gICAgICogQHBhcmFtIGFuaU92ZXJDYWxsYmFjayDliqjnlLvmkq3mlL7lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dG9FeGVjQW5pbWF0aW9uKHVpVmlldzogVUlWaWV3LCBhbmlOYW1lOiBzdHJpbmcsIGFuaU92ZXJDYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyDmmoLml7blhYjnnIHnlaXliqjnlLvmkq3mlL7nmoTpgLvovpFcbiAgICAgICAgaWYgKHVpVmlldy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgbGV0IGFuaSA9IHVpVmlldy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGFuaS5wbGF5KGFuaU5hbWUpO1xuICAgICAgICAgICAgYW5pLm9uKCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFuaU92ZXJDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmlPdmVyQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiHquWKqOajgOa1i+i1hOa6kOmihOWKoOi9vee7hOS7tu+8jOWmguaenOWtmOWcqOWImeWKoOi9veWujOaIkOWQjuiwg+eUqGNvbXBsZXRlQ2FsbGJhY2vvvIzlkKbliJnnm7TmjqXosIPnlKhcbiAgICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayDotYTmupDliqDovb3lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dG9Mb2FkUmVzKHVpVmlldzogVUlWaWV3LCBjb21wbGV0ZUNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIC8vIOaaguaXtuWFiOecgeeVpVxuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIOeUn+aIkOWUr+S4gOeahOi1hOa6kOWNoOeUqGtleSAqL1xuICAgIHByaXZhdGUgbWFrZVVzZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFVJTWdyXyR7Kyt0aGlzLnVzZUNvdW50fWA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDlvILmraXliqDovb3kuIDkuKpVSeeahHByZWZhYu+8jOaIkOWKn+WKoOi9veS6huS4gOS4qnByZWZhYuS5i+WQjlxuICAgICAqIEBwYXJhbSB1aUlkIOeVjOmdomlkXG4gICAgICogQHBhcmFtIHByb2Nlc3NDYWxsYmFjayDliqDovb3ov5vluqblm57osINcbiAgICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayDliqDovb3lrozmiJDlm57osINcbiAgICAgKiBAcGFyYW0gdWlBcmdzIOWIneWni+WMluWPguaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0T3JDcmVhdGVVSSh1aUlkOiBudW1iZXIsIGNvbXBsZXRlQ2FsbGJhY2s6ICh1aVZpZXc6IFVJVmlldykgPT4gdm9pZCwgdWlBcmdzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c5om+5Yiw57yT5a2Y5a+56LGh77yM5YiZ55u05o6l6L+U5ZueXG4gICAgICAgIGxldCB1aVZpZXc6IFVJVmlldyA9IHRoaXMuVUlDYWNoZVt1aUlkXTtcbiAgICAgICAgaWYgKHVpVmlldykge1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayh1aVZpZXcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5om+5YiwVUnphY3nva5cbiAgICAgICAgbGV0IHVpUGF0aCA9IHRoaXMuVUlDb25mW3VpSWRdLnByZWZhYjtcbiAgICAgICAgbGV0IHVpQnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gbnVsbDtcbiAgICAgICAgaWYgKG51bGwgPT0gdWlQYXRoKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlVXNlS2V5KCk7XG4gICAgICAgIGxldCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICh1aUJ1bmRsZSA/IHVpQnVuZGxlIDogY2MucmVzb3VyY2VzKS5sb2FkKHVpUGF0aCwgKGVycjogRXJyb3IsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5qOA5p+l5Yqg6L296LWE5rqQ6ZSZ6K+vXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2cucHJpbnQoYGdldE9yQ3JlYXRlVUkgbG9hZFJlcyAke3VpSWR9IGZhaWxlLCBwYXRoOiAke3VpUGF0aH0gZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBCdW5kbGVNYW5hZ2VyLmxvYWQodWlQYXRoLCAoZXJyOiBFcnJvciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBnZXRPckNyZWF0ZVVJIGxvYWRSZXMgJHt1aUlkfSBmYWlsZSwgcGF0aDogJHt1aVBhdGh9IGVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZWF0ZUNyZWF0ZVVJKHVpSWQsIHVpUGF0aCwgdWlWaWV3LCBwcmVmYWIsIGNvbXBsZXRlQ2FsbGJhY2ssIHVpQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxlYXRlQ3JlYXRlVUkodWlJZCwgdWlQYXRoLCB1aVZpZXcsIHByZWZhYiwgY29tcGxldGVDYWxsYmFjaywgdWlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5VSUNvbmZbdWlJZF0uYnVuZGxlKSB7XG4gICAgICAgICAgICBpZiAoQXBwLmJ1bmRsZXMuZ2V0KHRoaXMuVUlDb25mW3VpSWRdLmJ1bmRsZSkpIHtcbiAgICAgICAgICAgICAgICB1aUJ1bmRsZSA9IEFwcC5idW5kbGVzLmdldCh0aGlzLlVJQ29uZlt1aUlkXS5idW5kbGUpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHRoaXMuVUlDb25mW3VpSWRdLmJ1bmRsZSwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuYnVuZGxlcy5zZXQodGhpcy5VSUNvbmZbdWlJZF0uYnVuZGxlLCBidW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWlCdW5kbGUgPSBidW5kbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wbGVhdGVDcmVhdGVVSSh1aUlkOiBudW1iZXIsIHVpUGF0aDogc3RyaW5nLCB1aVZpZXc6IFVJVmlldywgcHJlZmFiOiBQcmVmYWIsIGNvbXBsZXRlQ2FsbGJhY2s6ICh1aVZpZXc6IFVJVmlldykgPT4gdm9pZCwgdWlBcmdzOiBhbnkpIHtcbiAgICAgICAgLy8g5qOA5p+l5a6e5L6L5YyW6ZSZ6K+vXG4gICAgICAgIGxldCB1aU5vZGU6IE5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBpZiAobnVsbCA9PSB1aU5vZGUpIHtcbiAgICAgICAgICAgIExvZy5wcmludChgZ2V0T3JDcmVhdGVVSSBpbnN0YW50aWF0ZSAke3VpSWR9IGZhaWxlLCBwYXRoOiAke3VpUGF0aH1gKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAvLyByZXNMb2FkZXIucmVsZWFzZShwcmVmYWIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOafpee7hOS7tuiOt+WPlumUmeivr1xuICAgICAgICB1aVZpZXcgPSB1aU5vZGUuZ2V0Q29tcG9uZW50KFVJVmlldyk7XG4gICAgICAgIC8vIOiuvue9ruS4gOS4i3VpSWRcbiAgICAgICAgdWlWaWV3LnVpSWQgPSB1aUlkO1xuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIExvZy5wcmludChgZ2V0T3JDcmVhdGVVSSBnZXRDb21wb25lbnQgJHt1aUlkfSBmYWlsZSwgcGF0aDogJHt1aVBhdGh9YCk7XG4gICAgICAgICAgICB1aU5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIC8vIHJlc0xvYWRlci5yZWxlYXNlKHByZWZhYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5byC5q2l5Yqg6L29VUnpooTliqDovb3nmoTotYTmupBcbiAgICAgICAgdGhpcy5hdXRvTG9hZFJlcyh1aVZpZXcsICgpID0+IHtcbiAgICAgICAgICAgIHVpVmlldy5pbml0KHVpQXJncyk7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKHVpVmlldyk7XG4gICAgICAgICAgICAvLyB1aVZpZXcuY2FjaGVBc3NldChwcmVmYWIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVJ6KKr5omT5byA5pe25Zue6LCD77yM5a+5VUnov5vooYzliJ3lp4vljJborr7nva7vvIzliLfmlrDlhbbku5bnlYzpnaLnmoTmmL7npLrvvIzlubbmoLnmja5cbiAgICAgKiBAcGFyYW0gdWlJZCDlk6rkuKrnlYzpnaLooqvmiZPlvIDkuoZcbiAgICAgKiBAcGFyYW0gdWlWaWV3IOeVjOmdouWvueixoVxuICAgICAqIEBwYXJhbSB1aUluZm8g55WM6Z2i5qCI5a+55bqU55qE5L+h5oGv57uT5p6EXG4gICAgICogQHBhcmFtIHVpQXJncyDnlYzpnaLliJ3lp4vljJblj4LmlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uVUlPcGVuKHVpSWQ6IG51bWJlciwgdWlWaWV3OiBVSVZpZXcsIHVpSW5mbzogVUlJbmZvLCB1aUFyZ3M6IGFueSkge1xuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmv4DmtLvnlYzpnaJcbiAgICAgICAgdWlJbmZvLnVpVmlldyA9IHVpVmlldztcbiAgICAgICAgdWlWaWV3Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy91aVZpZXcubm9kZS56SW5kZXggPSB1aUluZm8uek9yZGVyIHx8IHRoaXMuVUlTdGFjay5sZW5ndGg7XG5cbiAgICAgICAgLy8g5b+r6YCf5YWz6Zet55WM6Z2i55qE6K6+572u77yM57uR5a6a55WM6Z2i5Lit55qEYmFja2dyb3VuZO+8jOWunueOsOW/q+mAn+WFs+mXrVxuICAgICAgICBpZiAodWlWaWV3LnF1aWNrQ2xvc2UpIHtcbiAgICAgICAgICAgIGxldCBiYWNrR3JvdW5kID0gdWlWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGlmICghYmFja0dyb3VuZCkge1xuICAgICAgICAgICAgICAgIFV0aWxzLmFkZE5vZGUodWlWaWV3Lm5vZGUsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrR3JvdW5kLnRhcmdldE9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgICAgICBiYWNrR3JvdW5kLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSh1aVZpZXcpO1xuICAgICAgICAgICAgfSwgYmFja0dyb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDliLDlnLrmma/kuK1cbiAgICAgICAgbGV0IGNoaWxkID0gZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XG4gICAgICAgIGxldCBub2RlTmFtZSA9ICcnXG4gICAgICAgIHN3aXRjaCAodWlWaWV3LnNob3dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVJU2hvd1R5cGVzLlVJRnVsbFNjcmVlbjpcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9ICdib3R0b20nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVSVNob3dUeXBlcy5VSUFkZGl0aW9uOlxuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVJU2hvd1R5cGVzLlVJU2luZ2xlOlxuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gJ3RvcCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuZ2V0Q2hpbGRCeU5hbWUobm9kZU5hbWUpO1xuICAgICAgICBjaGlsZC5hZGRDaGlsZCh1aVZpZXcubm9kZSk7XG5cbiAgICAgICAgaWYgKCFHbG9iYWxDb25maWcuaXNSZWxlYXNlKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgIExvZy5wcmludChcIiVjW29wZW4tdmlldyAlc10+Pj4gJXNcIiwgXCJjb2xvcjpibHVlXCIsIHRpbWUsIHVpSW5mby51aVZpZXcubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliLfmlrDlhbbku5ZVSVxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG5cbiAgICAgICAgLy8g5LuO6YKj5Liq55WM6Z2i5omT5byA55qEXG4gICAgICAgIGxldCBmcm9tVUlJRCA9IDA7XG4gICAgICAgIGlmICh0aGlzLlVJU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZnJvbVVJSUQgPSB0aGlzLlVJU3RhY2tbdGhpcy5VSVN0YWNrLmxlbmd0aCAtIDJdLnVpSWRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaJk+W8gOeVjOmdouS5i+WJjeWbnuiwg1xuICAgICAgICBpZiAodGhpcy51aU9wZW5CZWZvcmVEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdGhpcy51aU9wZW5CZWZvcmVEZWxlZ2F0ZSh1aUlkLCBmcm9tVUlJRCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+mYv+aLieS8r+ivreWkhOeQhlxuICAgICAgICBpZiAoQXBwLmlzQXIoKSkge1xuICAgICAgICAgICAgdGhpcy5hcmFiaWNVSSh1aVZpZXcubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmiafooYxvbk9wZW7lm57osINcbiAgICAgICAgdWlWaWV3Lm9uT3Blbihmcm9tVUlJRCwgdWlBcmdzKTtcbiAgICAgICAgdGhpcy5hdXRvRXhlY0FuaW1hdGlvbih1aVZpZXcsIFwidWlPcGVuXCIsICgpID0+IHtcbiAgICAgICAgICAgIHVpVmlldy5vbk9wZW5BbmlPdmVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy51aU9wZW5EZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlPcGVuRGVsZWdhdGUodWlJZCwgZnJvbVVJSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiog5omT5byA55WM6Z2i5bm25re75Yqg5Yiw55WM6Z2i5qCI5LitICovXG4gICAgcHVibGljIG9wZW4odWlJZDogbnVtYmVyLCB1aUFyZ3M6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgbGV0IHVpSW5mbzogVUlJbmZvID0ge1xuICAgICAgICAgICAgdWlJZDogdWlJZCxcbiAgICAgICAgICAgIHVpQXJnczogdWlBcmdzLFxuICAgICAgICAgICAgdWlWaWV3OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbmluZyB8fCB0aGlzLmlzQ2xvc2luZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHRoaXMub3BlbmluZ1VJSWQgPT09IHVpSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGDnlYzpnaIke3VpSWR95bey57uP5Zyo5omT5byA5LitYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmj5LlhaXlvoXmiZPlvIDpmJ/liJdcbiAgICAgICAgICAgIGlmICh0aGlzLlVJT3BlblF1ZXVlLmZpbmQoKG9iaikgPT4geyByZXR1cm4gb2JqLnVpSWQgPT09IHVpSW5mby51aUlkOyB9KSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg55WM6Z2iJHt1aUlkfeW3sue7j+WcqOaOkumYn+S4rWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg55WM6Z2iJHt1aUlkfeaPkuWFpeaJk+W8gOmYn+WIl2ApO1xuICAgICAgICAgICAgdGhpcy5VSU9wZW5RdWV1ZS5wdXNoKHVpSW5mbyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdWlJbmRleCA9IHRoaXMuZ2V0VUlJbmRleCh1aUlkKTtcbiAgICAgICAgaWYgKC0xICE9IHVpSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOmHjeWkjeaJk+W8gOS6huWQjOS4gOS4queVjOmdou+8jOebtOaOpeWbnuWIsOivpeeVjOmdolxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg6YeN5aSN5omT5byA55WM6Z2iJHt1aUlkfWApO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVRvVUkodWlJZCwgdWlBcmdzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rlVJ55qEek9yZGVyXG4gICAgICAgIHVpSW5mby56T3JkZXIgPSAodWlBcmdzICYmIHVpQXJncy56T3JkZXIpIHx8IHRoaXMuVUlTdGFjay5sZW5ndGggKyAxO1xuICAgICAgICBjb25zb2xlLmxvZyh1aUluZm8uek9yZGVyKVxuICAgICAgICB0aGlzLlVJU3RhY2sucHVzaCh1aUluZm8pO1xuXG4gICAgICAgIC8vIOWFiOWxj+iUveeCueWHu1xuICAgICAgICBpZiAodGhpcy5VSUNvbmZbdWlJZF0/LnByZXZlbnRUb3VjaCkge1xuICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlID0gdGhpcy5wcmV2ZW50VG91Y2godWlJbmZvLnpPcmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSB1aUlkO1xuICAgICAgICAvLyDpooTliqDovb3otYTmupDvvIzlubblnKjotYTmupDliqDovb3lrozmiJDlkI7oh6rliqjmiZPlvIDnlYzpnaJcbiAgICAgICAgdGhpcy5nZXRPckNyZWF0ZVVJKHVpSWQsICh1aVZpZXc6IFVJVmlldyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8g5aaC5p6c55WM6Z2i5bey57uP6KKr5YWz6Zet5oiW5Yib5bu65aSx6LSlXG4gICAgICAgICAgICBpZiAodWlJbmZvLmlzQ2xvc2UgfHwgbnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgICAgICBMb2cucHJpbnQoYGdldE9yQ3JlYXRlVUkgJHt1aUlkfSBmYWlsZSFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlIHN0YXRlIDogJHt1aUluZm8uaXNDbG9zZX0gLCB1aVZpZXcgOiAke3VpVmlld31gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1aUluZm8ucHJldmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmiZPlvIBVSe+8jOaJp+ihjOmFjee9rlxuICAgICAgICAgICAgLy8g6YC76L6R5bGC5Ye95pWw5byC5bi45aSE55CGLOmYsuatouWNoeS4u3VpIHF1ZXVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMub25VSU9wZW4odWlJZCwgdWlWaWV3LCB1aUluZm8sIHVpQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHVpSW5mby51aUFyZ3MgIT0gbnVsbCAmJiB1aUluZm8udWlBcmdzLm9uT3BlbkNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnVpQXJncy5vbk9wZW5DYWxsYmFjayh1aVZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vcGVuaW5nVUlJZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmF1dG9FeGVjTmV4dFVJKCk7XG4gICAgICAgIH0sIHVpQXJncyk7XG4gICAgfVxuXG4gICAgLyoqIOabv+aNouagiOmhtueVjOmdoiAqL1xuICAgIHB1YmxpYyByZXBsYWNlKHVpSWQ6IG51bWJlciwgdWlBcmdzOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xvc2UodGhpcy5VSVN0YWNrW3RoaXMuVUlTdGFjay5sZW5ndGggLSAxXS51aVZpZXcpO1xuICAgICAgICB0aGlzLm9wZW4odWlJZCwgdWlBcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja51aWlk5YWz6Zet55WM6Z2iXG4gICAgICogQHBhcmFtIHVpSWQgXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlQnlJZCh1aUlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVpVmlldyA9IHRoaXMuZ2V0VUkodWlJZCk7XG4gICAgICAgIGlmICh1aVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodWlWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFs+mXreW9k+WJjeeVjOmdolxuICAgICAqIEBwYXJhbSBjbG9zZVVJIOimgeWFs+mXreeahOeVjOmdolxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZShjbG9zZVVJPzogVUlWaWV3KSB7XG4gICAgICAgIGxldCB1aUNvdW50ID0gdGhpcy5VSVN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKHVpQ291bnQgPCAxIHx8IHRoaXMuaXNDbG9zaW5nIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VVSSkge1xuICAgICAgICAgICAgICAgIC8vIOaPkuWFpeW+heWFs+mXremYn+WIl1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlVJQ2xvc2VRdWV1ZS5maW5kKChvYmopID0+IHsgcmV0dXJuIG9iai51aUlkID09PSBjbG9zZVVJLnVpSWQgfSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cucHJpbnQoYCR7Y2xvc2VVSS51aUlkfSDlt7LlnKjnrYnlvoXlhbPpl63kuK1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLlVJQ2xvc2VRdWV1ZS5wdXNoKGNsb3NlVUkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVpSW5mbzogVUlJbmZvO1xuICAgICAgICBpZiAoY2xvc2VVSSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLlVJU3RhY2subGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIGxldCB1aSA9IHRoaXMuVUlTdGFja1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHVpLnVpVmlldyA9PT0gY2xvc2VVSSkge1xuICAgICAgICAgICAgICAgICAgICB1aUluZm8gPSB1aTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VSVN0YWNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaJvuS4jeWIsOi/meS4qlVJXG4gICAgICAgICAgICBpZiAodWlJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aUluZm8gPSB0aGlzLlVJU3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlhbPpl63lvZPliY3nlYzpnaJcbiAgICAgICAgbGV0IHVpSWQgPSB1aUluZm8udWlJZDtcbiAgICAgICAgbGV0IHVpVmlldyA9IHVpSW5mby51aVZpZXc7XG4gICAgICAgIHVpSW5mby5pc0Nsb3NlID0gdHJ1ZTtcblxuICAgICAgICAvLyDlm57mlLbpga7nvanlsYJcbiAgICAgICAgaWYgKHVpSW5mby5wcmV2ZW50Tm9kZSkge1xuICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHVpSW5mby5wcmV2ZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmVVSUluZm8gPSB0aGlzLlVJU3RhY2tbdWlDb3VudCAtIDJdO1xuICAgICAgICAvLyDlpITnkIbmmL7npLrmqKHlvI9cbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBsZXQgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g5pi+56S65LmL5YmN55qE55WM6Z2iXG4gICAgICAgICAgICBpZiAocHJlVUlJbmZvICYmIHByZVVJSW5mby51aVZpZXcgJiYgdGhpcy5pc1RvcFVJKHByZVVJSW5mby51aUlkKSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOS5i+WJjeeahOeVjOmdouW8ueWIsOS6huacgOS4iuaWue+8iOS4remXtOacieiCr+iDveaJk+W8gOS6huWFtuS7lueVjOmdou+8iVxuICAgICAgICAgICAgICAgIHByZVVJSW5mby51aVZpZXcubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8g5Zue6LCDb25Ub3BcbiAgICAgICAgICAgICAgICBwcmVVSUluZm8udWlWaWV3Lm9uVG9wKHVpSWQsIHVpVmlldy5vbkNsb3NlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1aVZpZXcub25DbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy51aUNsb3NlRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2xvc2VEZWxlZ2F0ZSh1aUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1aVZpZXcuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlVJQ2FjaGVbdWlJZF0gPSB1aVZpZXc7XG4gICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIExvZy5wcmludChgdWlWaWV3IHJlbW92ZUZyb21QYXJlbnQgJHt1aUluZm8udWlJZH1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGlmICghR2xvYmFsQ29uZmlnLmlzUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLnByaW50KFwiJWNbY2xvc2UtdmlldyAlc10+Pj4gJXNcIiwgXCJjb2xvcjpncmF5XCIsIHRpbWUsIHVpSW5mby51aVZpZXcubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRvRXhlY05leHRVSSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJp+ihjOWFs+mXreWKqOeUu1xuICAgICAgICB0aGlzLmF1dG9FeGVjQW5pbWF0aW9uKHVpVmlldywgXCJ1aUNsb3NlXCIsIGNsb3NlKTtcbiAgICB9XG5cbiAgICAvKiog5YWz6Zet5omA5pyJ55WM6Z2iICovXG4gICAgcHVibGljIGNsb3NlQWxsKCkge1xuICAgICAgICAvLyDkuI3mkq3mlL7liqjnlLvvvIzkuZ/kuI3muIXnkIbnvJPlrZhcbiAgICAgICAgZm9yIChjb25zdCB1aUluZm8gb2YgdGhpcy5VSVN0YWNrKSB7XG4gICAgICAgICAgICB1aUluZm8uaXNDbG9zZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodWlJbmZvLnByZXZlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB1aUluZm8ucHJldmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVpSW5mby51aVZpZXcpIHtcbiAgICAgICAgICAgICAgICB1aUluZm8udWlWaWV3Lm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB1aUluZm8udWlWaWV3Lm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuVUlPcGVuUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSUNsb3NlUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSVN0YWNrID0gW107XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFs+mXreeVjOmdou+8jOS4gOebtOWFs+mXreWIsOmhtumDqOS4unVpSWTnmoTnlYzpnaLvvIzkuLrpgb/lhY3lvqrnjq/miZPlvIBVSeWvvOiHtFVJ5qCI5rqi5Ye6XG4gICAgICogQHBhcmFtIHVpSWQg6KaB5YWz6Zet5Yiw55qEdWlJZO+8iOWFs+mXreWFtumhtumDqOeahHVp77yJXG4gICAgICogQHBhcmFtIHVpQXJncyDmiZPlvIDnmoTlj4LmlbBcbiAgICAgKiBAcGFyYW0gYk9wZW5TZWxmIFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZVRvVUkodWlJZDogbnVtYmVyLCB1aUFyZ3M6IGFueSwgYk9wZW5TZWxmID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5nZXRVSUluZGV4KHVpSWQpO1xuICAgICAgICBpZiAoLTEgPT0gaWR4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZHggPSBiT3BlblNlbGYgPyBpZHggOiBpZHggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5VSVN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gaWR4OyAtLWkpIHtcbiAgICAgICAgICAgIGxldCB1aUluZm8gPSB0aGlzLlVJU3RhY2sucG9wKCk7XG4gICAgICAgICAgICBsZXQgdWlJZCA9IHVpSW5mby51aUlkO1xuICAgICAgICAgICAgbGV0IHVpVmlldyA9IHVpSW5mby51aVZpZXc7XG4gICAgICAgICAgICB1aUluZm8uaXNDbG9zZSA9IHRydWVcblxuICAgICAgICAgICAgLy8g5Zue5pS25bGP6JS95bGCXG4gICAgICAgICAgICBpZiAodWlJbmZvLnByZXZlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB1aUluZm8ucHJldmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy51aUNsb3NlRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2xvc2VEZWxlZ2F0ZSh1aUlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVpVmlldykge1xuICAgICAgICAgICAgICAgIHVpVmlldy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICBpZiAodWlWaWV3LmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUlDYWNoZVt1aUlkXSA9IHVpVmlldztcbiAgICAgICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpVmlldy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMuVUlPcGVuUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSUNsb3NlUXVldWUgPSBbXTtcbiAgICAgICAgYk9wZW5TZWxmICYmIHRoaXMub3Blbih1aUlkLCB1aUFyZ3MpO1xuICAgIH1cblxuICAgIC8qKiDmuIXnkIbnlYzpnaLnvJPlrZggKi9cbiAgICBwdWJsaWMgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5VSUNhY2hlKSB7XG4gICAgICAgICAgICBsZXQgdWkgPSB0aGlzLlVJQ2FjaGVba2V5XTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHVpLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdWkubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VSUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqIFVJ55qE5L6/5o235o6l5Y+jICoqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGlzVG9wVUkodWlJZCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5VSVN0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVUlTdGFja1t0aGlzLlVJU3RhY2subGVuZ3RoIC0gMV0udWlJZCA9PSB1aUlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVSSh1aUlkOiBudW1iZXIpOiBVSVZpZXcge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5VSVN0YWNrLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuVUlTdGFja1tpbmRleF07XG4gICAgICAgICAgICBpZiAodWlJZCA9PSBlbGVtZW50LnVpSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC51aVZpZXc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRvcFVJKCk6IFVJVmlldyB7XG4gICAgICAgIGlmICh0aGlzLlVJU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVUlTdGFja1t0aGlzLlVJU3RhY2subGVuZ3RoIC0gMV0udWlWaWV3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVSUluZGV4KHVpSWQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLlVJU3RhY2subGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5VSVN0YWNrW2luZGV4XTtcbiAgICAgICAgICAgIGlmICh1aUlkID09IGVsZW1lbnQudWlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE5vZGU+KCk7XG4gICAgICAgIHRoaXMudWlSb290Q2FudmFzTm9kZSA9IGRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xuICAgICAgICBsZXQgZGVzaWduU2l6ZSA9IHRoaXMudWlSb290Q2FudmFzTm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5kZXNpZ25SZXNvbHV0aW9uO1xuICAgICAgICB1aUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2xheWVyLmxheWVyTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBsYXllck5vZGUgPSBuZXcgTm9kZShsYXllci5sYXllck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyLmxheWVyTmFtZV0gPSBsYXllck5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IGxheWVyTm9kZS5hZGRDb21wb25lbnQoV2lkZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpUm9vdENhbnZhc05vZGUuYWRkQ2hpbGQobGF5ZXJOb2RlKTtcbiAgICAgICAgICAgICAgICBsYXllck5vZGUuc2V0Q29udGVudFNpemUoZGVzaWduU2l6ZSk7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgYWRkQXVkaW9Sb290KCkge1xuICAgIC8vICAgICAvL+mfs+aViOiKgueCuVxuICAgIC8vICAgICBsZXQgYXVkaW9Ob2RlID0gbmV3IE5vZGUoXCJhdWRpb05vZGVcIik7XG4gICAgLy8gICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoQXVkaW9Tb3VyY2UpXG4gICAgLy8gICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoYXVkaW9Sb290KVxuICAgIC8vICAgICB0aGlzLnVpUm9vdENhbnZhc05vZGUuYWRkQ2hpbGQoYXVkaW9Ob2RlKVxuXG4gICAgLy8gfVxufVxuXG5leHBvcnQgbGV0IHVpTWFuYWdlcjogVUlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcigpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c1d1bdjzpP4oocLOqr3ZjG', 'GameManager');
// Scripts/Game/GameManager.ts

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
var BundleManager_1 = require("../../Common/Bundle/BundleManager");
var Game_1 = require("../../Common/Game");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var UIGame_1 = require("../UI/UIGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameManager.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.addEvent();
        this.initGameModel();
        this.initBundle();
    };
    //初始化游戏数据
    GameManager.prototype.initGameModel = function () {
        GameModel_1.default.gameWidth = cc.view.getVisibleSize().width;
        GameModel_1.default.gameHeigth = cc.view.getVisibleSize().height;
    };
    GameManager.prototype.initBundle = function () {
        BundleManager_1.default.loadBundle("ObjectPool");
    };
    GameManager.prototype.addEvent = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GAMESTART, this.GameStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GAMEOVER, this.GameOver, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_BackStart, this.GameBackStart, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.GetCoin, this.GetCoin, this);
    };
    GameManager.prototype.removeEvent = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GAMESTART, this.GameStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GAMEOVER, this.GameOver, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_BackStart, this.GameBackStart, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.GetCoin, this.GetCoin, this);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (GameModel_1.default.gameState == UIGame_1.GameState.pause) {
            switch (event.keyCode) {
                case cc.macro.KEY.p:
                    this.onGamePause();
                    break;
            }
            return;
        }
        if (GameModel_1.default.gameState != UIGame_1.GameState.game)
            return;
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                Game_1.default.Event.dispatch(GameConst_1.default.UI_PlayerUp);
                break;
            case cc.macro.KEY.w:
                Game_1.default.Event.dispatch(GameConst_1.default.UI_PlayerUp);
                break;
            case cc.macro.KEY.p:
                this.onGamePause();
                break;
        }
    };
    GameManager.prototype.GetCoin = function () {
        GameModel_1.default.gameScore++;
        Game_1.default.Event.dispatch(GameConst_1.default.UI_GetCoin);
    };
    /**
     * 游戏开始
     */
    GameManager.prototype.GameStart = function () {
        GameModel_1.default.gameState = UIGame_1.GameState.game;
        cc.director.loadScene("Game");
        //this.initPlayer();
    };
    /**
     * 游戏结束
     */
    GameManager.prototype.GameOver = function () {
        GameModel_1.default.gameScore = 0;
        GameModel_1.default.gameState = UIGame_1.GameState.over;
        Game_1.default.ObjectPool.UnSpawnAll();
        Game_1.default.ObjectPool.Clear();
        Game_1.default.Event.dispatch(GameConst_1.default.UI_GameOver);
    };
    /**
     * 返回主界面
     */
    GameManager.prototype.GameBackStart = function () {
        GameModel_1.default.gameState = UIGame_1.GameState.null;
        cc.director.loadScene("Start");
    };
    /**
     * 游戏暂停
     */
    GameManager.prototype.onGamePause = function () {
        if (GameModel_1.default.gameState == UIGame_1.GameState.pause) {
            GameModel_1.default.gameState = UIGame_1.GameState.game;
            cc.game.resume();
        }
        else if (GameModel_1.default.gameState) {
            GameModel_1.default.gameState = UIGame_1.GameState.pause;
            cc.game.pause();
        }
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsbUVBQThEO0FBQzlELDBDQUFxQztBQUNyQyxnREFBMkM7QUFDM0MsOENBQXlDO0FBQ3pDLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDs7SUFtR0EsQ0FBQztJQWxHYSw0QkFBTSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO0lBQ1QsbUNBQWEsR0FBYjtRQUNJLG1CQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3JELG1CQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQzNELENBQUM7SUFDRCxnQ0FBVSxHQUFWO1FBQ0ksdUJBQWEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELDhCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsY0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLGNBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxjQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELGlDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsY0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGNBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsbUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixjQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLG1CQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNuQyxJQUFJLG1CQUFTLENBQUMsU0FBUyxJQUFJLGtCQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3hDLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTthQUNiO1lBQ0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxtQkFBUyxDQUFDLFNBQVMsSUFBSSxrQkFBUyxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xELFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBQ0ksbUJBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0QixjQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFTLEdBQVQ7UUFDSSxtQkFBUyxDQUFDLFNBQVMsR0FBRyxrQkFBUyxDQUFDLElBQUksQ0FBQztRQUNyQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixvQkFBb0I7SUFDeEIsQ0FBQztJQUNEOztPQUVHO0lBQ0gsOEJBQVEsR0FBUjtRQUNJLG1CQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN4QixtQkFBUyxDQUFDLFNBQVMsR0FBRyxrQkFBUyxDQUFDLElBQUksQ0FBQztRQUNyQyxjQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLGNBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxtQ0FBYSxHQUFiO1FBQ0ksbUJBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQVMsQ0FBQyxJQUFJLENBQUM7UUFDckMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNEOztPQUVHO0lBQ0gsaUNBQVcsR0FBWDtRQUNJLElBQUksbUJBQVMsQ0FBQyxTQUFTLElBQUksa0JBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsbUJBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQjthQUNJLElBQUksbUJBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsbUJBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdEMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFsR2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtRy9CO0lBQUQsa0JBQUM7Q0FuR0QsQUFtR0MsQ0FuR3dDLEVBQUUsQ0FBQyxTQUFTLEdBbUdwRDtrQkFuR29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvbW1vbi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0NvbW1vbi9HYW1lXCI7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9VSS9VSUdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZU1vZGVsKCk7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZSgpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ri45oiP5pWw5o2uXG4gICAgaW5pdEdhbWVNb2RlbCgpIHtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVXaWR0aCA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aDtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVIZWlndGggPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0O1xuICAgIH1cbiAgICBpbml0QnVuZGxlKCkge1xuICAgICAgICBCdW5kbGVNYW5hZ2VyLmxvYWRCdW5kbGUoXCJPYmplY3RQb29sXCIpO1xuICAgIH1cblxuXG4gICAgYWRkRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVTVEFSVCwgdGhpcy5HYW1lU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdBTUVPVkVSLCB0aGlzLkdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9CYWNrU3RhcnQsIHRoaXMuR2FtZUJhY2tTdGFydCwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuR2V0Q29pbiwgdGhpcy5HZXRDb2luLCB0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FU1RBUlQsIHRoaXMuR2FtZVN0YXJ0LCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5HQU1FT1ZFUiwgdGhpcy5HYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfQmFja1N0YXJ0LCB0aGlzLkdhbWVCYWNrU3RhcnQsIHRoaXMpO1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LkdldENvaW4sIHRoaXMuR2V0Q29pbiwgdGhpcyk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldmVudDogY2MuRXZlbnQuRXZlbnRLZXlib2FyZCkge1xuICAgICAgICBpZiAoR2FtZU1vZGVsLmdhbWVTdGF0ZSA9PSBHYW1lU3RhdGUucGF1c2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lUGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgIT0gR2FtZVN0YXRlLmdhbWUpIHJldHVybjtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcbiAgICAgICAgICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5VSV9QbGF5ZXJVcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxuICAgICAgICAgICAgICAgIEdhbWUuRXZlbnQuZGlzcGF0Y2goR2FtZUNvbnN0LlVJX1BsYXllclVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnA6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVQYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdldENvaW4oKSB7XG4gICAgICAgIEdhbWVNb2RlbC5nYW1lU2NvcmUrKztcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfR2V0Q29pbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ri45oiP5byA5aeLXG4gICAgICovXG4gICAgR2FtZVN0YXJ0KCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLmdhbWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgIC8vdGhpcy5pbml0UGxheWVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn1xuICAgICAqL1xuICAgIEdhbWVPdmVyKCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVNjb3JlID0gMDtcbiAgICAgICAgR2FtZU1vZGVsLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5vdmVyO1xuICAgICAgICBHYW1lLk9iamVjdFBvb2wuVW5TcGF3bkFsbCgpO1xuICAgICAgICBHYW1lLk9iamVjdFBvb2wuQ2xlYXIoKTtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfR2FtZU92ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuLvnlYzpnaJcbiAgICAgKi9cbiAgICBHYW1lQmFja1N0YXJ0KCkge1xuICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLm51bGw7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0XCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuLjmiI/mmoLlgZxcbiAgICAgKi9cbiAgICBvbkdhbWVQYXVzZSgpIHtcbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLnBhdXNlKSB7XG4gICAgICAgICAgICBHYW1lTW9kZWwuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLmdhbWU7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUpIHtcbiAgICAgICAgICAgIEdhbWVNb2RlbC5nYW1lU3RhdGUgPSBHYW1lU3RhdGUucGF1c2U7XG4gICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/UIGameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '923edNzPldK1LDXoZEfmytw', 'UIGameOver');
// Scripts/UI/UIGameOver.ts

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
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIGameOver = /** @class */ (function (_super) {
    __extends(UIGameOver, _super);
    function UIGameOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIGameOver.prototype.onLoad = function () {
    };
    UIGameOver.prototype.onBtnAgainGame = function () {
        Game_1.default.Event.dispatch(GameConst_1.default.GAMESTART);
    };
    UIGameOver.prototype.onBtnBackStart = function () {
        Game_1.default.Event.dispatch(GameConst_1.default.UI_BackStart);
    };
    UIGameOver = __decorate([
        ccclass
    ], UIGameOver);
    return UIGameOver;
}(cc.Component));
exports.default = UIGameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL1VJR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsMENBQXFDO0FBQ3JDLDhDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDs7SUFTQSxDQUFDO0lBUmEsMkJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBQ0QsbUNBQWMsR0FBZDtRQUNJLGNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELG1DQUFjLEdBQWQ7UUFDSSxjQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFSZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVM5QjtJQUFELGlCQUFDO0NBVEQsQUFTQyxDQVR1QyxFQUFFLENBQUMsU0FBUyxHQVNuRDtrQkFUb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vQ29tbW9uL0dhbWVcIjtcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSBcIi4uL1NyYy9HYW1lQ29uc3RcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgfVxuICAgIG9uQnRuQWdhaW5HYW1lKCkge1xuICAgICAgICBHYW1lLkV2ZW50LmRpc3BhdGNoKEdhbWVDb25zdC5HQU1FU1RBUlQpO1xuICAgIH1cbiAgICBvbkJ0bkJhY2tTdGFydCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5kaXNwYXRjaChHYW1lQ29uc3QuVUlfQmFja1N0YXJ0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/UI/UIGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '646ab+HRMxK67m9lX07Y5wO', 'UIGame');
// Scripts/UI/UIGame.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var Game_1 = require("../../Common/Game");
var GameModel_1 = require("../Model/GameModel");
var GameConst_1 = require("../Src/GameConst");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["null"] = 0] = "null";
    GameState[GameState["game"] = 1] = "game";
    GameState[GameState["pause"] = 2] = "pause";
    GameState[GameState["over"] = 3] = "over";
})(GameState = exports.GameState || (exports.GameState = {}));
var UIGame = /** @class */ (function (_super) {
    __extends(UIGame, _super);
    function UIGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.score = null;
        return _this;
    }
    UIGame.prototype.onEnable = function () {
        this.addEvent();
        this.initPlayer();
        this.initCoin();
    };
    UIGame.prototype.initPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var player, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("player", this.node)];
                    case 1:
                        player = _a.sent();
                        player.setPosition(0, 0);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.initCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, coin, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 100)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("Coin", this.node)];
                    case 2:
                        coin = _a.sent();
                        coin.setPosition(i * 100, i * 5);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UIGame.prototype.onDisable = function () {
        this.removeEvent();
    };
    UIGame.prototype.update = function (dt) {
        if (GameModel_1.default.gameState == GameState.game) {
            this.camera.node.x += GameModel_1.default.moveSpeed * dt;
            this.node.getChildByName("Bg").x += GameModel_1.default.moveSpeed * dt;
        }
    };
    UIGame.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GameOver, this.gameOver, this);
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_GetCoin, this.UIGetCoin, this);
        //Game.Event.addEventListener(GameConst.UI_GameStart, this.gameStart, this);
    };
    UIGame.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GameOver, this.gameOver, this);
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_GetCoin, this.UIGetCoin, this);
        //Game.Event.removeEventListener(GameConst.UI_GameStart, this.gameStart, this);
    };
    UIGame.prototype.UIGetCoin = function () {
        this.score.string = GameModel_1.default.gameScore.toString();
    };
    UIGame.prototype.gameOver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var over;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Game_1.default.ObjectPool.Spawn("UIGameOver", this.camera.node)];
                    case 1:
                        over = _a.sent();
                        over.setPosition(0, 0, -1);
                        console.log(over.getPosition());
                        this.node.active = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Camera)
    ], UIGame.prototype, "camera", void 0);
    __decorate([
        property(cc.Label)
    ], UIGame.prototype, "score", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1VJL1VJR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHdEYsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUMzQyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7QUFDUixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFRDtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBEQztRQXhERyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7O0lBc0QzQixDQUFDO0lBckRhLHlCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUNLLDJCQUFVLEdBQWhCOzs7Ozs7O3dCQUVxQixxQkFBTSxjQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBekQsTUFBTSxHQUFHLFNBQWdEO3dCQUM3RCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozt3QkFFekIsT0FBTyxDQUFDLEdB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cm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db21tb24vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9Db21tb24vR2FtZVwiO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9TcmMvR2FtZUNvbnN0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XG4gICAgbnVsbCxcbiAgICBnYW1lLFxuICAgIHBhdXNlLFxuICAgIG92ZXIsXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcbiAgICAgICAgdGhpcy5pbml0UGxheWVyKCk7XG4gICAgICAgIHRoaXMuaW5pdENvaW4oKTtcblxuICAgIH1cbiAgICBhc3luYyBpbml0UGxheWVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IGF3YWl0IEdhbWUuT2JqZWN0UG9vbC5TcGF3bihcInBsYXllclwiLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgcGxheWVyLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGluaXRDb2luKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb2luID0gYXdhaXQgR2FtZS5PYmplY3RQb29sLlNwYXduKFwiQ29pblwiLCB0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGNvaW4uc2V0UG9zaXRpb24oaSAqIDEwMCwgaSAqIDUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKEdhbWVNb2RlbC5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLmdhbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLm5vZGUueCArPSBHYW1lTW9kZWwubW92ZVNwZWVkICogZHQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCZ1wiKS54ICs9IEdhbWVNb2RlbC5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgR2FtZS5FdmVudC5hZGRFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lT3ZlciwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2V0Q29pbiwgdGhpcy5VSUdldENvaW4sIHRoaXMpO1xuICAgICAgICAvL0dhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfR2FtZVN0YXJ0LCB0aGlzLmdhbWVTdGFydCwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBHYW1lLkV2ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoR2FtZUNvbnN0LlVJX0dhbWVPdmVyLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HZXRDb2luLCB0aGlzLlVJR2V0Q29pbiwgdGhpcyk7XG4gICAgICAgIC8vR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9HYW1lU3RhcnQsIHRoaXMuZ2FtZVN0YXJ0LCB0aGlzKTtcbiAgICB9XG4gICAgVUlHZXRDb2luKCkge1xuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IEdhbWVNb2RlbC5nYW1lU2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnYW1lT3ZlcigpIHtcbiAgICAgICAgbGV0IG92ZXIgPSBhd2FpdCBHYW1lLk9iamVjdFBvb2wuU3Bhd24oXCJVSUdhbWVPdmVyXCIsIHRoaXMuY2FtZXJhLm5vZGUpO1xuICAgICAgICBvdmVyLnNldFBvc2l0aW9uKDAsIDAsIC0xKTtcbiAgICAgICAgY29uc29sZS5sb2cob3Zlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24aceh10CtOP7EwTclMxI41', 'EventManager');
// Common/Event/EventManager.ts

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
exports.EventManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EventManager = /** @class */ (function () {
    function EventManager() {
        /**用来存储所有已添加的事件和对应回调函数的字典集合，key：事件名，value：callbacktarget数组 */
        this.eventListeners = {};
    }
    EventManager_1 = EventManager;
    Object.defineProperty(EventManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new EventManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    //这个方法用于判断当前要添加的事件是否已经添加过了，如果说已经添加过了，就不再添加，如果没添加过继续添加就是一个eventName触发多个方法（因为这个方法只有当这个eventName对应的方法数组不为空时才会触发）
    EventManager.prototype.getEventListenersIndex = function (eventName, callBack, target) {
        var index = -1;
        for (var i = 0; i < this.eventListeners[eventName].length; i++) {
            var iterator = this.eventListeners[eventName][i];
            if (iterator.callBack == callBack && (!target || iterator.target == target)) {
                index = i;
                break;
            }
        }
        return index;
    };
    /**
     * 添加事件
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在脚本（一般是this）
     * @returns
     */
    EventManager.prototype.addEventListener = function (eventName, callBack, target) {
        if (!eventName) {
            console.log("事件名有错误");
            return;
        }
        if (callBack == null) {
            console.log("事件传入的方法为空");
            return false;
        }
        var callTarget = { callBack: callBack, target: target };
        if (this.eventListeners[eventName] == null) {
            this.eventListeners[eventName] = [callTarget];
        }
        else {
            var index = this.getEventListenersIndex(eventName, callBack, target);
            if (index == -1) {
                this.eventListeners[eventName].push(callTarget);
            }
        }
        return true;
    };
    /**
     * 设置事件名对应的事件函数
     * @param eventName
     * @param callBack
     * @param target
     * @returns
     */
    EventManager.prototype.setEventListener = function (eventName, callBack, target) {
        if (!eventName) {
            console.log("事件名为空");
            return;
        }
        if (callBack == null) {
            console.log("传入的事件函数为空");
            return false;
        }
        var callBackFunc = { callBack: callBack, target: target };
        this.eventListeners[eventName] = [callBackFunc];
    };
    /**
     * 删除函数
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在的脚本（一般是this）
     */
    EventManager.prototype.removeEventListener = function (eventName, callBack, target) {
        if (this.eventListeners[eventName] != null) {
            var index = this.getEventListenersIndex(eventName, callBack, target);
            if (index != -1) {
                this.eventListeners[eventName].splice(index, 1);
            }
        }
    };
    /**
     * 触发事件（如果事件对应的方法没有数据参数需求即可只传一个参数）
     * @param eventName 事件名参数
     * @param eventData 数据参数
     */
    EventManager.prototype.dispatch = function (eventName, eventData) {
        if (this.eventListeners[eventName] != null) {
            // 将所有回调提取出来，再调用，避免调用回调的时候操作了事件的删除
            var callBackList = [];
            for (var _i = 0, _a = this.eventListeners[eventName]; _i < _a.length; _i++) {
                var iterator = _a[_i];
                callBackList.push({ callBack: iterator.callBack, target: iterator.target });
            }
            for (var _b = 0, callBackList_1 = callBackList; _b < callBackList_1.length; _b++) {
                var iterator = callBackList_1[_b];
                //call方法意思是调用第一个参数（此时一般传入的是当时添加这个事件的脚本）脚本上callback方法，callback是一个EventManagerCallFunc类型，有两个参数，所以call后面两个参数就是传给这个target身上的callback方法的。第一个是事件名称，一般没用，第二个是传入的数据
                iterator.callBack.call(iterator.target, eventName, eventData);
            }
        }
    };
    var EventManager_1;
    EventManager = EventManager_1 = __decorate([
        ccclass
    ], EventManager);
    return EventManager;
}());
exports.EventManager = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vRXZlbnQvRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7O0FBSWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBYzFDO0lBVUk7UUFDQSw2REFBNkQ7UUFDckQsbUJBQWMsR0FBaUMsRUFBRSxDQUFDO0lBRnBDLENBQUM7cUJBVmQsWUFBWTtJQUVyQixzQkFBa0Isd0JBQVE7YUFBMUI7WUFFSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxFQUN2QjtnQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksY0FBWSxFQUFFLENBQUM7YUFDckM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUF5QixDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBS0QsNkdBQTZHO0lBQ3JHLDZDQUFzQixHQUE5QixVQUErQixTQUFnQixFQUFDLFFBQTZCLEVBQUMsTUFBVTtRQUVwRixJQUFJLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDdkQ7WUFDSSxJQUFJLFFBQVEsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUcsUUFBUSxDQUFDLFFBQVEsSUFBRSxRQUFRLElBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBRSxRQUFRLENBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxFQUNsRTtnQkFDSSxLQUFLLEdBQUMsQ0FBQyxDQUFDO2dCQUNS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RTtZQUNELEtBQXVCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO2dCQUFoQyxJQUFNLFFBQVEscUJBQUE7Z0JBQ2YsMkpBQTJKO2dCQUMzSixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNqRTtTQUNKO0lBQ0wsQ0FBQzs7SUF6SFEsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQTRIeEI7SUFBRCxtQkFBQztDQTVIRCxBQTRIQyxJQUFBO0FBNUhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICog5Zue6LCD5Ye95pWw77yM5pyJ5Lik5Liq5Y+C5pWw77yM5LqL5Lu25ZCN5ZKM5Ye95pWw5omA6ZyA5pWw5o2uXG4gKi9cbmV4cG9ydCB0eXBlIEV2ZW50TWFuYWdlckNhbGxGdW5jPShldmVudE5hbWU6c3RyaW5nLGV2ZW50RGF0YTphbnkpPT52b2lkO1xuLyoqXG4gKiDkuovku7blkI3lr7nlupTnmoTlm57osIPlh73mlbDvvIxjYWxsYmFja+aYr+inpuWPkeeahOWHveaVsO+8jHRhcmdldOaYr+WHveaVsOaJgOWcqOeahOiEmuacrFxuICovXG5pbnRlcmZhY2UgQ2FsbEJhY2tUYXJnZXRcbntcbiAgICBjYWxsQmFjazpFdmVudE1hbmFnZXJDYWxsRnVuYyxcbiAgICB0YXJnZXQ6YW55LFxufVxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpFdmVudE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgRXZlbnRNYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIC8qKueUqOadpeWtmOWCqOaJgOacieW3sua3u+WKoOeahOS6i+S7tuWSjOWvueW6lOWbnuiwg+WHveaVsOeahOWtl+WFuOmbhuWQiO+8jGtlee+8muS6i+S7tuWQje+8jHZhbHVl77yaY2FsbGJhY2t0YXJnZXTmlbDnu4QgKi9cbiAgICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOntba2V5OnN0cmluZ106Q2FsbEJhY2tUYXJnZXRbXX09e307XG5cbiAgICAvL+i/meS4quaWueazleeUqOS6juWIpOaWreW9k+WJjeimgea3u+WKoOeahOS6i+S7tuaYr+WQpuW3sue7j+a3u+WKoOi/h+S6hu+8jOWmguaenOivtOW3sue7j+a3u+WKoOi/h+S6hu+8jOWwseS4jeWGjea3u+WKoO+8jOWmguaenOayoea3u+WKoOi/h+e7p+e7rea3u+WKoOWwseaYr+S4gOS4qmV2ZW50TmFtZeinpuWPkeWkmuS4quaWueazle+8iOWboOS4uui/meS4quaWueazleWPquacieW9k+i/meS4qmV2ZW50TmFtZeWvueW6lOeahOaWueazleaVsOe7hOS4jeS4uuepuuaXtuaJjeS8muinpuWPke+8iVxuICAgIHByaXZhdGUgZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldDphbnkpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IGluZGV4PS0xO1xuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0b3I9dGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldO1xuICAgICAgICAgICAgaWYoaXRlcmF0b3IuY2FsbEJhY2s9PWNhbGxCYWNrJiYoIXRhcmdldHx8aXRlcmF0b3IudGFyZ2V0PT10YXJnZXQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluZGV4PWk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDkuovku7ZcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBjYWxsQmFjayDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOWHveaVsOaJgOWcqOiEmuacrO+8iOS4gOiIrOaYr3RoaXPvvIlcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFldmVudE5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25ZCN5pyJ6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNhbGxCYWNrPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6i+S7tuS8oOWFpeeahOaWueazleS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FsbFRhcmdldDpDYWxsQmFja1RhcmdldD17Y2FsbEJhY2s6Y2FsbEJhY2ssdGFyZ2V0OnRhcmdldH07XG4gICAgICAgIGlmKHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPVtjYWxsVGFyZ2V0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmdldEV2ZW50TGlzdGVuZXJzSW5kZXgoZXZlbnROYW1lLGNhbGxCYWNrLHRhcmdldCk7XG4gICAgICAgICAgICBpZihpbmRleD09LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goY2FsbFRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruS6i+S7tuWQjeWvueW6lOeahOS6i+S7tuWHveaVsFxuICAgICAqIEBwYXJhbSBldmVudE5hbWUgXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc2V0RXZlbnRMaXN0ZW5lcihldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldD86YW55KTpib29sZWFuXG4gICAge1xuICAgICAgICBpZighZXZlbnROYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS6i+S7tuWQjeS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZihjYWxsQmFjaz09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvKDlhaXnmoTkuovku7blh73mlbDkuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbGxCYWNrRnVuYzpDYWxsQmFja1RhcmdldD17Y2FsbEJhY2s6Y2FsbEJhY2ssdGFyZ2V0OnRhcmdldH07XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXT1bY2FsbEJhY2tGdW5jXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yig6Zmk5Ye95pWwXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI1cbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5LqL5Lu25Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCDlh73mlbDmiYDlnKjnmoTohJrmnKzvvIjkuIDoiKzmmK90aGlz77yJXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6c3RyaW5nLGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLHRhcmdldD86YW55KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdIT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5kZXg9dGhpcy5nZXRFdmVudExpc3RlbmVyc0luZGV4KGV2ZW50TmFtZSxjYWxsQmFjayx0YXJnZXQpO1xuICAgICAgICAgICAgaWYoaW5kZXghPS0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6Kem5Y+R5LqL5Lu277yI5aaC5p6c5LqL5Lu25a+55bqU55qE5pa55rOV5rKh5pyJ5pWw5o2u5Y+C5pWw6ZyA5rGC5Y2z5Y+v5Y+q5Lyg5LiA5Liq5Y+C5pWw77yJXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI3lj4LmlbBcbiAgICAgKiBAcGFyYW0gZXZlbnREYXRhIOaVsOaNruWPguaVsFxuICAgICAqL1xuICAgIGRpc3BhdGNoKGV2ZW50TmFtZTpzdHJpbmcsZXZlbnREYXRhPzphbnkpXG4gICAge1xuICAgICAgICBpZih0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0hPW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOWwhuaJgOacieWbnuiwg+aPkOWPluWHuuadpe+8jOWGjeiwg+eUqO+8jOmBv+WFjeiwg+eUqOWbnuiwg+eahOaXtuWAmeaTjeS9nOS6huS6i+S7tueahOWIoOmZpFxuICAgICAgICAgICAgbGV0IGNhbGxCYWNrTGlzdDpDYWxsQmFja1RhcmdldFtdPVtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjYWxsQmFja0xpc3QucHVzaCh7IGNhbGxCYWNrOiBpdGVyYXRvci5jYWxsQmFjaywgdGFyZ2V0OiBpdGVyYXRvci50YXJnZXQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGNhbGxCYWNrTGlzdCkge1xuICAgICAgICAgICAgICAgIC8vY2FsbOaWueazleaEj+aAneaYr+iwg+eUqOesrOS4gOS4quWPguaVsO+8iOatpOaXtuS4gOiIrOS8oOWFpeeahOaYr+W9k+aXtua3u+WKoOi/meS4quS6i+S7tueahOiEmuacrO+8ieiEmuacrOS4imNhbGxiYWNr5pa55rOV77yMY2FsbGJhY2vmmK/kuIDkuKpFdmVudE1hbmFnZXJDYWxsRnVuY+exu+Wei++8jOacieS4pOS4quWPguaVsO+8jOaJgOS7pWNhbGzlkI7pnaLkuKTkuKrlj4LmlbDlsLHmmK/kvKDnu5nov5nkuKp0YXJnZXTouqvkuIrnmoRjYWxsYmFja+aWueazleeahOOAguesrOS4gOS4quaYr+S6i+S7tuWQjeensO+8jOS4gOiIrOayoeeUqO+8jOesrOS6jOS4quaYr+S8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGxCYWNrLmNhbGwoaXRlcmF0b3IudGFyZ2V0LCBldmVudE5hbWUsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Bundle/BundleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb52auMM69Du59eQPvKj0pn', 'BundleManager');
// Common/Bundle/BundleManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BundleManager = /** @class */ (function () {
    function BundleManager() {
    }
    /**
     * 加载Bundle分包
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.loadBundle = function (bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) {
                        if (_this.bundleMap.get(bundleName)) {
                            resovlve(_this.bundleMap.get(bundleName));
                            return;
                        }
                        cc.assetManager.loadBundle(bundleName, function (err, bundle) {
                            if (err) {
                                console.error(err);
                                resovlve(null);
                            }
                            else {
                                console.log("加载分包" + bundleName + "成功");
                                _this.bundleMap.set(bundleName, bundle);
                                resovlve(bundle);
                            }
                        });
                    })];
            });
        });
    };
    /**
     * 根据分包加载资源
     * @param bundlePath 资源基于分包的相对路径
     * @param bundleName 分包名称
     * @returns
     */
    BundleManager.load = function (bundlePath, bundleName) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var bundle;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadBundle(bundleName)];
                                case 1:
                                    bundle = _a.sent();
                                    //let bundle =this.bundleMap.get(bundleName);
                                    if (bundle) {
                                        bundle.load(bundlePath, function (err, result) {
                                            if (err) {
                                                console.error(err);
                                                resovlve(null);
                                            }
                                            else {
                                                console.log("加载预制体成功");
                                                resovlve(result);
                                            }
                                        });
                                    }
                                    else {
                                        console.log("没有这个bundle分包" + bundleName);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    // private static _instance:BundleManager;
    // public static get Instance()
    // {
    //     if(this._instance==null)
    //     {
    //         this._instance=new BundleManager();
    //     }
    //     return this._instance as BundleManager;
    // }
    // private constructor(){}
    BundleManager.bundleMap = new Map();
    BundleManager = __decorate([
        ccclass
    ], BundleManager);
    return BundleManager;
}());
exports.default = BundleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQnVuZGxlL0J1bmRsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFBO0lBMkVBLENBQUM7SUEvREc7Ozs7T0FJRztJQUNpQix3QkFBVSxHQUE5QixVQUErQixVQUFpQjt1Q0FBRSxPQUFPOzs7Z0JBRXJELHNCQUFPLElBQUksT0FBTyxDQUF5QixVQUFDLFFBQVE7d0JBQ2hELElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQ2pDOzRCQUNJLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUN6QyxPQUFPO3lCQUNWO3dCQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQyxVQUFDLEdBQVMsRUFBQyxNQUE2Qjs0QkFDMUUsSUFBRyxHQUFHLEVBQ047Z0NBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNsQjtpQ0FFRDtnQ0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQztnQ0FDdEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUNwQjt3QkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFDRDs7Ozs7T0FLRztJQUNpQixrQkFBSSxHQUF4QixVQUE2QyxVQUFpQixFQUFDLFVBQWlCO3VDQUFFLE9BQU87OztnQkFFckYsc0JBQU8sSUFBSSxPQUFPLENBQUksVUFBTSxRQUFROzs7O3dDQUNyQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFBOztvQ0FBeEMsTUFBTSxHQUFDLFNBQWlDO29DQUM1Qyw2Q0FBNkM7b0NBQzdDLElBQUcsTUFBTSxFQUNUO3dDQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFVBQUMsR0FBRyxFQUFDLE1BQVE7NENBQ2hDLElBQUcsR0FBRyxFQUNOO2dEQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0RBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDbEI7aURBRUQ7Z0RBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnREFDdkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZDQUNwQjt3Q0FDTCxDQUFDLENBQUMsQ0FBQTtxQ0FDTDt5Q0FFRDt3Q0FDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxVQUFVLENBQUMsQ0FBQztxQ0FDMUM7Ozs7eUJBQ0osQ0FBQyxFQUFBOzs7S0FHTDtJQXpFRCwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLElBQUk7SUFDSiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsOENBQThDO0lBQzlDLElBQUk7SUFDSiwwQkFBMEI7SUFDWix1QkFBUyxHQUFvQyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztJQVhuRixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkVqQztJQUFELG9CQUFDO0NBM0VELEFBMkVDLElBQUE7a0JBM0VvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVuZGxlTWFuYWdlciB7XG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBCdW5kbGVNYW5hZ2VyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIGFzIEJ1bmRsZU1hbmFnZXI7XG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgcHVibGljIHN0YXRpYyBidW5kbGVNYXA6TWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPj1uZXcgTWFwPHN0cmluZyxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPigpO1xuICAgIC8qKlxuICAgICAqIOWKoOi9vUJ1bmRsZeWIhuWMhVxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIOWIhuWMheWQjeensFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZShidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KChyZXNvdmx2ZSk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXNvdmx2ZSh0aGlzLmJ1bmRsZU1hcC5nZXQoYnVuZGxlTmFtZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGJ1bmRsZU5hbWUsKGVycjpFcnJvcixidW5kbGU6Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSk9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9veWIhuWMhVwiK2J1bmRsZU5hbWUrXCLmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVuZGxlTWFwLnNldChidW5kbGVOYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc292bHZlKGJ1bmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7liIbljIXliqDovb3otYTmupBcbiAgICAgKiBAcGFyYW0gYnVuZGxlUGF0aCDotYTmupDln7rkuo7liIbljIXnmoTnm7jlr7not6/lvoRcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSDliIbljIXlkI3np7BcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQ8VCBleHRlbmRzIGNjLkFzc2V0PihidW5kbGVQYXRoOnN0cmluZyxidW5kbGVOYW1lOnN0cmluZyk6UHJvbWlzZTxUPlxuICAgIHsgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KGFzeW5jKHJlc292bHZlKT0+e1xuICAgICAgICAgICAgbGV0IGJ1bmRsZT1hd2FpdCB0aGlzLmxvYWRCdW5kbGUoYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICAvL2xldCBidW5kbGUgPXRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKTtcbiAgICAgICAgICAgIGlmKGJ1bmRsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChidW5kbGVQYXRoLChlcnIscmVzdWx0OlQpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3ZsdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vemihOWItuS9k+aIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc292bHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ6L+Z5LiqYnVuZGxl5YiG5YyFXCIrYnVuZGxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38c25i6GRIl7wXIvrjvczq', 'AudioManager');
// Common/Audio/AudioManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManager = void 0;
var BundleManager_1 = require("../Bundle/BundleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.soundVolume = 1;
        this.musicVolume = 1;
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new AudioManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化音乐组件（全局一般只有一个音乐节点，只会初始化一次）
     * @param audioSource 音乐节点身上的AudioSource组件
     */
    AudioManager.prototype.init = function (audioSource) {
        AudioManager_1.audioSource = audioSource;
    };
    /**
     * 播放音乐（一般是背景音乐）
     * @param name 要播放的音乐名字
     * @param bundle 如果没错应该是AssetBundle的分包加载的名称，比如game，hall什么的
     */
    AudioManager.prototype.playMusic = function (name, bundle) {
        var _this = this;
        if (bundle === void 0) { bundle = "Audio"; }
        var audioSource = AudioManager_1.audioSource;
        var complete = (function () { return __awaiter(_this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, bundle)];
                    case 1:
                        clip = _a.sent();
                        cc.audioEngine.playMusic(clip, false);
                        return [2 /*return*/];
                }
            });
        }); });
        complete();
    };
    AudioManager.prototype.playSound = function () {
    };
    var AudioManager_1;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}());
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vQXVkaW8vQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHlEQUFvRDtBQUc5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQVVJO1FBRVEsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUFIUCxDQUFDO3FCQVZkLFlBQVk7SUFFckIsc0JBQWtCLHdCQUFRO2FBQTFCO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksRUFDdkI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLGNBQVksRUFBRSxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBeUIsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtEOzs7T0FHRztJQUNILDJCQUFJLEdBQUosVUFBSyxXQUEwQjtRQUUzQixjQUFZLENBQUMsV0FBVyxHQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFXLEVBQUMsTUFBYztRQUFwQyxpQkFRQztRQVJxQix1QkFBQSxFQUFBLGdCQUFjO1FBRWhDLElBQU0sV0FBVyxHQUFDLGNBQVksQ0FBQyxXQUFZLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQUMsQ0FBQzs7Ozs0QkFDRCxxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUExQyxJQUFJLEdBQUMsU0FBcUM7d0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7YUFDekQsQ0FBQyxDQUFBO1FBQ0YsUUFBUSxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtJQUVBLENBQUM7O0lBdENRLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0F1Q3hCO0lBQUQsbUJBQUM7Q0F2Q0QsQUF1Q0MsSUFBQTtBQXZDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQnVuZGxlTWFuYWdlciBmcm9tIFwiLi4vQnVuZGxlL0J1bmRsZU1hbmFnZXJcIjtcblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpBdWRpb01hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2U9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlPW5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgQXVkaW9NYW5hZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCl7fVxuICAgIHByaXZhdGUgc3RhdGljIGF1ZGlvU291cmNlPzpjYy5BdWRpb1NvdXJjZVxuICAgIHByaXZhdGUgc291bmRWb2x1bWU6bnVtYmVyPTE7XG4gICAgcHJpdmF0ZSBtdXNpY1ZvbHVtZTpudW1iZXI9MTtcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpn7PkuZDnu4Tku7bvvIjlhajlsYDkuIDoiKzlj6rmnInkuIDkuKrpn7PkuZDoioLngrnvvIzlj6rkvJrliJ3lp4vljJbkuIDmrKHvvIlcbiAgICAgKiBAcGFyYW0gYXVkaW9Tb3VyY2Ug6Z+z5LmQ6IqC54K56Lqr5LiK55qEQXVkaW9Tb3VyY2Xnu4Tku7ZcbiAgICAgKi9cbiAgICBpbml0KGF1ZGlvU291cmNlOmNjLkF1ZGlvU291cmNlKVxuICAgIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmF1ZGlvU291cmNlPWF1ZGlvU291cmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7pn7PkuZDvvIjkuIDoiKzmmK/og4zmma/pn7PkuZDvvIlcbiAgICAgKiBAcGFyYW0gbmFtZSDopoHmkq3mlL7nmoTpn7PkuZDlkI3lrZdcbiAgICAgKiBAcGFyYW0gYnVuZGxlIOWmguaenOayoemUmeW6lOivpeaYr0Fzc2V0QnVuZGxl55qE5YiG5YyF5Yqg6L2955qE5ZCN56ew77yM5q+U5aaCZ2FtZe+8jGhhbGzku4DkuYjnmoRcbiAgICAgKi9cbiAgICBwbGF5TXVzaWMobmFtZTpzdHJpbmcsYnVuZGxlPVwiQXVkaW9cIilcbiAgICB7XG4gICAgICAgIGNvbnN0IGF1ZGlvU291cmNlPUF1ZGlvTWFuYWdlci5hdWRpb1NvdXJjZSE7XG4gICAgICAgIGxldCBjb21wbGV0ZT0oYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGxldCBjbGlwPWF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZChuYW1lLGJ1bmRsZSk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCBhcyBjYy5BdWRpb0NsaXAsIGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICB9XG4gICAgcGxheVNvdW5kKClcbiAgICB7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/IResultAble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '089d3tcVZlNOayZqjJHxm/X', 'IResultAble');
// Common/Pool/IResultAble.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IResultAble = /** @class */ (function (_super) {
    __extends(IResultAble, _super);
    function IResultAble() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IResultAble.prototype.onLoad = function () {
        this.node.on("OnSpawn", this.onSpawn);
        this.node.on("UnSpawn", this.unSpawn);
    };
    IResultAble = __decorate([
        ccclass
    ], IResultAble);
    return IResultAble;
}(cc.Component));
exports.default = IResultAble;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9JUmVzdWx0QWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCwrQkFBWTtJQUE5RDs7SUFhQSxDQUFDO0lBWmEsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUp5QixXQUFXO1FBRHhDLE9BQU87T0FDc0IsV0FBVyxDQWF4QztJQUFELGtCQUFDO0NBYkQsQUFhQyxDQWJpRCxFQUFFLENBQUMsU0FBUyxHQWE3RDtrQkFiNkIsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIElSZXN1bHRBYmxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oXCJPblNwYXduXCIsdGhpcy5vblNwYXduKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiVW5TcGF3blwiLHRoaXMudW5TcGF3bik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWPluWHuuiKgueCueaXtuaJp+ihjFxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBvblNwYXduKCk7XG4gICAgLyoqXG4gICAgICog5pS25Zue6IqC54K55pe25omn6KGMXG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IHVuU3Bhd24oKTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/Pool/ObjectPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bfb2q7/D5NuKkrWySNZWGY', 'ObjectPool');
// Common/Pool/ObjectPool.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BundleManager_1 = require("../Bundle/BundleManager");
var SubPool_1 = require("./SubPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObjectPool = /** @class */ (function () {
    function ObjectPool() {
        this.pools = new Map();
    }
    ObjectPool_1 = ObjectPool;
    Object.defineProperty(ObjectPool, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ObjectPool_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 取出指定节点
     * @param name 节点预制体名字
     * @param parent 节点创建出来后的父节点
     * @returns 一个异步的cc.node对象，需要用await接收
     */
    ObjectPool.prototype.Spawn = function (name, parent) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resovlve) { return __awaiter(_this, void 0, void 0, function () {
                        var pool;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pool = null;
                                    if (!!this.pools.has(name)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.RegisterNew(name, parent)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    // else {
                                    //     setTimeout(() => {
                                    //     }, 0.01);
                                    // }
                                    pool = this.pools.get(name);
                                    resovlve(pool.Spawn());
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 回收指定节点
     * @param node 要回收的节点
     */
    ObjectPool.prototype.UnSpawn = function (node) {
        var pool = null;
        this.pools.forEach(function (value, key) {
            if (value.Contains(node)) {
                pool = value;
                return;
            }
        });
        pool.UnSpawn(node);
    };
    /**
     * 回收所有节点
     */
    ObjectPool.prototype.UnSpawnAll = function () {
        this.pools.forEach(function (value, key) {
            value.UnSpawnAll();
        });
    };
    /**
     *  清除所有对象池
     */
    ObjectPool.prototype.Clear = function () {
        this.pools.clear();
    };
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池中所有对象的父节点
     */
    ObjectPool.prototype.RegisterNew = function (name, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var node, pool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BundleManager_1.default.load(name, "ObjectPool")];
                    case 1:
                        node = _a.sent();
                        pool = new SubPool_1.default(node, parent);
                        this.pools.set(pool.poolName, pool);
                        return [2 /*return*/];
                }
            });
        });
    };
    var ObjectPool_1;
    ObjectPool = ObjectPool_1 = __decorate([
        ccclass
    ], ObjectPool);
    return ObjectPool;
}());
exports.default = ObjectPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9PYmplY3RQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYseURBQW9EO0FBRXBELHFDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQVFJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztJQUM1QyxDQUFDO21CQVZnQixVQUFVO0lBRTNCLHNCQUFrQixzQkFBUTthQUExQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFVLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXVCLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFPRDs7Ozs7T0FLRztJQUNVLDBCQUFLLEdBQWxCLFVBQW1CLElBQVksRUFBRSxNQUFlO3VDQUFHLE9BQU87OztnQkFDdEQsc0JBQU8sSUFBSSxPQUFPLENBQVUsVUFBTyxRQUFROzs7OztvQ0FDbkMsSUFBSSxHQUFZLElBQUksQ0FBQzt5Q0FDckIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsd0JBQXFCO29DQUNyQixxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBQTs7b0NBQXBDLFNBQW9DLENBQUM7OztvQ0FJekMsU0FBUztvQ0FDVCx5QkFBeUI7b0NBQ3pCLGdCQUFnQjtvQ0FDaEIsSUFBSTtvQ0FDSixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzs7Ozt5QkFDMUIsQ0FBQyxFQUFBOzs7S0FDTDtJQUNEOzs7T0FHRztJQUNJLDRCQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQzFCLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDYixPQUFPO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHO0lBQ0ksK0JBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQzFCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRDs7T0FFRztJQUNJLDBCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0csZ0NBQVcsR0FBakIsVUFBa0IsSUFBWSxFQUFFLE1BQWU7Ozs7OzRCQUNoQyxxQkFBTSx1QkFBYSxDQUFDLElBQUksQ0FBWSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUE7O3dCQUE5RCxJQUFJLEdBQUcsU0FBdUQ7d0JBQzlELElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7OztLQUN2Qzs7SUF6RWdCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EwRTlCO0lBQUQsaUJBQUM7Q0ExRUQsQUEwRUMsSUFBQTtrQkExRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcbmltcG9ydCBTdWJQb29sIGZyb20gXCIuL1N1YlBvb2xcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFBvb2wge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogT2JqZWN0UG9vbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE9iamVjdFBvb2woKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgYXMgT2JqZWN0UG9vbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb29scyA9IG5ldyBNYXA8c3RyaW5nLCBTdWJQb29sPigpO1xuICAgIH1cbiAgICAvL+WvueixoeaxoFxuICAgIHByaXZhdGUgcG9vbHM6IE1hcDxzdHJpbmcsIFN1YlBvb2w+O1xuXG4gICAgLyoqXG4gICAgICog5Y+W5Ye65oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5hbWUg6IqC54K56aKE5Yi25L2T5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDoioLngrnliJvlu7rlh7rmnaXlkI7nmoTniLboioLngrlcbiAgICAgKiBAcmV0dXJucyDkuIDkuKrlvILmraXnmoRjYy5ub2Rl5a+56LGh77yM6ZyA6KaB55SoYXdhaXTmjqXmlLZcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgU3Bhd24obmFtZTogc3RyaW5nLCBwYXJlbnQ6IGNjLk5vZGUpOiBQcm9taXNlPGNjLk5vZGU+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLk5vZGU+KGFzeW5jIChyZXNvdmx2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvb2w6IFN1YlBvb2wgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuUmVnaXN0ZXJOZXcobmFtZSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAvLyBwb29sID0gdGhpcy5wb29scy5nZXQobmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gcmVzb3ZsdmUocG9vbC5TcGF3bigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIH0sIDAuMDEpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcG9vbCA9IHRoaXMucG9vbHMuZ2V0KG5hbWUpO1xuICAgICAgICAgICAgcmVzb3ZsdmUocG9vbC5TcGF3bigpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Zue5pS25oyH5a6a6IqC54K5XG4gICAgICogQHBhcmFtIG5vZGUg6KaB5Zue5pS255qE6IqC54K5XG4gICAgICovXG4gICAgcHVibGljIFVuU3Bhd24obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcG9vbDogU3ViUG9vbCA9IG51bGw7XG4gICAgICAgIHRoaXMucG9vbHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLkNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcG9vbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcG9vbC5VblNwYXduKG5vZGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlm57mlLbmiYDmnInoioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpIHtcbiAgICAgICAgdGhpcy5wb29scy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5VblNwYXduQWxsKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqICDmuIXpmaTmiYDmnInlr7nosaHmsaBcbiAgICAgKi9cbiAgICBwdWJsaWMgQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMucG9vbHMuY2xlYXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5paw5bu65LiA5Liq5a+56LGh5rGgXG4gICAgICogQHBhcmFtIG5hbWUg5a+56LGh5rGg5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhcmVudCDlr7nosaHmsaDkuK3miYDmnInlr7nosaHnmoTniLboioLngrlcbiAgICAgKi9cbiAgICBhc3luYyBSZWdpc3Rlck5ldyhuYW1lOiBzdHJpbmcsIHBhcmVudDogY2MuTm9kZSkge1xuICAgICAgICBsZXQgbm9kZSA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KG5hbWUsIFwiT2JqZWN0UG9vbFwiKTtcbiAgICAgICAgbGV0IHBvb2wgPSBuZXcgU3ViUG9vbChub2RlLCBwYXJlbnQpO1xuICAgICAgICB0aGlzLnBvb2xzLnNldChwb29sLnBvb2xOYW1lLCBwb29sKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
