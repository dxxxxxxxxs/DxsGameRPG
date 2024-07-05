// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { UIConf } from "../Common/UI/UIManager";

const { ccclass, property } = cc._decorator;


export enum UIID {
    UIGame = 1,
    UIGameStart,
    UIGameOver,
    UISet,
}

export const UICF: { [key: number]: UIConf } = {
    [UIID.UIGame]: { prefab: "prefabs/UIGame", bundle: "Game" },
    [UIID.UIGameStart]: { prefab: "prefabs/UIGameStart", bundle: "Game" },
    [UIID.UIGameOver]: { prefab: "prefabs/UIGameOver", bundle: "GameOver" },
    [UIID.UISet]: { prefab: "prefabs/UISet", bundle: "Game" },
}


export class GameConfig {


}

export class levelAllData {
    number_of_matrices: number;
    matrices: levelData[];
    constructor(n: number, m: levelData[]) {
        this.number_of_matrices = n;
        this.matrices = m;
    }
}

export class levelData {
    rows: number;
    columns: number;
    filled_cells: number;
    ones: number;
    twos: number;
    data: number[][];
    constructor(rows: number, columns: number, filled_cells: number, ones: number, twos: number, data: number[][]) {
        this.rows = rows;
        this.columns = columns;
        this.filled_cells = filled_cells;
        this.ones = ones;
        this.twos = twos;
        this.data = data;
    }
}
