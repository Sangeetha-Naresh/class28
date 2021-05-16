class Slingshot
{
    constructor(body1, point2)
    {
        var choptions=
        {
            bodyA: body1,
            pointB: point2,
            stiffness:0.04,
            length:10
        }
       // this.pointB=point2;
        this.ch=Constraint.create(choptions);
        World.add(world,this.ch);
    }
    fly()
    {
        this.ch.bodyA=null;
    }

    display()
    {
        if( this.ch.bodyA)
        {
            var pointA=this.ch.bodyA.position;
          //  var pointB=this.pointB;
          //  line(pointA.x, pointA.y,pointB.x,pointB.y);


        line(pointA.x, pointA.y,this.ch.pointB.x,this.ch.pointB.y);

        }
        
    }
}