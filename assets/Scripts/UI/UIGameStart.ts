// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../../Common/Bundle/BundleManager";
import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { UIView } from "../../Common/UI/UIView";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameStart extends UIView {
    @property(cc.Node)
    loading: cc.Node = null;
    @property(cc.Node)
    btnStartGame: cc.Node = null;
    @property(cc.ProgressBar)
    bar: cc.ProgressBar = null;

    public init(...args: any[]): void {
        CCTools.fixedClick(this.btnStartGame, this.onBtnStartGame, this);
    }
    onBtnStartGame() {
        this.btnStartGame.active = false;
        this.loading.active = true;
        const barLabel = CCTools.findChild(this.bar.node, "barLabel");
        cc.director.preloadScene("Game", async (completedCount, totalCount, item) => {
            // 更新进度条
            this.bar.progress = completedCount / totalCount;
            CCTools.fixLabel(barLabel, (completedCount / totalCount * 100) + "%");
        }, (error: Error) => {
            if (!error) {
                Game.Event.dispatch(GameConst.GAMESTART);
            } else {
                console.error("Failed to preload scene: ", error);
            }
        });
    }
}
