

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
    if (pressedUp && upY == tileFloor) {
      movingUp();
    } else if (pressedDown && downY == tileFloor) {
      movingDown();
    } else if (pressedLeft && leftX == tileFloor) {
      movingLeft();
    } else if (pressedRight && rightX == tileFloor) {
      movingRight();
    }

    // Movements in keys
    if (pressedUp && upY == tileKey) {
      addKey();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == tileKey) {
      addKey();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == tileKey) {
      addKey();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == tileKey) {
      addKey();
      movingRight();
      tileIntoFloor();
    }

    // Movements in potions
    if (pressedUp && upY == tilePotion) {
      takePotion();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == tilePotion) {
      takePotion();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == tilePotion) {
      takePotion();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == tilePotion) {
      takePotion();
      movingRight();
      tileIntoFloor();
    }
   
    // Movements in redstones
    if (pressedUp && upY == tileRedstone) {
      takeRedStone();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == tileRedstone) {
      takeRedStone();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == tileRedstone) {
      takeRedStone();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == tileRedstone) {
      takeRedStone();
      movingRight();
      tileIntoFloor();
    }
        

    // Movements into doors
    if (pressedUp && upY == tileDoor && player.keys > 0) {
      removeKey();
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && downY == tileDoor && player.keys > 0) {
      removeKey();
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && leftX == tileDoor && player.keys > 0) {
      removeKey();
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && rightX == tileDoor && player.keys > 0) {
      removeKey();
      movingRight();
      tileIntoFloor();
    }

    // Movements into monsters
    if (pressedUp && (upY == tileBat || upY == tileSlime || upY == tileSkeleton)) {
      movingUp();
      combat();
    } else if (pressedDown && (downY == tileBat || downY == tileSlime || upY == tileSkeleton)) {
      movingDown();
      combat();
    } else if (pressedLeft && (leftX == tileBat || leftX == tileSlime || upY == tileSkeleton)) {
      movingLeft();
      combat();
    } else if (pressedRight && (rightX == tileBat || rightX == tileSlime || upY == tileSkeleton)) {
      movingRight();
      combat();
    }

    // Movements in stairs
    if (pressedUp && upY == tileWin) {
      movingUp();
      alert("You win!");
    } else if (pressedDown && downY == tileWin) {
      movingDown();
      alert("You win!");
    } else if (pressedLeft && leftX == tileWin) {
      movingLeft();
      alert("You win!");
    } else if (pressedRight && rightX == tileWin) {
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
        case tileWall:
          ctx.drawImage(walls, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileFloor:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileKey:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(yellowkey, x * tileW, y * tileH, tileW, tileH);
          break;
        case tilePotion:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(potion, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileDoor:
          ctx.drawImage(doors, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileWin:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(stairs, x * tileW, y * tileH, tileW, tileH);
          break
        case tileRedstone:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(strengthBoost, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileBluestone:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(defenseBoost, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileBat:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(batImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileSlime:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(redSlimeImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileSkeleton:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(skeletonImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileZenos:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(zenosImg, x * tileW, y * tileH, tileW, tileH);
      }
    }
  }

  ctx.drawImage(warrior1, player.position[0], player.position[1], player.dimensions[0],player.dimensions[1]);

  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);

  lastFrameTime = currentFrameTime;
  requestAnimationFrame(drawGame);
}
