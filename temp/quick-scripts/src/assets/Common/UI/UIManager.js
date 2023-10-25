"use strict";
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