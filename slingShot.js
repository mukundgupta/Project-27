class SlingShot{
    constructor(body1, body2,offsetX,offsetY){
        var options = {
            bodyA: body1,
            bodyB:body2,
            stiffness: 0.9,
            length: 200,
            
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
        strokeWeight(4);
        stroke("yellow")
        fill("yellow")
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    
}
    
}