class Stone{
    constructor(x,y){
      var options = {
        restitution:0.8,
        friction:0.9,
        density:12
      }
      this.body = Bodies.rectangle(this.x,this.y,50,50,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }
}