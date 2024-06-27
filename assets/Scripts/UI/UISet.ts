import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { UIView } from "../../Common/UI/UIView";
import { GameConfig } from "../GameConfig";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UISet extends UIView {
    @property(cc.Node)
    btn_sound: cc.Node = null;
    @property(cc.Node)
    btn_music: cc.Node = null;
    @property(cc.Node)
    btn_feedback: cc.Node = null;
    @property(cc.Node)
    btn_again: cc.Node = null;
    @property(cc.Node)
    btn_back: cc.Node = null;

    public onOpen(fromUI: number, ...args: any[]): void {
        CCTools.fixedClick(this.btn_sound, this.btnSoundDown, this);
        CCTools.fixedClick(this.btn_music, this.btnMusicDown, this);
        CCTools.fixedClick(this.btn_feedback, this.btnFeedbackDown, this);
        CCTools.fixedClick(this.btn_again, this.btnAgainDown, this);
        CCTools.fixedClick(this.btn_back, this.btnBackDown, this);
    }

    /**音效按钮点击 */
    btnSoundDown() {
        const btn_soundOn = CCTools.findChild(this.btn_sound, "btn_soundOn");
        const btn_soundOff = CCTools.findChild(this.btn_sound, "btn_soundOff");
        btn_soundOn.active = !btn_soundOn.active;
        btn_soundOff.active = !btn_soundOff.active;
    }

    /**背景音乐按钮点击 */
    btnMusicDown() {
        console.log("背景音乐");
        const btn_musicOn = CCTools.findChild(this.btn_music, "btn_musicOn");
        const btn_musicOff = CCTools.findChild(this.btn_music, "btn_musicOff");
        btn_musicOn.active = !btn_musicOn.active;
        btn_musicOff.active = !btn_musicOff.active;
    }

    /**反馈按钮点击 */
    btnFeedbackDown() {
        console.log("反馈");
    }

    /**重新开始按钮点击 */
    btnAgainDown() {
        console.log("重新开始");
        Game.Event.dispatch(GameConst.UI_AgainGame);
    }

    /**返回主页面按钮点击 */
    btnBackDown() {
        console.log("返回主页面");
    }
}
