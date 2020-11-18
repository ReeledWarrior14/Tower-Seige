class BIRD extends BOXES{
    constructor(x, y){
        super(x, y, 75, 50);
        this.image = loadImage("sprites/bird.png");
        // this.Bodies3.restitution = 1;
        Matter.Body.setDensity(this.Bodies3, 3);
        this.Bodies3.friction = 7;
    }
    displayBird(){
        push();
        super.display();
        pop();
    }
}

// class BIRD{
//     constructor(x, y, width, height){
//         var optionsRemake4 = {
//             restitution : 0.8,
//             friction : 7,
//             density : 0.75,
//         }
//         this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
//         this.width = width;
//         this.height = height;
//         this.image = loadImage("sprites/bird.png");
//         Worlds.add(world, this.Bodies3);
//     }      

//     displayBird(){
//         var pos = this.Bodies3.position;
//         var angle = this.Bodies3.angle;
//         push();
//         translate(pos.x, pos.y);
//         rotate(angle * 4);
//         imageMode(CENTER);
//         image(this.image, 0, 0, this.width, this.height);
//         pop();
//     }
// }