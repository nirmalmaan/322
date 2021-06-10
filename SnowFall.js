class Fall{
    constructor(x,y,r){
        var options ={ 
            restitution: 0.4 }
        
        this.body = Bodies.rectangle(x,y,50,50,options);   
        this.image = loadImage("snow4.webp")
        this.width = 50;
        this.height =50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
}