// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import UIView from "./UIView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager {
    private static _instance:UIManager;
    public static get Instance()
    {
        if(this._instance==null)
        {
            this._instance=new UIManager();
        }
        return this._instance as UIManager;
    }
    private constructor(){}


}
