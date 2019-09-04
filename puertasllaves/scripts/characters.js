
class Character {
  constructor() {
  this.tileFrom = [9,13];
  this.tileTo = [9,14];
  this.tileX = this.tileTo[0];
  this.tileY = this.tileTo[1];
  this.dimensions = [37.5, 37.5];
  this.position = [0, 0];
  this.timeMoved = 0;
  this.delayMove = 300;
  this.keys = 0;
  this.health = 1000;
  this.attack = 50;
  this.defense = 20;
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

  inIndex(){
  return toIndex(this.tileTo[0], this.tileTo[1]);
  }

  placeAt(x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y];
  this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)), ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
  }
  
  receiveDamage(damage){
    this.health -= damage;
  }

  playerAttack(attack){
    Enemy.receiveDamage(attack);
  }

  processMovement(t) {
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]){
  return false;
  }

  if ((t - this.timeMoved) >= this.delayMove){
  this.placeAt(this.tileTo[0], this.tileTo[1]);
  } else {
  this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
  this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);
  
  if (this.tileTo[0] != this.tileFrom[0]){
    var diff = (tileW / this.delayMove) * (t - this.timeMoved);
    this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
  }
  if (this.tileTo[1] != this.tileFrom[1]){
    var diff = (tileH / this.delayMove) * (t - this.timeMoved);
    this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
  }
  this.position[0] = Math.round(this.position[0]);
  this.position[1] = Math.round(this.position[1]);  
  }
  return true;
  };
}
