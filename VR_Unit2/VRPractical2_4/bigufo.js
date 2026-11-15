class BigUfo{
  constructor(x,y,z,red,green,blue){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.0;
    this.r = 0;
    this.dr = 5;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.obj = document.createElement("a-entity");
    let disk = document.createElement("a-cone");
    let light1bottom = document.createElement("a-cylinder");
    let light2bottom = document.createElement("a-cylinder");
    let light3bottom = document.createElement("a-cylinder");
    let light4bottom = document.createElement("a-cylinder");
    let light5bottom = document.createElement("a-cylinder");
    let light6bottom = document.createElement("a-cylinder");
    let light7bottom = document.createElement("a-cylinder");
    let light8bottom = document.createElement("a-cylinder");
    let spotlight = document.createElement("a-cylinder");
    let rotatingpart = document.createElement("a-entity");
    
    disk.setAttribute("height",0.5);
    disk.setAttribute("radius-bottom", 3);
    disk.setAttribute("radius-top", 2.5);
    disk.setAttribute("color", "black");
    disk.setAttribute("position",{x:0, y:-1,z:0});

    light1bottom.setAttribute("color", "yellow");
    light1bottom.setAttribute("height", 0.01);
    light1bottom.setAttribute("radius", 0.25);
    light1bottom.setAttribute("position", {x:2,y:-1.3,z:0});

    light2bottom.setAttribute("color", "yellow");
    light2bottom.setAttribute("height", 0.01);
    light2bottom.setAttribute("radius", 0.25);
    light2bottom.setAttribute("position", {x:-2,y:-1.3,z:0});
    
    light3bottom.setAttribute("color", "yellow");
    light3bottom.setAttribute("height", 0.01);
    light3bottom.setAttribute("radius", 0.25);
    light3bottom.setAttribute("position", {x:0,y:-1.3,z:2});

    light4bottom.setAttribute("color", "yellow");
    light4bottom.setAttribute("height", 0.01);
    light4bottom.setAttribute("radius", 0.25);
    light4bottom.setAttribute("position", {x:0,y:-1.3,z:-2});

    light5bottom.setAttribute("color", "yellow");
    light5bottom.setAttribute("height", 0.01);
    light5bottom.setAttribute("radius", 0.25);
    light5bottom.setAttribute("position", {x:1.41421356237,y:-1.3,z:1.41421356237});

    light6bottom.setAttribute("color", "yellow");
    light6bottom.setAttribute("height", 0.01);
    light6bottom.setAttribute("radius", 0.25);
    light6bottom.setAttribute("position", {x:-1.41421356237,y:-1.3,z:1.41421356237});

    light7bottom.setAttribute("color", "yellow");
    light7bottom.setAttribute("height", 0.01);
    light7bottom.setAttribute("radius", 0.25);
    light7bottom.setAttribute("position", {x:1.41421356237,y:-1.3,z:-1.41421356237});

    light8bottom.setAttribute("color", "yellow");
    light8bottom.setAttribute("height", 0.01);
    light8bottom.setAttribute("radius", 0.25);
    light8bottom.setAttribute("position", {x:-1.41421356237,y:-1.3,z:-1.41421356237});

    spotlight.setAttribute("color", "white");
    spotlight.setAttribute("height", 0.01);
    spotlight.setAttribute("radius", 1.5);
    spotlight.setAttribute("position", {x:0,y:-1.3,z:0});

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("scale", "50 10 50");
    this.obj.append(disk);
    this.obj.append(spotlight);
    rotatingpart.append(light1bottom);
    rotatingpart.append(light2bottom);
    rotatingpart.append(light3bottom);
    rotatingpart.append(light4bottom);
    rotatingpart.append(light5bottom);
    rotatingpart.append(light6bottom);
    rotatingpart.append(light7bottom);
    rotatingpart.append(light8bottom);
    this.obj.append(rotatingpart);
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
    this.x = rnd(-75,75);
    this.z = rnd(-75,75);
    this.obj.setAttribute("position", {x:this.x, y:20, z:this.z});
  }
}
}