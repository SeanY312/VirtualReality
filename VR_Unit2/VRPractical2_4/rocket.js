class Rocket{
  constructor(x,y,z,r,g,b,speed,h,r2,g2,b2){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.red = r;
    this.green = g;
    this.blue = b;
    this.red2 = r2;
    this.green2 = g2;
    this.blue2 = b2;
    this.dy = speed;
    this.r = 0;
    this.dr = 20;
    this.r2 = 0;
    this.dr2 = 3;
    this.up = 1;
    this.height = h;
    let scene = document.querySelector("a-scene");
    let tube = document.createElement("a-cylinder");
    let ring = document.createElement("a-cylinder");
    let nose = document.createElement("a-cone");
    let fin = document.createElement("a-box");
    let fin2 = document.createElement("a-box");
    let fin3 = document.createElement("a-box");
    let fin4 = document.createElement("a-box");
    let fireR = document.createElement("a-cone");
    let fireO = document.createElement("a-cone");
    let fireY = document.createElement("a-cone");
    this.obj.append(tube);
    this.obj.append(ring);
    this.obj.append(nose);
    this.obj.append(fin);
    this.obj.append(fin2);
    this.obj.append(fin3);
    this.obj.append(fin4);
    this.obj.append(fireR);
    // this.obj.append(fireO);
    // this.obj.append(fireY);
    tube.setAttribute("height","4");
    tube.setAttribute("radius","1.5");
    tube.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    ring.setAttribute("height","1");
    ring.setAttribute("radius","1.5");
    ring.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue2})`);
    ring.setAttribute("position", "0 2.5 0");
    nose.setAttribute("radius-bottom", "1.5");
    nose.setAttribute("radius-top","0.25");
    nose.setAttribute("position","0 3.5 0");
    nose.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue2})`);
    fin.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue2})`);
    fin.setAttribute("height","1.5");
    fin.setAttribute("width","0.1");
    fin.setAttribute("position", {x:0, y: -1.5, z:2});
    fin2.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue}2)`);
    fin2.setAttribute("height","1.5");
    fin2.setAttribute("width","0.1");
    fin2.setAttribute("position", {x:0, y:-1.5, z:-2});
    fin3.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue2})`);
    fin3.setAttribute("height","1.5");
    fin3.setAttribute("width","0.1");
    fin3.setAttribute("rotation","0 90 0");
    fin3.setAttribute("position", {x:-2, y:-1.5, z:0});
    fin4.setAttribute("color", `rgb(${this.red2},${this.green2},${this.blue2})`);
    fin4.setAttribute("height","1.5");
    fin4.setAttribute("width","0.1");
    fin4.setAttribute("rotation","0 90 0");
    fin4.setAttribute("position", {x:2, y:-1.5, z:0});
    fireR.setAttribute("opacity", 0.4);
    fireR.setAttribute("radius-bottom","0.1");
    fireR.setAttribute("radius-top","1.5");
    fireR.setAttribute("height","3");
    fireR.setAttribute("color", "orange");
    fireR.setAttribute("position", {x:0, y:-3.5, z:0});
    // fireO.setAttribute("opacity", 0.5);
    // fireO.setAttribute("radius-bottom","0.1");
    // fireO.setAttribute("radius-top","1.25");
    // fireO.setAttribute("height","2");
    // fireO.setAttribute("color", "orange");
    // fireO.setAttribute("position", {x:0, y:-3, z:0});
    // fireY.setAttribute("opacity", 0.5);
    // fireY.setAttribute("radius-bottom","0.1");
    // fireY.setAttribute("radius-top","1");
    // fireY.setAttribute("height","1");
    // fireY.setAttribute("color", "yellow");
    // fireY.setAttribute("position", {x:0, y:-2.5, z:0});

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  launch(){
    if (this.y < 50 && this.up == 1 && this.height == 1){
    this.y += this.dy;
    this.r += this.dr;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
    }else if(this.r2 < 180 && this.height == 1){
      this.r2 += this.dr2;
      this.up = 2;
      this.obj.setAttribute("rotation", {x:this.r2, y:0, z:0});
    }else if(this.height == 1 && this.up == 2){
      this.y -= this.dy;
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }else if(this.height == 2){
      this.y += this.dy;
      this.r += this.dr;
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
      this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
    }
  }


}