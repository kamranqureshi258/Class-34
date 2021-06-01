class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            'stiffness':1,
            "length":250
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          }
    }
}