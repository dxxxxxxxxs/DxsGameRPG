// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ObjectPool from "../../Framework/Pool/ObjectPool";
import { RWState } from "../UI/GameRWItem";
import { RWInfo } from "./RWInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameModel{
    public static EnemyCount:number=10;
    public static Gold:number=0;
    public static Score:number=0;
    public static BestScore:number=0;
    public static isMusic:boolean=true;
    public static QianDaoNumber:number=5;
    public static TodayQianDao:boolean=false;
    public static RWInfos:RWInfo[]=[];

    public static RWSort()
    {
        this.RWInfos.sort((a,b)=>a.RWState-b.RWState);
    }
}

