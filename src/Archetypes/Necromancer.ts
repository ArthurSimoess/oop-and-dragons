import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  private static _necromancerInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    this._necromancerInstances += 1;
    return this._necromancerInstances;
  }
}

export default Necromancer;