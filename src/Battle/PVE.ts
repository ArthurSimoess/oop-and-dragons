import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  monstersAreAlive() {
    const monstersAlive = this._monsters.every((monster): boolean => (
      monster.lifePoints > 0));
    return monstersAlive;
  }
  
  fight(): number {
    while (this.player.lifePoints > 0 && this.monstersAreAlive()) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }

    return super.fight();
  }
}

export default PVE;