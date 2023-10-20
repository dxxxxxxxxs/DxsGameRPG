
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
        var go = null;
        this.nodeArray.forEach(function (node) {
            if (!node.active) {
                go = node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9TdWJQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFLaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFLSSxpQkFBWSxNQUFnQixFQUFDLE1BQWM7UUFIbkMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBUyxJQUFJLENBQUM7UUFHMUIsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQVJELHNCQUFXLDZCQUFRO2FBQW5CLGNBQXVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDOzs7T0FBQTtJQVNsRCxzQkFBSSxHQUFKO1FBRUksa0ZBQWtGO0lBQ3RGLENBQUM7SUFDTSx1QkFBSyxHQUFaO1FBRUksSUFBSSxFQUFFLEdBQVMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN4QixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDZjtnQkFDSSxFQUFFLEdBQUMsSUFBSSxDQUFDO2FBQ1g7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUcsRUFBRSxJQUFFLElBQUksRUFDWDtZQUNJLEVBQUUsR0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUNELEVBQUUsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ2YsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTSx5QkFBTyxHQUFkLFVBQWUsSUFBWTtRQUV2QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ3RCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDTSw0QkFBVSxHQUFqQjtRQUFBLGlCQVFDO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFDZDtnQkFDSSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sMEJBQVEsR0FBZixVQUFnQixJQUFZO1FBRXhCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXJEZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXNEM0I7SUFBRCxjQUFDO0NBdERELEFBc0RDLElBQUE7a0JBdERvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IElSZXN1bHRBYmxlIGZyb20gXCIuL0lSZXN1bHRBYmxlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViUG9vbCB7XG4gICAgcHVibGljIGdldCBwb29sTmFtZSgpeyByZXR1cm4gdGhpcy5teVByZWZhYi5uYW1lO31cbiAgICBwcml2YXRlIG5vZGVBcnJheTpjYy5Ob2RlW109W107XG4gICAgcHJpdmF0ZSBteVByZWZhYjpjYy5QcmVmYWI9bnVsbDtcbiAgICBwcml2YXRlIG15UGFyZW50OmNjLk5vZGU9bnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6Y2MuUHJlZmFiLHBhcmVudDpjYy5Ob2RlKVxuICAgIHtcbiAgICAgICAgdGhpcy5teVByZWZhYj1wcmVmYWI7XG4gICAgICAgIHRoaXMubXlQYXJlbnQ9cGFyZW50O1xuICAgIH1cbiAgICBpbml0KClcbiAgICB7XG4gICAgICAgIC8vdGhpcy5teVByZWZhYiA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KHRoaXMucG9vbE5hbWUsXCJPYmplY3RQb29sXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgU3Bhd24oKTpjYy5Ob2RlXG4gICAge1xuICAgICAgICBsZXQgZ286Y2MuTm9kZT1udWxsO1xuICAgICAgICB0aGlzLm5vZGVBcnJheS5mb3JFYWNoKChub2RlKT0+e1xuICAgICAgICAgICAgaWYoIW5vZGUuYWN0aXZlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGdvPW5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKGdvPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBnbz1jYy5pbnN0YW50aWF0ZSh0aGlzLm15UHJlZmFiKTtcbiAgICAgICAgICAgIGdvLnNldFBhcmVudCh0aGlzLm15UGFyZW50KTtcbiAgICAgICAgICAgIHRoaXMubm9kZUFycmF5LnB1c2goZ28pO1xuICAgICAgICB9XG4gICAgICAgIGdvLmFjdGl2ZT10cnVlO1xuICAgICAgICBnby5lbWl0KFwiT25TcGF3blwiKTtcbiAgICAgICAgcmV0dXJuIGdvO1xuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bihub2RlOmNjLk5vZGUpXG4gICAge1xuICAgICAgICBpZih0aGlzLkNvbnRhaW5zKG5vZGUpKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmVtaXQoXCJVblNwYXduXCIpO1xuICAgICAgICAgICAgbm9kZS5hY3RpdmU9ZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIFVuU3Bhd25BbGwoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ub2RlQXJyYXkuZm9yRWFjaCgobm9kZSk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuYWN0aXZlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuVW5TcGF3bihub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHVibGljIENvbnRhaW5zKG5vZGU6Y2MuTm9kZSk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZUFycmF5LmluZGV4T2Yobm9kZSk+LTE7XG4gICAgfVxufVxuIl19