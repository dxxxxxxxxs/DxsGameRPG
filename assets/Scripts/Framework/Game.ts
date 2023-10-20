// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { AudioManager } from "./Audio/AudioManager";
import { EventManager } from "./Event/EventManager";
import ObjectPool from "./Pool/ObjectPool";


const {ccclass, property} = cc._decorator;

@ccclass
export default class Game {
    public static get Event(){return EventManager.Instance}
    public static get Audio(){return AudioManager.Instance}
    public static get ObjectPool(){return ObjectPool.Instance}
}
