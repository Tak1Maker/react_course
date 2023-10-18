 let parentClicks = 0;
 let childClicks = 0;

 let parent = document.getElementById("parent");
 parent.addEventListener("click", function() {


   document.getElementById("parent-count").innerText = (++parentClicks) + '';

 });

 let child = document.getElementById("child")
 child.addEventListener("click", function(e) {
   console.log("OUT")
   e.preventDefault();
   e.stopPropagation();
   let child = document.getElementById("child-count").innerText = (++childClicks) + '';

 });
