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

export enum GameState {
    null,
    game,
    pause,
    over,
}
@ccclass
export default class UIGame extends UIView {

    onOpen(): void {
        this.scheduleOnce(() => {
            Game.Event.dispatch(GameConst.GAMEOVER);
        }, 2)
    }

}
