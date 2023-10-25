"use strict";
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