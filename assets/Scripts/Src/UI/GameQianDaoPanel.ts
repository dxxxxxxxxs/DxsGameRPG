// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameModel from "../Model/GameModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameQianDaoPanel extends cc.Component {
    @property(cc.Node)
    QianDaoMoneys:cc.Node=null;
    @property(cc.Node)
    btnQianDao:cc.Node=null;
    protected onLoad(): void {
        this.UpdateUI();
    }
    UpdateUI()
    {
        let qiandaos=this.QianDaoMoneys.children;
        for(let i=0;i<GameModel.QianDaoNumber-1;i++)
        {
            qiandaos[i].children[0].active=true;
        }
        this.btnQianDao.getComponent(cc.Button).interactable=!GameModel.TodayQianDao;
    }
    OnQianDaoClick()
    {
        if(GameModel.TodayQianDao)return;
        GameModel.QianDaoNumber++;
        GameModel.TodayQianDao=true;
        this.UpdateUI();
    }
}
