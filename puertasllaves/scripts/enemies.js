class Enemies {
  constructor(ctx, health, attack, defense){
    this.ctx = null;
    this.health = health;
    this.attack = attack;
    this.defense = defense;

  }

  isDead(){
    this.health >= 0;
    return true;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  monsterAttack(){

  }

}

class Bats extends Enemies {
  constructor(){
    this.health = 200;
    this.attack = 50;
    this.defense = 10;
    super(this.ctx, this.health, this.attack, this.defense)
  }
}

class Slimes extends Enemies {
  constructor(){
    this.health = 100;
    this.attack = 30;
    this.defense = 10;
    super(this.ctx, this.health, this.attack, this.defense)
  }
}