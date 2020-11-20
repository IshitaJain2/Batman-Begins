class Umbrella{ 
    constructor(x,y) 
    { var options={ 
        isStatic:true, 
         } 
      this.image = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png") 
     this.body=Bodies.circle(x,y,50, options);
     this.radius = 50;
     World.add(world, this.body); 
    }

    display() { 
         var umbrellaPos=this.body.position; 
         imageMode(CENTER);
         image(this.image, umbrellaPos.x,umbrellaPos.y,400,400)
            }
            }            