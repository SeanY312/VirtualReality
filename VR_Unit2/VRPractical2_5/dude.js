class Dude{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.dz = 0.2;
    this.o = 0;
    this.do = 0.01;
    this.red = 0;
    this.dred = 1;

    let dudeTemplate = document.getElementById("dudeTemplate");

    this.obj = dudeTemplate.cloneNode("true");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  jump(){
    this.y += this.dy;
    this.z += this.dz;
    if(this.y < 1 || this.y > 2){
      this.dy *= -1;
    }
    if(this.z < -50 || this.z > 50){
      this.dz *= -1;
    }
    this.red += this.dred;
    if(this.red == 255 || this.red == 0){
      this.dred *= -1;
    }


    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("scale",{x:4,y:4,z:4});
    this.obj.setAttribute("color", `rgb(${this.red},0,112)`);
  }
}