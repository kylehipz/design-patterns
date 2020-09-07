import WeaponBehavior from './weapon';
import KnifeBehavior from './knife';
import GunBehavior from './gun';
import SwordBehavior from './sword';
import ClubBehavior from './club';

export default function WeaponFactory(type: string): WeaponBehavior {
  if (type === 'k') {
    return new KnifeBehavior();
  } else if (type === 'g') {
    return new GunBehavior();
  } else if (type === 's') {
    return new SwordBehavior();
  } else {
    return new ClubBehavior();
  }
}
