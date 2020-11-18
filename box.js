class BOXES{
    constructor(x, y, width, height){
        var optionsRemake4 = {
            restitution : 0.8,
            friction : 1,
            density : 0.75,
        }
        this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/wood1.png");
        Worlds.add(world, this.Bodies3);
    }      

    display(){
        var pos = this.Bodies3.position;
        var angle = this.Bodies3.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle * 4);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}

// class BOXES{
//     constructor(x, y, width, height){
//         var optionsRemake4 = {
//             restitution : 0.75,
//             friction : 1,
//             density : 1,
//         }
//         this.Bodies3 = Bodies.rectangle(x, y, width, height, optionsRemake4);
//         this.width = width;
//         this.height = height;
//         Worlds.add(world, this.Bodies3);
//     }      

//     display(){
//         var pos = this.Bodies3.position;
//         var angle = this.Bodies3.angle;
//         push();
//         translate(pos.x, pos.y);
//         rotate(angle * 4);
//         rectMode(CENTER);
//         rect(0, 0, this.width, this.height);
//         pop();
//     }
// }