

function drawGame() {

  if (ctx == null) {
    return;
  }

  var currentFrameTime = Date.now();
  var sec = Math.floor(Date.now() / 1000);
  // var timeElapsed = currentFrameTime - lastFrameTime;

  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

  // 4 directions from the character
  let upY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)];
  let downY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)];
  let leftX = gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])];
  let rightX = gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])];
  // Pressing the arrow keys
  let pressedUp = keysDown[38] && player.tileFrom[1] > 0;
  let pressedDown = keysDown[40] && player.tileFrom[1] < mapH - 1;
  let pressedLeft = keysDown[37] && player.tileFrom[0] > 0;
  let pressedRight = keysDown[39] && player.tileFrom[0] < mapW - 1;


  if (!player.processMovement(currentFrameTime)) {
    
    // Standard movements
    if (pressedUp && (upY == 1 || upY == 3)) {
      movingUp();
    } else if (pressedDown && (downY == 1 || downY == 3)) {
      movingDown();
    } else if (pressedLeft && (leftX == 1 || leftX == 3)) {
      movingLeft();
    } else if (pressedRight && (rightX == 1 || rightX == 3)) {
      movingRight();
    }

    // Movements in keys
    if (pressedUp && upY == 2) {
      addKey();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == 2) {
      addKey();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == 2) {
      addKey();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == 2) {
      addKey();
      movingRight();
      tileIntoFloor();
    }

    // Movements in doors
    if (pressedUp && upY == 4 && player.keys > 0) {
      removeKey();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == 4 && player.keys > 0) {
      removeKey();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == 4 && player.keys > 0) {
      removeKey();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == 4 && player.keys > 0) {
      removeKey();
      movingRight();
      tileIntoFloor();
    }

    if (pressedUp && upY == 5) {
      movingUp();

    } else if (pressedDown && downY == 5) {
      movingDown();
   
    } else if (pressedLeft && leftX == 5) {
      movingLeft();
     
    } else if (pressedRight && rightX == 5) {
      movingRight();
    
    }

    // Movements in stairs
    if (pressedUp && upY == 9) {
      movingUp();
      alert("You win!");
    } else if (pressedDown && downY == 9) {
      movingDown();
      alert("You win!");
    } else if (pressedLeft && leftX == 9) {
      movingLeft();
      alert("You win!");
    } else if (pressedRight && rightX == 9) {
      movingRight();
      alert("You win!");
    }

    if (player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) {
      player.timeMoved = currentFrameTime;
    }
  }

  // Painting Tiles
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
        case 5:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(bat, x * tileW, y * tileH, tileW, tileH);
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
