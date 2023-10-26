// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Common/Game";
import IResultAble from "../../Common/Pool/IResultAble";
import GameModel from "../Model/GameModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Map extends IResultAble {
    public onSpawn() {
    }
    public unSpawn() {
    }
    protected onEnable(): void {
    }
    protected onDisable(): void {
    }

}
