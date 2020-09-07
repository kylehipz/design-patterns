import Quackable from './quackable';

export default class LoudQuack implements Quackable {
  quack() {
    console.log('QUAAAAAAACCCKKK!!!');
  }
}
