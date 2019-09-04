class Enemy {
  constructor(health, attack, defense){
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  get getHealth(){
    return this.health;
  }

  get getAttack(){
    return this.attack;
  }

  get getDefense(){
    return this.defense;
  }

  isDead(){
    this.health <= 0;
    return true;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  monsterAttack(attack){
    player.receiveDamage(attack);
  }

}

class Bat extends Enemy {
  constructor(health, attack){
    super(100, 30, 10);
  }
}

class Slime extends Enemy {
  constructor(health, attack){
    super(50, 20, 15);
  }
}