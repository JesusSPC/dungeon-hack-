let ctx ;
let tileW = 50;
let tileH = 50;
let mapW = 16;
let mapH = 16;

let currentSecond = 0;
let frameCount = 0;
let framesLastSecond = 0;
let lastFrameTime = 0;

let keysDown = {
  37: false,
  38: false,
  39: false,
  40: false
};

let player = new Character();

let gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  0, 1, 9, 1, 1, 4, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 1, 1, 1, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 4, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 
  0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 4, 0,
  0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
  0, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 0, 1, 0, 4, 0, 0, 0, 0, 1, 0, 2, 1, 0,
  0, 0, 1, 1, 1, 0, 1, 1, 1, 2, 0, 1, 0, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const tileWall = 0;
const tileFloor = 1;
const tileKey = 2;
const tilePotion = 3;
const tileDoor = 4;
const tileMonster = 5;
const tileWin = 9;

function toIndex(x, y){
  return ((y * mapW) + x);
  }
  