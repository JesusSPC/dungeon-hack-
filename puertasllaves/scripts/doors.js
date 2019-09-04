class Doors {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.tile = [x, y]
    this.idx = toIndex(x, y);
    this.position = [x * 50, y * 50];
    this.dimensions = [50, 50];
    this.color = color;
    this.status = false;
    this.img = new Image();
    this.img.src = "./../img/floor.png"
  }

  drawDoor(){
    let door = new Doors("yellow", x, y);
    context.drawImage(door.img, 50, 50);
  }

  checkDoor(){
    if (player.inIndex() = this.idx && player.keys > 0) {
      player.keys -= 1;
      return isOpen();
    } else {
      player.tileTo = player.tileFrom;
    }
  }

  isOpen(){
    this.status = true;
  }

}


function createDoor(){
  let door = new Doors();
}


// if (toIndex(player.tileX, player.tileY) == ([4] in gameMap && toIndex(player.tileX, player.tileY))){
//   if (player.inIndex() = door.idx && player.keys > 0) {
//     player.keys -= 1;
//     return door.status = true;
//   } else {
//     player.tileTo = player.tileFrom;
//   }
// }
