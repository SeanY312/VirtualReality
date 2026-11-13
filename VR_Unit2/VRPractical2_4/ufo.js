class Ufo{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -0.1;
    this.r = 0;
    this.dr = 5;
    this.obj = document.createElement("a-entity");
    let orb = document.createElement("a-sphere");
    let disk = document.createElement("a-cone");
    let beam = document.createElement("a-cone");
    let light1top = document.createElement("a-cylinder");
    let light1bottom = document.createElement("a-cylinder");
    let light2top = document.createElement("a-cylinder");
    let light2bottom = document.createElement("a-cylinder");
    let light3top = document.createElement("a-cylinder");
    let light3bottom = document.createElement("a-cylinder");
    let light4top = document.createElement("a-cylinder");
    let light4bottom = document.createElement("a-cylinder");
    let light5top = document.createElement("a-cylinder");
    let light5bottom = document.createElement("a-cylinder");
    let light6top = document.createElement("a-cylinder");
    let light6bottom = document.createElement("a-cylinder");
    let light7top = document.createElement("a-cylinder");
    let light7bottom = document.createElement("a-cylinder");
    let light8top = document.createElement("a-cylinder");
    let light8bottom = document.createElement("a-cylinder");
    let rotatingpart = document.createElement("a-entity");
    let alien = document.createElement("a-entity");
    let alienhead = document.createElement("a-sphere");
    let alienshoulder1 = document.createElement("a-sphere");
    let alienshoulder2 = document.createElement("a-sphere");
    let alienbody = document.createElement("a-box");

    orb.setAttribute("color", "lightblue");
    orb.setAttribute("radius", 1.5);
    orb.setAttribute("opacity", 0.6);
    orb.setAttribute("theta-start",0);
    orb.setAttribute("theta-length",140);
    
    disk.setAttribute("height",0.5);
    disk.setAttribute("radius-bottom", 3);
    disk.setAttribute("radius-top", 2.5);
    disk.setAttribute("color", "black");
    disk.setAttribute("position",{x:0, y:-1,z:0});

    beam.setAttribute("height", 5);
    beam.setAttribute("color", "green");
    beam.setAttribute("opacity", 0.6);
    beam.setAttribute("position", {x:0, y:-3, z:0});
    beam.setAttribute("radius-bottom", 5);
    beam.setAttribute("radius-top", 0.75);

    light1top.setAttribute("color", "yellow");
    light1top.setAttribute("height", 0.01);
    light1top.setAttribute("radius", 0.25);
    light1top.setAttribute("position", {x:2,y:-0.745,z:0});

    light2top.setAttribute("color", "yellow");
    light2top.setAttribute("height", 0.01);
    light2top.setAttribute("radius", 0.25);
    light2top.setAttribute("position", {x:-2,y:-0.745,z:0});

    light3top.setAttribute("color", "yellow");
    light3top.setAttribute("height", 0.01);
    light3top.setAttribute("radius", 0.25);
    light3top.setAttribute("position", {x:0,y:-0.745,z:2});

    light4top.setAttribute("color", "yellow");
    light4top.setAttribute("height", 0.01);
    light4top.setAttribute("radius", 0.25);
    light4top.setAttribute("position", {x:0,y:-0.745,z:-2});

    light5top.setAttribute("color", "yellow");
    light5top.setAttribute("height", 0.01);
    light5top.setAttribute("radius", 0.25);
    light5top.setAttribute("position", {x:1.41421356237,y:-0.745,z:1.41421356237});

    light6top.setAttribute("color", "yellow");
    light6top.setAttribute("height", 0.01);
    light6top.setAttribute("radius", 0.25);
    light6top.setAttribute("position", {x:-1.41421356237,y:-0.745,z:1.41421356237});

    light7top.setAttribute("color", "yellow");
    light7top.setAttribute("height", 0.01);
    light7top.setAttribute("radius", 0.25);
    light7top.setAttribute("position", {x:1.41421356237,y:-0.745,z:-1.41421356237});

    light8top.setAttribute("color", "yellow");
    light8top.setAttribute("height", 0.01);
    light8top.setAttribute("radius", 0.25);
    light8top.setAttribute("position", {x:-1.41421356237,y:-0.745,z:-1.41421356237});

    light1bottom.setAttribute("color", "yellow");
    light1bottom.setAttribute("height", 0.01);
    light1bottom.setAttribute("radius", 0.25);
    light1bottom.setAttribute("position", {x:2,y:-1.255,z:0});

    light2bottom.setAttribute("color", "yellow");
    light2bottom.setAttribute("height", 0.01);
    light2bottom.setAttribute("radius", 0.25);
    light2bottom.setAttribute("position", {x:-2,y:-1.255,z:0});
    
    light3bottom.setAttribute("color", "yellow");
    light3bottom.setAttribute("height", 0.01);
    light3bottom.setAttribute("radius", 0.25);
    light3bottom.setAttribute("position", {x:0,y:-1.255,z:2});

    light4bottom.setAttribute("color", "yellow");
    light4bottom.setAttribute("height", 0.01);
    light4bottom.setAttribute("radius", 0.25);
    light4bottom.setAttribute("position", {x:0,y:-1.255,z:-2});

    light5bottom.setAttribute("color", "yellow");
    light5bottom.setAttribute("height", 0.01);
    light5bottom.setAttribute("radius", 0.25);
    light5bottom.setAttribute("position", {x:1.41421356237,y:-1.255,z:1.41421356237});

    light6bottom.setAttribute("color", "yellow");
    light6bottom.setAttribute("height", 0.01);
    light6bottom.setAttribute("radius", 0.25);
    light6bottom.setAttribute("position", {x:-1.41421356237,y:-1.255,z:1.41421356237});

    light7bottom.setAttribute("color", "yellow");
    light7bottom.setAttribute("height", 0.01);
    light7bottom.setAttribute("radius", 0.25);
    light7bottom.setAttribute("position", {x:1.41421356237,y:-1.255,z:-1.41421356237});

    light8bottom.setAttribute("color", "yellow");
    light8bottom.setAttribute("height", 0.01);
    light8bottom.setAttribute("radius", 0.25);
    light8bottom.setAttribute("position", {x:-1.41421356237,y:-1.255,z:-1.41421356237});



    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

    this.obj.append(orb);
    this.obj.append(disk);
    this.obj.append(beam);
    this.obj.append(light1top);
    // this.obj.append(light1bottom);
    this.obj.append(light2top);
    // this.obj.append(light2bottom);
    this.obj.append(light3top);
    // this.obj.append(light3bottom);
    this.obj.append(light4top);
    // this.obj.append(light4bottom);
    this.obj.append(light5top);
    // this.obj.append(light5bottom);
    this.obj.append(light6top);
    // this.obj.append(light6bottom);
    this.obj.append(light7top);
    // this.obj.append(light7bottom);
    this.obj.append(light8top);
    // this.obj.append(light8bottom);
    this.obj.append(alien);
    rotatingpart.append(light1bottom);
    rotatingpart.append(light2bottom);
    rotatingpart.append(light3bottom);
    rotatingpart.append(light4bottom);
    rotatingpart.append(light5bottom);
    rotatingpart.append(light6bottom);
    rotatingpart.append(light7bottom);
    rotatingpart.append(light8bottom);
    this.obj.append(rotatingpart);

    // <a-box position="0 -0.5 0" color="black" height="1.5" width="1" depth="0.25"></a-box>
    //       <a-box position="0 0.5 0" color="black" height="0.5" width="0.75" depth="0.25"></a-box>
    //       <a-box position="0 -1.25 0.25" color="black" height="0.25" depth="0.75"></a-box>
    this.c = rotatingpart;

    scene.append(this.obj);
  }

fall(){
  this.y += this.dy;
  this.r += this.dr;
  this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  this.c.setAttribute("rotation", {x:0, y:this.r, z:0});
  if(this.y <= -1){
    this.y = 20;
  }
}
}