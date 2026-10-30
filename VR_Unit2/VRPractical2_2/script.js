let car, ball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    car = document.querySelector("#car");
    ball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");
    car.x = 0;
    car.dx = -0.05;
    ball.x = 0;
    ball.dx = 1;
    rocket.x = 2;
    dude.x = 1;
    dude.dx = 0.05;
    loop();
})

function loop(){

    window.requestAnimationFrame(loop);
    car.x += car.dx;
    ball.x += ball.dx;
    rocket.x -= car.dx;
    dude.x += dude.dx;
    car.setAttribute("position", {x: car.x, y:1, z:0});
    ball.setAttribute("rotation", {x: ball.x, y:1, z:0});
    rocket.setAttribute("position", {x:0, y:rocket.x, z:0});
    dude.setAttribute("scale", {x: dude.x, y: dude.x, z:dude.x});
    sun.setAttribute("opacity", ball.x / 1000);
}