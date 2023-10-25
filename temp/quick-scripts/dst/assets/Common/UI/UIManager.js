
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Common/UI/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aec3eRSdSBEZbZM57XuSQn+', 'UIManager');
// Common/UI/UIManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiManager = exports.UIManager = exports.ScreenType = void 0;
var BundleManager_1 = require("../Bundle/BundleManager");
var CCTools_1 = require("../Tools/CCTools");
var UIView_1 = require("./UIView");
var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["Long"] = 0] = "Long";
    ScreenType[ScreenType["Short"] = 1] = "Short";
    ScreenType[ScreenType["Pad"] = 2] = "Pad"; //平板
})(ScreenType = exports.ScreenType || (exports.ScreenType = {}));
var UIManager = /** @class */ (function () {
    function UIManager() {
        /** 资源加载计数器，用于生成唯一的资源占用key */
        this.useCount = 0;
        /** 背景UI（有若干层UI是作为背景UI，而不受切换等影响）*/
        this.BackGroundUI = 0;
        /** 是否正在关闭UI */
        this.isClosing = false;
        /** 是否正在打开UI */
        this.isOpening = false;
        /** UI界面缓存（key为UIId，value为UIView节点）*/
        this.UICache = {};
        /** UI界面栈（{UIID + UIView + UIArgs}数组）*/
        this.UIStack = [];
        /** UI待打开列表 */
        this.UIOpenQueue = [];
        /** UI待关闭列表 */
        this.UICloseQueue = [];
        /** UI配置 */
        this.UIConf = {};
        /** 所有UI层级 */
        this.layers = new Map();
        /** UI打开前回调 */
        this.uiOpenBeforeDelegate = null;
        /** UI打开回调 */
        this.uiOpenDelegate = null;
        /** UI关闭回调 */
        this.uiCloseDelegate = null;
        this.screenType = ScreenType.Long;
        // public addAudioRoot() {
        //     //音效节点
        //     let audioNode = new Node("audioNode");
        //     audioNode.addComponent(AudioSource)
        //     audioNode.addComponent(audioRoot)
        //     this.uiRootCanvasNode.addChild(audioNode)
        // }
    }
    /**
     * 初始化所有UI的配置对象
     * @param conf 配置对象
     */
    UIManager.prototype.initUIConf = function (conf) {
        this.UIConf = conf;
        var winSize = cc.view.getFrameSize();
        var resolutionSize = cc.view.getDesignResolutionSize();
        if (winSize.height / winSize.width < 1.77) {
            // 平板
            this.screenType = ScreenType.Pad;
        }
        else if (winSize.height / winSize.width < 2) {
            // 短手机
            this.screenType = ScreenType.Short;
        }
        else {
            // 长屏幕手机
            this.screenType = ScreenType.Long;
        }
    };
    /**
     * 设置或覆盖某uiId的配置
     * @param uiId 要设置的界面id
     * @param conf 要设置的配置
     */
    UIManager.prototype.setUIConf = function (uiId, conf) {
        this.UIConf[uiId] = conf;
    };
    /****************** 私有方法，UIManager内部的功能和基础规则 *******************/
    /**
     * 添加防触摸层
     * @param zOrder 屏蔽层的层级
     */
    UIManager.prototype.preventTouch = function (zOrder) {
        var child = cc.director.getScene().getChildByName('Canvas');
        var node = CCTools_1.default.addNode(child, 'preventTouch');
        node.on(cc.Node.EventType.TOUCH_START, function (event) {
        }, node);
        child.addChild(node);
        return node;
    };
    /** 自动执行下一个待关闭或待打开的界面 */
    UIManager.prototype.autoExecNextUI = function () {
        // 逻辑上是先关后开
        if (this.UICloseQueue.length > 0) {
            var uiQueueInfo = this.UICloseQueue[0];
            this.UICloseQueue.splice(0, 1);
            this.close(uiQueueInfo);
        }
        else if (this.UIOpenQueue.length > 0) {
            var uiQueueInfo = this.UIOpenQueue[0];
            this.UIOpenQueue.splice(0, 1);
            this.open(uiQueueInfo.uiId, uiQueueInfo.uiArgs);
        }
    };
    /**
     * 自动检测动画组件以及特定动画，如存在则播放动画，无论动画是否播放，都执行回调
     * @param aniName 动画名
     * @param aniOverCallback 动画播放完成回调
     */
    UIManager.prototype.autoExecAnimation = function (uiView, aniName, aniOverCallback) {
        // 暂时先省略动画播放的逻辑
        if (uiView.getComponent(cc.Animation)) {
            var ani = uiView.getComponent(cc.Animation);
            ani.play(aniName);
            ani.on('stop', function () {
                aniOverCallback();
            }, this);
        }
        else {
            aniOverCallback();
        }
    };
    /**
     * 自动检测资源预加载组件，如果存在则加载完成后调用completeCallback，否则直接调用
     * @param completeCallback 资源加载完成回调
     */
    UIManager.prototype.autoLoadRes = function (uiView, completeCallback) {
        // 暂时先省略
        completeCallback();
    };
    /** 生成唯一的资源占用key */
    UIManager.prototype.makeUseKey = function () {
        return "UIMgr_" + ++this.useCount;
    };
    /**
     * 异步加载一个UI的prefab，成功加载了一个prefab之后
     * @param uiId 界面id
     * @param processCallback 加载进度回调
     * @param completeCallback 加载完成回调
     * @param uiArgs 初始化参数
     */
    UIManager.prototype.getOrCreateUI = function (uiId, completeCallback, uiArgs) {
        var _this = this;
        // 如果找到缓存对象，则直接返回
        var uiView = this.UICache[uiId];
        if (uiView) {
            completeCallback(uiView);
            return;
        }
        // 找到UI配置
        var uiPath = this.UIConf[uiId].prefab;
        var uiBundle = null;
        if (null == uiPath) {
            completeCallback(null);
            return;
        }
        this.makeUseKey();
        var complete = function () {
            (uiBundle ? uiBundle : cc.resources).load(uiPath, function (err, prefab) {
                // 检查加载资源错误
                if (err) {
                    // Log.print(`getOrCreateUI loadRes ${uiId} faile, path: ${uiPath} error: ${err}`);
                    // completeCallback(null);
                    BundleManager_1.default.load(uiPath, function (err, prefab) {
                        if (err) {
                            console.error("getOrCreateUI loadRes " + uiId + " faile, path: " + uiPath + " error: " + err);
                            completeCallback(null);
                        }
                        else {
                            _this.compleateCreateUI(uiId, uiPath, uiView, prefab, completeCallback, uiArgs);
                        }
                    });
                }
                else {
                    _this.compleateCreateUI(uiId, uiPath, uiView, prefab, completeCallback, uiArgs);
                }
            });
        };
        if (this.UIConf[uiId].bundle) {
            if (App.bundles.get(this.UIConf[uiId].bundle)) {
                uiBundle = App.bundles.get(this.UIConf[uiId].bundle);
                complete();
            }
            else {
                cc.assetManager.loadBundle(this.UIConf[uiId].bundle, function (err, bundle) {
                    if (!err) {
                        App.bundles.set(_this.UIConf[uiId].bundle, bundle);
                        uiBundle = bundle;
                        complete();
                    }
                    ;
                });
            }
        }
        else {
            complete();
        }
    };
    UIManager.prototype.compleateCreateUI = function (uiId, uiPath, uiView, prefab, completeCallback, uiArgs) {
        // 检查实例化错误
        var uiNode = instantiate(prefab);
        if (null == uiNode) {
            Log.print("getOrCreateUI instantiate " + uiId + " faile, path: " + uiPath);
            completeCallback(null);
            // resLoader.release(prefab);
            return;
        }
        // 检查组件获取错误
        uiView = uiNode.getComponent(UIView_1.UIView);
        // 设置一下uiId
        uiView.uiId = uiId;
        if (null == uiView) {
            Log.print("getOrCreateUI getComponent " + uiId + " faile, path: " + uiPath);
            uiNode.destroy();
            completeCallback(null);
            // resLoader.release(prefab);
            return;
        }
        // 异步加载UI预加载的资源
        this.autoLoadRes(uiView, function () {
            uiView.init(uiArgs);
            completeCallback(uiView);
            // uiView.cacheAsset(prefab);
        });
    };
    /**
     * UI被打开时回调，对UI进行初始化设置，刷新其他界面的显示，并根据
     * @param uiId 哪个界面被打开了
     * @param uiView 界面对象
     * @param uiInfo 界面栈对应的信息结构
     * @param uiArgs 界面初始化参数
     */
    UIManager.prototype.onUIOpen = function (uiId, uiView, uiInfo, uiArgs) {
        var _this = this;
        if (null == uiView) {
            return;
        }
        // 激活界面
        uiInfo.uiView = uiView;
        uiView.node.active = true;
        //uiView.node.zIndex = uiInfo.zOrder || this.UIStack.length;
        // 快速关闭界面的设置，绑定界面中的background，实现快速关闭
        if (uiView.quickClose) {
            var backGround = uiView.node.getChildByName('background');
            if (!backGround) {
                Utils.addNode(uiView.node, 'background');
            }
            backGround.targetOff(Node.EventType.TOUCH_START);
            backGround.on(Node.EventType.TOUCH_START, function (event) {
                _this.close(uiView);
            }, backGround);
        }
        // 添加到场景中
        var child = director.getScene().getChildByName('Canvas');
        var nodeName = '';
        switch (uiView.showType) {
            case UIShowTypes.UIFullScreen:
                nodeName = 'bottom';
                break;
            case UIShowTypes.UIAddition:
                nodeName = 'middle';
                break;
            case UIShowTypes.UISingle:
                nodeName = 'top';
                break;
            default:
                break;
        }
        child = director.getScene().getChildByName('Canvas').getChildByName(nodeName);
        child.addChild(uiView.node);
        if (!GlobalConfig.isRelease) {
            var time = new Date().toLocaleString();
            Log.print("%c[open-view %s]>>> %s", "color:blue", time, uiInfo.uiView.name);
        }
        // 刷新其他UI
        this.updateUI();
        // 从那个界面打开的
        var fromUIID = 0;
        if (this.UIStack.length > 1) {
            fromUIID = this.UIStack[this.UIStack.length - 2].uiId;
        }
        // 打开界面之前回调
        if (this.uiOpenBeforeDelegate) {
            this.uiOpenBeforeDelegate(uiId, fromUIID);
        }
        //阿拉伯语处理
        if (App.isAr()) {
            this.arabicUI(uiView.node);
        }
        // 执行onOpen回调
        uiView.onOpen(fromUIID, uiArgs);
        this.autoExecAnimation(uiView, "uiOpen", function () {
            uiView.onOpenAniOver();
            if (_this.uiOpenDelegate) {
                _this.uiOpenDelegate(uiId, fromUIID);
            }
        });
    };
    /** 打开界面并添加到界面栈中 */
    UIManager.prototype.open = function (uiId, uiArgs) {
        var _this = this;
        var _a;
        if (uiArgs === void 0) { uiArgs = null; }
        var uiInfo = {
            uiId: uiId,
            uiArgs: uiArgs,
            uiView: null,
        };
        if (this.isOpening || this.isClosing) {
            if (this.isOpening && this.openingUIId === uiId) {
                console.error("\u754C\u9762" + uiId + "\u5DF2\u7ECF\u5728\u6253\u5F00\u4E2D");
                return;
            }
            // 插入待打开队列
            if (this.UIOpenQueue.find(function (obj) { return obj.uiId === uiInfo.uiId; }) != null) {
                console.error("\u754C\u9762" + uiId + "\u5DF2\u7ECF\u5728\u6392\u961F\u4E2D");
                return;
            }
            console.error("\u754C\u9762" + uiId + "\u63D2\u5165\u6253\u5F00\u961F\u5217");
            this.UIOpenQueue.push(uiInfo);
            return;
        }
        var uiIndex = this.getUIIndex(uiId);
        if (-1 != uiIndex) {
            // 重复打开了同一个界面，直接回到该界面
            console.error("\u91CD\u590D\u6253\u5F00\u754C\u9762" + uiId);
            this.closeToUI(uiId, uiArgs);
            return;
        }
        // 设置UI的zOrder
        uiInfo.zOrder = (uiArgs && uiArgs.zOrder) || this.UIStack.length + 1;
        console.log(uiInfo.zOrder);
        this.UIStack.push(uiInfo);
        // 先屏蔽点击
        if ((_a = this.UIConf[uiId]) === null || _a === void 0 ? void 0 : _a.preventTouch) {
            uiInfo.preventNode = this.preventTouch(uiInfo.zOrder);
        }
        this.isOpening = true;
        this.openingUIId = uiId;
        // 预加载资源，并在资源加载完成后自动打开界面
        this.getOrCreateUI(uiId, function (uiView) {
            // 如果界面已经被关闭或创建失败
            if (uiInfo.isClose || null == uiView) {
                Log.print("getOrCreateUI " + uiId + " faile!\n                        close state : " + uiInfo.isClose + " , uiView : " + uiView);
                _this.isOpening = false;
                _this.openingUIId = null;
                if (uiInfo.preventNode) {
                    uiInfo.preventNode.destroy();
                    uiInfo.preventNode = null;
                }
                return;
            }
            // 打开UI，执行配置
            // 逻辑层函数异常处理,防止卡主ui queue
            try {
                _this.onUIOpen(uiId, uiView, uiInfo, uiArgs);
                if (uiInfo.uiArgs != null && uiInfo.uiArgs.onOpenCallback != null) {
                    uiInfo.uiArgs.onOpenCallback(uiView);
                }
            }
            catch (error) {
                Log.error(error);
            }
            _this.isOpening = false;
            _this.openingUIId = null;
            _this.autoExecNextUI();
        }, uiArgs);
    };
    /** 替换栈顶界面 */
    UIManager.prototype.replace = function (uiId, uiArgs) {
        if (uiArgs === void 0) { uiArgs = null; }
        this.close(this.UIStack[this.UIStack.length - 1].uiView);
        this.open(uiId, uiArgs);
    };
    /**
     * 根据uiid关闭界面
     * @param uiId
     */
    UIManager.prototype.closeById = function (uiId) {
        var uiView = this.getUI(uiId);
        if (uiView) {
            this.close(uiView);
        }
    };
    /**
     * 关闭当前界面
     * @param closeUI 要关闭的界面
     */
    UIManager.prototype.close = function (closeUI) {
        var _this = this;
        var uiCount = this.UIStack.length;
        if (uiCount < 1 || this.isClosing || this.isOpening) {
            if (closeUI) {
                // 插入待关闭队列
                if (this.UICloseQueue.find(function (obj) { return obj.uiId === closeUI.uiId; }) != null) {
                    Log.print(closeUI.uiId + " \u5DF2\u5728\u7B49\u5F85\u5173\u95ED\u4E2D");
                    return;
                }
                this.UICloseQueue.push(closeUI);
            }
            return;
        }
        var uiInfo;
        if (closeUI) {
            for (var index = this.UIStack.length - 1; index >= 0; index--) {
                var ui = this.UIStack[index];
                if (ui.uiView === closeUI) {
                    uiInfo = ui;
                    this.UIStack.splice(index, 1);
                    break;
                }
            }
            // 找不到这个UI
            if (uiInfo === undefined) {
                return;
            }
        }
        else {
            uiInfo = this.UIStack.pop();
        }
        // 关闭当前界面
        var uiId = uiInfo.uiId;
        var uiView = uiInfo.uiView;
        uiInfo.isClose = true;
        // 回收遮罩层
        if (uiInfo.preventNode) {
            uiInfo.preventNode.destroy();
            uiInfo.preventNode = null;
        }
        if (null == uiView) {
            return;
        }
        var preUIInfo = this.UIStack[uiCount - 2];
        // 处理显示模式
        this.updateUI();
        var close = function () {
            _this.isClosing = false;
            // 显示之前的界面
            if (preUIInfo && preUIInfo.uiView && _this.isTopUI(preUIInfo.uiId)) {
                // 如果之前的界面弹到了最上方（中间有肯能打开了其他界面）
                preUIInfo.uiView.node.active = true;
                // 回调onTop
                preUIInfo.uiView.onTop(uiId, uiView.onClose());
            }
            else {
                uiView.onClose();
            }
            if (_this.uiCloseDelegate) {
                _this.uiCloseDelegate(uiId);
            }
            if (uiView.cache) {
                _this.UICache[uiId] = uiView;
                uiView.node.removeFromParent();
                Log.print("uiView removeFromParent " + uiInfo.uiId);
            }
            else {
                uiView.node.destroy();
                if (!GlobalConfig.isRelease) {
                    var time = new Date().toLocaleString();
                    Log.print("%c[close-view %s]>>> %s", "color:gray", time, uiInfo.uiView.name);
                }
            }
            _this.autoExecNextUI();
        };
        // 执行关闭动画
        this.autoExecAnimation(uiView, "uiClose", close);
    };
    /** 关闭所有界面 */
    UIManager.prototype.closeAll = function () {
        // 不播放动画，也不清理缓存
        for (var _i = 0, _a = this.UIStack; _i < _a.length; _i++) {
            var uiInfo = _a[_i];
            uiInfo.isClose = true;
            if (uiInfo.preventNode) {
                uiInfo.preventNode.destroy();
                uiInfo.preventNode = null;
            }
            if (uiInfo.uiView) {
                uiInfo.uiView.onClose();
                uiInfo.uiView.node.destroy();
            }
        }
        this.UIOpenQueue = [];
        this.UICloseQueue = [];
        this.UIStack = [];
        this.isOpening = false;
        this.openingUIId = null;
        this.isClosing = false;
    };
    /**
     * 关闭界面，一直关闭到顶部为uiId的界面，为避免循环打开UI导致UI栈溢出
     * @param uiId 要关闭到的uiId（关闭其顶部的ui）
     * @param uiArgs 打开的参数
     * @param bOpenSelf
     */
    UIManager.prototype.closeToUI = function (uiId, uiArgs, bOpenSelf) {
        if (bOpenSelf === void 0) { bOpenSelf = true; }
        var idx = this.getUIIndex(uiId);
        if (-1 == idx) {
            return;
        }
        idx = bOpenSelf ? idx : idx + 1;
        for (var i = this.UIStack.length - 1; i >= idx; --i) {
            var uiInfo = this.UIStack.pop();
            var uiId_1 = uiInfo.uiId;
            var uiView = uiInfo.uiView;
            uiInfo.isClose = true;
            // 回收屏蔽层
            if (uiInfo.preventNode) {
                uiInfo.preventNode.destroy();
                uiInfo.preventNode = null;
            }
            if (this.uiCloseDelegate) {
                this.uiCloseDelegate(uiId_1);
            }
            if (uiView) {
                uiView.onClose();
                if (uiView.cache) {
                    this.UICache[uiId_1] = uiView;
                    uiView.node.removeFromParent();
                }
                else {
                    uiView.node.destroy();
                }
            }
        }
        this.updateUI();
        this.UIOpenQueue = [];
        this.UICloseQueue = [];
        bOpenSelf && this.open(uiId, uiArgs);
    };
    /** 清理界面缓存 */
    UIManager.prototype.clearCache = function () {
        for (var key in this.UICache) {
            var ui = this.UICache[key];
            if (isValid(ui.node)) {
                ui.node.destroy();
            }
        }
        this.UICache = {};
    };
    /******************** UI的便捷接口 *******************/
    UIManager.prototype.isTopUI = function (uiId) {
        if (this.UIStack.length == 0) {
            return false;
        }
        return this.UIStack[this.UIStack.length - 1].uiId == uiId;
    };
    UIManager.prototype.getUI = function (uiId) {
        for (var index = 0; index < this.UIStack.length; index++) {
            var element = this.UIStack[index];
            if (uiId == element.uiId) {
                return element.uiView;
            }
        }
        return null;
    };
    UIManager.prototype.getTopUI = function () {
        if (this.UIStack.length > 0) {
            return this.UIStack[this.UIStack.length - 1].uiView;
        }
        return null;
    };
    UIManager.prototype.getUIIndex = function (uiId) {
        for (var index = 0; index < this.UIStack.length; index++) {
            var element = this.UIStack[index];
            if (uiId == element.uiId) {
                return index;
            }
        }
        return -1;
    };
    UIManager.prototype.initialize = function () {
        var _this = this;
        this.layers = new Map();
        this.uiRootCanvasNode = director.getScene().getChildByName('Canvas');
        var designSize = this.uiRootCanvasNode.getComponent(cc.Canvas).designResolution;
        uiLayers.forEach(function (layer) {
            if (_this.layers[layer.layerName] == null) {
                var layerNode = new Node(layer.layerName);
                _this.layers[layer.layerName] = layerNode;
                var widget = layerNode.addComponent(Widget);
                _this.uiRootCanvasNode.addChild(layerNode);
                layerNode.setContentSize(designSize);
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
                widget.isAlignBottom = true;
                widget.isAlignTop = true;
            }
        });
    };
    return UIManager;
}());
exports.UIManager = UIManager;
exports.uiManager = new UIManager();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Db21tb24vVUkvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7O0FBRXRGLHlEQUFvRDtBQUVwRCw0Q0FBdUM7QUFDdkMsbUNBQWtDO0FBK0JsQyxJQUFZLFVBSVg7QUFKRCxXQUFZLFVBQVU7SUFDbEIsMkNBQUksQ0FBQTtJQUNKLDZDQUFLLENBQUE7SUFDTCx5Q0FBRyxDQUFBLENBQVMsSUFBSTtBQUNwQixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFFRDtJQUFBO1FBQ0ksNkJBQTZCO1FBQ3JCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDckIsa0NBQWtDO1FBQzFCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGVBQWU7UUFDUCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGVBQWU7UUFDUCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRzFCLHFDQUFxQztRQUM3QixZQUFPLEdBQStCLEVBQUUsQ0FBQztRQUNqRCx1Q0FBdUM7UUFDL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUMvQixjQUFjO1FBQ04sZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDbkMsY0FBYztRQUNOLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLFdBQVc7UUFDSCxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUUvQyxhQUFhO1FBQ0wsV0FBTSxHQUFzQixJQUFJLEdBQUcsRUFBZ0IsQ0FBQztRQUk1RCxjQUFjO1FBQ1AseUJBQW9CLEdBQTRDLElBQUksQ0FBQztRQUM1RSxhQUFhO1FBQ04sbUJBQWMsR0FBNEMsSUFBSSxDQUFDO1FBQ3RFLGFBQWE7UUFDTixvQkFBZSxHQUEyQixJQUFJLENBQUM7UUFFL0MsZUFBVSxHQUFlLFVBQVUsQ0FBQyxJQUFJLENB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QzFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVUwsZ0JBQUM7QUFBRCxDQTVtQkEsQUE0bUJDLElBQUE7QUE1bUJZLDhCQUFTO0FBOG1CWCxRQUFBLFNBQVMsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCdW5kbGVNYW5hZ2VyIGZyb20gXCIuLi9CdW5kbGUvQnVuZGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL0dhbWVcIjtcbmltcG9ydCBDQ1Rvb2xzIGZyb20gXCIuLi9Ub29scy9DQ1Rvb2xzXCI7XG5pbXBvcnQgeyBVSVZpZXcgfSBmcm9tIFwiLi9VSVZpZXdcIjtcbi8qKlxuICogVUlNYW5hZ2Vy55WM6Z2i566h55CG57G7XG4gKiBcbiAqIDEu5omT5byA55WM6Z2i77yM5qC55o2u6YWN572u6Ieq5Yqo5Yqg6L2955WM6Z2i44CB6LCD55So5Yid5aeL5YyW44CB5pKt5pS+5omT5byA5Yqo55S744CB6ZqQ6JeP5YW25LuW55WM6Z2i44CB5bGP6JS95LiL5pa555WM6Z2i54K55Ye7XG4gKiAyLuWFs+mXreeVjOmdou+8jOagueaNrumFjee9ruiHquWKqOWFs+mXreeVjOmdouOAgeaSreaUvuWFs+mXreWKqOeUu+OAgeaBouWkjeWFtuS7lueVjOmdolxuICogMy7liIfmjaLnlYzpnaLvvIzkuI7miZPlvIDnlYzpnaLnsbvkvLzvvIzkvYbmmK/mmK/lsIblvZPliY3moIjpobbnmoTnlYzpnaLliIfmjaLmiJDmlrDnmoTnlYzpnaLvvIjlhYjlhbPpl63lho3miZPlvIDvvIlcbiAqIDQu5o+Q5L6b55WM6Z2i57yT5a2Y5Yqf6IO9XG4gKlxuICovXG5cbi8qKiBVSeagiOe7k+aehOS9kyAqL1xuZXhwb3J0IGludGVyZmFjZSBVSUluZm8ge1xuICAgIHVpSWQ6IG51bWJlcjtcbiAgICB1aVZpZXc6IFVJVmlldztcbiAgICB1aUFyZ3M6IGFueTtcbiAgICBwcmV2ZW50Tm9kZT86IGNjLk5vZGU7XG4gICAgek9yZGVyPzogbnVtYmVyO1xuICAgIG9wZW5UeXBlPzogJ3F1aWV0JyB8ICdvdGhlcic7XG4gICAgaXNDbG9zZT86IGJvb2xlYW47XG4gICAgcmVzVG9DbGVhcj86IHN0cmluZ1tdO1xuICAgIHJlc0NhY2hlPzogc3RyaW5nW107XG59XG5cbi8qKiBVSemFjee9rue7k+aehOS9kyAqL1xuZXhwb3J0IGludGVyZmFjZSBVSUNvbmYge1xuICAgIHByZWZhYjogc3RyaW5nO1xuICAgIGJ1bmRsZT86IHN0cmluZztcbiAgICBwcmV2ZW50VG91Y2g/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZW51bSBTY3JlZW5UeXBlIHtcbiAgICBMb25nLCAgICAgICAvL+mVv+Wxj1xuICAgIFNob3J0LCAgICAgIC8v55+t5bGPXG4gICAgUGFkICAgICAgICAgLy/lubPmnb9cbn1cblxuZXhwb3J0IGNsYXNzIFVJTWFuYWdlciB7XG4gICAgLyoqIOi1hOa6kOWKoOi9veiuoeaVsOWZqO+8jOeUqOS6jueUn+aIkOWUr+S4gOeahOi1hOa6kOWNoOeUqGtleSAqL1xuICAgIHByaXZhdGUgdXNlQ291bnQgPSAwO1xuICAgIC8qKiDog4zmma9VSe+8iOacieiLpeW5suWxglVJ5piv5L2c5Li66IOM5pmvVUnvvIzogIzkuI3lj5fliIfmjaLnrYnlvbHlk43vvIkqL1xuICAgIHByaXZhdGUgQmFja0dyb3VuZFVJID0gMDtcbiAgICAvKiog5piv5ZCm5q2j5Zyo5YWz6ZetVUkgKi9cbiAgICBwcml2YXRlIGlzQ2xvc2luZyA9IGZhbHNlO1xuICAgIC8qKiDmmK/lkKbmraPlnKjmiZPlvIBVSSAqL1xuICAgIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvcGVuaW5nVUlJZDogbnVtYmVyO1xuXG4gICAgLyoqIFVJ55WM6Z2i57yT5a2Y77yIa2V55Li6VUlJZO+8jHZhbHVl5Li6VUlWaWV36IqC54K577yJKi9cbiAgICBwcml2YXRlIFVJQ2FjaGU6IHsgW1VJSWQ6IG51bWJlcl06IFVJVmlldyB9ID0ge307XG4gICAgLyoqIFVJ55WM6Z2i5qCI77yIe1VJSUQgKyBVSVZpZXcgKyBVSUFyZ3N95pWw57uE77yJKi9cbiAgICBwcml2YXRlIFVJU3RhY2s6IFVJSW5mb1tdID0gW107XG4gICAgLyoqIFVJ5b6F5omT5byA5YiX6KGoICovXG4gICAgcHJpdmF0ZSBVSU9wZW5RdWV1ZTogVUlJbmZvW10gPSBbXTtcbiAgICAvKiogVUnlvoXlhbPpl63liJfooaggKi9cbiAgICBwcml2YXRlIFVJQ2xvc2VRdWV1ZTogVUlWaWV3W10gPSBbXTtcbiAgICAvKiogVUnphY3nva4gKi9cbiAgICBwcml2YXRlIFVJQ29uZjogeyBba2V5OiBudW1iZXJdOiBVSUNvbmYgfSA9IHt9O1xuXG4gICAgLyoqIOaJgOaciVVJ5bGC57qnICovXG4gICAgcHJpdmF0ZSBsYXllcnM6IE1hcDxzdHJpbmcsIE5vZGU+ID0gbmV3IE1hcDxzdHJpbmcsIE5vZGU+KCk7XG4gICAgLyoqIFVJIFJvb3QgQ2FudmFzICovXG4gICAgcHJpdmF0ZSB1aVJvb3RDYW52YXNOb2RlOiBjYy5Ob2RlO1xuXG4gICAgLyoqIFVJ5omT5byA5YmN5Zue6LCDICovXG4gICAgcHVibGljIHVpT3BlbkJlZm9yZURlbGVnYXRlOiAodWlJZDogbnVtYmVyLCBwcmVVSUlkOiBudW1iZXIpID0+IHZvaWQgPSBudWxsO1xuICAgIC8qKiBVSeaJk+W8gOWbnuiwgyAqL1xuICAgIHB1YmxpYyB1aU9wZW5EZWxlZ2F0ZTogKHVpSWQ6IG51bWJlciwgcHJlVUlJZDogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcbiAgICAvKiogVUnlhbPpl63lm57osIMgKi9cbiAgICBwdWJsaWMgdWlDbG9zZURlbGVnYXRlOiAodWlJZDogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIHB1YmxpYyBzY3JlZW5UeXBlOiBTY3JlZW5UeXBlID0gU2NyZWVuVHlwZS5Mb25nO1xuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omA5pyJVUnnmoTphY3nva7lr7nosaFcbiAgICAgKiBAcGFyYW0gY29uZiDphY3nva7lr7nosaFcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFVJQ29uZihjb25mOiB7IFtrZXk6IG51bWJlcl06IFVJQ29uZiB9KTogdm9pZCB7XG4gICAgICAgIHRoaXMuVUlDb25mID0gY29uZjtcblxuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgIGxldCByZXNvbHV0aW9uU2l6ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDwgMS43Nykge1xuICAgICAgICAgICAgLy8g5bmz5p2/XG4gICAgICAgICAgICB0aGlzLnNjcmVlblR5cGUgPSBTY3JlZW5UeXBlLlBhZDtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5TaXplLmhlaWdodCAvIHdpblNpemUud2lkdGggPCAyKSB7XG4gICAgICAgICAgICAvLyDnn63miYvmnLpcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuVHlwZSA9IFNjcmVlblR5cGUuU2hvcnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDplb/lsY/luZXmiYvmnLpcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuVHlwZSA9IFNjcmVlblR5cGUuTG9uZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaIluimhuebluafkHVpSWTnmoTphY3nva5cbiAgICAgKiBAcGFyYW0gdWlJZCDopoHorr7nva7nmoTnlYzpnaJpZFxuICAgICAqIEBwYXJhbSBjb25mIOimgeiuvue9rueahOmFjee9rlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRVSUNvbmYodWlJZDogbnVtYmVyLCBjb25mOiBVSUNvbmYpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5VSUNvbmZbdWlJZF0gPSBjb25mO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKiog56eB5pyJ5pa55rOV77yMVUlNYW5hZ2Vy5YaF6YOo55qE5Yqf6IO95ZKM5Z+656GA6KeE5YiZICoqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDpmLLop6bmkbjlsYJcbiAgICAgKiBAcGFyYW0gek9yZGVyIOWxj+iUveWxgueahOWxgue6p1xuICAgICAqL1xuICAgIHByaXZhdGUgcHJldmVudFRvdWNoKHpPcmRlcjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpIGFzIHVua25vd24gYXMgY2MuTm9kZTtcbiAgICAgICAgbGV0IG5vZGUgPSBDQ1Rvb2xzLmFkZE5vZGUoY2hpbGQsICdwcmV2ZW50VG91Y2gnKVxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIH0sIG5vZGUpO1xuICAgICAgICBjaGlsZC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqIOiHquWKqOaJp+ihjOS4i+S4gOS4quW+heWFs+mXreaIluW+heaJk+W8gOeahOeVjOmdoiAqL1xuICAgIHByaXZhdGUgYXV0b0V4ZWNOZXh0VUkoKSB7XG4gICAgICAgIC8vIOmAu+i+keS4iuaYr+WFiOWFs+WQjuW8gFxuICAgICAgICBpZiAodGhpcy5VSUNsb3NlUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHVpUXVldWVJbmZvID0gdGhpcy5VSUNsb3NlUXVldWVbMF07XG4gICAgICAgICAgICB0aGlzLlVJQ2xvc2VRdWV1ZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHVpUXVldWVJbmZvKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlVJT3BlblF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB1aVF1ZXVlSW5mbyA9IHRoaXMuVUlPcGVuUXVldWVbMF07XG4gICAgICAgICAgICB0aGlzLlVJT3BlblF1ZXVlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHRoaXMub3Blbih1aVF1ZXVlSW5mby51aUlkLCB1aVF1ZXVlSW5mby51aUFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Ieq5Yqo5qOA5rWL5Yqo55S757uE5Lu25Lul5Y+K54m55a6a5Yqo55S777yM5aaC5a2Y5Zyo5YiZ5pKt5pS+5Yqo55S777yM5peg6K665Yqo55S75piv5ZCm5pKt5pS+77yM6YO95omn6KGM5Zue6LCDXG4gICAgICogQHBhcmFtIGFuaU5hbWUg5Yqo55S75ZCNXG4gICAgICogQHBhcmFtIGFuaU92ZXJDYWxsYmFjayDliqjnlLvmkq3mlL7lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dG9FeGVjQW5pbWF0aW9uKHVpVmlldzogVUlWaWV3LCBhbmlOYW1lOiBzdHJpbmcsIGFuaU92ZXJDYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyDmmoLml7blhYjnnIHnlaXliqjnlLvmkq3mlL7nmoTpgLvovpFcbiAgICAgICAgaWYgKHVpVmlldy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgbGV0IGFuaSA9IHVpVmlldy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGFuaS5wbGF5KGFuaU5hbWUpO1xuICAgICAgICAgICAgYW5pLm9uKCdzdG9wJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFuaU92ZXJDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmlPdmVyQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiHquWKqOajgOa1i+i1hOa6kOmihOWKoOi9vee7hOS7tu+8jOWmguaenOWtmOWcqOWImeWKoOi9veWujOaIkOWQjuiwg+eUqGNvbXBsZXRlQ2FsbGJhY2vvvIzlkKbliJnnm7TmjqXosIPnlKhcbiAgICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayDotYTmupDliqDovb3lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dG9Mb2FkUmVzKHVpVmlldzogVUlWaWV3LCBjb21wbGV0ZUNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIC8vIOaaguaXtuWFiOecgeeVpVxuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqIOeUn+aIkOWUr+S4gOeahOi1hOa6kOWNoOeUqGtleSAqL1xuICAgIHByaXZhdGUgbWFrZVVzZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFVJTWdyXyR7Kyt0aGlzLnVzZUNvdW50fWA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDlvILmraXliqDovb3kuIDkuKpVSeeahHByZWZhYu+8jOaIkOWKn+WKoOi9veS6huS4gOS4qnByZWZhYuS5i+WQjlxuICAgICAqIEBwYXJhbSB1aUlkIOeVjOmdomlkXG4gICAgICogQHBhcmFtIHByb2Nlc3NDYWxsYmFjayDliqDovb3ov5vluqblm57osINcbiAgICAgKiBAcGFyYW0gY29tcGxldGVDYWxsYmFjayDliqDovb3lrozmiJDlm57osINcbiAgICAgKiBAcGFyYW0gdWlBcmdzIOWIneWni+WMluWPguaVsFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0T3JDcmVhdGVVSSh1aUlkOiBudW1iZXIsIGNvbXBsZXRlQ2FsbGJhY2s6ICh1aVZpZXc6IFVJVmlldykgPT4gdm9pZCwgdWlBcmdzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8g5aaC5p6c5om+5Yiw57yT5a2Y5a+56LGh77yM5YiZ55u05o6l6L+U5ZueXG4gICAgICAgIGxldCB1aVZpZXc6IFVJVmlldyA9IHRoaXMuVUlDYWNoZVt1aUlkXTtcbiAgICAgICAgaWYgKHVpVmlldykge1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayh1aVZpZXcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5om+5YiwVUnphY3nva5cbiAgICAgICAgbGV0IHVpUGF0aCA9IHRoaXMuVUlDb25mW3VpSWRdLnByZWZhYjtcbiAgICAgICAgbGV0IHVpQnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gbnVsbDtcbiAgICAgICAgaWYgKG51bGwgPT0gdWlQYXRoKSB7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYWtlVXNlS2V5KCk7XG4gICAgICAgIGxldCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICh1aUJ1bmRsZSA/IHVpQnVuZGxlIDogY2MucmVzb3VyY2VzKS5sb2FkKHVpUGF0aCwgKGVycjogRXJyb3IsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5qOA5p+l5Yqg6L296LWE5rqQ6ZSZ6K+vXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2cucHJpbnQoYGdldE9yQ3JlYXRlVUkgbG9hZFJlcyAke3VpSWR9IGZhaWxlLCBwYXRoOiAke3VpUGF0aH0gZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBCdW5kbGVNYW5hZ2VyLmxvYWQodWlQYXRoLCAoZXJyOiBFcnJvciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBnZXRPckNyZWF0ZVVJIGxvYWRSZXMgJHt1aUlkfSBmYWlsZSwgcGF0aDogJHt1aVBhdGh9IGVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZWF0ZUNyZWF0ZVVJKHVpSWQsIHVpUGF0aCwgdWlWaWV3LCBwcmVmYWIsIGNvbXBsZXRlQ2FsbGJhY2ssIHVpQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxlYXRlQ3JlYXRlVUkodWlJZCwgdWlQYXRoLCB1aVZpZXcsIHByZWZhYiwgY29tcGxldGVDYWxsYmFjaywgdWlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5VSUNvbmZbdWlJZF0uYnVuZGxlKSB7XG4gICAgICAgICAgICBpZiAoQXBwLmJ1bmRsZXMuZ2V0KHRoaXMuVUlDb25mW3VpSWRdLmJ1bmRsZSkpIHtcbiAgICAgICAgICAgICAgICB1aUJ1bmRsZSA9IEFwcC5idW5kbGVzLmdldCh0aGlzLlVJQ29uZlt1aUlkXS5idW5kbGUpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKHRoaXMuVUlDb25mW3VpSWRdLmJ1bmRsZSwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuYnVuZGxlcy5zZXQodGhpcy5VSUNvbmZbdWlJZF0uYnVuZGxlLCBidW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdWlCdW5kbGUgPSBidW5kbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wbGVhdGVDcmVhdGVVSSh1aUlkOiBudW1iZXIsIHVpUGF0aDogc3RyaW5nLCB1aVZpZXc6IFVJVmlldywgcHJlZmFiOiBQcmVmYWIsIGNvbXBsZXRlQ2FsbGJhY2s6ICh1aVZpZXc6IFVJVmlldykgPT4gdm9pZCwgdWlBcmdzOiBhbnkpIHtcbiAgICAgICAgLy8g5qOA5p+l5a6e5L6L5YyW6ZSZ6K+vXG4gICAgICAgIGxldCB1aU5vZGU6IE5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICBpZiAobnVsbCA9PSB1aU5vZGUpIHtcbiAgICAgICAgICAgIExvZy5wcmludChgZ2V0T3JDcmVhdGVVSSBpbnN0YW50aWF0ZSAke3VpSWR9IGZhaWxlLCBwYXRoOiAke3VpUGF0aH1gKTtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAvLyByZXNMb2FkZXIucmVsZWFzZShwcmVmYWIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOajgOafpee7hOS7tuiOt+WPlumUmeivr1xuICAgICAgICB1aVZpZXcgPSB1aU5vZGUuZ2V0Q29tcG9uZW50KFVJVmlldyk7XG4gICAgICAgIC8vIOiuvue9ruS4gOS4i3VpSWRcbiAgICAgICAgdWlWaWV3LnVpSWQgPSB1aUlkO1xuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIExvZy5wcmludChgZ2V0T3JDcmVhdGVVSSBnZXRDb21wb25lbnQgJHt1aUlkfSBmYWlsZSwgcGF0aDogJHt1aVBhdGh9YCk7XG4gICAgICAgICAgICB1aU5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIC8vIHJlc0xvYWRlci5yZWxlYXNlKHByZWZhYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5byC5q2l5Yqg6L29VUnpooTliqDovb3nmoTotYTmupBcbiAgICAgICAgdGhpcy5hdXRvTG9hZFJlcyh1aVZpZXcsICgpID0+IHtcbiAgICAgICAgICAgIHVpVmlldy5pbml0KHVpQXJncyk7XG4gICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKHVpVmlldyk7XG4gICAgICAgICAgICAvLyB1aVZpZXcuY2FjaGVBc3NldChwcmVmYWIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVJ6KKr5omT5byA5pe25Zue6LCD77yM5a+5VUnov5vooYzliJ3lp4vljJborr7nva7vvIzliLfmlrDlhbbku5bnlYzpnaLnmoTmmL7npLrvvIzlubbmoLnmja5cbiAgICAgKiBAcGFyYW0gdWlJZCDlk6rkuKrnlYzpnaLooqvmiZPlvIDkuoZcbiAgICAgKiBAcGFyYW0gdWlWaWV3IOeVjOmdouWvueixoVxuICAgICAqIEBwYXJhbSB1aUluZm8g55WM6Z2i5qCI5a+55bqU55qE5L+h5oGv57uT5p6EXG4gICAgICogQHBhcmFtIHVpQXJncyDnlYzpnaLliJ3lp4vljJblj4LmlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uVUlPcGVuKHVpSWQ6IG51bWJlciwgdWlWaWV3OiBVSVZpZXcsIHVpSW5mbzogVUlJbmZvLCB1aUFyZ3M6IGFueSkge1xuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmv4DmtLvnlYzpnaJcbiAgICAgICAgdWlJbmZvLnVpVmlldyA9IHVpVmlldztcbiAgICAgICAgdWlWaWV3Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy91aVZpZXcubm9kZS56SW5kZXggPSB1aUluZm8uek9yZGVyIHx8IHRoaXMuVUlTdGFjay5sZW5ndGg7XG5cbiAgICAgICAgLy8g5b+r6YCf5YWz6Zet55WM6Z2i55qE6K6+572u77yM57uR5a6a55WM6Z2i5Lit55qEYmFja2dyb3VuZO+8jOWunueOsOW/q+mAn+WFs+mXrVxuICAgICAgICBpZiAodWlWaWV3LnF1aWNrQ2xvc2UpIHtcbiAgICAgICAgICAgIGxldCBiYWNrR3JvdW5kID0gdWlWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGlmICghYmFja0dyb3VuZCkge1xuICAgICAgICAgICAgICAgIFV0aWxzLmFkZE5vZGUodWlWaWV3Lm5vZGUsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiYWNrR3JvdW5kLnRhcmdldE9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgICAgICBiYWNrR3JvdW5kLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSh1aVZpZXcpO1xuICAgICAgICAgICAgfSwgYmFja0dyb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDliLDlnLrmma/kuK1cbiAgICAgICAgbGV0IGNoaWxkID0gZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XG4gICAgICAgIGxldCBub2RlTmFtZSA9ICcnXG4gICAgICAgIHN3aXRjaCAodWlWaWV3LnNob3dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVJU2hvd1R5cGVzLlVJRnVsbFNjcmVlbjpcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9ICdib3R0b20nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVSVNob3dUeXBlcy5VSUFkZGl0aW9uOlxuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVJU2hvd1R5cGVzLlVJU2luZ2xlOlxuICAgICAgICAgICAgICAgIG5vZGVOYW1lID0gJ3RvcCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuZ2V0Q2hpbGRCeU5hbWUobm9kZU5hbWUpO1xuICAgICAgICBjaGlsZC5hZGRDaGlsZCh1aVZpZXcubm9kZSk7XG5cbiAgICAgICAgaWYgKCFHbG9iYWxDb25maWcuaXNSZWxlYXNlKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgIExvZy5wcmludChcIiVjW29wZW4tdmlldyAlc10+Pj4gJXNcIiwgXCJjb2xvcjpibHVlXCIsIHRpbWUsIHVpSW5mby51aVZpZXcubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliLfmlrDlhbbku5ZVSVxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG5cbiAgICAgICAgLy8g5LuO6YKj5Liq55WM6Z2i5omT5byA55qEXG4gICAgICAgIGxldCBmcm9tVUlJRCA9IDA7XG4gICAgICAgIGlmICh0aGlzLlVJU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZnJvbVVJSUQgPSB0aGlzLlVJU3RhY2tbdGhpcy5VSVN0YWNrLmxlbmd0aCAtIDJdLnVpSWRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaJk+W8gOeVjOmdouS5i+WJjeWbnuiwg1xuICAgICAgICBpZiAodGhpcy51aU9wZW5CZWZvcmVEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdGhpcy51aU9wZW5CZWZvcmVEZWxlZ2F0ZSh1aUlkLCBmcm9tVUlJRCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+mYv+aLieS8r+ivreWkhOeQhlxuICAgICAgICBpZiAoQXBwLmlzQXIoKSkge1xuICAgICAgICAgICAgdGhpcy5hcmFiaWNVSSh1aVZpZXcubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmiafooYxvbk9wZW7lm57osINcbiAgICAgICAgdWlWaWV3Lm9uT3Blbihmcm9tVUlJRCwgdWlBcmdzKTtcbiAgICAgICAgdGhpcy5hdXRvRXhlY0FuaW1hdGlvbih1aVZpZXcsIFwidWlPcGVuXCIsICgpID0+IHtcbiAgICAgICAgICAgIHVpVmlldy5vbk9wZW5BbmlPdmVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy51aU9wZW5EZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlPcGVuRGVsZWdhdGUodWlJZCwgZnJvbVVJSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiog5omT5byA55WM6Z2i5bm25re75Yqg5Yiw55WM6Z2i5qCI5LitICovXG4gICAgcHVibGljIG9wZW4odWlJZDogbnVtYmVyLCB1aUFyZ3M6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgbGV0IHVpSW5mbzogVUlJbmZvID0ge1xuICAgICAgICAgICAgdWlJZDogdWlJZCxcbiAgICAgICAgICAgIHVpQXJnczogdWlBcmdzLFxuICAgICAgICAgICAgdWlWaWV3OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbmluZyB8fCB0aGlzLmlzQ2xvc2luZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuaW5nICYmIHRoaXMub3BlbmluZ1VJSWQgPT09IHVpSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGDnlYzpnaIke3VpSWR95bey57uP5Zyo5omT5byA5LitYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmj5LlhaXlvoXmiZPlvIDpmJ/liJdcbiAgICAgICAgICAgIGlmICh0aGlzLlVJT3BlblF1ZXVlLmZpbmQoKG9iaikgPT4geyByZXR1cm4gb2JqLnVpSWQgPT09IHVpSW5mby51aUlkOyB9KSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg55WM6Z2iJHt1aUlkfeW3sue7j+WcqOaOkumYn+S4rWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg55WM6Z2iJHt1aUlkfeaPkuWFpeaJk+W8gOmYn+WIl2ApO1xuICAgICAgICAgICAgdGhpcy5VSU9wZW5RdWV1ZS5wdXNoKHVpSW5mbyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdWlJbmRleCA9IHRoaXMuZ2V0VUlJbmRleCh1aUlkKTtcbiAgICAgICAgaWYgKC0xICE9IHVpSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOmHjeWkjeaJk+W8gOS6huWQjOS4gOS4queVjOmdou+8jOebtOaOpeWbnuWIsOivpeeVjOmdolxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg6YeN5aSN5omT5byA55WM6Z2iJHt1aUlkfWApO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVRvVUkodWlJZCwgdWlBcmdzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rlVJ55qEek9yZGVyXG4gICAgICAgIHVpSW5mby56T3JkZXIgPSAodWlBcmdzICYmIHVpQXJncy56T3JkZXIpIHx8IHRoaXMuVUlTdGFjay5sZW5ndGggKyAxO1xuICAgICAgICBjb25zb2xlLmxvZyh1aUluZm8uek9yZGVyKVxuICAgICAgICB0aGlzLlVJU3RhY2sucHVzaCh1aUluZm8pO1xuXG4gICAgICAgIC8vIOWFiOWxj+iUveeCueWHu1xuICAgICAgICBpZiAodGhpcy5VSUNvbmZbdWlJZF0/LnByZXZlbnRUb3VjaCkge1xuICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlID0gdGhpcy5wcmV2ZW50VG91Y2godWlJbmZvLnpPcmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSB1aUlkO1xuICAgICAgICAvLyDpooTliqDovb3otYTmupDvvIzlubblnKjotYTmupDliqDovb3lrozmiJDlkI7oh6rliqjmiZPlvIDnlYzpnaJcbiAgICAgICAgdGhpcy5nZXRPckNyZWF0ZVVJKHVpSWQsICh1aVZpZXc6IFVJVmlldyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgLy8g5aaC5p6c55WM6Z2i5bey57uP6KKr5YWz6Zet5oiW5Yib5bu65aSx6LSlXG4gICAgICAgICAgICBpZiAodWlJbmZvLmlzQ2xvc2UgfHwgbnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgICAgICBMb2cucHJpbnQoYGdldE9yQ3JlYXRlVUkgJHt1aUlkfSBmYWlsZSFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlIHN0YXRlIDogJHt1aUluZm8uaXNDbG9zZX0gLCB1aVZpZXcgOiAke3VpVmlld31gKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1aUluZm8ucHJldmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmiZPlvIBVSe+8jOaJp+ihjOmFjee9rlxuICAgICAgICAgICAgLy8g6YC76L6R5bGC5Ye95pWw5byC5bi45aSE55CGLOmYsuatouWNoeS4u3VpIHF1ZXVlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMub25VSU9wZW4odWlJZCwgdWlWaWV3LCB1aUluZm8sIHVpQXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHVpSW5mby51aUFyZ3MgIT0gbnVsbCAmJiB1aUluZm8udWlBcmdzLm9uT3BlbkNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdWlJbmZvLnVpQXJncy5vbk9wZW5DYWxsYmFjayh1aVZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vcGVuaW5nVUlJZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmF1dG9FeGVjTmV4dFVJKCk7XG4gICAgICAgIH0sIHVpQXJncyk7XG4gICAgfVxuXG4gICAgLyoqIOabv+aNouagiOmhtueVjOmdoiAqL1xuICAgIHB1YmxpYyByZXBsYWNlKHVpSWQ6IG51bWJlciwgdWlBcmdzOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xvc2UodGhpcy5VSVN0YWNrW3RoaXMuVUlTdGFjay5sZW5ndGggLSAxXS51aVZpZXcpO1xuICAgICAgICB0aGlzLm9wZW4odWlJZCwgdWlBcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja51aWlk5YWz6Zet55WM6Z2iXG4gICAgICogQHBhcmFtIHVpSWQgXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlQnlJZCh1aUlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHVpVmlldyA9IHRoaXMuZ2V0VUkodWlJZCk7XG4gICAgICAgIGlmICh1aVZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodWlWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFs+mXreW9k+WJjeeVjOmdolxuICAgICAqIEBwYXJhbSBjbG9zZVVJIOimgeWFs+mXreeahOeVjOmdolxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZShjbG9zZVVJPzogVUlWaWV3KSB7XG4gICAgICAgIGxldCB1aUNvdW50ID0gdGhpcy5VSVN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKHVpQ291bnQgPCAxIHx8IHRoaXMuaXNDbG9zaW5nIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VVSSkge1xuICAgICAgICAgICAgICAgIC8vIOaPkuWFpeW+heWFs+mXremYn+WIl1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlVJQ2xvc2VRdWV1ZS5maW5kKChvYmopID0+IHsgcmV0dXJuIG9iai51aUlkID09PSBjbG9zZVVJLnVpSWQgfSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cucHJpbnQoYCR7Y2xvc2VVSS51aUlkfSDlt7LlnKjnrYnlvoXlhbPpl63kuK1gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLlVJQ2xvc2VRdWV1ZS5wdXNoKGNsb3NlVUkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVpSW5mbzogVUlJbmZvO1xuICAgICAgICBpZiAoY2xvc2VVSSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLlVJU3RhY2subGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIGxldCB1aSA9IHRoaXMuVUlTdGFja1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHVpLnVpVmlldyA9PT0gY2xvc2VVSSkge1xuICAgICAgICAgICAgICAgICAgICB1aUluZm8gPSB1aTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VSVN0YWNrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaJvuS4jeWIsOi/meS4qlVJXG4gICAgICAgICAgICBpZiAodWlJbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aUluZm8gPSB0aGlzLlVJU3RhY2sucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlhbPpl63lvZPliY3nlYzpnaJcbiAgICAgICAgbGV0IHVpSWQgPSB1aUluZm8udWlJZDtcbiAgICAgICAgbGV0IHVpVmlldyA9IHVpSW5mby51aVZpZXc7XG4gICAgICAgIHVpSW5mby5pc0Nsb3NlID0gdHJ1ZTtcblxuICAgICAgICAvLyDlm57mlLbpga7nvanlsYJcbiAgICAgICAgaWYgKHVpSW5mby5wcmV2ZW50Tm9kZSkge1xuICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHVpSW5mby5wcmV2ZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVsbCA9PSB1aVZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmVVSUluZm8gPSB0aGlzLlVJU3RhY2tbdWlDb3VudCAtIDJdO1xuICAgICAgICAvLyDlpITnkIbmmL7npLrmqKHlvI9cbiAgICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgICBsZXQgY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g5pi+56S65LmL5YmN55qE55WM6Z2iXG4gICAgICAgICAgICBpZiAocHJlVUlJbmZvICYmIHByZVVJSW5mby51aVZpZXcgJiYgdGhpcy5pc1RvcFVJKHByZVVJSW5mby51aUlkKSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOS5i+WJjeeahOeVjOmdouW8ueWIsOS6huacgOS4iuaWue+8iOS4remXtOacieiCr+iDveaJk+W8gOS6huWFtuS7lueVjOmdou+8iVxuICAgICAgICAgICAgICAgIHByZVVJSW5mby51aVZpZXcubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8g5Zue6LCDb25Ub3BcbiAgICAgICAgICAgICAgICBwcmVVSUluZm8udWlWaWV3Lm9uVG9wKHVpSWQsIHVpVmlldy5vbkNsb3NlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1aVZpZXcub25DbG9zZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy51aUNsb3NlRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2xvc2VEZWxlZ2F0ZSh1aUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1aVZpZXcuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlVJQ2FjaGVbdWlJZF0gPSB1aVZpZXc7XG4gICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIExvZy5wcmludChgdWlWaWV3IHJlbW92ZUZyb21QYXJlbnQgJHt1aUluZm8udWlJZH1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGlmICghR2xvYmFsQ29uZmlnLmlzUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLnByaW50KFwiJWNbY2xvc2UtdmlldyAlc10+Pj4gJXNcIiwgXCJjb2xvcjpncmF5XCIsIHRpbWUsIHVpSW5mby51aVZpZXcubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRvRXhlY05leHRVSSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJp+ihjOWFs+mXreWKqOeUu1xuICAgICAgICB0aGlzLmF1dG9FeGVjQW5pbWF0aW9uKHVpVmlldywgXCJ1aUNsb3NlXCIsIGNsb3NlKTtcbiAgICB9XG5cbiAgICAvKiog5YWz6Zet5omA5pyJ55WM6Z2iICovXG4gICAgcHVibGljIGNsb3NlQWxsKCkge1xuICAgICAgICAvLyDkuI3mkq3mlL7liqjnlLvvvIzkuZ/kuI3muIXnkIbnvJPlrZhcbiAgICAgICAgZm9yIChjb25zdCB1aUluZm8gb2YgdGhpcy5VSVN0YWNrKSB7XG4gICAgICAgICAgICB1aUluZm8uaXNDbG9zZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodWlJbmZvLnByZXZlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB1aUluZm8ucHJldmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVpSW5mby51aVZpZXcpIHtcbiAgICAgICAgICAgICAgICB1aUluZm8udWlWaWV3Lm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB1aUluZm8udWlWaWV3Lm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuVUlPcGVuUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSUNsb3NlUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSVN0YWNrID0gW107XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3BlbmluZ1VJSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ2xvc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWFs+mXreeVjOmdou+8jOS4gOebtOWFs+mXreWIsOmhtumDqOS4unVpSWTnmoTnlYzpnaLvvIzkuLrpgb/lhY3lvqrnjq/miZPlvIBVSeWvvOiHtFVJ5qCI5rqi5Ye6XG4gICAgICogQHBhcmFtIHVpSWQg6KaB5YWz6Zet5Yiw55qEdWlJZO+8iOWFs+mXreWFtumhtumDqOeahHVp77yJXG4gICAgICogQHBhcmFtIHVpQXJncyDmiZPlvIDnmoTlj4LmlbBcbiAgICAgKiBAcGFyYW0gYk9wZW5TZWxmIFxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZVRvVUkodWlJZDogbnVtYmVyLCB1aUFyZ3M6IGFueSwgYk9wZW5TZWxmID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5nZXRVSUluZGV4KHVpSWQpO1xuICAgICAgICBpZiAoLTEgPT0gaWR4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZHggPSBiT3BlblNlbGYgPyBpZHggOiBpZHggKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5VSVN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gaWR4OyAtLWkpIHtcbiAgICAgICAgICAgIGxldCB1aUluZm8gPSB0aGlzLlVJU3RhY2sucG9wKCk7XG4gICAgICAgICAgICBsZXQgdWlJZCA9IHVpSW5mby51aUlkO1xuICAgICAgICAgICAgbGV0IHVpVmlldyA9IHVpSW5mby51aVZpZXc7XG4gICAgICAgICAgICB1aUluZm8uaXNDbG9zZSA9IHRydWVcblxuICAgICAgICAgICAgLy8g5Zue5pS25bGP6JS95bGCXG4gICAgICAgICAgICBpZiAodWlJbmZvLnByZXZlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgdWlJbmZvLnByZXZlbnROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB1aUluZm8ucHJldmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy51aUNsb3NlRGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2xvc2VEZWxlZ2F0ZSh1aUlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHVpVmlldykge1xuICAgICAgICAgICAgICAgIHVpVmlldy5vbkNsb3NlKClcbiAgICAgICAgICAgICAgICBpZiAodWlWaWV3LmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUlDYWNoZVt1aUlkXSA9IHVpVmlldztcbiAgICAgICAgICAgICAgICAgICAgdWlWaWV3Lm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVpVmlldy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgICAgIHRoaXMuVUlPcGVuUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5VSUNsb3NlUXVldWUgPSBbXTtcbiAgICAgICAgYk9wZW5TZWxmICYmIHRoaXMub3Blbih1aUlkLCB1aUFyZ3MpO1xuICAgIH1cblxuICAgIC8qKiDmuIXnkIbnlYzpnaLnvJPlrZggKi9cbiAgICBwdWJsaWMgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5VSUNhY2hlKSB7XG4gICAgICAgICAgICBsZXQgdWkgPSB0aGlzLlVJQ2FjaGVba2V5XTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHVpLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdWkubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VSUNhY2hlID0ge307XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqIFVJ55qE5L6/5o235o6l5Y+jICoqKioqKioqKioqKioqKioqKiovXG4gICAgcHVibGljIGlzVG9wVUkodWlJZCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5VSVN0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVUlTdGFja1t0aGlzLlVJU3RhY2subGVuZ3RoIC0gMV0udWlJZCA9PSB1aUlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVSSh1aUlkOiBudW1iZXIpOiBVSVZpZXcge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5VSVN0YWNrLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuVUlTdGFja1tpbmRleF07XG4gICAgICAgICAgICBpZiAodWlJZCA9PSBlbGVtZW50LnVpSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC51aVZpZXc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRvcFVJKCk6IFVJVmlldyB7XG4gICAgICAgIGlmICh0aGlzLlVJU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuVUlTdGFja1t0aGlzLlVJU3RhY2subGVuZ3RoIC0gMV0udWlWaWV3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRVSUluZGV4KHVpSWQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLlVJU3RhY2subGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5VSVN0YWNrW2luZGV4XTtcbiAgICAgICAgICAgIGlmICh1aUlkID09IGVsZW1lbnQudWlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE5vZGU+KCk7XG4gICAgICAgIHRoaXMudWlSb290Q2FudmFzTm9kZSA9IGRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xuICAgICAgICBsZXQgZGVzaWduU2l6ZSA9IHRoaXMudWlSb290Q2FudmFzTm9kZS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKS5kZXNpZ25SZXNvbHV0aW9uO1xuICAgICAgICB1aUxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXJzW2xheWVyLmxheWVyTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBsYXllck5vZGUgPSBuZXcgTm9kZShsYXllci5sYXllck5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyLmxheWVyTmFtZV0gPSBsYXllck5vZGU7XG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IGxheWVyTm9kZS5hZGRDb21wb25lbnQoV2lkZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpUm9vdENhbnZhc05vZGUuYWRkQ2hpbGQobGF5ZXJOb2RlKTtcbiAgICAgICAgICAgICAgICBsYXllck5vZGUuc2V0Q29udGVudFNpemUoZGVzaWduU2l6ZSk7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgYWRkQXVkaW9Sb290KCkge1xuICAgIC8vICAgICAvL+mfs+aViOiKgueCuVxuICAgIC8vICAgICBsZXQgYXVkaW9Ob2RlID0gbmV3IE5vZGUoXCJhdWRpb05vZGVcIik7XG4gICAgLy8gICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoQXVkaW9Tb3VyY2UpXG4gICAgLy8gICAgIGF1ZGlvTm9kZS5hZGRDb21wb25lbnQoYXVkaW9Sb290KVxuICAgIC8vICAgICB0aGlzLnVpUm9vdENhbnZhc05vZGUuYWRkQ2hpbGQoYXVkaW9Ob2RlKVxuXG4gICAgLy8gfVxufVxuXG5leHBvcnQgbGV0IHVpTWFuYWdlcjogVUlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcigpO1xuIl19