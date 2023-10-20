// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html



const {ccclass, property} = cc._decorator;
/**
 * 回调函数，有两个参数，事件名和函数所需数据
 */
export type EventManagerCallFunc=(eventName:string,eventData:any)=>void;
/**
 * 事件名对应的回调函数，callback是触发的函数，target是函数所在的脚本
 */
interface CallBackTarget
{
    callBack:EventManagerCallFunc,
    target:any,
}
@ccclass
export class EventManager {
    private static _instance:EventManager;
    public static get Instance()
    {
        if(this._instance==null)
        {
            this._instance=new EventManager();
        }
        return this._instance as EventManager;
    }
    private constructor(){}
    /**用来存储所有已添加的事件和对应回调函数的字典集合，key：事件名，value：callbacktarget数组 */
    private eventListeners:{[key:string]:CallBackTarget[]}={};

    //这个方法用于判断当前要添加的事件是否已经添加过了，如果说已经添加过了，就不再添加，如果没添加过继续添加就是一个eventName触发多个方法（因为这个方法只有当这个eventName对应的方法数组不为空时才会触发）
    private getEventListenersIndex(eventName:string,callBack:EventManagerCallFunc,target:any):number
    {
        let index=-1;
        for(let i=0;i<this.eventListeners[eventName].length;i++)
        {
            let iterator=this.eventListeners[eventName][i];
            if(iterator.callBack==callBack&&(!target||iterator.target==target))
            {
                index=i;
                break;
            }
        }
        return index;
    }
    /**
     * 添加事件
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在脚本（一般是this）
     * @returns 
     */
    addEventListener(eventName:string,callBack:EventManagerCallFunc,target?:any):boolean
    {
        if(!eventName)
        {
            console.log("事件名有错误");
            return;
        }
        if(callBack==null)
        {
            console.log("事件传入的方法为空");
            return false;
        }
        let callTarget:CallBackTarget={callBack:callBack,target:target};
        if(this.eventListeners[eventName]==null)
        {
            this.eventListeners[eventName]=[callTarget];
        }
        else
        {
            let index=this.getEventListenersIndex(eventName,callBack,target);
            if(index==-1)
            {
                this.eventListeners[eventName].push(callTarget);
            }
        }
        return true;
    }
    /**
     * 设置事件名对应的事件函数
     * @param eventName 
     * @param callBack 
     * @param target 
     * @returns 
     */
    setEventListener(eventName:string,callBack:EventManagerCallFunc,target?:any):boolean
    {
        if(!eventName)
        {
            console.log("事件名为空");
            return;
        }
        if(callBack==null)
        {
            console.log("传入的事件函数为空");
            return false;
        }
        let callBackFunc:CallBackTarget={callBack:callBack,target:target};
        this.eventListeners[eventName]=[callBackFunc];
    }
    /**
     * 删除函数
     * @param eventName 事件名
     * @param callBack 事件回调函数
     * @param target 函数所在的脚本（一般是this）
     */
    removeEventListener(eventName:string,callBack:EventManagerCallFunc,target?:any)
    {
        if(this.eventListeners[eventName]!=null)
        {
            let index=this.getEventListenersIndex(eventName,callBack,target);
            if(index!=-1)
            {
                this.eventListeners[eventName].splice(index,1);
            }
        }
    }
    /**
     * 触发事件（如果事件对应的方法没有数据参数需求即可只传一个参数）
     * @param eventName 事件名参数
     * @param eventData 数据参数
     */
    dispatch(eventName:string,eventData?:any)
    {
        if(this.eventListeners[eventName]!=null)
        {
            // 将所有回调提取出来，再调用，避免调用回调的时候操作了事件的删除
            let callBackList:CallBackTarget[]=[];
            for (const iterator of this.eventListeners[eventName]) {
                callBackList.push({ callBack: iterator.callBack, target: iterator.target });
            }
            for (const iterator of callBackList) {
                //call方法意思是调用第一个参数（此时一般传入的是当时添加这个事件的脚本）脚本上callback方法，callback是一个EventManagerCallFunc类型，有两个参数，所以call后面两个参数就是传给这个target身上的callback方法的。第一个是事件名称，一般没用，第二个是传入的数据
                iterator.callBack.call(iterator.target, eventName, eventData);
            }
        }
    }

    // update (dt) {}
}
