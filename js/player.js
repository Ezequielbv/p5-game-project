class Player {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 600;
        // this.velocity = 10;
        // this.gravity = 0.2;
        this.score = 0;
    }

    draw() {
        image(game.playerImage, mouseX-this.width/2, mouseY-this.height/2, this.width, this.height);
        // image(game.playerImage, this.x, this.y, this.width, this.height);
    }
    
    shootCoorX(){
        let shotX = Math.floor(mouseX);
        this.x = shotX;
        return shotX
    }
    shootCoorY(){
        let shotY = Math.floor(mouseY);
        this.y = shotY;
        return shotY
    }




    // moveUp(){
    //     this.y -= 15;
    //     console.log("this.y")
    // };
    // moveDown(){
    //     this.y += 15;
    //     console.log("key")
    // };
    // moveLeft(){
    //     this.x -= 15;
    //     console.log("key")
    // };
    // moveRight(){
    //     this.x += 15;
    //     console.log("key")
    // };

}



