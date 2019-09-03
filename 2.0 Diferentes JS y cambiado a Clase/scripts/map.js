var ctx = null;
var tileW = 40;
var tileH = 40;
var mapW = 10;
var mapH = 10;

var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;
var lastFrameTime = 0;

var keysDown = {
  37: false,
  38: false,
  39: false,
  40: false
};

var player = new Character();

var gameMap = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];