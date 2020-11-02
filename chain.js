class Chain
{
    constructor(BodyA,BodyB,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
         var properties={bodyA:BodyA,bodyB:BodyB,pointB:{x:this.offsetX,y:this.offsetY},stiffness:1,length:500}
         this.cha=constraint.create(properties);

         World.add(world,this.cha);
    }
    display()
    {
        var pointA = this.cha.bodyA.position;
        var pointB = this.cha.bodyB.position;

        stroke ("white");
        line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}