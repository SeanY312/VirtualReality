class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.2;
    this.r = 0;
    this.dr = 20;
    let scene = document.querySelector("a-scene");
    let tube = document.createElement("a-cylinder");
    let nose = document.createElement("a-cone");
    let fin = document.createElement("a-box");
    let fin2 = document.createElement("a-box");
    let fin3 = document.createElement("a-box");
    let fin4 = document.createElement("a-box");
    let fireR = document.createElement("a-cone");
    let fireO = document.createElement("a-cone");
    let fireY = document.createElement("a-cone");
    this.obj.append(tube);
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
    tube.setAttribute("color","green");
    nose.setAttribute("radius-bottom", "1.5");
    nose.setAttribute("radius-top","0.25");
    nose.setAttribute("position","0 2.5 0");
    nose.setAttribute("color","green");
    fin.setAttribute("color", "blue");
    fin.setAttribute("height","1.5");
    fin.setAttribute("width","0.1");
    fin.setAttribute("position", {x:0, y: -1.5, z:2});
    fin2.setAttribute("color", "blue");
    fin2.setAttribute("height","1.5");
    fin2.setAttribute("width","0.1");
    fin2.setAttribute("position", {x:0, y:-1.5, z:-2});
    fin3.setAttribute("color", "blue");
    fin3.setAttribute("height","1.5");
    fin3.setAttribute("width","0.1");
    fin3.setAttribute("rotation","0 90 0");
    fin3.setAttribute("position", {x:-2, y:-1.5, z:0});
    fin4.setAttribute("color", "blue");
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
    this.y += this.dy;
    this.r += this.dr;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r, z:0});
  }


}