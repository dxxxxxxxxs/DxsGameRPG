
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Framework/Event/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24aceh10CtOP7EwTclMxI41', 'EventManager');
// Scripts/Framework/Event/EventManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZyYW1ld29yay9FdmVudC9FdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFjMUM7SUFVSTtRQUNBLDZEQUE2RDtRQUNyRCxtQkFBYyxHQUFpQyxFQUFFLENBQUM7SUFGcEMsQ0FBQztxQkFWZCxZQUFZO0lBRXJCLHNCQUFrQix3QkFBUTthQUExQjtZQUVJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxJQUFJLEVBQ3ZCO2dCQUNJLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxjQUFZLEVBQUUsQ0FBQzthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQXlCLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFLRCw2R0FBNkc7SUFDckcsNkNBQXNCLEdBQTlCLFVBQStCLFNBQWdCLEVBQUMsUUFBNkIsRUFBQyxNQUFVO1FBRXBGLElBQUksS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN2RDtZQUNJLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFFLFFBQVEsSUFBRSxDQUFDLENBQUMsTUFBTSxJQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUUsTUFBTSxDQUFDLEVBQ2xFO2dCQUNJLEtBQUssR0FBQyxDQUFD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QyxDQUFDO2FBQy9FO1lBQ0QsS0FBdUIsVUFBWSxFQUFaLDZCQUFZLEVBQVosMEJBQVksRUFBWixJQUFZLEVBQUU7Z0JBQWhDLElBQU0sUUFBUSxxQkFBQTtnQkFDZiwySkFBMko7Z0JBQzNKLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0o7SUFDTCxDQUFDOztJQXpIUSxZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBNEh4QjtJQUFELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7QUE1SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDlm57osIPlh73mlbDvvIzmnInkuKTkuKrlj4LmlbDvvIzkuovku7blkI3lkozlh73mlbDmiYDpnIDmlbDmja5cbiAqL1xuZXhwb3J0IHR5cGUgRXZlbnRNYW5hZ2VyQ2FsbEZ1bmM9KGV2ZW50TmFtZTpzdHJpbmcsZXZlbnREYXRhOmFueSk9PnZvaWQ7XG4vKipcbiAqIOS6i+S7tuWQjeWvueW6lOeahOWbnuiwg+WHveaVsO+8jGNhbGxiYWNr5piv6Kem5Y+R55qE5Ye95pWw77yMdGFyZ2V05piv5Ye95pWw5omA5Zyo55qE6ISa5pysXG4gKi9cbmludGVyZmFjZSBDYWxsQmFja1RhcmdldFxue1xuICAgIGNhbGxCYWNrOkV2ZW50TWFuYWdlckNhbGxGdW5jLFxuICAgIHRhcmdldDphbnksXG59XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEV2ZW50TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkV2ZW50TWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9pbnN0YW5jZT09bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2U9bmV3IEV2ZW50TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSBhcyBFdmVudE1hbmFnZXI7XG4gICAgfVxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XG4gICAgLyoq55So5p2l5a2Y5YKo5omA5pyJ5bey5re75Yqg55qE5LqL5Lu25ZKM5a+55bqU5Zue6LCD5Ye95pWw55qE5a2X5YW46ZuG5ZCI77yMa2V577ya5LqL5Lu25ZCN77yMdmFsdWXvvJpjYWxsYmFja3RhcmdldOaVsOe7hCAqL1xuICAgIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6e1trZXk6c3RyaW5nXTpDYWxsQmFja1RhcmdldFtdfT17fTtcblxuICAgIC8v6L+Z5Liq5pa55rOV55So5LqO5Yik5pat5b2T5YmN6KaB5re75Yqg55qE5LqL5Lu25piv5ZCm5bey57uP5re75Yqg6L+H5LqG77yM5aaC5p6c6K+05bey57uP5re75Yqg6L+H5LqG77yM5bCx5LiN5YaN5re75Yqg77yM5aaC5p6c5rKh5re75Yqg6L+H57un57ut5re75Yqg5bCx5piv5LiA5LiqZXZlbnROYW1l6Kem5Y+R5aSa5Liq5pa55rOV77yI5Zug5Li66L+Z5Liq5pa55rOV5Y+q5pyJ5b2T6L+Z5LiqZXZlbnROYW1l5a+55bqU55qE5pa55rOV5pWw57uE5LiN5Li656m65pe25omN5Lya6Kem5Y+R77yJXG4gICAgcHJpdmF0ZSBnZXRFdmVudExpc3RlbmVyc0luZGV4KGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0OmFueSk6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgaW5kZXg9LTE7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVyYXRvcj10aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1baV07XG4gICAgICAgICAgICBpZihpdGVyYXRvci5jYWxsQmFjaz09Y2FsbEJhY2smJighdGFyZ2V0fHxpdGVyYXRvci50YXJnZXQ9PXRhcmdldCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXg9aTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCNXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOS6i+S7tuWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg5Ye95pWw5omA5Zyo6ISa5pys77yI5LiA6Iis5pivdGhpc++8iVxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOnN0cmluZyxjYWxsQmFjazpFdmVudE1hbmFnZXJDYWxsRnVuYyx0YXJnZXQ/OmFueSk6Ym9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoIWV2ZW50TmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuovku7blkI3mnInplJnor69cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2FsbEJhY2s9PW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25Lyg5YWl55qE5pa55rOV5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYWxsVGFyZ2V0OkNhbGxCYWNrVGFyZ2V0PXtjYWxsQmFjazpjYWxsQmFjayx0YXJnZXQ6dGFyZ2V0fTtcbiAgICAgICAgaWYodGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV09W2NhbGxUYXJnZXRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4PXRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChldmVudE5hbWUsY2FsbEJhY2ssdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmKGluZGV4PT0tMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsVGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5LqL5Lu25ZCN5a+55bqU55qE5LqL5Lu25Ye95pWwXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sgXG4gICAgICogQHBhcmFtIHRhcmdldCBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzZXRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpOmJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFldmVudE5hbWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqL5Lu25ZCN5Li656m6XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNhbGxCYWNrPT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS8oOWFpeeahOS6i+S7tuWHveaVsOS4uuepulwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FsbEJhY2tGdW5jOkNhbGxCYWNrVGFyZ2V0PXtjYWxsQmFjazpjYWxsQmFjayx0YXJnZXQ6dGFyZ2V0fTtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdPVtjYWxsQmFja0Z1bmNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliKDpmaTlh73mlbBcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjVxuICAgICAqIEBwYXJhbSBjYWxsQmFjayDkuovku7blm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOWHveaVsOaJgOWcqOeahOiEmuacrO+8iOS4gOiIrOaYr3RoaXPvvIlcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcsY2FsbEJhY2s6RXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsdGFyZ2V0PzphbnkpXG4gICAge1xuICAgICAgICBpZih0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0hPW51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleD10aGlzLmdldEV2ZW50TGlzdGVuZXJzSW5kZXgoZXZlbnROYW1lLGNhbGxCYWNrLHRhcmdldCk7XG4gICAgICAgICAgICBpZihpbmRleCE9LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDop6blj5Hkuovku7bvvIjlpoLmnpzkuovku7blr7nlupTnmoTmlrnms5XmsqHmnInmlbDmja7lj4LmlbDpnIDmsYLljbPlj6/lj6rkvKDkuIDkuKrlj4LmlbDvvIlcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tuWQjeWPguaVsFxuICAgICAqIEBwYXJhbSBldmVudERhdGEg5pWw5o2u5Y+C5pWwXG4gICAgICovXG4gICAgZGlzcGF0Y2goZXZlbnROYW1lOnN0cmluZyxldmVudERhdGE/OmFueSlcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSE9bnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g5bCG5omA5pyJ5Zue6LCD5o+Q5Y+W5Ye65p2l77yM5YaN6LCD55So77yM6YG/5YWN6LCD55So5Zue6LCD55qE5pe25YCZ5pON5L2c5LqG5LqL5Lu255qE5Yig6ZmkXG4gICAgICAgICAgICBsZXQgY2FsbEJhY2tMaXN0OkNhbGxCYWNrVGFyZ2V0W109W107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrTGlzdC5wdXNoKHsgY2FsbEJhY2s6IGl0ZXJhdG9yLmNhbGxCYWNrLCB0YXJnZXQ6IGl0ZXJhdG9yLnRhcmdldCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgY2FsbEJhY2tMaXN0KSB7XG4gICAgICAgICAgICAgICAgLy9jYWxs5pa55rOV5oSP5oCd5piv6LCD55So56ys5LiA5Liq5Y+C5pWw77yI5q2k5pe25LiA6Iis5Lyg5YWl55qE5piv5b2T5pe25re75Yqg6L+Z5Liq5LqL5Lu255qE6ISa5pys77yJ6ISa5pys5LiKY2FsbGJhY2vmlrnms5XvvIxjYWxsYmFja+aYr+S4gOS4qkV2ZW50TWFuYWdlckNhbGxGdW5j57G75Z6L77yM5pyJ5Lik5Liq5Y+C5pWw77yM5omA5LulY2FsbOWQjumdouS4pOS4quWPguaVsOWwseaYr+S8oOe7mei/meS4qnRhcmdldOi6q+S4iueahGNhbGxiYWNr5pa55rOV55qE44CC56ys5LiA5Liq5piv5LqL5Lu25ZCN56ew77yM5LiA6Iis5rKh55So77yM56ys5LqM5Liq5piv5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbEJhY2suY2FsbChpdGVyYXRvci50YXJnZXQsIGV2ZW50TmFtZSwgZXZlbnREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=