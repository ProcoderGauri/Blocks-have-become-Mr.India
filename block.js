class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :3,
            isStatic:false
           
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add( world, this.body);
        this.visible = 255
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
          if (this.body.speed>3) {
            World.remove(world,this.body);
            this.visible= this.visible- 3;
            
            
          }   
        
        
        else{
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
      }
}