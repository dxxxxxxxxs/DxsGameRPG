// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class CCTools extends cc.Component {
    public static isValidEmail(email: string): boolean {
        // 邮箱地址的正则表达式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // 使用正则表达式验证输入字符串
        return emailRegex.test(email);
    }
}
