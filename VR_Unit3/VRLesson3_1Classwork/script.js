window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML
  let cyl = document.querySelector("#cyl");


  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
  cyl.addEventListener("mouseenter", function(){
    this.setAttribute("color","red")
  })
  cyl.onclick = function (){
    cyl.setAttribute("opacity", "0");
    console.log(cyl);
  }
  console.log(cyl);

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
})
