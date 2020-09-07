import WeaponBehavior from './weapon';

export default class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Knife deals 122 damage!');
  }
}
