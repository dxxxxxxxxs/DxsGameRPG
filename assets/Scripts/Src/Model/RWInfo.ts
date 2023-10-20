// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { RWState } from "../UI/GameRWItem";

const {ccclass, property} = cc._decorator;

@ccclass
export class RWInfo{
    public RWState:RWState=RWState.go;
    public Icon=null;
    public RWBar:number;
    public RWName:string;
    public Money:number;
    constructor(state:RWState,icon,rwbar:number,rwname:string,money:number)
    {
        this.RWState=state;
        this.Icon=icon;
        this.RWBar=rwbar;
        this.RWName=rwname;
        this.Money=money;
    }
}
