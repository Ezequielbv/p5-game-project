class Obstacle {
    constructor(image) {
        this.image = image;
        // this.ghostDeadImage;
        this.x = Math.floor((Math.random() * WIDTH));
        this.y = Math.floor((Math.random() * HEIGHT) / 2);
        this.width = 50;
        this.height = 50;
        // console.log(WIDTH, HEIGHT);
        // console.log("coordinates",this.x, this.y)
    }

    draw() {
        this.y = this.y+4; //speed of the ghosts

        //moving towards the center
        if(this.x < WIDTH/2) {this.x = this.x+2;}
        if(this.x > WIDTH/2) {this.x = this.x-2;}

        //growing while getting closer
        this.width = this.width+1.3; 
        this.height = this.height+1.3;

        image(this.image, this.x, this.y, this.width, this.height);
    }

    collision(playerInfo) {
        let obstacleX = Math.floor(this.x + this.width / 2);
        let obstacleY = Math.floor(this.y + this.height / 2);
        // console.log("obstacle coor ", obstacleX, obstacleY)
        // console.log('attack in Y distance: ', obstacleY);
        
        let playerShotX = playerInfo.x;
        let playerShotY = playerInfo.y;
        // console.log("Shoot coord ", "x: ",playerShotX, ", y: ", playerShotY);
        

        let attackLine = Math.floor(this.y + this.height / 2);
        console.log(attackLine);
    
        let hitCount = 0;
        if( attackLine >= 600){
            hitCount += 1;
            // console.log("recibe daño. Hits: ", hitCount);
            background('rgba(255,0,0, 0.20)');
        }

        //player's coordinate with keyboard
        // let playerX = playerInfo.x + playerInfo.width / 2;
        // let playerY = playerInfo.y + playerInfo.height / 2;
        // console.log("obstacle coor ", playerX, playerY)
        
        if (dist(obstacleX, obstacleY, playerShotX, playerShotY) > this.width / 2) {
            console.log('hit?')
            return false;
        } else {
            playerInfo.score += 100;
            
            document.querySelector("h2 span").innerText = playerInfo.score;
            return true;
        }
    }

    attack() {
        // let obstacleX = Math.floor(this.x + this.width / 2);
      

    }


}



