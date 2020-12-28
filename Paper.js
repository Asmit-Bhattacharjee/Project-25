class Paper {
    constructor(x, y, radius, angle) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = 20;
      World.add(world, this.body);
      this.image = loadImage("paper-1.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 30, 30);
      pop();
    }
  };