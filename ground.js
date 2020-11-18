class GROUND {
    constructor(x, y, width, height){
        var options3 = {
            // restitution : 0.75,
            // friction : 1,
            isStatic : true
        }
        this.Mybody = Bodies.rectangle(x, y, width, height, options3);
        Worlds.add(world, this.Mybody);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
    }        
    display(){
        var x = this.Mybody.position.x;
        var y = this.Mybody.position.y;
        push()
        imageMode(CENTER);
        image(this.image, x, y, this.width, this.height);
        pop();
    }
}