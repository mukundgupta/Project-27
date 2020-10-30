class Bob {
    constructor(x,y,diameter){
  
        var options = {
            isStatic: false,
            restitution: 0.5,
        }
        this.diameter = diameter
        this.body = Bodies.circle(x,y,diameter,options)
        World.add(world, this.body);
   
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.diameter,this.diameter)
        pop();
    }
  }