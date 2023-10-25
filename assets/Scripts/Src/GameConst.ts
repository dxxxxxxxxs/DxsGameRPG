// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameConst {
    public static readonly UI_GameStart = "UI_GameStart";

    public static readonly GAMESTART = "GAMESTART";

    public static readonly KillOneCount = "KillOneCount";

    public static readonly UI_GameOver = "UI_GameOver";

    public static readonly GAMEOVER = "GAMEOVER";

    public static readonly UI_UpdateMusic = "UI_UpdateMusic";

    public static readonly UI_FinishRW = "UI_FinishRW";

    public static readonly UI_PlayerUp = "UI_PlayerUp";

    public static readonly UI_BackStart = "UI_BackStart";

    public static readonly GetCoin = "GetCoin";

    public static readonly UI_GetCoin = "UI_GetCoin";
}
