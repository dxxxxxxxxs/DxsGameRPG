"use strict";
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