
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
    /**
     * 将传入的邮箱地址变为（首字符+****+尾字符+@+首字符+****+尾字符）
     * @param email 需要隐藏的邮箱地址
     * @returns
     */
    CCTools.prototype.convertEmail = function (email) {
        var atIndex = email.indexOf('@'); // 获取邮箱中 @ 符号的索引位置
        var firstChar = email.charAt(0); // 获取邮箱的首字符
        var lastChar = email.charAt(atIndex - 1);
        var firstChar2 = email.charAt(atIndex + 1);
        var lastChar2 = email.charAt(email.length - 1);
        var convertedEmail = firstChar + "****" + lastChar + "@" + firstChar2 + "****" + lastChar2; // 拼接转换后的邮箱字符串
        return convertedEmail;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVG9vbHMvQ0NUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDs7SUFvQ0EsQ0FBQztJQW5DaUIsb0JBQVksR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxjQUFjO1FBQ2QsSUFBTSxVQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFFaEQsaUJBQWlCO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyxlQUFPLEdBQXJCLFVBQXNCLE1BQWUsRUFBRSxJQUFhLEVBQUUsSUFBd0M7UUFBeEMscUJBQUEsRUFBQSxPQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUMxRixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsOEJBQVksR0FBWixVQUFhLEtBQWE7UUFDdEIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUN0RCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUM5QyxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBTSxjQUFjLEdBQU0sU0FBUyxZQUFPLFFBQVEsU0FBSSxVQUFVLFlBQU8sU0FBVyxDQUFDLENBQUMsY0FBYztRQUNsRyxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBbkNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBb0MzQjtJQUFELGNBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ29DLEVBQUUsQ0FBQyxTQUFTLEdBb0NoRDtrQkFwQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENDVG9vbHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgLy8g6YKu566x5Zyw5Z2A55qE5q2j5YiZ6KGo6L6+5byPIFxuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG5cbiAgICAgICAgLy8g5L2/55So5q2j5YiZ6KGo6L6+5byP6aqM6K+B6L6T5YWl5a2X56ym5LiyXG4gICAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS4gOS4quiKgueCuVxuICAgICAqIEBwYXJhbSBwYXJlbnQg54i26IqC54K5IFxuICAgICAqIEBwYXJhbSBuYW1lIOiKgueCueWQjeensFxuICAgICAqIEBwYXJhbSBzaXplIOiKgueCueWkp+Wwj1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYWRkTm9kZShwYXJlbnQ6IGNjLk5vZGUsIG5hbWU/OiBzdHJpbmcsIHNpemU6IGNjLlNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCkpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShuYW1lKTtcbiAgICAgICAgbm9kZS5zZXRDb250ZW50U2l6ZShzaXplKTtcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbkvKDlhaXnmoTpgq7nrrHlnLDlnYDlj5jkuLrvvIjpppblrZfnrKYrKioqKivlsL7lrZfnrKYrQCvpppblrZfnrKYrKioqKivlsL7lrZfnrKbvvIlcbiAgICAgKiBAcGFyYW0gZW1haWwg6ZyA6KaB6ZqQ6JeP55qE6YKu566x5Zyw5Z2AXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgY29udmVydEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBhdEluZGV4ID0gZW1haWwuaW5kZXhPZignQCcpOyAvLyDojrflj5bpgq7nrrHkuK0gQCDnrKblj7fnmoTntKLlvJXkvY3nva5cbiAgICAgICAgY29uc3QgZmlyc3RDaGFyID0gZW1haWwuY2hhckF0KDApOyAvLyDojrflj5bpgq7nrrHnmoTpppblrZfnrKZcbiAgICAgICAgY29uc3QgbGFzdENoYXIgPSBlbWFpbC5jaGFyQXQoYXRJbmRleCAtIDEpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIyID0gZW1haWwuY2hhckF0KGF0SW5kZXggKyAxKTtcbiAgICAgICAgY29uc3QgbGFzdENoYXIyID0gZW1haWwuY2hhckF0KGVtYWlsLmxlbmd0aCAtIDEpO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRFbWFpbCA9IGAke2ZpcnN0Q2hhcn0qKioqJHtsYXN0Q2hhcn1AJHtmaXJzdENoYXIyfSoqKioke2xhc3RDaGFyMn1gOyAvLyDmi7zmjqXovazmjaLlkI7nmoTpgq7nrrHlrZfnrKbkuLJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZEVtYWlsO1xuICAgIH1cbn1cbiJdfQ==