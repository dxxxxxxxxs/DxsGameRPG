
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Src/UI/GameRWPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '396ffrD9u9EQ5iv3LwEFyD9', 'GameRWPanel');
// Scripts/Src/UI/GameRWPanel.ts

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
var Game_1 = require("../../Framework/Game");
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../Model/GameModel");
var GameRWItem_1 = require("./GameRWItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRWPanel = /** @class */ (function (_super) {
    __extends(GameRWPanel, _super);
    function GameRWPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.RWItem = null;
        return _this;
        // update (dt) {}
    }
    GameRWPanel.prototype.onLoad = function () {
        this.addEvent();
        this.initUI();
    };
    GameRWPanel.prototype.addEvent = function () {
        Game_1.default.Event.addEventListener(GameConst_1.default.UI_FinishRW, this.updateUI, this);
    };
    GameRWPanel.prototype.removeEvent = function () {
        Game_1.default.Event.removeEventListener(GameConst_1.default.UI_FinishRW, this.updateUI, this);
    };
    GameRWPanel.prototype.initUI = function () {
        GameModel_1.default.RWSort();
        this.content.height = GameModel_1.default.RWInfos.length * 90 + 10;
        for (var i = 0; i < GameModel_1.default.RWInfos.length; i++) {
            this.createOneRWItem(GameModel_1.default.RWInfos[i]);
        }
    };
    GameRWPanel.prototype.updateUI = function (name) {
        //先把之前的删掉，再重新创建（或者后续可以改一下，给item里面加一个设置ui的方法，可以不用删除item）
        // this,this.content.children.forEach(item=>{
        //     if(item)
        //     {
        //         item.destroy();
        //     }
        // })
        // for(let i=0;i<GameModel.RWInfos.length;i++)
        // {
        //     if(RWName==GameModel.RWInfos[i].RWName)
        //     {
        //         let rw=GameModel.RWInfos[i];
        //         GameModel.RWInfos.splice(GameModel.RWInfos.indexOf(GameModel.RWInfos[i]),1);
        //         GameModel.RWInfos.push(rw);
        //         break;
        //     }
        // }
        GameModel_1.default.RWSort();
        for (var i = 0; i < this.content.children.length; i++) {
            if (i + 1 > GameModel_1.default.RWInfos.length) {
                this.content.children[i].destroy();
            }
            else {
                this.content.children[i].getComponent(GameRWItem_1.default).init(GameModel_1.default.RWInfos[i]);
            }
        }
    };
    GameRWPanel.prototype.createOneRWItem = function (RWInfo) {
        var rwItem = cc.instantiate(this.RWItem);
        rwItem.setParent(this.content);
        rwItem.getComponent(GameRWItem_1.default).init(RWInfo);
    };
    __decorate([
        property(cc.Node)
    ], GameRWPanel.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameRWPanel.prototype, "RWItem", void 0);
    GameRWPanel = __decorate([
        ccclass
    ], GameRWPanel);
    return GameRWPanel;
}(cc.Component));
exports.default = GameRWPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1NyYy9VSS9HYW1lUldQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0Riw2Q0FBd0M7QUFDeEMsMENBQXFDO0FBQ3JDLGdEQUEyQztBQUczQywyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrRUM7UUFoRUcsYUFBTyxHQUFTLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQTZEdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3RGEsNEJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw4QkFBUSxHQUFSO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxpQ0FBVyxHQUFYO1FBRUksY0FBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDRCw0QkFBTSxHQUFOO1FBRUksbUJBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQztRQUNuRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMxQztZQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QztJQUNMLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsSUFBVztRQUVoQix1REFBdUQ7UUFDdkQsNkNBQTZDO1FBQzdDLGVBQWU7UUFDZixRQUFRO1FBQ1IsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUixLQUFLO1FBQ0wsOENBQThDO1FBQzlDLElBQUk7UUFDSiw4Q0FBOEM7UUFDOUMsUUFBUTtRQUNSLHVDQUF1QztRQUN2Qyx1RkFBdUY7UUFDdkYsc0NBQXNDO1FBQ3RDLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsSUFBSTtRQUNKLG1CQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDOUM7WUFDSSxJQUFHLENBQUMsR0FBQyxDQUFDLEdBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUMvQjtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1NBQ0o7SUFFTCxDQUFDO0lBQ0QscUNBQWUsR0FBZixVQUFnQixNQUFhO1FBRXpCLElBQUksTUFBTSxHQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDRTtJQUpMLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FrRS9CO0lBQUQsa0JBQUM7Q0FsRUQsQUFrRUMsQ0FsRXdDLEVBQUUsQ0FBQyxTQUFTLEdBa0VwRDtrQkFsRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HYW1lXCI7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gXCIuLi9HYW1lQ29uc3RcIjtcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4uL01vZGVsL0dhbWVNb2RlbFwiO1xuaW1wb3J0IHsgUldJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1JXSW5mb1wiO1xuaW1wb3J0IEdhbWVPdmVyUGFuZWwgZnJvbSBcIi4vR2FtZU92ZXJQYW5lbFwiO1xuaW1wb3J0IEdhbWVSV0l0ZW0gZnJvbSBcIi4vR2FtZVJXSXRlbVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVSV1BhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OmNjLk5vZGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIFJXSXRlbTpjYy5QcmVmYWI9bnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgfVxuICAgIGFkZEV2ZW50KClcbiAgICB7XG4gICAgICAgIEdhbWUuRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihHYW1lQ29uc3QuVUlfRmluaXNoUlcsdGhpcy51cGRhdGVVSSx0aGlzKTtcbiAgICB9XG4gICAgcmVtb3ZlRXZlbnQoKVxuICAgIHtcbiAgICAgICAgR2FtZS5FdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKEdhbWVDb25zdC5VSV9GaW5pc2hSVyx0aGlzLnVwZGF0ZVVJLHRoaXMpOyAgXG4gICAgfVxuICAgIGluaXRVSSgpXG4gICAge1xuICAgICAgICBHYW1lTW9kZWwuUldTb3J0KCk7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQ9R2FtZU1vZGVsLlJXSW5mb3MubGVuZ3RoKjkwKzEwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVNb2RlbC5SV0luZm9zLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlT25lUldJdGVtKEdhbWVNb2RlbC5SV0luZm9zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVVSShuYW1lOnN0cmluZylcbiAgICB7XG4gICAgICAgIC8v5YWI5oqK5LmL5YmN55qE5Yig5o6J77yM5YaN6YeN5paw5Yib5bu677yI5oiW6ICF5ZCO57ut5Y+v5Lul5pS55LiA5LiL77yM57uZaXRlbemHjOmdouWKoOS4gOS4quiuvue9rnVp55qE5pa55rOV77yM5Y+v5Lul5LiN55So5Yig6ZmkaXRlbe+8iVxuICAgICAgICAvLyB0aGlzLHRoaXMuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW09PntcbiAgICAgICAgLy8gICAgIGlmKGl0ZW0pXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGZvcihsZXQgaT0wO2k8R2FtZU1vZGVsLlJXSW5mb3MubGVuZ3RoO2krKylcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYoUldOYW1lPT1HYW1lTW9kZWwuUldJbmZvc1tpXS5SV05hbWUpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IHJ3PUdhbWVNb2RlbC5SV0luZm9zW2ldO1xuICAgICAgICAvLyAgICAgICAgIEdhbWVNb2RlbC5SV0luZm9zLnNwbGljZShHYW1lTW9kZWwuUldJbmZvcy5pbmRleE9mKEdhbWVNb2RlbC5SV0luZm9zW2ldKSwxKTtcbiAgICAgICAgLy8gICAgICAgICBHYW1lTW9kZWwuUldJbmZvcy5wdXNoKHJ3KTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBHYW1lTW9kZWwuUldTb3J0KCk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5jb250ZW50LmNoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGkrMT5HYW1lTW9kZWwuUldJbmZvcy5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEdhbWVSV0l0ZW0pLmluaXQoR2FtZU1vZGVsLlJXSW5mb3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjcmVhdGVPbmVSV0l0ZW0oUldJbmZvOlJXSW5mbylcbiAgICB7XG4gICAgICAgIGxldCByd0l0ZW09Y2MuaW5zdGFudGlhdGUodGhpcy5SV0l0ZW0pO1xuICAgICAgICByd0l0ZW0uc2V0UGFyZW50KHRoaXMuY29udGVudCk7XG4gICAgICAgIHJ3SXRlbS5nZXRDb21wb25lbnQoR2FtZVJXSXRlbSkuaW5pdChSV0luZm8pO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19