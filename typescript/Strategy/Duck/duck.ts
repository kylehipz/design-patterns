import Flyable from './flyable';
import Quackable from './quackable';
import FlyFactory from './flyfactory';
import QuackFactory from './quackfactory';

export default class Duck {
  flyable: Flyable;
  quackable: Quackable;

  public constructor(flyableType: string, quackableType: string) {
    this.setFlyable(flyableType);
    this.setQuackable(quackableType);
  }

  public swim() {
    console.log('I am swimming!!');
  }

  public display() {
    console.log(' I am a duck dude!');
  }

  public fly() {
    this.flyable.fly();
  }

  public quack() {
    this.quackable.quack();
  }

  public setFlyable(type: string) {
    this.flyable = FlyFactory(type);
  }

  public setQuackable(type: string) {
    this.quackable = QuackFactory(type);
  }
}
