
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
}

function removeKey(){
  player.keys -= 1;
}

function takePotion(){
  player.health += 200;
}

function takeRedStone(){
  player.attack += 20;
}

function takeBlueStone(){
  player.defense += 20;
}

function combat(){
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == player.tileTo[1]).forEach(elem => elem.health -= player.attack);
  army.forEach((el, index) => {
  if (el.health <= 0) {
    tileIntoFloor();
    army.splice(index, 1)
    return;
  }
  })
  
  army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == player.tileTo[1]).forEach(elem => player.health -= elem.attack);
  if (player.health <= 0) {
    return console.log("GAME OVER BITCH");
  } else {
    console.log(army)
    console.log(player.health)
    army.filter(ele => ele.tileX == player.tileTo[0] && ele.tileY == player.tileTo[1]).forEach(elem => console.log(elem.health));
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
