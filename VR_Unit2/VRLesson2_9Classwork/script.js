let maze = [
  "WW-WWWWWWWWWWWWWWWWWWW",
  "W--WWW---------W--W--W",
  "W-------WWWWWW-W--WW-W",
  "WWWWW---W----W-WW----W",
  "W---W---W-W-WW-W---W-W",
  "W-W-WWWWW-W-WW-WWWWW-W",
  "W-W-----W-W--W-----W-W",
  "W-WWWWWWW-WW-WWWW-WW-W",
  "W-------W-WW---------W",
  "W-WWWWWWW-WWWWWW-WWW-W",
  "W--------------------W",
  "WWWWWWWWW-WWWWWWWWWWWW",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "W"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})