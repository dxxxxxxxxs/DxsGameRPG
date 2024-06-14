// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { Game } from "../../Common/Game";
import { UIView } from "../../Common/UI/UIView";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameStart extends UIView {
    @property(cc.Node)
    loading: cc.Node = null;
    @property(cc.ProgressBar)
    bar: cc.ProgressBar = null;
    onBtnStartGame() {
        this.loading.active = true;
        cc.director.preloadScene("Game", (completedCount, totalCount, item) => {
            // 更新进度条
            this.bar.progress = completedCount / totalCount;
        }, (error: Error) => {
            if (!error) {
                Game.Event.dispatch(GameConst.GAMESTART);
            } else {
                console.error("Failed to preload scene: ", error);
            }
        });
    }
}
