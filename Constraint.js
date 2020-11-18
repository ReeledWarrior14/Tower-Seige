class CONSTRAINT{
    constructor(a, b){
        var options5 = {
            length : 35,
            stiffness : 0.75,
            bodyA : a,
            pointB : b,
        }   
        this.c = Constraint.create(options5);
        // this.image1 = loadImage('sprites/sling1.png');
        // this.image2 = loadImage('sprites/sling2.png');
        // this.image3 = loadImage('sprites/sling3.png');
        Worlds.add(world, this.c);
    }
    displayConstraint(){
        push();
        // image(this.image1, this.c.pointB.x + 15, this.c.pointB.y);
        // image(this.image2, this.c.pointB.x - 15, this.c.pointB.y);
        // image(this.image3, this.c.pointB.x - 50, this.c.pointB.y, 10, 20);
        // image(this.image3, this.c.bodyA.position.x - 15, this.c.bodyA.position.y - 10, 10, 20);
        // line(this.c.bodyA.position.x, this.c.bodyA.position.y, this.c.pointB.x, this.c.pointB.y);
        stroke('cyan');
        strokeWeight(5);
        line(this.c.bodyA.position.x, this.c.bodyA.position.y, this.c.pointB.x, this.c.pointB.y);
        pop();
    }
}