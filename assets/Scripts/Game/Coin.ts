// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import IResultAble from "../../Common/Pool/IResultAble";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Coin extends IResultAble {
    public onEnable(): void {
        let tween1 = cc.tween(this.node).to(0.5, { scaleX: 0.4 }, { easing: 'sineOut' });
        let tween2 = cc.tween(this.node).to(0.5, { scaleX: 1 }, { easing: 'sineOut' });
        let tween3 = cc.tween(this.node).sequence(tween1, tween2);
        cc.tween(this.node).repeatForever(tween3).start();
        console
    }
    public onSpawn() {
    }
    public unSpawn() {
    }
}
