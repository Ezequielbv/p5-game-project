class Obstacle {
    constructor(image) {
        this.image = image;
        // this.ghostDeadImage;
        this.x = 
            // Math.floor(
                (Math.random() * WIDTH)
            // );
        this.y = 
            // Math.floor(
                (Math.random() * HEIGHT) / 2
            // );
        this.width = 25;
        this.height = 25;

        this.hitCount = 0;
        // console.log(WIDTH, HEIGHT);
        // console.log("coordinates",this.x, this.y)
    }

    draw() {
        this.y += 4; //speed of the ghosts

        if (game.player.score >= 4) { //increases the ghosts speed after 4 killed
            this.y = this.y+5;
        } else if (game.player.score >= 8) {
            this.y = this.y+6;
        }

        //moving towards the center
        if(this.x < WIDTH/2) {this.x = this.x+2;}
        if(this.x > WIDTH/2) {this.x = this.x-2;}

        //growing while getting closer
        this.width = this.width+1.3; 
        this.height = this.height+1.3;

        image(this.image, this.x, this.y, this.width, this.height);

        if (this.y + this.height / 2 >= HEIGHT) {
            background('rgba(255,0,0, 0.20)');
            // this.ghostHits();
        }
    }

    collision(playerInfo) {
        let obstacleX = Math.floor(this.x + this.width / 2);
        let obstacleY = Math.floor(this.y + this.height / 2);

        let playerShotX = playerInfo.x;
        let playerShotY = playerInfo.y;
        
        //player's coordinate with keyboard
        // let playerX = playerInfo.x + playerInfo.width / 2;
        // let playerY = playerInfo.y + playerInfo.height / 2;
        // console.log("obstacle coor ", playerX, playerY)
        
        if (dist(obstacleX, obstacleY, playerShotX, playerShotY) > this.width / 2) {
            return false;
        } else {

            game.dissapear(obstacleX, obstacleY);

            playerInfo.score += 1;
            playerInfo.x = 0;
            playerInfo.y = HEIGHT;

            document.querySelector("#score span").innerText = playerInfo.score;
            return true;
        }
    }

    ghostHits() {
        this.hitCount = 1;
        console.log(this.hitCount)
        let lives = document.querySelectorAll('#lives ul li');
        if(lives.length > 0) {
            lives[lives.length-1].remove();
        } else {
            textSize(52)
            text("You LOOOSER :D", 100, 100)
            noLoop();
        }
    }

}



