// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Common/Game";
import IResultAble from "../../Common/Pool/IResultAble";
import GameModel from "../Model/GameModel";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

@ccclass
export default class player extends IResultAble {

    private canKeyDown: boolean = false;


    protected onEnable(): void {
        this.addEvent();
    }
    protected onDisable(): void {
        this.removeEvent();
    }
    public onSpawn() {
    }
    public unSpawn() {
    }
    addEvent() {
        Game.Event.addEventListener(GameConst.UI_PlayerUp, this.onPlayerUp, this);
    }
    removeEvent() {
        Game.Event.removeEventListener(GameConst.UI_PlayerUp, this.onPlayerUp, this);
    }
    //开始移动
    protected update(dt: number): void {
        if (this.node.active) {
            if (this.node.y < -640) {
                Game.Event.dispatch(GameConst.GAMEOVER);
                return;
            }
            this.node.x += GameModel.moveSpeed * dt;
            GameModel.distance += GameModel.moveSpeed * dt;
            if (GameModel.distance >= 1200) {
                Game.Event.dispatch(GameConst.UI_CreateMap);
                GameModel.distance = 0;
                GameModel.moveSpeed += 50;
            }
            let RigidBody = this.node.getComponent(cc.RigidBody);
            if (RigidBody.linearVelocity.x != 0) {
                RigidBody.linearVelocity = cc.v2(0, RigidBody.linearVelocity.y);
            }
        }
    }
    //跳跃
    onPlayerUp() {
        if (this.canKeyDown == false) return;
        let rigidbody2 = this.node.getComponent(cc.RigidBody);
        rigidbody2.applyForceToCenter(cc.v2(0, 20000).mulSelf(5), true);
        this.canKeyDown = false;
    }
    onBeginContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCircleCollider, otherCollider: cc.PhysicsBoxCollider) {
        this.canKeyDown = true;
        console.log("落地");
    }
    onEndContact(contact: cc.PhysicsContact, selfCollider: cc.PhysicsCircleCollider, otherCollider: cc.PhysicsBoxCollider) {
        this.canKeyDown = false;
        console.log("离开地面");
    }
    onCollisionEnter(other, self) {
        if (other.tag == 9) {
            Game.ObjectPool.UnSpawn(other.node);
            Game.Event.dispatch(GameConst.GetCoin);
        }
    }
    playerDown() {
        if (this.canKeyDown == false) return;

    }
}
