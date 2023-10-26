
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vUG9vbC9TdWJQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7QUFLaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFLSSxpQkFBWSxNQUFpQixFQUFFLE1BQWU7UUFIdEMsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQVBELHNCQUFXLDZCQUFRO2FBQW5CLGNBQXdCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQVFwRCxzQkFBSSxHQUFKO1FBQ0ksa0ZBQWtGO0lBQ3RGLENBQUM7SUFDTSx1QkFBSyxHQUFaO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNWLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDWixFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7UUFDRCxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLElBQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBNUNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNkMzQjtJQUFELGNBQUM7Q0E3Q0QsQUE2Q0MsSUFBQTtrQkE3Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YlBvb2wge1xuICAgIHB1YmxpYyBnZXQgcG9vbE5hbWUoKSB7IHJldHVybiB0aGlzLm15UHJlZmFiLm5hbWU7IH1cbiAgICBwcml2YXRlIG5vZGVBcnJheTogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBteVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIG15UGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6IGNjLlByZWZhYiwgcGFyZW50OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubXlQcmVmYWIgPSBwcmVmYWI7XG4gICAgICAgIHRoaXMubXlQYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIC8vdGhpcy5teVByZWZhYiA9IGF3YWl0IEJ1bmRsZU1hbmFnZXIubG9hZDxjYy5QcmVmYWI+KHRoaXMucG9vbE5hbWUsXCJPYmplY3RQb29sXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgU3Bhd24oKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBnbzogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZUFycmF5LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZ28gPSBub2RlO1xuICAgICAgICAgICAgICAgIGdvLnNldFBhcmVudCh0aGlzLm15UGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGdvID09IG51bGwpIHtcbiAgICAgICAgICAgIGdvID0gY2MuaW5zdGFudGlhdGUodGhpcy5teVByZWZhYik7XG4gICAgICAgICAgICBnby5zZXRQYXJlbnQodGhpcy5teVBhcmVudCk7XG4gICAgICAgICAgICB0aGlzLm5vZGVBcnJheS5wdXNoKGdvKTtcbiAgICAgICAgfVxuICAgICAgICBnby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBnby5lbWl0KFwiT25TcGF3blwiKTtcbiAgICAgICAgcmV0dXJuIGdvO1xuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICh0aGlzLkNvbnRhaW5zKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLmVtaXQoXCJVblNwYXduXCIpO1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpIHtcbiAgICAgICAgdGhpcy5ub2RlQXJyYXkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5VblNwYXduKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgQ29udGFpbnMobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlQXJyYXkuaW5kZXhPZihub2RlKSA+IC0xO1xuICAgIH1cbn1cbiJdfQ==