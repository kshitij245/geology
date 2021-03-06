class Rubber {
    constructor(x, y,radius) {
      var options = {
          
          'friction':5,
          'density':1.0,
          'isStatic':false,
          'restitution':0.3,
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      
      fill("blue");
      circle(0, 0, this.radius);
      pop();
    }
  };
