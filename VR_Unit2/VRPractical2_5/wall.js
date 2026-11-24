class Wall{
  constructor(x,z){
    this.x = x;
    this.z = z;
    let scene = document.querySelector("a-scene");

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position", {x:this.x * 2, y:2, z:this.z * 2});
    this.obj.setAttribute("src", "#wall");
    this.obj.setAttribute("repeat", "2 2 2");
    this.obj.setAttribute("width", 2);
    this.obj.setAttribute("depth", 2);
    this.obj.setAttribute("height", 4);
    wholemaze.append(this.obj);
  }
}