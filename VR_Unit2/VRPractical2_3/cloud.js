class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let sphere1 = document.createElement("a-sphere");
    let sphere2 = document.createElement("a-sphere");
    let sphere3 = document.createElement("a-sphere");
    sphere1.setAttribute("position", {x:0, y:0, z:0});
    sphere1.setAttribute("radius", "1.25");
    sphere2.setAttribute("position", {x:0, y:0, z:1.5});
    sphere2.setAttribute("radius", "1.5");
    sphere3.setAttribute("position", {x:2, y:0, z:2});
    sphere3.setAttribute("radius", "1.75");
    
    this.obj.append(sphere1);
    this.obj.append(sphere2);
    this.obj.append(sphere3);
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
  }
}