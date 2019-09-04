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

function drawGame() {

  // if (ctx == null) {
  //   return;
  // }



  var currentFrameTime = Date.now();
  // var timeElapsed = currentFrameTime - lastFrameTime;

  var sec = Math.floor(Date.now() / 1000);


  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

  if (!player.processMovement(currentFrameTime)) {
    
    let upY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)];
    let downY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)];
    let leftX = gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])];
    let rightX = gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])];

    if (keysDown[38] && player.tileFrom[1] > 0 && (upY == 1 || upY == 3)) {
      player.tileTo[1] -= 1;
    } else if (
      keysDown[40] && player.tileFrom[1] < mapH - 1 && (downY == 1 || downY == 3)) {
      player.tileTo[1] += 1;
    } else if (
      keysDown[37] && player.tileFrom[0] > 0 && (leftX == 1 || leftX == 3)) {
      player.tileTo[0] -= 1;
    } else if (
      keysDown[39] && player.tileFrom[0] < mapW - 1 && (rightX == 1 || rightX == 3)) {
      player.tileTo[0] += 1;
    }

    if (keysDown[38] && player.tileFrom[1] > 0 && upY == 2) {
      player.keys += 1;
      player.tileTo[1] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[40] && player.tileFrom[1] < mapH - 1 && downY == 2) {
      player.keys += 1;
      player.tileTo[1] += 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[37] && player.tileFrom[0] > 0 && leftX == 2) {
      player.keys += 1;
      player.tileTo[0] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[39] && player.tileFrom[0] < mapW - 1 && rightX == 2) {
      player.keys += 1;
      player.tileTo[0] += 1;
      gameMap[player.inIndex()] = 1;
    }

    if (keysDown[38] && player.tileFrom[1] > 0 && upY == 4 && player.keys > 0) {
      player.keys -= 1;
      player.tileTo[1] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (
      keysDown[40] &&
      player.tileFrom[1] < mapH - 1 &&
      downY == 4 &&
      player.keys > 0
    ) {
      player.keys -= 1;
      player.tileTo[1] += 1;
      gameMap[player.inIndex()] = 1;
    } else if (
      keysDown[37] &&
      player.tileFrom[0] > 0 &&
      leftX == 4 &&
      player.keys > 0
    ) {
      player.keys -= 1;
      player.tileTo[0] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (
      keysDown[39] &&
      player.tileFrom[0] < mapW - 1 &&
      rightX == 4 &&
      player.keys > 0
    ) {
      player.keys -= 1;
      player.tileTo[0] += 1;
      gameMap[player.inIndex()] = 1;
    }

    if (keysDown[38] && player.tileFrom[1] > 0 && upY == 9) {
      player.tileTo[1] -= 1;
      alert("You win!");
    } else if (keysDown[40] && player.tileFrom[1] < mapH - 1 && downY == 9) {
      player.tileTo[1] += 1;
      alert("You win!");
    } else if (keysDown[37] && player.tileFrom[0] > 0 && leftX == 9) {
      player.tileTo[0] -= 1;
      alert("You win!");
    } else if (keysDown[39] && player.tileFrom[0] < mapW - 1 && rightX == 9) {
      player.tileTo[0] += 1;
      alert("You win!");
    }

    if (
      player.tileFrom[0] != player.tileTo[0] ||
      player.tileFrom[1] != player.tileTo[1]
    ) {
      player.timeMoved = currentFrameTime;
    }
  }

  for (var y = 0; y < mapH; y++) {
    for (var x = 0; x < mapW; x++) {
      switch (gameMap[y * mapW + x]) {
        case 0:
          ctx.drawImage(walls, x * tileW, y * tileH, tileW, tileH);
          break;
        case 1:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          break;
        case 2:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(yellowkey, x * tileW, y * tileH, tileW, tileH);
          break;
        case 4:
          ctx.drawImage(doors, x * tileW, y * tileH, tileW, tileH);
          break;
        case 9:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(stairs, x * tileW, y * tileH, tileW, tileH);
          break;
      }
    }
  }

  ctx.drawImage(warrior1, player.position[0], player.position[1], player.dimensions[0],player.dimensions[1]);

  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);

  lastFrameTime = currentFrameTime;
  requestAnimationFrame(drawGame);
}
