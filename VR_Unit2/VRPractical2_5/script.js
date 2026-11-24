/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let wholemaze,dude;
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

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  wholemaze = document.createElement("a-entity");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let col = row.split()
    for(let c = 0; c < row.length; c++){
      let char = row[c];
      if(char == "W"){
        let wall = new Wall(c,r);
        wholemaze.append(wall);
      }
  wholemaze.setAttribute("position", "-18 0 -20");
  dude = new Dude(0, 0, -2);
  scene.append(dude);
  scene.append(wholemaze);
  // wholerotate.append(rotatecenter);
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

}})