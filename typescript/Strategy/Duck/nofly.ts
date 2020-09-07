import Flyable from './flyable';

export default class NoFly implements Flyable {
  fly() {
    console.log('I am not able to fly boi');
  }
}
