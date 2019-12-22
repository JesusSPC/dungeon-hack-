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
    
    // Movements in potions, stones, keys, doors, sword
    if (pressedUp && (upY == tilePotion || upY == tileRedstone || upY == tileBluestone || upY == tileDoor && player.keys > 0 || upY == tileKey || upY == tileSword)) {
      if(upY == tilePotion){
        takePotion();
      } else if (upY == tileRedstone){
        takeRedStone();
      } else if (upY == tileBluestone){
        takeBlueStone();
      } else if (upY == tileKey) {
        addKey();
      } else if (upY == tileDoor) {
        removeKey();
      } else if (upY == tileSword) {
        getSword();
      }
      movingUp();
      tileIntoFloor();
    } else if (pressedDown && (downY == tilePotion || downY == tileRedstone || downY == tileBluestone || downY == tileDoor && player.keys > 0 || downY == tileKey || downY == tileSword)) {
      if(downY == tilePotion){
        takePotion();
      } else if (downY == tileRedstone){
        takeRedStone();
      } else if (downY == tileBluestone){
        takeBlueStone();
      } else if (downY == tileKey) {
        addKey();
      } else if (downY == tileDoor) {
        removeKey();
      } else if (downY == tileSword) {
        getSword();
      }
      movingDown();
      tileIntoFloor();
    } else if (pressedLeft && (leftX == tilePotion || leftX == tileRedstone || leftX == tileBluestone || leftX == tileDoor && player.keys > 0 || leftX == tileKey || leftX == tileSword)) {
      if(leftX == tilePotion){
        takePotion();
      } else if (leftX == tileRedstone){
        takeRedStone();
      } else if (leftX == tileBluestone){
        takeBlueStone();
      } else if (leftX == tileKey) {
        addKey();
      } else if (leftX == tileDoor) {
        removeKey();
      } else if (leftX == tileSword) {
        getSword();
      }
      movingLeft();
      tileIntoFloor();
    } else if (pressedRight && (rightX == tilePotion || rightX == tileRedstone || rightX == tileBluestone || rightX == tileDoor && player.keys > 0 || rightX == tileKey || rightX == tileSword)) {
      if(rightX == tilePotion){
        takePotion();
      } else if (rightX == tileRedstone){
        takeRedStone();
      } else if (rightX == tileBluestone){
        takeBlueStone();
      } else if (rightX == tileKey) {
        addKey();
      } else if (rightX == tileDoor) {
        removeKey();
      } else if (rightX == tileSword) {
        getSword();
      }
      movingRight();
      tileIntoFloor();
    }

    // Movements into monsters
    if (pressedUp && (upY == tileBat || upY == tileSlime || upY == tileSkeleton || upY == tileZenos || upY == tileWizard || upY == tileKnight || upY == tileDarkKnight)) {
      keysDown[38] = false;
      if (!keysDown[38]){
         combatUp()
      }      
    } else if (pressedDown && (downY == tileBat || downY == tileSlime || downY == tileSkeleton || downY == tileZenos || downY == tileWizard || downY == tileKnight || downY == tileDarkKnight)) {
      keysDown[40] = false;
      if (!keysDown[40]){
         combatDown()
      }
    } else if (pressedLeft && (leftX == tileBat || leftX == tileSlime || leftX == tileSkeleton || leftX == tileZenos || leftX == tileWizard || leftX == tileKnight || leftX == tileDarkKnight)) {
      keysDown[37] = false;
      if (!keysDown[37]){
         combatLeft()
      }
    } else if (pressedRight && (rightX == tileBat || rightX == tileSlime || rightX == tileSkeleton || rightX == tileZenos || rightX == tileWizard || rightX == tileKnight || rightX == tileDarkKnight)) {
      keysDown[39] = false;
      if (!keysDown[39]){
         combatRight()
      }
    }

    // Movements in princess
    if (pressedUp && upY == tilePrincess) {
      movingUp();
      alert("You win!");
    } else if (pressedDown && downY == tilePrincess) {
      movingDown();
      alert("You win!");
    } else if (pressedLeft && leftX == tilePrincess) {
      movingLeft();
      alert("You win!");
    } else if (pressedRight && rightX == tilePrincess) {
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
        // case tileBottom1:
        //   ctx.drawImage(wallBottom1, x * tileW, y * tileH, tileW, tileH);
        //   break;
        // case tileLeft1:
        //   ctx.drawImage(wallLeft1, x * tileW, y * tileH, tileW, tileH);
        //   break;
        case tilePrincess:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(princessImg, x * tileW, y * tileH, tileW, tileH);
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
        case tileSword:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(swordImg, x * tileW, y * tileH, tileW, tileH);
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
        case tileWizard:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(wizardImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileKnight:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(knightImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileDarkKnight:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(darkKnightImg, x * tileW, y * tileH, tileW, tileH);
          break;
        case tileZenos:
          ctx.drawImage(floor, x * tileW, y * tileH, tileW, tileH);
          ctx.drawImage(zenosImg, x * tileW, y * tileH, tileW, tileH);
          break;
      }
    }
  }

  ctx.drawImage(warrior1, player.position[0], player.position[1], player.dimensions[0],player.dimensions[1]);

  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);
  
  let hPoints  = document.getElementById('lifepoints');
  hPoints.innerHTML = player.health
  
  let atkPoints  = document.getElementById('atkpower');
  atkPoints.innerHTML = player.attack
  
  let defPoints  = document.getElementById('defpower');
  defPoints.innerHTML = player.defense

  let keyCounter  = document.getElementById('keys');
  keyCounter.innerHTML = player.keys
  
  lastFrameTime = currentFrameTime;
  requestAnimationFrame(drawGame);
}
