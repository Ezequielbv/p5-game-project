class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * WIDTH)
        this.y = (Math.random() * HEIGHT) / 2

        this.width = 25;
        this.height = 25;

        this.hitCount = 0;
        this.deleteAt = Infinity;
    }

    draw() {
        // noLoop();
        this.y += GHOSTSPEED; //speed of the ghosts

        if (game.player.score >= 4) { //increases the ghosts speed after 4 killed
            this.y = this.y+6;
            fadeLevelUp();
        } else if (game.player.score >= 8) {
            this.y = this.y+8;
            fadeLevelUp();
        }
        
        //moving towards the center
        if(this.x < WIDTH/2) {this.x = this.x+2;}
        if(this.x > WIDTH/2) {this.x = this.x-2;}

        //growing while getting closer
        this.width = this.width+1.3; 
        this.height = this.height+1.3;

        image(this.image, this.x, this.y, this.width, this.height);

        if (this.y + this.height / 2 > HEIGHT && this.y + this.height / 2 < HEIGHT+10) {
            background('rgba(255, 0, 0, 0.20)');
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
            playerInfo.score += 1;
            playerInfo.x = 0;
            playerInfo.y = HEIGHT;
            
            document.querySelector("#score span").innerText = playerInfo.score;
            return true;
        }
    }

    ghostHits() {
        // this.hitCount = 1;
        // console.log(this.hitCount);
        let lives = document.querySelectorAll('#lives ul li');
        if (lives.length > 1) {
            lives[lives.length-1].remove();
        } else {

            lives[lives.length-1].remove();

            // document.getElementById('reset').classList.remove('hidden');
            
            document.getElementById('lost-message').classList.remove('hidden');
            // text("You lost! Press enter to try again", 100, 100)
            noLoop();
        }
    }

}



