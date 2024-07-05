// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BundleManager from "../../Common/Bundle/BundleManager";
import { Game } from "../../Common/Game";
import CCTools from "../../Common/Tools/CCTools";
import { uiManager } from "../../Common/UI/UIManager";
import { UIView } from "../../Common/UI/UIView";
import { Card } from "../Game/Card";
import { GameConfig, UIID, levelAllData, levelData } from "../GameConfig";
import GameModel, { PropType } from "../Model/GameModel";
import GameConst from "../Src/GameConst";

const { ccclass, property } = cc._decorator;

export enum GameState {
    null,
    game,
    pause,
    over,
}
//每个位置的生成状态（根据关卡提供的数组数据）
export enum CreateState {
    /**不生成 */
    null = 0,
    /**生成可能偏移 */
    create,
    /**生成但是不偏移 */
    onlycreate
}
@ccclass
export default class UIGame extends UIView {

    @property(cc.Node)
    btn_Set: cc.Node = null;
    @property(cc.Node)
    derk: cc.Node = null;
    @property(cc.Node)
    posNodeArray: cc.Node[] = [];
    @property(cc.Node)
    pickDerk: cc.Node = null;
    @property(cc.Node)
    btn_revoke: cc.Node = null;
    @property(cc.Node)
    btn_tips: cc.Node = null;
    @property(cc.Node)
    btn_shuffle: cc.Node = null;
    @property(cc.SpriteFrame)
    iconFrames: cc.SpriteFrame[] = [];

    /**当前关卡生成的所有方块 */
    private cards: Set<Card>;
    private cardArray: number[] = [0, 0, 0, 0, 0];
    private levelData: levelAllData = null;

    public init(...args: any[]): void {
        this.initProp();
        CCTools.fixedClick(this.btn_Set, () => { uiManager.open(UIID.UISet); }, this);
        CCTools.fixedClick(this.btn_revoke, this.btnRevokeDown, this);
        CCTools.fixedClick(this.btn_tips, this.btnTipsDown, this);
        CCTools.fixedClick(this.btn_shuffle, this.btnShuffleDown, this);

    }

    public onOpen(fromUI: number, ...args: any[]): void {
        this.addEvent();
        this.createGameOfLevel();
        GameModel.m_PosNodeArray = this.posNodeArray;
    }

    addEvent() {
        Game.Event.addEventListener(GameConst.UI_AgainGame, this.againGame, this);
        Game.Event.addEventListener(GameConst.UI_CardGoIn, this.CardGoIn, this);
        Game.Event.addEventListener(GameConst.UI_SortCard, this.sortCard, this);
        Game.Event.addEventListener(GameConst.UI_CardRevoke, this.determineCover, this);
        Game.Event.addEventListener(GameConst.UI_PassLevel, this.passLevel, this);
    }

    /**初始化道具数量 */
    initProp() {
        GameModel.propMap = new Map<PropType, number>();
        GameModel.propMap.set(PropType.revoke, 1);
        GameModel.propMap.set(PropType.tips, 1);
        GameModel.propMap.set(PropType.shuffle, 1);
    }

    /**根据关卡设计当前游戏数据 */
    createGameOfLevel() {
        /**单独设计前3关 */
        this.cards = new Set<Card>();
        this.cards.clear();
        GameModel.indexArray = [-1, -1, -1, -1, -1, -1, -1];
        this.levelData = GameModel.levelJson.json;
        let curLevelData: levelData[] = [];
        if (GameModel.level == 1) {
            curLevelData = [this.levelData.matrices[0]];
        } else if (GameModel.level == 2) {
            curLevelData = [this.levelData.matrices[0], this.levelData.matrices[0]];
        } else if (GameModel.level == 3) {
            curLevelData = [this.levelData.matrices[1], this.levelData.matrices[1]];
        } else {
            let layer = GameModel.level <= 8 ? GameModel.level : 8;
            while (layer > 0) {
                const index = CCTools.Random(0, this.levelData.matrices.length - 1);
                curLevelData.push(this.levelData.matrices[index]);
                layer--;
            }
        }

        //根据curlevelData生成关卡
        GameModel.centerDeck = [];
        let cardNumber = 0;
        GameModel.layer = curLevelData.length;
        for (const level of curLevelData) {
            cardNumber += level.filled_cells;
            GameModel.centerDeck.push(level.data);
        }

        GameModel.CardNumber = cardNumber;
        this.createCards();
    }

    /**过关 */
    passLevel() {
        this.createGameOfLevel();
    }

    /**生成牌堆 */
    async createCards() {

        this.derk.setPosition(-(GameModel.col * GameModel.cardWight / 2), 450);
        this.randomCard();
        let cardId = 0;
        for (let z = 0; z < GameModel.layer; z++) {
            for (let y = 0; y < GameModel.row; y++) {
                for (let x = 0; x < GameModel.col; x++) {
                    //判断当前列是否会偏移
                    let isMoveX = CCTools.Random(0, 1);
                    let dirX = 0;
                    //判断当前行是否会偏移
                    let isMoveY = CCTools.Random(0, 1);
                    let dirY = 0;
                    let isCreate = true;
                    const cs: CreateState = GameModel.centerDeck[z][y][x];
                    switch (cs) {
                        case CreateState.null:
                            isCreate = false;
                            break;
                        case CreateState.create:
                            dirX = CCTools.Random(0, 1) == 0 ? 1 : -1;
                            dirY = CCTools.Random(0, 1) == 0 ? 1 : -1;
                            if (isMoveX) {
                                //判断偏移方向
                            }
                            if (isMoveY) {
                                //判断偏移方向
                            }
                            break;
                        case CreateState.onlycreate:
                            break;
                        default:
                            break;
                    }
                    if (isCreate) {
                        let card = await Game.ObjectPool.Spawn("Card", this.derk, "Game");
                        card.setPosition(GameModel.cardWight * (x + 0.5 * dirX), -GameModel.cardHeight * (y + 0.5 * dirY));
                        let cardts = card.getComponent(Card);
                        const iconNumber = this.getCardIcon();
                        cardts.init(this.iconFrames[iconNumber], iconNumber, x, y, z, cardId);
                        cardId++;
                        this.determineCover(null, cardts);
                        this.cards.add(cardts);
                    }
                }
            }
        }
    }

    /**随机出每种方块的数量 */
    randomCard() {
        let allNumber = GameModel.CardNumber;
        const c = Math.floor((GameModel.CardNumber / (this.cardArray.length * 3)));
        if (GameModel.CardNumber <= this.cardArray.length * 3) {
            //这里是方块总数没有15个的时候
            for (let i = 0; i < this.cardArray.length; i++) {
                if (allNumber <= 0) return;
                this.cardArray[i] = 3;
                allNumber -= 3;
            }
            return;
        }
        let rest = GameModel.CardNumber - c * 3 * this.cardArray.length;
        for (let i = 0; i < this.cardArray.length; i++) {
            this.cardArray[i] = c * 3;
        }
        while (rest > 0) {
            let random = CCTools.Random(0, this.cardArray.length - 1);
            this.cardArray[random] += 3;
            rest -= 3;
        }
    }

    /**获取一个可用的格子icon */
    getCardIcon(): number {
        let canChanceType = [];
        for (let i = 0; i < this.cardArray.length; i++) {
            if (this.cardArray[i] > 0) {
                canChanceType.push(i);
            }
        }
        const type = CCTools.Random(0, canChanceType.length - 1);
        this.cardArray[canChanceType[type]]--;
        return canChanceType[type];
    }

    /**判断和其他方块的覆盖关系 */
    determineCover(event: string, card: Card) {
        for (const item of this.cards) {
            if (item == card) break;
            card.setCoverCardState(item);
        }
    }

    /**方块进入下方框中 */
    CardGoIn(event: string, card: Card) {
        this.cards.delete(card);
        this.clearCard(card);
        this.scheduleOnce(() => {
            this.SortGridPos();
        }, 0.05);
    }

    /**排序卡牌和id */
    sortCard() {
        for (let i = 0; i < GameModel.m_PosNodeArray.length; i++) {
            this.posNodeArray[i] = this.pickDerk.children[i];
            GameModel.m_PosNodeArray[i] = this.pickDerk.children[i];
            let CardTS = null;
            if (this.pickDerk.children[i].childrenCount > 0) {
                CardTS = this.pickDerk.children[i].children[0].getComponent(Card);
            }
            GameModel.indexArray[i] = CardTS ? CardTS.cardType : -1;
        }
    }

    /**消除 */
    clearCard(card: Card) {
        let sameCount = 0;
        let clearArray = [];
        for (let i = 0; i < GameModel.indexArray.length; i++) {
            if (GameModel.indexArray[i] == -1) break;
            if (GameModel.indexArray[i] === card.cardType) {
                sameCount++;
                clearArray.push(GameModel.m_PosNodeArray[i].children[0]);
            }
            if (sameCount >= 3 && clearArray.length >= 3) {
                for (let j = 0; j < clearArray.length; j++) {
                    if (clearArray[j].getComponent(Card).isFly) {
                        return;
                    }
                }
                for (let j = 0; j < clearArray.length; j++) {
                    GameModel.indexArray[j] = -1;
                    Game.ObjectPool.UnSpawn(clearArray[j]);
                    GameModel.CardNumber--;
                }
                break;
            }
            if (i >= GameModel.indexArray.length - 1) {
                Game.Event.dispatch(GameConst.GAMEOVER);
            }
        }
    }

    /**消除后填充框 */
    SortGridPos() {
        for (let i = 0; i < GameModel.indexArray.length; i++) {
            if (GameModel.m_PosNodeArray[i].childrenCount <= 0) {
                GameModel.m_PosNodeArray[i].setSiblingIndex(6);
            }
        }
        this.sortCard();
    }


    /**点击撤销道具 */
    btnRevokeDown() {
        if (GameModel.propMap.get(PropType.revoke) > 0 && GameModel.preCard != null) {
            this.cards.add(GameModel.preCard);
            CCTools.changeParentAndKeepPosition(GameModel.preCard.node, this.derk);
            GameModel.preCard.revokeCard();
            CCTools.controlClicks(this.btn_revoke, false);
            this.btn_revoke.color = cc.Color.GRAY;
        }
    }

    /**点击提示道具 */
    btnTipsDown() {
        if (GameModel.propMap.get(PropType.tips) > 0) {
            CCTools.controlClicks(this.btn_tips, false);
            this.btn_tips.color = cc.Color.GRAY;
            if (GameModel.indexArray[0] == -1) {
                //这里处理框里一个方块都没有的情况，随便选一个
                for (const card of this.cards) {
                    if (card.isCanClick) {
                        card.cardTips();
                        return;
                    }
                }
            }
            let clickCards: Map<number, Card[]> = new Map<number, Card[]>();
            for (const pos of this.pickDerk.children) {
                if (pos.childrenCount > 0) {
                    const card = pos.children[0].getComponent(Card);
                    if (clickCards.has(card.cardType)) {
                        clickCards.get(card.cardType).push(card);
                    } else {
                        clickCards.set(card.cardType, [card]);
                    }
                }
            }
            let oneCard = null;
            for (const cardType of clickCards.keys()) {
                //优先处理框里已经有两个相同图案的方块
                if (clickCards.get(cardType).length >= 2) {
                    const card = this.getAppointTypeCard(cardType);
                    if (card) {
                        card.cardTips();
                        return;
                    }
                }
                if (oneCard == null) {
                    const card = this.getAppointTypeCard(cardType);
                    if (card) {
                        oneCard = card;
                    }
                }
                //这里是框里都是一个类型的，需要找到一个框里和可点击方块共有的一个

            }
            if (oneCard) {
                oneCard.cardTips();
            } else {
                this.getCanClickCard().cardTips();
            }
        }
    }

    /**获取一个指定类型的可点击方块 */
    getAppointTypeCard(type: number): Card {
        for (const card of this.cards) {
            if (card.isCanClick && card.cardType == type) {
                return card;
            }
        }
        return null;
    }

    /**获取一个可点击方块 */
    getCanClickCard(): Card {
        for (const card of this.cards) {
            if (card.isCanClick) {
                return card;
            }
        }
        return null;
    }

    /**点击洗牌道具 */
    btnShuffleDown() {
        if (GameModel.propMap.get(PropType.shuffle) > 0) {
            CCTools.controlClicks(this.btn_shuffle, false);
            this.btn_shuffle.color = cc.Color.GRAY;
            let array = [];
            for (const card of this.cards) {
                array.push(card.cardType);
            }
            let realArray = this.shuffleArray(array);
            let i = 0;
            for (const card of this.cards) {
                card.cardType = realArray[i];
                card.shuffle(this.iconFrames[card.cardType]);
                i++;
            }
        }
    }

    /**洗牌算法 */
    shuffleArray(array: number[]): number[] {
        const shuffledArray = array.slice(); // 复制数组，以不修改原始数组

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 生成 0 到 i 之间的随机索引

            // 交换元素位置
            const temp = shuffledArray[i];
            shuffledArray[i] = shuffledArray[j];
            shuffledArray[j] = temp;
        }

        return shuffledArray;
    }

    /**重新开始游戏 */
    againGame() {
        uiManager.close(this);
        uiManager.open(UIID.UIGame,);

    }


    public onClose() {

    }
}   
