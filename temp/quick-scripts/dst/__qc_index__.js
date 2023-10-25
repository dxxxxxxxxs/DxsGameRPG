
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
require('./assets/Common/UI/UINode');
require('./assets/Common/UI/UIView');
require('./assets/Scripts/Game/Coin');
require('./assets/Scripts/Game/GameManager');
require('./assets/Scripts/Game/player');
require('./assets/Scripts/Model/GameModel');
require('./assets/Scripts/Src/GameConst');
require('./assets/Scripts/UI/GameStartPanel');
require('./assets/Scripts/UI/UIGame');
require('./assets/Scripts/UI/UIGameOver');

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