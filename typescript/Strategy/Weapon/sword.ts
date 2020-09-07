import WeaponBehavior from './weapon';

export default class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Sword deals 1669 damage!');
  }
}
