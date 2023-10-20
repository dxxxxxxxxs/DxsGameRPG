// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class IResultAble extends cc.Component {
    protected onLoad(): void {
        this.node.on("OnSpawn",this.onSpawn);
        this.node.on("UnSpawn",this.unSpawn);
    }
    /**
     * 取出节点时执行
     */
    public abstract onSpawn();
    /**
     * 收回节点时执行
     */
    public abstract unSpawn();
}
