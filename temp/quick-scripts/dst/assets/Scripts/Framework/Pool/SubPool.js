
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Pool/SubPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5755gz6m5LQrVRIXDW/yhM', 'SubPool');
// Scripts/Framework/Pool/SubPool.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9Qb29sL1N1YlBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7OztBQUtoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUtJLGlCQUFZLE1BQWdCLEVBQUMsTUFBYztRQUhuQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFTLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBUkQsc0JBQVcsNkJBQVE7YUFBbkIsY0FBdUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7OztPQUFBO0lBU2xELHNCQUFJLEdBQUo7UUFFSSxrRkFBa0Y7SUFDdEYsQ0FBQztJQUNNLHVCQUFLLEdBQVo7UUFFSSxJQUFJLEVBQUUsR0FBUyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNmO2dCQUNJLEVBQUUsR0FBQyxJQUFJLENBQUM7YUFDWDtRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBRyxFQUFFLElBQUUsSUFBSSxFQUNYO1lBQ0ksRUFBRSxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsRUFBRSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDZixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlCQUFPLEdBQWQsVUFBZSxJQUFZO1FBRXZCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDdEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUNNLDRCQUFVLEdBQWpCO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDeEIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO2dCQUNJLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSwwQkFBUSxHQUFmLFVBQWdCLElBQVk7UUFFeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBckRnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc0QzQjtJQUFELGNBQUM7Q0F0REQsQUFzREMsSUFBQTtrQkF0RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJ1bmRsZU1hbmFnZXIgZnJvbSBcIi4uL0J1bmRsZS9CdW5kbGVNYW5hZ2VyXCI7XG5pbXBvcnQgSVJlc3VsdEFibGUgZnJvbSBcIi4vSVJlc3VsdEFibGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJQb29sIHtcbiAgICBwdWJsaWMgZ2V0IHBvb2xOYW1lKCl7IHJldHVybiB0aGlzLm15UHJlZmFiLm5hbWU7fVxuICAgIHByaXZhdGUgbm9kZUFycmF5OmNjLk5vZGVbXT1bXTtcbiAgICBwcml2YXRlIG15UHJlZmFiOmNjLlByZWZhYj1udWxsO1xuICAgIHByaXZhdGUgbXlQYXJlbnQ6Y2MuTm9kZT1udWxsO1xuICAgIGNvbnN0cnVjdG9yKHByZWZhYjpjYy5QcmVmYWIscGFyZW50OmNjLk5vZGUpXG4gICAge1xuICAgICAgICB0aGlzLm15UHJlZmFiPXByZWZhYjtcbiAgICAgICAgdGhpcy5teVBhcmVudD1wYXJlbnQ7XG4gICAgfVxuICAgIGluaXQoKVxuICAgIHtcbiAgICAgICAgLy90aGlzLm15UHJlZmFiID0gYXdhaXQgQnVuZGxlTWFuYWdlci5sb2FkPGNjLlByZWZhYj4odGhpcy5wb29sTmFtZSxcIk9iamVjdFBvb2xcIik7XG4gICAgfVxuICAgIHB1YmxpYyBTcGF3bigpOmNjLk5vZGVcbiAgICB7XG4gICAgICAgIGxldCBnbzpjYy5Ob2RlPW51bGw7XG4gICAgICAgIHRoaXMubm9kZUFycmF5LmZvckVhY2goKG5vZGUpPT57XG4gICAgICAgICAgICBpZighbm9kZS5hY3RpdmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ289bm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoZ289PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGdvPWNjLmluc3RhbnRpYXRlKHRoaXMubXlQcmVmYWIpO1xuICAgICAgICAgICAgZ28uc2V0UGFyZW50KHRoaXMubXlQYXJlbnQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlQXJyYXkucHVzaChnbyk7XG4gICAgICAgIH1cbiAgICAgICAgZ28uYWN0aXZlPXRydWU7XG4gICAgICAgIGdvLmVtaXQoXCJPblNwYXduXCIpO1xuICAgICAgICByZXR1cm4gZ287XG4gICAgfVxuICAgIHB1YmxpYyBVblNwYXduKG5vZGU6Y2MuTm9kZSlcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuQ29udGFpbnMobm9kZSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUuZW1pdChcIlVuU3Bhd25cIik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgVW5TcGF3bkFsbCgpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGVBcnJheS5mb3JFYWNoKChub2RlKT0+e1xuICAgICAgICAgICAgaWYobm9kZS5hY3RpdmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5VblNwYXduKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgQ29udGFpbnMobm9kZTpjYy5Ob2RlKTpib29sZWFuXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlQXJyYXkuaW5kZXhPZihub2RlKT4tMTtcbiAgICB9XG59XG4iXX0=