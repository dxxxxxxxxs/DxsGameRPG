// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Common/Game";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameOver extends cc.Component {
    protected onLoad(): void {
    }
    onBtnAgainGame() {
        Game.Event.dispatch(GameConst.GAMESTART);
    }
    onBtnBackStart() {
        Game.Event.dispatch(GameConst.UI_BackStart);
    }
}
