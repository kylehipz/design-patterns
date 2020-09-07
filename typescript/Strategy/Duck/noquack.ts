import Quackable from './quackable';

export default class NoQuack implements Quackable {
  quack() {
    console.log('I am not able to quack boi');
  }
}
