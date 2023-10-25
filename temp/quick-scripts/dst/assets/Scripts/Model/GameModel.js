
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15c44HP14RFPqRMMRnGlUVV', 'GameModel');
// Scripts/Model/GameModel.ts

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
var UIGame_1 = require("../UI/UIGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    Object.defineProperty(GameModel, "gameState", {
        get: function () {
            return this.GameState;
        },
        set: function (state) {
            if (state) {
                switch (state) {
                    case UIGame_1.GameState.game:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.pause:
                        this.GameState = state;
                        break;
                    case UIGame_1.GameState.over:
                        this.GameState = state;
                        break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**屏幕可视化宽度 */
    GameModel.gameWidth = 0;
    /**屏幕可视化高度 */
    GameModel.gameHeigth = 0;
    /**玩家移动速度 */
    GameModel.moveSpeed = 200;
    /**当前游戏分数 */
    GameModel.gameScore = 0;
    /**当前游戏状态 */
    GameModel.GameState = UIGame_1.GameState.null;
    GameModel = __decorate([
        ccclass
    ], GameModel);
    return GameModel;
}());
exports.default = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01vZGVsL0dhbWVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7O0FBRXRGLHVDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBOEJBLENBQUM7SUFsQkcsc0JBQVcsc0JBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXFCLEtBQUs7WUFDdEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsUUFBUSxLQUFLLEVBQUU7b0JBQ1gsS0FBSyxrQkFBUyxDQUFDLElBQUk7d0JBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLE1BQU07b0JBQ1YsS0FBSyxrQkFBUyxDQUFDLEtBQUs7d0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNO29CQUNWLEtBQUssa0JBQVMsQ0FBQyxJQUFJO3dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixNQUFNO2lCQUNiO2FBQ0o7UUFDTCxDQUFDOzs7T0FmQTtJQWJELGFBQWE7SUFDQyxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUNwQyxhQUFhO0lBQ0Msb0JBQVUsR0FBVyxDQUFDLENBQUM7SUFDckMsWUFBWTtJQUNFLG1CQUFTLEdBQVcsR0FBRyxDQUFDO0lBQ3RDLFlBQVk7SUFDRSxtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUVwQyxZQUFZO0lBQ0csbUJBQVMsR0FBYyxrQkFBUyxDQUFDLElBQUksQ0FBQztJQVhwQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEI3QjtJQUFELGdCQUFDO0NBOUJELEFBOEJDLElBQUE7a0JBOUJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuLi9VSS9VSUdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNb2RlbCB7XG4gICAgLyoq5bGP5bmV5Y+v6KeG5YyW5a695bqmICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lV2lkdGg6IG51bWJlciA9IDA7XG4gICAgLyoq5bGP5bmV5Y+v6KeG5YyW6auY5bqmICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lSGVpZ3RoOiBudW1iZXIgPSAwO1xuICAgIC8qKueOqeWutuenu+WKqOmAn+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbW92ZVNwZWVkOiBudW1iZXIgPSAyMDA7XG4gICAgLyoq5b2T5YmN5ri45oiP5YiG5pWwICovXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICAvKirlvZPliY3muLjmiI/nirbmgIEgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBHYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5udWxsO1xuICAgIHN0YXRpYyBnZXQgZ2FtZVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5HYW1lU3RhdGU7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQgZ2FtZVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLmdhbWU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZVN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLnBhdXNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5vdmVyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==