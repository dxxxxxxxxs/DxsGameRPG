"use strict";
cc._RF.push(module, 'ea7c6I3LGxFvpQmAmhGAUnJ', 'HttpManager');
// Common/Http/HttpManager.ts

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
var HttpManager = /** @class */ (function () {
    function HttpManager() {
    }
    HttpManager_1 = HttpManager;
    Object.defineProperty(HttpManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new HttpManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    var HttpManager_1;
    HttpManager = HttpManager_1 = __decorate([
        ccclass
    ], HttpManager);
    return HttpManager;
}());
exports.default = HttpManager;

cc._RF.pop();