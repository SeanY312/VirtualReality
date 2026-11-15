let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene,rocket,ufo,bigufo,rocket2;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let i = 0; i < 50; i++){
    let x = rnd(-75,75);
    let y = rnd(5,20);
    let z = rnd(-75,75);
    let speed = rnd(1,20) / 10;
    let r = rnd(0,255);
    let g = rnd(0,255);
    let b = rnd(0,255);
    let r2 = rnd(0,255);
    let g2 = rnd(0,255);
    let b2 = rnd(0,255);
    let h = rnd(1,3);
    rocket = new Rocket(x,y,z,r,g,b,speed,h,r2,g2,b2);
    rockets.push(rocket);
    ufo = new Ufo(x - 2, y, z - 2,r,g,b);
    ufos.push(ufo);
  }
  bigufo = new BigUfo(0, 100, 0,0,255,0,0);
  // ufo2 = new Ufo(-10,3,0,64,64,128);
  // rocket2 = new Rocket(-10,3,0,255,255,255,0,1,255,0,0);

  loop();
})

function loop(){
  for(rocket of rockets){
    rocket.launch();
  }
  for(ufo of ufos){
    ufo.fall();
  }
  bigufo.fall();

  window.requestAnimationFrame( loop );
}
