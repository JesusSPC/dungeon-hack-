class Enemy extends Character{
  constructor(health, attack, defense){
    super(health, attack, defense);
  }
}

class Slime extends Enemy {
  constructor(x, y){
    super(35, 25, 0);
    this.tileX = x;
    this.tileY = y;
  }
}

class Bat extends Enemy {
  constructor(x, y){
    super(80, 30, 10);
    this.tileX = x;
    this.tileY = y;
  }
}

class Skeleton extends Enemy {
  constructor(x, y){
    super(150, 30, 20);
    this.tileX = x;
    this.tileY = y;
  }
}

class Zombie extends Enemy {
  constructor(x, y){
    super(200, 40, 30);
    this.tileX = x;
    this.tileY = y;
  }
}

class Zenos extends Enemy {
  constructor(x, y){
    super(450, 60, 30);
    this.tileX = x;
    this.tileY = y;
  }
}
