// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Framework/Game";
import GameConst from "../GameConst";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START,this.onMouseDown,this);
    }

    onMouseDown()
    {
        this.node.destroy();
        Game.Event.dispatch(GameConst.KillOneCount);
    }
    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START,this.onMouseDown,this);
    }
    // update (dt) {}
}
