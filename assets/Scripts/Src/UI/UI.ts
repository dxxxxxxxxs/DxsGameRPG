// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import AudioRoot from "../../Framework/Audio/AudioRoot";
import BundleManager from "../../Framework/Bundle/BundleManager";
import Game from "../../Framework/Game";
import CCTools from "../../Framework/Tools/CCTools";
import GameConst from "../GameConst";
import GameModel from "../Model/GameModel";
import { RWInfo } from "../Model/RWInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UI extends cc.Component {
    onLoad () {
        this.addEvent();
        this.initUI();
        this.initBundle();
    }
    public async initBundle()
    {
        let audioNode=new cc.Node();
        audioNode.addComponent(cc.AudioSource);
        audioNode.addComponent(AudioRoot);
        //await BundleManager.loadBundle("Prefab");
        await BundleManager.loadBundle("Audio");
        await BundleManager.loadBundle("ObjectPool");
        let share=await Game.ObjectPool.Spawn("share",this.node);
        share.setPosition(360,640);
        this.scheduleOnce(()=>{
            Game.ObjectPool.UnSpawn(share);
        },3)
        // let Prefab=await BundleManager.load<cc.Prefab>("GameRWPanel","Prefab");
        // let node=cc.instantiate(Prefab);
        // node.setParent(cc.director.getScene());
        
    }
    addEvent()
    {
        Game.Event.addEventListener(GameConst.UI_GameOver,this.GameOver,this);
    }
    removeEvent()
    {
        Game.Event.removeEventListener(GameConst.UI_GameOver,this.GameOver,this);
    }
    GameStart()
    {
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").active=false;
        Game.Event.dispatch(GameConst.GameStart);
    }
    GameOver()
    {
        this.node.getChildByName("Canvas").getChildByName("GameOverPanel").active=true;
    }
    initUI()
    {
        this.updateUI();
        this.initRWInfos();
    }
    initRWInfos()
    {
        let money=100;
        for(let i=0;i<10;i++)
        {
            let state=Math.floor(Math.random()*2);
            let rw=new RWInfo(state,null,0.2,"任务"+i,money);
            GameModel.RWInfos.push(rw);
            money+=100;
        }
    }
    updateRWInfos()
    {

    }
    updateUI()
    {
        this.updateMusic();
    }
    updateMusic()
    {
        console.log("改变静音");
        Game.Event.dispatch(GameConst.UI_UpdateMusic);
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOn").active=GameModel.isMusic;
        this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("btnMusic").getChildByName("btnMusicOff").active=!GameModel.isMusic;
    }
    InputEmailEnter()
    {
        let string:string=this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string;
        if(CCTools.isValidEmail(string))
        {
            console.log("发送邮件成功");
        }
        else
        {
            this.node.getChildByName("Canvas").getChildByName("GameStartPanel").getChildByName("InputEmail").getComponent(cc.EditBox).string="";
            console.log("错误邮箱格式");
        }
    }
    protected onDestroy(): void {
        this.removeEvent();
    }
}

