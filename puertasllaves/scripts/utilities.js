
function toIndex(x, y){
  return ((y * mapW) + x);
}

function tileIntoFloor(){
  gameMap[player.inIndex()] = 1;
}

function movingUp(){
  player.tileTo[1] -= 1;
}

function movingUpMonster(){
  // player.tileTo[1] = 
}

function movingDown(){
  player.tileTo[1] += 1;
}

function movingLeft(){
  player.tileTo[0] -= 1;
}

function movingRight(){
  player.tileTo[0] += 1;
}

function addKey(){
  player.keys += 1;
}

function removeKey(){
  player.keys -= 1;
}

function takePotion(){
  player.health += 150;
}

function takeRedStone(){
  player.attack += 5;
}

function takeBlueStone(){
  player.defense += 5;
}

function gameOver() {
  resetGame();
}

function resetGame() {
  player.keys = 0;
  player.health = 200;
  player.attack = 20;
  player.defense = 10;
  player.tileFrom = [9,13];
  player.tileTo = [9,14];
  gameMap = Array.from(gameMapBackup);
  army = [];
  generateArmy();

}

function combatUp(){
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => elem.health -= (player.attack - elem.defense));
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingUp()
    tileIntoFloor();
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health -= (elem.attack - player.defense));
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }

}

function combatDown(){
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] + 1)).forEach(elem => elem.health -= (player.attack - elem.defense));
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingDown()
    tileIntoFloor();
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] + 1)).forEach(elem => player.health -= (elem.attack - player.defense));
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }

}

function combatLeft(){
  army.filter(ele => ele.tileX == (player.tileTo[0] - 1) && ele.tileY == player.tileTo[1]).forEach(elem => elem.health -= (player.attack - elem.defense));
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingLeft()
    tileIntoFloor();
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == (player.tileTo[0] - 1) && ele.tileY == player.tileTo[1]).forEach(elem => player.health -= (elem.attack - player.defense));
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }

}

function combatRight(){
  army.filter(ele => ele.tileX == (player.tileTo[0] + 1) && ele.tileY == player.tileTo[1]).forEach(elem => elem.health -= (player.attack - elem.defense));
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingRight()
    tileIntoFloor();
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] + 1 && ele.tileY == player.tileTo[1]).forEach(elem => player.health -= (elem.attack - player.defense));
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }
}

let doors = new Image()
doors.src = "./img/door.png";

let floor = new Image()
floor.src = "./img/floor.png"

let yellowkey = new Image()
yellowkey.src = "./img/yellowkey.png"

let stairs = new Image()
stairs.src = "./img/stairs.png"

let potion = new Image()
potion.src = "./img/potion.png"

let strengthBoost = new Image()
strengthBoost.src = "./img/redstone.png"

let defenseBoost = new Image()
defenseBoost.src = "./img/bluestone.png"

let walls = new Image()
walls.src = "./img/wall.png"

// let wallBottom1 = new Image()
// wallBottom1.src = "./img/walls/wallbottom2.png"

// let wallLeft1 = new Image()
// wallLeft1.src = "./img/walls/wallleft3.png"

let warrior1 = new Image()
warrior1.src = "./img/warrior1.png"

let batImg = new Image()
batImg.src = "./img/bat.png"

let redSlimeImg = new Image()
redSlimeImg.src = "./img/redslime.png"

let skeletonImg = new Image();
skeletonImg.src = "./img/skeleton.png"

let zenosImg = new Image();
zenosImg.src = "./img/zenos.png"
