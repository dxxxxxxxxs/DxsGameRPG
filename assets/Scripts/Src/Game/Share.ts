// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import IResultAble from "../../Framework/Pool/IResultAble";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Share extends IResultAble {
    protected onLoad(): void {
        super.onLoad();
    }
    public onSpawn() {
        console.log("share被取出");
    }
    public unSpawn() {
        console.log("share被收回");
    }
}
