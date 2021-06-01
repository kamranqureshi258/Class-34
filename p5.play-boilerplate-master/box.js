class Box{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'density':1,
            'friction':1
        }
        this.body=Bodies.rectangle(x,y,70,70,options);
        World.add(world,this.body);
    }
    display(){
        var  pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,70,70);
        pop()
    }
}