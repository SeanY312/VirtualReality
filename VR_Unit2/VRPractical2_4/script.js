let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene,rocket,ufo;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < 100; i++){
    let x = rnd(-40,40);
    let y = rnd(5,20);
    let z = rnd(-40,40);
    rocket = new Rocket(x,y,z);
    rockets.push(rocket);
    ufo = new Ufo(x - 2, 3, z - 2);
    ufos.push(ufo);
  }

  loop();
})

function loop(){
  for(rocket of rockets){
    rocket.launch();
  }
  for(ufo of ufos){
    ufo.fall();
  }

  window.requestAnimationFrame( loop );
}
