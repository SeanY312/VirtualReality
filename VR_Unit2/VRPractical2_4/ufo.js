class Ufo{
  constructor(x,y,z,red,green,blue){
    let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -0.1;
    this.dx = (rnd(10,30) - 20) / 10;
    this.dz = (rnd(10,30) - 20) / 10;
    this.r = 0;
    this.dr = 5;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.time = 0;
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
    let alieneye1 = document.createElement("a-sphere");
    let alieneyepupil1 = document.createElement("a-sphere");
    let alieneye2 = document.createElement("a-sphere");
    let alieneyepupil2 = document.createElement("a-sphere");
    let alientoparm1 = document.createElement("a-cylinder");
    let alienbottomarm1 = document.createElement("a-cylinder");
    let alientoparm2 = document.createElement("a-cylinder");
    let alienbottomarm2 = document.createElement("a-cylinder");
    let chair = document.createElement("a-entity");
    let seat = document.createElement("a-box");
    let back = document.createElement("a-box");
    let headrest = document.createElement("a-box");
    let leverbase1 = document.createElement("a-box");
    let leverrod1 = document.createElement("a-cylinder");
    let levertop1 = document.createElement("a-sphere");
    let leverbase2 = document.createElement("a-box");
    let leverrod2 = document.createElement("a-cylinder");
    let levertop2 = document.createElement("a-sphere");

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
    beam.setAttribute("position", {x:0, y:-3.3, z:0});
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

    alienhead.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienhead.setAttribute("radius","0.5");
    alienhead.setAttribute("position", {x: 0, y: 1, z:0});
    alienhead.setAttribute("src","#skin");

    alienshoulder1.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienshoulder1.setAttribute("position", "-0.35 0.5 0");
    alienshoulder1.setAttribute("rotation", "270 0 0");
    alienshoulder1.setAttribute("radius","0.15");
    alienshoulder1.setAttribute("scale", "1 1.428 1");
    alienshoulder1.setAttribute("phi-start","0");
    alienshoulder1.setAttribute("phi-length","180");
    alienshoulder1.setAttribute("src","#skin");

    alienshoulder2.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienshoulder2.setAttribute("position", "0.35 0.5 0");
    alienshoulder2.setAttribute("rotation", "270 0 0");
    alienshoulder2.setAttribute("radius","0.15");
    alienshoulder2.setAttribute("scale", "1 1.428 1");
    alienshoulder2.setAttribute("phi-start","0");
    alienshoulder2.setAttribute("phi-length","180");
    alienshoulder2.setAttribute("src","#skin");

    alienbody.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienbody.setAttribute("depth","0.5");
    alienbody.setAttribute("height","1.25");
    alienbody.setAttribute("position",{x:0,y:-0.125, z:0});
    alienbody.setAttribute("src","#skin");

    alieneye1.setAttribute("color","red");
    alieneye1.setAttribute("position", {x:0.3, y:1.15, z:0.3});
    alieneye1.setAttribute("radius","0.2");

    alieneyepupil1.setAttribute("color", "black");
    alieneyepupil1.setAttribute("position", {x:0.3, y:1.15, z:0.5});
    alieneyepupil1.setAttribute("radius","0.1");

    alieneye2.setAttribute("color","red");
    alieneye2.setAttribute("position", {x:-0.3, y:1.15, z:0.3});
    alieneye2.setAttribute("radius","0.2");

    alieneyepupil2.setAttribute("color", "black");
    alieneyepupil2.setAttribute("position", {x:-0.3, y:1.15, z:0.5});
    alieneyepupil2.setAttribute("radius","0.1");

    alientoparm1.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alientoparm1.setAttribute("src","#skin");
    alientoparm1.setAttribute("radius","0.1");
    alientoparm1.setAttribute("position","0.75 0 0.2");
    alientoparm1.setAttribute("height","0.8");
    alientoparm1.setAttribute("rotation", "0 -45 45");
    
    alienbottomarm1.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienbottomarm1.setAttribute("src","#skin");
    alienbottomarm1.setAttribute("radius","0.1");
    alienbottomarm1.setAttribute("position","0.7 -0.3 0.75");
    alienbottomarm1.setAttribute("height","1");
    alienbottomarm1.setAttribute("rotation", "90 0 45");

    alientoparm2.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alientoparm2.setAttribute("src","#skin");
    alientoparm2.setAttribute("radius","0.1");
    alientoparm2.setAttribute("position","-0.75 0 0.2");
    alientoparm2.setAttribute("height","0.8");
    alientoparm2.setAttribute("rotation", "0 45 -45");
    
    alienbottomarm2.setAttribute("color", `rgb(${this.red},${this.green},${this.blue})`);
    alienbottomarm2.setAttribute("src","#skin");
    alienbottomarm2.setAttribute("radius","0.1");
    alienbottomarm2.setAttribute("position","-0.7 -0.3 0.75");
    alienbottomarm2.setAttribute("height","1");
    alienbottomarm2.setAttribute("rotation", "90 90 45");

    back.setAttribute("color","black");
    back.setAttribute("height","1.5");
    back.setAttribute("width","1");
    back.setAttribute("depth","0.25");
    back.setAttribute("position",{x:0 , y:-0.5 , z:0 });
    
    seat.setAttribute("color","black");
    seat.setAttribute("height","0.5");
    seat.setAttribute("width","0.75");
    seat.setAttribute("depth","0.25");
    seat.setAttribute("position",{x:0 , y:0.5 , z:0 });

    headrest.setAttribute("color","black");
    headrest.setAttribute("height","0.25");
    headrest.setAttribute("width","1");
    headrest.setAttribute("depth","0.75");
    headrest.setAttribute("position",{x:0 , y:-1.25 , z:0.25 });

    chair.setAttribute("position",{x:0 , y:0, z:-0.75});

    leverbase1.setAttribute("color", "pink");
    leverbase1.setAttribute("width","0.2");
    leverbase1.setAttribute("height","0.05");
    leverbase1.setAttribute("depth","0.2");
    leverbase1.setAttribute("position","-0.25 -0.7 1");

    leverrod1.setAttribute("color","gray");
    leverrod1.setAttribute("radius","0.05");
    leverrod1.setAttribute("height","0.5");
    leverrod1.setAttribute("position","-0.25 -0.425 1");

    levertop1.setAttribute("color","red");
    levertop1.setAttribute("radius","0.1");
    levertop1.setAttribute("position","-0.25 -0.17 1");

    leverbase2.setAttribute("color", "pink");
    leverbase2.setAttribute("width","0.2");
    leverbase2.setAttribute("height","0.05");
    leverbase2.setAttribute("depth","0.2");
    leverbase2.setAttribute("position","0.25 -0.7 1");

    leverrod2.setAttribute("color","gray");
    leverrod2.setAttribute("radius","0.05");
    leverrod2.setAttribute("height","0.5");
    leverrod2.setAttribute("position","0.25 -0.425 1");

    levertop2.setAttribute("color","red");
    levertop2.setAttribute("radius","0.1");
    levertop2.setAttribute("position","0.25 -0.17 1");


    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.append(orb);
    this.obj.append(disk);
    this.obj.append(beam);
    alien.append(alienhead);
    alien.append(alienshoulder1);
    alien.append(alienshoulder2);
    alien.append(alienbody);
    alien.append(alieneye1);
    alien.append(alieneyepupil1);
    alien.append(alieneye2);
    alien.append(alieneyepupil2);
    alien.append(alientoparm1);
    alien.append(alienbottomarm1);
    alien.append(alientoparm2);
    alien.append(alienbottomarm2);
    this.obj.append(alien);
    this.obj.append(leverbase1);
    this.obj.append(leverrod1);
    this.obj.append(levertop1);
    this.obj.append(leverbase2);
    this.obj.append(leverrod2);
    this.obj.append(levertop2);
    rotatingpart.append(light1bottom);
    rotatingpart.append(light2bottom);
    rotatingpart.append(light3bottom);
    rotatingpart.append(light4bottom);
    rotatingpart.append(light5bottom);
    rotatingpart.append(light6bottom);
    rotatingpart.append(light7bottom);
    rotatingpart.append(light8bottom);
    rotatingpart.append(light1top);
    rotatingpart.append(light2top);
    rotatingpart.append(light3top);
    rotatingpart.append(light4top);
    rotatingpart.append(light5top);
    rotatingpart.append(light6top);
    rotatingpart.append(light7top);
    rotatingpart.append(light8top);
    this.obj.append(rotatingpart);
    this.c = rotatingpart;
    
    chair.append(seat);
    chair.append(back);
    chair.append(headrest);
    this.obj.append(chair);

    scene.append(this.obj);
  }

fall(){
  this.y += this.dy;
  this.x += this.dx;
  this.z += this.dz;
  this.r += this.dr;
  this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  this.c.setAttribute("rotation", {x:0, y:this.r, z:0});
  this.time += 1;
  if(this.y <= -1){
    this.y = 20;
    this.x = rnd(-75,75);
    this.z = rnd(-75,75);
    this.obj.setAttribute("position", {x:this.x, y:20, z:this.z});
  }
  if(this.time % 5000){
    this.dx = (rnd(10,30) - 20) / 10;
    this.dz = (rnd(10,30) - 20) / 10;
  }
  if(this.x < -75 || this.x > 75){
    this.dx *= -1;
  }
  if(this.y < -75 || this.y > 75){
    this.dy *= -1;
  }
}
}