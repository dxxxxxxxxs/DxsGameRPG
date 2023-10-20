// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Framework/Game";
import GameConst from "../GameConst";
import GameModel from "../Model/GameModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIGame extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    start () {
        this.addEvent();
    }
    
    addEvent()
    {
        Game.Event.addEventListener(GameConst.GameStart,this.GameStart,this);
        Game.Event.addEventListener(GameConst.KillOneCount,this.killOneEnemy,this);
        Game.Event.addEventListener(GameConst.UI_UpdateMusic,this.updateMusic,this);
    }
    removeEvent()
    {
        Game.Event.removeEventListener(GameConst.GameStart,this.GameStart,this);
        Game.Event.removeEventListener(GameConst.KillOneCount,this.killOneEnemy,this);
        Game.Event.addEventListener(GameConst.UI_UpdateMusic,this.updateMusic,this);
    }
    GameStart()
    {
        GameModel.EnemyCount=10;
        this.node.getChildByName("Enemys").active=true;
    }
    killOneEnemy()
    {
        GameModel.EnemyCount--;
        if(GameModel.EnemyCount<=0)
        {
            Game.Event.dispatch(GameConst.UI_GameOver);
        }
    }
    updateMusic()
    {
        GameModel.isMusic=!GameModel.isMusic;
    }
    protected onDestroy(): void {
        this.removeEvent();
    }
}
