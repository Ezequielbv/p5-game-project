const game = new Game()

function preload() {
  game.preload()
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("grey");
  noCursor();
}
  
function draw() {
  game.draw()
}

function mousePressed() {
    game.player.shootCoorX();
    game.player.shootCoorY();
    console.log("shooted", "x: ",game.player.shootCoorX(), ", y: ", game.player.shootCoorY());
}

function keyPressed() {
  if (keyCode == 13) {
    
    // reset score
    game.player.score = 0;
    document.querySelector("#score span").innerText = 0;
    
    // reset hearts
    let livesList = document.querySelector('#lives ul');
    let amoutOfLives = document.querySelectorAll('#lives ul li').length
    
    if (amoutOfLives == 0) {
      livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      `;
    } else if (amoutOfLives == 1) {
      livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      `;
    } else if (amoutOfLives == 2) {
      livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      `;
    } else if (amoutOfLives == 3) {
      livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      `;
    } else if (amoutOfLives == 4) {
      livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      `;
    }

    
    // reset frame
    frameCount = 0;
    
    // reset ghosts
    game.obstacles = [];
    
    game.preload();
    game.draw();

    document.getElementById('win-message').classList.add('hidden');
    document.getElementById('lost-message').classList.add('hidden');

    loop();
  }
}


let levelUp = document.querySelector('#levels h2');
function fadeLevelUp() {

  if(game.player.score == 4) {
    levelUp.classList.remove('hidden');
    setTimeout(() => {
      levelUp.classList.add('fade');
    }, 500);
    setTimeout(() => {
      levelUp.classList.remove('fade');
      levelUp.classList.add('hidden');
    },1000);
  } else if (game.player.score == 8) {
    levelUp.classList.remove('hidden');
    setTimeout(() => {
      levelUp.classList.add('fade');
    }, 1000)
  }
}