import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { uiManager } from "../../Common/UI/UIManager";
import { UIView } from "../../Common/UI/UIView";
import { GameConfig, UIID } from "../GameConfig";
import GameModel from "../Model/GameModel";
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
    @property(cc.Node)
    btn_close: cc.Node = null;


    public onOpen(fromUI: number, ...args: any[]): void {
        CCTools.fixedClick(this.btn_sound, this.btnSoundDown, this);
        CCTools.fixedClick(this.btn_music, this.btnMusicDown, this);
        CCTools.fixedClick(this.btn_feedback, this.btnFeedbackDown, this);
        CCTools.fixedClick(this.btn_again, this.btnAgainDown, this);
        CCTools.fixedClick(this.btn_back, this.btnBackDown, this);
        CCTools.fixedClick(this.btn_close, this.btnCloseDown, this);
        this.initMusic();
    }

    /**初始化ui */
    initMusic() {
        const btn_musicOn = CCTools.findChild(this.btn_music, "btn_musicOn");
        const btn_musicOff = CCTools.findChild(this.btn_music, "btn_musicOff");
        const btn_soundOn = CCTools.findChild(this.btn_sound, "btn_soundOn");
        const btn_soundOff = CCTools.findChild(this.btn_sound, "btn_soundOff");
        btn_musicOff.active = GameModel.musicVolume == 1 ? false : true;
        btn_musicOn.active = GameModel.musicVolume == 1 ? true : false;
        btn_soundOn.active = GameModel.soundVolume == 1 ? true : false;
        btn_soundOff.active = GameModel.soundVolume == 1 ? false : true;
    }

    /**音效按钮点击 */
    btnSoundDown() {
        console.log("点击音效");
        const btn_soundOn = CCTools.findChild(this.btn_sound, "btn_soundOn");
        const btn_soundOff = CCTools.findChild(this.btn_sound, "btn_soundOff");
        btn_soundOn.active = !btn_soundOn.active;
        btn_soundOff.active = !btn_soundOff.active;
        btn_soundOff.active ? Game.Audio.setSoundVolume(0) : Game.Audio.setSoundVolume(1);
        GameModel.soundVolume = btn_soundOff.active ? 0 : 1;
    }

    /**背景音乐按钮点击 */
    btnMusicDown() {
        console.log("背景音乐");
        const btn_musicOn = CCTools.findChild(this.btn_music, "btn_musicOn");
        const btn_musicOff = CCTools.findChild(this.btn_music, "btn_musicOff");
        btn_musicOn.active = !btn_musicOn.active;
        btn_musicOff.active = !btn_musicOff.active;
        btn_musicOff.active ? Game.Audio.setMusicVolume(0) : Game.Audio.setMusicVolume(1);
        GameModel.musicVolume = btn_musicOff.active ? 0 : 1;
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
        uiManager.close(this);
        uiManager.closeById(UIID.UIGame);
        uiManager.open(UIID.UIGameStart);
        console.log("返回主页面");
    }

    /**关闭按钮 */
    btnCloseDown() {
        uiManager.close(this);
    }
}
