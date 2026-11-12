class Ufo{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -0.1;
    this.dr = 10;
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


    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

    this.obj.append(orb);
    this.obj.append(disk);
    this.obj.append(beam);
    this.obj.append(light1top);
    this.obj.append(light1bottom);
    this.obj.append(light2top);
    this.obj.append(light2bottom);
    this.obj.append(light3top);
    this.obj.append(light3bottom);
    this.obj.append(light4top);
    this.obj.append(light4bottom);
    this.obj.append(light5top);
    this.obj.append(light5bottom);
    this.obj.append(light6top);
    this.obj.append(light6bottom);
    this.obj.append(light7top);
    this.obj.append(light7bottom);
    this.obj.append(light8top);
    this.obj.append(light8bottom);





    scene.append(this.obj);
  }

fall(){
  this.y += this.dy;
  this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  this.obj.setAttribute("rotation", {x:0, y:this.dr, z:0});
  if(this.y <= -1){
    this.y = 20;
  }
}
}