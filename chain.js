class Chain{
    constructor (bodyA,bodyB){
        var options={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.04,
         length:100
         }
         this.chain=Constraint.create(options)
         World.add(world,this.chain)
    }

strokeWeight(4)
line(100,80,300,280)




    
}