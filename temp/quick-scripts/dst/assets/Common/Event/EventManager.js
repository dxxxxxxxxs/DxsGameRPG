
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