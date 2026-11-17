let target,wholetarget,targettemplate,target2;
let targets = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -1;
  wholetarget = document.getElementById("wholetarget");
  targettemplate = document.querySelector("#target");
  let scene = document.querySelector("a-scene");
  for(let i = 0; i < 20; i++){
    let x = rnd(-10,10);
    let z = rnd(-10,10);
    target2 = wholetarget.cloneNode("true");
    target2.a = 0;
    target2.da = -1;
    target2.setAttribute("position", {x: x, y: 0, z:z});
    targets.push(target2);
  }
  scene.append(targets);
  console.log(targets);

  loop();
})

function loop(){
  target.a += target.da;

  wholetarget.setAttribute("rotation",{x:target.a, y:0, z: 0});
  if(target.a <= -90){
    target.da = 0;
  }
  
  for(let target2 of targets){
    target2.a += target2.da;
    target2.setAttribute("rotation",{x:target2.a, y:0, z: 0});
    if(target2.a <= -90){
      target2.da = 0;
    }
  }

  window.requestAnimationFrame( loop );
}