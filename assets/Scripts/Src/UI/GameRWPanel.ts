// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Framework/Game";
import GameConst from "../GameConst";
import GameModel from "../Model/GameModel";
import { RWInfo } from "../Model/RWInfo";
import GameOverPanel from "./GameOverPanel";
import GameRWItem from "./GameRWItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameRWPanel extends cc.Component {
    @property(cc.Node)
    content:cc.Node=null;
    @property(cc.Prefab)
    RWItem:cc.Prefab=null;
    protected onLoad(): void {
        this.addEvent();
        this.initUI();
    }
    addEvent()
    {
        Game.Event.addEventListener(GameConst.UI_FinishRW,this.updateUI,this);
    }
    removeEvent()
    {
        Game.Event.removeEventListener(GameConst.UI_FinishRW,this.updateUI,this);  
    }
    initUI()
    {
        GameModel.RWSort();
        this.content.height=GameModel.RWInfos.length*90+10;
        for(let i=0;i<GameModel.RWInfos.length;i++)
        {
            this.createOneRWItem(GameModel.RWInfos[i]);
        }
    }
    updateUI(name:string)
    {
        //先把之前的删掉，再重新创建（或者后续可以改一下，给item里面加一个设置ui的方法，可以不用删除item）
        // this,this.content.children.forEach(item=>{
        //     if(item)
        //     {
        //         item.destroy();
        //     }
        // })
        // for(let i=0;i<GameModel.RWInfos.length;i++)
        // {
        //     if(RWName==GameModel.RWInfos[i].RWName)
        //     {
        //         let rw=GameModel.RWInfos[i];
        //         GameModel.RWInfos.splice(GameModel.RWInfos.indexOf(GameModel.RWInfos[i]),1);
        //         GameModel.RWInfos.push(rw);
        //         break;
        //     }
        // }
        GameModel.RWSort();
        for(let i=0;i<this.content.children.length;i++)
        {
            if(i+1>GameModel.RWInfos.length)
            {
                this.content.children[i].destroy();
            }
            else
            {
                this.content.children[i].getComponent(GameRWItem).init(GameModel.RWInfos[i]);
            }
        }
        
    }
    createOneRWItem(RWInfo:RWInfo)
    {
        let rwItem=cc.instantiate(this.RWItem);
        rwItem.setParent(this.content);
        rwItem.getComponent(GameRWItem).init(RWInfo);
    }
    // update (dt) {}
}
