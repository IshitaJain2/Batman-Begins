const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxdrops = 100;
var thunder1,thunder2,thunder3,thunder4,thunderbolt,drops,thunder;
var thunderCreatedFrame=0;
var drops = [];
var rand;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    createCanvas(500, 600);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(250,430);
    if(frameCount % 150 === 0){
         for(var i=0; i<maxdrops; i++){ 
             drops.push(new Drop(random(0,400), random(0,400))); 
            } 
        }
    Engine.run(engine);
    
}

function draw(){
    background(0)
    umbrella.display();
   rand = Math.round(random(1,4));
    if(frameCount% 80===0){
        thunderCreatedFrame=frameCount; 
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1:  thunder.addImage(thunder1);
            break;
             case 2:thunder.addImage(thunder2);
            break;
             case 3:thunder.addImage(thunder3);
            break;
             case 4: thunder.addImage(thunder4);
              break;
              default:break
                           } 
             // new way of applying scale command
         thunder.scale = random(0.3,0.6);
             }

       if(thunderCreatedFrame+ 10 === frameCount && thunder){
         thunder.destroy();
       }      

    for(var i = 0; i<maxdrops; i++){ 
        drops[i].showDrop(); drops[i].updateY() 
    }

     drawSprites();
}   

