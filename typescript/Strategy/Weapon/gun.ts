import WeaponBehavior from './weapon';

export default class GunBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Gun deals 1224 damage!');
  }
}
