let ctx ;
let tileW = 60;
let tileH = 60;
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

let player = new Character(200, 40, 20);
let army = [];

function generateArmy(){
  for (var y = 0; y < mapH; y++) {
    for (var x = 0; x < mapW; x++) {
      switch (gameMap[y * mapW + x]) {
        case tileBat:
          army.push(new Bat(x, y));
          break;
        case tileSlime:
          army.push(new Slime(x, y));
          break;
        case tileSkeleton:
          army.push(new Skeleton(x, y));
          break;
        case tileZenos:
          army.push(new Zenos(x, y));
      }
    }
  }
}


let gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  0, 1, 7, 1, 1, 11, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 1, 1, 1, 1, 0,
  0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0,
  0, 1, 8, 0, 1, 0, 1, 9, 6, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 
  0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 8, 0,
  0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
  0, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 0, 10, 0, 6, 0, 0, 0, 0, 1, 0, 2, 9, 0,
  0, 0, 1, 1, 1, 0, 9, 1, 3, 2, 0, 1, 0, 10, 1, 0,
  0, 1, 1, 1, 1, 0, 4, 5, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const tileWall = 0;
const tileFloor = 1;
const tileKey = 2;
const tilePotion = 3;
const tileRedstone = 4;
const tileBluestone = 5;
const tileDoor = 6;
const tileWin = 7;
const tileBat = 8;
const tileSlime = 9;
const tileSkeleton = 10;
const tileZenos = 11;

generateArmy();

