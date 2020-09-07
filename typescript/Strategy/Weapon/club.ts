import WeaponBehavior from './weapon';

export default class ClubBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Iron club deals 2k damage!');
  }
}
