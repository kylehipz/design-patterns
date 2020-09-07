import Character from './character';

class King extends Character {
  constructor() {
    super('s');
  }

  public attack() {
    console.log('King attacks mothafuckas');
    this.weaponBehavior.useWeapon();
  }
}

class Gunner extends Character {
  constructor() {
    super('g');
  }

  public attack() {
    console.log('Gunner attacks mothafuckas');
    this.weaponBehavior.useWeapon();
  }
}

class Kaido extends Character {
  constructor() {
    super('c');
  }

  public attack() {
    console.log('Kaido attacks mothafuckas');
    this.weaponBehavior.useWeapon();
  }
}

const king = new King();
const kaido = new Kaido();
const izo = new Gunner();

king.attack();

console.log();

kaido.attack();
console.log();

izo.attack();
console.log();

console.log('Setting Gunner weapon to knife.....');
izo.setWeapon('k');

izo.attack();
console.log();

console.log('Setting King weapon to knife.....');
king.setWeapon('k');

king.attack();
console.log();

console.log('Setting Kaido weapon to knife.....');
kaido.setWeapon('k');

kaido.attack();
