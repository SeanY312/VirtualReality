window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  let dodec = document.createElement("a-dodecahedron");
  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dodec.setAttribute("position", "0 2 -2" );
  dodec.setAttribute("color", "green");


  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.append(dodec);


  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */
 for(let i=0; i <= 3; i++){
  let dodec2 = document.createElement("a-dodecahedron");
  let x = Math.random() - 5;
  let y = Math.random() - 5;
  let z = Math.random() - 5;
  let color1 = "#" + Math.random() * 100000;
  console.log(color1);
  dodec2.setAttribute("position", "x y z");
  dodec2.setAttribute("color", "color1");
  scene.append(dodec2);
 }
  
})