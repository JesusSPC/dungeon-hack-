
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

let doors = new Image()
doors.src = "./img/door.png";

let floor = new Image()
floor.src = "./img/floor.png"

let yellowkey = new Image()
yellowkey.src = "./img/yellowkey.png"

let stairs = new Image()
stairs.src = "./img/stairs.png"

let walls = new Image()
walls.src = "./img/wall.png"

let warrior1 = new Image()
warrior1.src = "./img/warrior1.png"
