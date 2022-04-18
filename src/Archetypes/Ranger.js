"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energy = 'stamina';
    }
    get energyType() {
        return this._energy;
    }
    static createdArchetypeInstances() {
        this._rangerInstances += 1;
        return this._rangerInstances;
    }
}
Ranger._rangerInstances = 0;
exports.default = Ranger;
