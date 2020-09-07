import Quackable from './quackable';

export default class SilentQuack implements Quackable {
  quack() {
    console.log('quack.');
  }
}
