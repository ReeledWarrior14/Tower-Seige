class BOX extends BOXES{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.image = loadImage("sprites/wood1.png");
        this.Bodies3.visibility = 255;
        this.score = 0;
    }
    display(){
        push()
        // console.log(this.Bodies3.speed);
        pop();

        if (this.Bodies3.speed >= 7){
            Worlds.remove(world, this.Bodies3);
            push();
            if(this.Bodies3.visibility > 0){
                this.Bodies3.visibility -= 5;
            }
            this.score = 250 - this.Bodies3.visibility;
            tint(255, this.Bodies3.visibility); 
            super.display();
            pop();
            // if (this.Bodies3.visibility <= 200) {
            //     Worlds.remove(world, this.Bodies3);
            // }
            // setTimeout(() => {
            //     Worlds.remove(world, this.Bodies3);
            //   }, 5000);
        }
        else {
            // tint(255, this.Bodies3.visibility);
            super.display();
        }
    }
}