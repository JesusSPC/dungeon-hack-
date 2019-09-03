  
function drawGame(){
  if(ctx==null){
    return;
  }

  var currentFrameTime = Date.now();
  // var timeElapsed = currentFrameTime - lastFrameTime;

  var sec = Math.floor(Date.now()/1000);
  if(sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  }
  else {
    frameCount++;
  }

  if (!player.processMovement(currentFrameTime)){
    let upY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)];
    let downY = gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)];
    let leftX = gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])];
    let rightX = gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])]

    if(keysDown[38] && player.tileFrom[1] > 0 && (upY == 1 || upY == 2 || upY == 3)) {
      player.tileTo[1] -= 1;
    } else if (keysDown[40] && player.tileFrom[1] < (mapH - 1) && (downY == 1 || downY == 2 || downY == 3)) {
      player.tileTo[1] += 1;
    } else if (keysDown[37] && player.tileFrom[0] > 0  && (leftX == 1 || leftX == 2 || leftX == 3)) {
      player.tileTo[0] -= 1;
    } else if (keysDown[39] && player.tileFrom[0] < (mapW - 1) && (rightX == 1 || rightX == 2 || rightX == 3)) {
      player.tileTo[0] += 1;
    }


    if(keysDown[38] && player.tileFrom[1] > 0 && upY == 4 && player.keys > 0) {
      player.keys -= 1;
      player.tileTo[1] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[40] && player.tileFrom[1] < (mapH - 1) && downY == 4 && player.keys > 0) {
      player.keys -= 1;
      player.tileTo[1] += 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[37] && player.tileFrom[0] > 0  && leftX == 4 && player.keys > 0) {
      player.keys -= 1;
      player.tileTo[0] -= 1;
      gameMap[player.inIndex()] = 1;
    } else if (keysDown[39] && player.tileFrom[0] < (mapW - 1) && rightX == 4 && player.keys > 0) {
      player.keys -= 1;
      player.tileTo[0] += 1;
      gameMap[player.inIndex()] = 1;
    }


    if(player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) {
      player.timeMoved = currentFrameTime;
    }
  }

  // if (gameMap[toIndex(player.tileX, player.tileY)] == 4){
  //   gameMap[toIndex(player.tileX, player.tileY)] = 1;
  // }


  for(var y = 0; y < mapH; y++){
    for(var x = 0; x < mapW; x++) {
      switch(gameMap[((y * mapW) + x)]){
        case 0:
        ctx.fillStyle = "#999999";
        break;
        case 1:
        ctx.fillStyle = "#eeeeee";
        break;
        case 2:
        ctx.fillStyle = "#ffff00";
        break;       
        case 4:
        let door = new Doors("yellow", x, y);
        ctx.fillStyle = "#4e3803";
        break;
      }
      ctx.fillRect(x*tileW, y*tileH, tileW, tileH)
    }
  }

  ctx.fillStyle = "#0000ff";
  ctx.fillRect(player.position[0], player.position[1],
  player.dimensions[0], player.dimensions[1]);

  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);
  
  lastFrameTime = currentFrameTime;
  requestAnimationFrame(drawGame);
}