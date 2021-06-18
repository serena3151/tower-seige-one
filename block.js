class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution': 0.4,
          'friction':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
     //  translate(pos.x, pos.y);
        var angle = this.body.angle;
        var pos= this.body.position;
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        pop();
      }
}
