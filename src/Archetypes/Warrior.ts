import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _warriorInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    this._warriorInstances += 1;
    return this._warriorInstances;
  }
}

export default Warrior;