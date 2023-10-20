// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import CCTools from "../../Framework/Tools/CCTools";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FeedbackPanel extends cc.Component {
    @property(cc.Node)
    images:cc.Node=null;
    @property(cc.Node)
    addImagebtn:cc.Node=null;
    @property(cc.EditBox)
    inputEmail:cc.EditBox=null;
    @property(cc.SpriteFrame)
    sps:cc.SpriteFrame[]=[];
    private imageMaxNumber:number=5;
    onBtnAddImage()
    {
        if(this.images.children.length>=4&&this.addImagebtn==null)
        {
            return;
        }
        let newImage=cc.instantiate(this.addImagebtn);
        newImage.removeComponent(cc.Button);
        let m=Math.floor(Math.random()*2);
        newImage.getComponent(cc.Sprite).spriteFrame=this.sps[m];
        if(this.images.children.length==4&&this.addImagebtn!=null)
        {
            this.addImagebtn.destroy();
        }
        
        this.images.addChild(newImage,-this.images.childrenCount);
        //this.images.getComponent(cc.Layout).updateLayout();
        this.imageMaxNumber++;
    }
    InputEmailEnd()
    {
        if(CCTools.isValidEmail(this.inputEmail.string))
        {
            console.log("正确邮箱地址");
        }
        else
        {
            console.log("错误邮箱地址");
        }

    }
}
