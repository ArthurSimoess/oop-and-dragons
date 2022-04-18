"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._player2 = player2;
    }
    // Likov, não devo alterar o método estipulado na classe pai, mas sim expandi-lo. Ele deve continuar fazendo o que foi definido na classe pai.
    fight() {
        this.player.attack(this._player2);
        this._player2.attack(this.player);
        while (this.player.lifePoints !== -1 && this._player2.lifePoints > 0) {
            this.player.attack(this._player2);
            this._player2.attack(this.player);
        }
        return super.fight();
    }
}
exports.default = PVP;
