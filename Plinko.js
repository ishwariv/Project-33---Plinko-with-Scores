class Plinko{
    constructor(x,y){
      var options = {
         restitution:0.4,
         isStatic: true
      }
      this.radius = 10;

      this.body = Bodies.circle(x,y,10,options);
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
