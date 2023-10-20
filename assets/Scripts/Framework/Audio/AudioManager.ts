// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../Bundle/BundleManager";


const {ccclass, property} = cc._decorator;

@ccclass
export class AudioManager {
    private static _instance:AudioManager;
    public static get Instance()
    {
        if(this._instance==null)
        {
            this._instance=new AudioManager();
        }
        return this._instance as AudioManager;
    }
    private constructor(){}
    private static audioSource?:cc.AudioSource
    private soundVolume:number=1;
    private musicVolume:number=1;
    /**
     * 初始化音乐组件（全局一般只有一个音乐节点，只会初始化一次）
     * @param audioSource 音乐节点身上的AudioSource组件
     */
    init(audioSource:cc.AudioSource)
    {
        AudioManager.audioSource=audioSource;
    }
    /**
     * 播放音乐（一般是背景音乐）
     * @param name 要播放的音乐名字
     * @param bundle 如果没错应该是AssetBundle的分包加载的名称，比如game，hall什么的
     */
    playMusic(name:string,bundle="Audio")
    {
        const audioSource=AudioManager.audioSource!;
        let complete=(async ()=>{
            let clip=await BundleManager.load(name,bundle);
            cc.audioEngine.playMusic(clip as cc.AudioClip, false);
        })
        complete();
    }
    playSound()
    {
    }
}
