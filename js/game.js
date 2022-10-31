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
            { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 0.1 },
            { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 0.2 },
            { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 0.3 },
            { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 0.4 }
        ]

        this.playerImage = loadImage("../assets/player/aim2.png");
        this.playerImage2 = loadImage("../assets/player/aim3.png");
        this.ghostImage = loadImage("../assets/obstacles/ghost-attack.gif");
        this.ghostDeadImage = loadImage("../assets/obstacles/ghost-dead.gif");
    }

    draw() {
        clear()
        this.background.draw();
        this.player.draw();

        // console.log(frameCount)
        if (frameCount % 50 === 0) {
            this.obstacles.push(new Obstacle(this.ghostImage))
        }

        this.obstacles.forEach(obstacle => {
            obstacle.draw();

        })
        
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player) || obstacle.x < -obstacle.width) {
                return false
            } else {
                // this.ghostImage = this.ghostDeadImage;
                return true
            }
        })

        if (this.player.score > 1000) {
            textSize(52)
            text("You won!!!!!! :D", 100, 100)
            noLoop()
        }
    }
}