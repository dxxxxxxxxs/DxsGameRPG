// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Framework/Game";
import GameConst from "../GameConst";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOverPanel extends cc.Component {
    againGame()
    {
        cc.sys.openURL("https://docs.cocos.com/creator/2.4/manual/zh/");
        //cc.director.loadScene(cc.director.getScene().name);
    }
}
