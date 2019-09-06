function borrarFondo(){
  let fondoImagen = document.querySelector("#fondo")
  fondoImagen.parentNode.removeChild(fondoImagen);
}

function toIndex(x, y){
  return ((y * mapW) + x);
}

function tileIntoFloor(){
  gameMap[player.inIndex()] = 1;
}

function movingUp(){
  player.tileTo[1] -= 1;
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
  keySound.play()
}

function removeKey(){
  player.keys -= 1;
  openDoor.play();
}

function takePotion(){
  player.health += 150;
  potionSound.play();
}

function takeRedStone(){
  player.attack += 4;
  stoneSound.play()
}

function takeBlueStone(){
  player.defense += 4;
  stoneSound.play()
}

function getSword(){
  swordSound.play()
  player.sword = true;
}

function gameOver() {
  alert("GAME OVER")
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
  if (player.sword){
    army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health += (player.attack - elem.defense));
  }  
  
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingUp()
    tileIntoFloor();
    monsterDies.play()
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health -= (elem.attack - player.defense));
  hitSound.play()
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }
}

function combatDown(){
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] + 1)).forEach(elem => elem.health -= (player.attack - elem.defense));
  if (player.sword){
    army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health += (player.attack - elem.defense));
  }  
  
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingDown()
    tileIntoFloor();
    monsterDies.play()
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] + 1)).forEach(elem => player.health -= (elem.attack - player.defense));
  hitSound.play()
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }

}

function combatLeft(){
  army.filter(ele => ele.tileX == (player.tileTo[0] - 1) && ele.tileY == player.tileTo[1]).forEach(elem => elem.health -= (player.attack - elem.defense));
  if (player.sword){
    army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health += (player.attack - elem.defense));
  }  
  
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingLeft()
    tileIntoFloor();
    monsterDies.play()
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == (player.tileTo[0] - 1) && ele.tileY == player.tileTo[1]).forEach(elem => player.health -= (elem.attack - player.defense));
  hitSound.play()
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }

}

function combatRight(){
  army.filter(ele => ele.tileX == (player.tileTo[0] + 1) && ele.tileY == player.tileTo[1]).forEach(elem => elem.health -= (player.attack - elem.defense));
  if (player.sword){
    army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == (player.tileTo[1] - 1)).forEach(elem => player.health += (player.attack - elem.defense));
  }  
  
  army.forEach((el, index) => {
  if (el.health <= 0) {
    movingRight()
    tileIntoFloor();
    monsterDies.play()
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] + 1 && ele.tileY == player.tileTo[1]).forEach(elem => player.health -= (elem.attack - player.defense));
  hitSound.play()
  if (player.health <= 0) {
    return gameOver();
  } else {
    console.log(`Sir Boolean: ${player.health} HP`)
  }
}

let swordSound = new Audio()
swordSound.src = "./sounds/sword.wav"

let stoneSound = new Audio()
stoneSound.src = "./sounds/stone.wav"

let keySound = new Audio()
keySound.src = "./sounds/keys.wav"

let potionSound = new Audio()
potionSound.src = "./sounds/potion.wav"

let hitSound = new Audio()
hitSound.src = "./sounds/hit.wav"

let monsterDies = new Audio()
monsterDies.src = "./sounds/monsterkill.wav"

let openDoor = new Audio()
openDoor.src = "./sounds/door.wav"

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

let swordImg = new Image()
swordImg.src = "./img/sword.png"

let princessImg = new Image()
princessImg.src = "./img/princess.png"

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

let knightImg = new Image();
knightImg.src = "./img/knight.png"

let darkKnightImg = new Image();
darkKnightImg.src = "./img/darkknight.png"

let wizardImg = new Image();
wizardImg.src = "./img/wizard.png"

let zenosImg = new Image();
zenosImg.src = "./img/zenos.png"

let background = new Image()
background.src = "./img/fondo.png"
