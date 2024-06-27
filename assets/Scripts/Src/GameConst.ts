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

    public static readonly UI_GameOver = "UI_GameOver";

    public static readonly GAMEOVER = "GAMEOVER";

    public static readonly UI_UpdateMusic = "UI_UpdateMusic";

    public static readonly UI_BackStart = "UI_BackStart";

    public static readonly UI_AgainGame = "UI_AgainGame";
    /**方块进入框中 */
    public static readonly UI_CardGoIn = "UI_CardGoIn";
    /**方块排序 */
    public static readonly UI_SortCard = "UI_SortCard";
}
