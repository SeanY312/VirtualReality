class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    let base = document.createElement("a-box");
    base.setAttribute("color", "#ded697");
    base.setAttribute("width", "2");
    base.setAttribute("depth", "2");
    base.setAttribute("height", "2");
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("color", "#692b27");
    roof.setAttribute("rotation", "270 0 0");
    roof.setAttribute("scale", "2 2 1");
    roof.setAttribute("position", {x:0, y:1.5, z:0});
    this.obj.append(base);
    this.obj.append(roof);
    scene.append(this.obj);
  }
}