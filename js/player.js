class Player {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 600;
        this.score = 0;
    }

    draw() {
        image(game.playerImage, mouseX-this.width/2, mouseY-this.height/2, this.width, this.height);
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
}