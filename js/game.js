class Game {
    constructor() {
        this.playerImage;
        this.backgroundImages;
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.ghostImage;
        this.ghostDeadImage;
    }

    preload() {
        this.backgroundImages = [
            { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
            { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 0.1 },
            { src: loadImage("assets/background/bg-fog1.png"), x: 0, speed: 0.2 },
            { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 0.2 },
            { src: loadImage("assets/background/bg-fog2.png"), x: 0, speed: 0.2 },
            { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 0.3 },
            { src: loadImage("assets/background/plx-5.png"), x: 0, speed: 0.4 }
        ]

        this.playerImage = loadImage("assets/player/aim2.png");
        this.playerImage2 = loadImage("assets/player/aim3.png");
        this.ghostImage = loadImage("assets/obstacles/ghost-attack.gif");
        this.ghostDeadImage = loadImage("assets/obstacles/ghost-dead.gif");
    }

    draw() {
        // noLoop();
        clear()
        this.background.draw();
        this.player.draw();
        
        if (frameCount % GHOSTAMMOUNT === 0) {
            this.obstacles.push(new Obstacle(this.ghostImage))
        } else if ( game.player.score > 2 && game.player.score < 6 && frameCount % 30 === 0 ){ //increases number of ghosts summoning
            this.obstacles.push(new Obstacle(this.ghostImage))  
        } else if (game.player.score >= 6 && frameCount % 20 === 0){ //increases number of ghosts summoning
            this.obstacles.push(new Obstacle(this.ghostImage))  
        }

        this.obstacles.forEach(obstacle => {
            obstacle.draw();
        })
        
        this.obstacles.forEach((obstacle) => {
            if (obstacle.collision(this.player)) {
                obstacle.image = this.ghostDeadImage;
                obstacle.deleteAt = frameCount + 8;
            }
        })

        this.obstacles = this.obstacles.filter(obstacle => {
            if ( obstacle.deleteAt < frameCount ) {
                return false;
            } else if (obstacle.y > HEIGHT) { // if ghost goes down line of the canvas
                obstacle.ghostHits();
                return false;
            } else { //otherwise, the ghost stays in the array (is not filtered)
                return true;
            }
        })
        
        if (this.player.score >= 15) {
            document.getElementById('win-message').classList.remove('hidden');
            noLoop();
        }
    }
}