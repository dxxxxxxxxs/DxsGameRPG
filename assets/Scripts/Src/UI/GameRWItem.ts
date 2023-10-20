// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { AudioManager } from "../../Framework/Audio/AudioManager";
import Game from "../../Framework/Game";
import GameConst from "../GameConst";
import GameModel from "../Model/GameModel";
import { RWInfo } from "../Model/RWInfo";

const {ccclass, property} = cc._decorator;
export enum RWState
{
    finish, //任务完成了但是还没有领取奖励
    go,     //任务没完成
    done    //任务完成了并且领取奖励了
}

@ccclass
export default class GameRWItem extends cc.Component {
    @property(cc.Node)
    icon:cc.Node=null;
    @property(cc.Label)
    RWName:cc.Label=null;
    @property(cc.ProgressBar)
    Bar:cc.ProgressBar=null;
    @property(cc.Label)
    money:cc.Label=null;
    @property(cc.Node)
    btnFinish:cc.Node=null;
    @property(cc.Node)
    btnGO:cc.Node=null;
    @property(cc.Node)
    btnDown:cc.Node=null;
    private rwState:RWState;
    private bar:number;
    init(RWInfo:RWInfo)
    {
        //this.icon=RWInfo.Icon;
        this.RWName.string=RWInfo.RWName;
        this.money.string=RWInfo.Money.toString();
        this.bar=RWInfo.RWBar;
        this.rwState=RWInfo.RWState;
        this.updateUI();
    }
    updateUI()
    {
        switch(this.rwState)
        {
            case RWState.finish:
                this.btnFinish.active=true;
                this.btnGO.active=false;
                this.btnDown.active=false;
                break;
            case RWState.go:
                this.btnFinish.active=false;
                this.btnGO.active=true;
                this.btnDown.active=false;
                break;
            case RWState.done:
                this.btnFinish.active=false;
                this.btnGO.active=false;
                this.btnDown.active=true;
                break;
        }
        this.Bar.progress=this.bar;
    }
    onFinishBtnClick()
    {   
        Game.Audio.playMusic("click");
        for(let i=0;i<GameModel.RWInfos.length;i++)
        {
            if(GameModel.RWInfos[i].RWName==this.RWName.string)
            {
                GameModel.RWInfos[i].RWState=RWState.done;
                break;
            }
        }
        Game.Event.dispatch(GameConst.UI_FinishRW);
    }
    onGoBtnClick()
    {

    }
}
