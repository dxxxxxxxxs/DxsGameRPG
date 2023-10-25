
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