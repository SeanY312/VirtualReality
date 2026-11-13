class Mech{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    let mechTemplate = document.querySelector("#mech-1");
    this.obj = mechTemplate.cloneNode("True");
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }
}