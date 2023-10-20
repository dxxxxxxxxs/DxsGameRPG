
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Common/Audio/AudioManager');
require('./assets/Common/Audio/AudioRoot');
require('./assets/Common/Bundle/BundleManager');
require('./assets/Common/Event/EventManager');
require('./assets/Common/Game');
require('./assets/Common/Pool/IResultAble');
require('./assets/Common/Pool/ObjectPool');
require('./assets/Common/Pool/SubPool');
require('./assets/Common/Tools/CCTools');
require('./assets/Common/UI/UIManager');
require('./assets/Common/UI/UIView');
require('./assets/Scripts/Framework/Audio/AudioManager');
require('./assets/Scripts/Framework/Audio/AudioRoot');
require('./assets/Scripts/Framework/Bundle/BundleManager');
require('./assets/Scripts/Framework/Event/EventManager');
require('./assets/Scripts/Framework/Game');
require('./assets/Scripts/Framework/Pool/IResultAble');
require('./assets/Scripts/Framework/Pool/ObjectPool');
require('./assets/Scripts/Framework/Pool/SubPool');
require('./assets/Scripts/Framework/Tools/CCTools');
require('./assets/Scripts/Framework/UI/UIManager');
require('./assets/Scripts/Framework/UI/UIView');
require('./assets/Scripts/Src/GameConst');

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