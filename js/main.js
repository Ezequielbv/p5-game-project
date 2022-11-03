const game = new Game();
let mode = 0;

function preload() {
  game.preload()
}

function setup() {
  if(windowWidth < 550) {
    let screenWith = WIDTH/3;
    let screenHeight = screenWith/3;
  } else {
    screenWith = WIDTH;
    screenHeight = screenWith/3;
  }
  createCanvas(screenWith, screenHeight);

  background(11,17,34);
  noCursor();
  btn = createButton('Click here to start the game');
  btn.addClass('start-btn')
  btn.mousePressed(updatemode);
}
  
function draw() {
  if (mode == 0) {
    background(11,17,34);
  }
  if (mode == 1) {
    game.draw()
  }
}

function updatemode() {
  mode = mode + 1;
  document.getElementById('start-message').classList.add('hidden');
  btn.addClass('hidden')
}

function mousePressed() {
    game.player.shootCoorX();
    game.player.shootCoorY();
}

function keyPressed() {
  if (keyCode == 13) {
    mode = 0;
    document.getElementById('start-message').classList.remove('hidden');
    btn.removeClass('hidden');
    // reset score
    game.player.score = 0;
    document.querySelector("#score span").innerText = 0;
    
    // reset hearts
    let livesList = document.querySelector('#lives ul');    
    livesList.innerHTML = `
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
    `;

    let levelUpCreate = document.getElementById('levels');
    levelUpCreate.innerHTML = `
      <h2 id="level2" class="hidden">Level Up!</h2>
      <h2 id="level3" class="hidden">Level Up!</h2>
    `

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


let levelUp2 = document.querySelector('#levels h2#level2');
let levelUp3 = document.querySelector('#levels h2#level3');

function fadeLevelUp() {
  if(game.player.score == 4 && levelUp2) {
    levelUp2.classList.remove('hidden');
    setTimeout(() => {
      levelUp2.classList.add('fade');
    }, 500);
    setTimeout(() => {
      levelUp2.remove();
    },1000);
  } else if (game.player.score == 8 && levelUp3) {
    levelUp3.classList.remove('hidden');
    setTimeout(() => {
      levelUp3.classList.add('fade');
    }, 500);
    setTimeout(() => {
      levelUp3.remove();
    },1000);
  }
}