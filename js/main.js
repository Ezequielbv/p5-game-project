const game = new Game()

function preload() {
    game.preload()
}

function setup() {
    createCanvas(WIDTH, HEIGHT)
    background("grey")
    noCursor();
}

function draw() {
    game.draw()
}

// function keyPressed() {
//     if (keyCode === 32) {
//         game.player.jump()
//     }
// }

function mousePressed() {
    game.player.shootCoorX();
    game.player.shootCoorY();
    console.log("shooted", "x: ",game.player.shootCoorX(), ", y: ", game.player.shootCoorY());
}







function keyPressed() {
    if (keyCode === 37) {
      game.player.moveLeft();
    }
    if(keyCode === 39) {
      game.player.moveRight();
    }
    if (keyCode === 38) {
      game.player.moveUp();
    }
    if (keyCode === 40) {
      game.player.moveDown();
    }
}



