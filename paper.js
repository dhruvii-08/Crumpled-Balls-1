class Paper {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      circleMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      circle(this.circle,0, 0, this.width, this.height);
    }
  };
  