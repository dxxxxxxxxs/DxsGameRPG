// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BundleManager {
    // private static _instance:BundleManager;
    // public static get Instance()
    // {
    //     if(this._instance==null)
    //     {
    //         this._instance=new BundleManager();
    //     }
    //     return this._instance as BundleManager;
    // }
    // private constructor(){}
    public static bundleMap:Map<string,cc.AssetManager.Bundle>=new Map<string,cc.AssetManager.Bundle>();
    /**
     * 加载Bundle分包
     * @param bundleName 分包名称
     * @returns 
     */
    public static async loadBundle(bundleName:string):Promise<cc.AssetManager.Bundle>
    {
        return new Promise<cc.AssetManager.Bundle>((resovlve)=>{
            if(this.bundleMap.get(bundleName))
            {
                resovlve(this.bundleMap.get(bundleName));
                return;
            }
            cc.assetManager.loadBundle(bundleName,(err:Error,bundle:cc.AssetManager.Bundle)=>{
                if(err)
                {
                    console.error(err);
                    resovlve(null);
                }
                else
                {
                    console.log("加载分包"+bundleName+"成功");
                    this.bundleMap.set(bundleName,bundle);
                    resovlve(bundle);
                }
            })
        })
            
    }
    /**
     * 根据分包加载资源
     * @param bundlePath 资源基于分包的相对路径
     * @param bundleName 分包名称
     * @returns 
     */
    public static async load<T extends cc.Asset>(bundlePath:string,bundleName:string):Promise<T>
    {   
        return new Promise<T>(async(resovlve)=>{
            let bundle=await this.loadBundle(bundleName);
            //let bundle =this.bundleMap.get(bundleName);
            if(bundle)
            {
                bundle.load(bundlePath,(err,result:T)=>{
                    if(err)
                    {
                        console.error(err);
                        resovlve(null);
                    }
                    else
                    {
                        console.log("加载预制体成功");
                        resovlve(result);
                    }
                })
            }   
            else
            {
                console.log("没有这个bundle分包"+bundleName);
            }
        })
        
        
    }
}
