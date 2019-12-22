  window.onload = function() {
    ctx = document.getElementById('game').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
    
    backgroundMusic.play()
    
   
    window.addEventListener("keydown", function(e){
      if (e.keyCode >= 37 && e.keyCode <= 40){
        keysDown[e.keyCode] = true;
      }
    });
    window.addEventListener("keyup", function(e){
      if (e.keyCode >= 37 && e.keyCode <= 40){
        keysDown[e.keyCode] = false;
      }
    });
  };