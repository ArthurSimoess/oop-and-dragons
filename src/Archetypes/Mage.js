"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energy = 'mana';
    }
    get energyType() {
        return this._energy;
    }
    static createdArchetypeInstances() {
        this._mageInstances += 1;
        return this._mageInstances;
    }
}
Mage._mageInstances = 0;
exports.default = Mage;
