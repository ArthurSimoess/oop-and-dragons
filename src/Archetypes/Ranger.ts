import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energy: EnergyType;
  private static _rangerInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    this._rangerInstances += 1;
    return this._rangerInstances;
  }
}

export default Ranger;