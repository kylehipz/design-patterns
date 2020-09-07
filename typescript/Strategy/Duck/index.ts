import RubberDuck from './rubberduck';

const rubberDuck = new RubberDuck();

rubberDuck.fly();
rubberDuck.quack();

console.log('\nsetting flyable and quackable ....\n');

rubberDuck.setFlyable('sf');
rubberDuck.setQuackable('lq');

rubberDuck.fly();
rubberDuck.quack();
