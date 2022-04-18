"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, monsters) {
        super(player);
        this._monsters = monsters;
    }
    monstersAreAlive() {
        const monstersAlive = this._monsters.every((monster) => (monster.lifePoints > 0));
        return monstersAlive;
    }
    fight() {
        while (this.player.lifePoints > 0 && this.monstersAreAlive()) {
            this._monsters.forEach((monster) => {
                this.player.attack(monster);
                monster.attack(this.player);
            });
        }
        return super.fight();
    }
}
exports.default = PVE;
