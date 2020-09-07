import WeaponBehavior from './weapon';
import WeaponFactory from './weaponfactory';

export default class Character {
  weaponBehavior: WeaponBehavior;

  public constructor(type: string) {
    this.setWeapon(type);
  }

  public setWeapon(type: string) {
    this.weaponBehavior = WeaponFactory(type);
  }
}
