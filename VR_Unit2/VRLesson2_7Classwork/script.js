let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dude;
let dudes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i < 50; i++){
    let x = rnd(-50,50);
    let y = rnd(2,5);
    let z = rnd(-50,50);
    let speedz = rnd(1, 10) / 10;
    let speedy = rnd(1, 10) / 10;
    dude = new Dude(x,y,z,speedz,speedy);
    dudes.push(dude);
  }
  
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let dude of dudes){
    dude.jump();
  }
  
  window.requestAnimationFrame( loop );
}