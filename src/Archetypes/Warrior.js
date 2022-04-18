"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energy = 'stamina';
    }
    get energyType() {
        return this._energy;
    }
    static createdArchetypeInstances() {
        this._warriorInstances += 1;
        return this._warriorInstances;
    }
}
Warrior._warriorInstances = 0;
exports.default = Warrior;
