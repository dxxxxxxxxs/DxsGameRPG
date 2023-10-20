// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../Bundle/BundleManager";
import IResultAble from "./IResultAble";
import SubPool from "./SubPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ObjectPool {
    private static _instance:ObjectPool;
    public static get Instance()
    {
        if(this._instance==null)
        {
            this._instance=new ObjectPool();
        }
        return this._instance as ObjectPool;
    }
    private constructor(){
        this.pools=new Map<string,SubPool>();
    }
    //对象池
    private pools:Map<string,SubPool>;

    /**
     * 取出指定节点
     * @param name 节点预制体名字
     * @param parent 节点创建出来后的父节点
     * @returns 一个异步的cc.node对象，需要用await接收
     */
    public async Spawn(name:string,parent:cc.Node):Promise<cc.Node>
    {
        return new Promise<cc.Node>(async (resovlve)=>{
            let pool:SubPool=null;
            if(!this.pools.has(name))
            {
                await this.RegisterNew(name,parent);
            }
            pool=this.pools.get(name);
            resovlve(pool.Spawn());
        })
    }
    /**
     * 回收指定节点
     * @param node 要回收的节点
     */
    public UnSpawn(node:cc.Node)
    {
        let pool:SubPool=null;
        this.pools.forEach((value,key)=>{
            if(value.Contains(node))
            {
                pool=value;
                return;
            }
        })
        pool.UnSpawn(node);
    }
    /**
     * 回收所有节点
     */
    public UnSpawnAll()
    {
        this.pools.forEach((value,key)=>{
            value.UnSpawnAll();
        })
    }
    /**
     *  清除所有对象池
     */
    public Clear()
    {
        this.pools.clear();
    }
    /**
     * 新建一个对象池
     * @param name 对象池名字
     * @param parent 对象池中所有对象的父节点
     */
    async RegisterNew(name:string,parent:cc.Node)
    {
        let node=await BundleManager.load<cc.Prefab>(name,"ObjectPool");
        let pool=new SubPool(node,parent);
        this.pools.set(pool.poolName,pool);
    }
}
