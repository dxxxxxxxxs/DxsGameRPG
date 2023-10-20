// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameConst {
    public static readonly GameStart="GameStart";

    public static readonly KillOneCount="KillOneCount";

    public static readonly UI_GameOver="UI_GameOver";

    public static readonly UI_UpdateMusic="UI_UpdateMusic";

    public static readonly UI_FinishRW="UI_FinishRW";
}
