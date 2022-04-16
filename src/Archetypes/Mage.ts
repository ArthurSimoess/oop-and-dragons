import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energy: EnergyType;
  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    this._mageInstances += 1;
    return this._mageInstances;
  }
}

export default Mage;