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

let player = new Character(100, 20, 10);

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
        case tileWizard:
          army.push(new Skeleton(x, y));
          break;
        case tileKnight:
          army.push(new Knight(x, y))
          break;
        case tileDarkKnight:
            army.push(new DarkKnight(x, y));
            break;
        case tileZenos:
          army.push(new Zenos(x, y));
          break;

      }
    }
  }
}


let gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 7, 0, 12, 1, 0, 1, 10, 1, 8, 1, 5, 0, 3, 5, 0,
  0, -1, 1, 11, 12, 6, 13, 0, 5, 0, 4, 1, 0, 4, 12, 0,
  0, 0, 0, 12, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, -2, 2, 0, 3, 0, 1, 1, 1, 1, 0,
  0, 4, 4, 0, 3, 0, 2, 14, 0, 8, 0, 0, 0, 0, 1, 0,
  0, 8, 2, 0, 5, 0, 14, 1, 6, 1, 0, 2, 1, 1, 1, 0,
  0, 1, 0, 0, 1, 0, 1, 5, 0, 10, 0, 10, 0, 0, 6, 0, 
  0, 1, 1, 0, 12, 0, 0, 0, 0, 9, 0, 9, 1, 1, 1, 0,
  0, 0, 1, 6, 1, 1, 1, 1, 9, 9, 0, 0, 0, 0, 8, 0,
  0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 3, 1, 0,
  0, 10, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 5, 9, 0, 14, 0, 6, 0, 0, 0, 0, 1, 0, 2, 4, 0,
  0, 0, 6, 0, 2, 0, 1, 9, 2, 3, 0, 1, 0, 10, 2, 0,
  0, 4, 1, 3, 8, 0, 9, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

let gameMapBackup = Array.from(gameMap)

const tileSword = -2
const tilePrincess = -1;
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
const tileKnight = 12;
const tileDarkKnight = 13;
const tileWizard = 14;
const tileLeft1 = 98;
const tileBottom1 = 99;

generateArmy();

