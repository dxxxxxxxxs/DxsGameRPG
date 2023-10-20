// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../Game";
import { AudioManager } from "./AudioManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AudioRoot extends cc.Component {
    audioSource:cc.AudioSource=null;

    protected onLoad(): void {
        let audioSource=this.node.getComponent(cc.AudioSource);
        this.audioSource=audioSource;
        Game.Audio.init(audioSource);
        console.log("audioManager Init!");
        
    }
}
