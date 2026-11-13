let scene;
let mechs = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  // mech = document.getElementById("mech-1");
  for(let i=0; i < 20; i ++){
    let x = rnd(-20,20);
    let y = rnd(10,20);
    let z = rnd(-20,20);
    let mech = new Mech(x,y,z);
    mechs.push(mech);
  }
  loop();
})
function loop(){
  for(let mech of mechs){
    mech.fly();
  }


  window.requestAnimationFrame( loop );
}
