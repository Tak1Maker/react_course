let name = document.getElementById("name");
name.addEventListener("input", function(e) {


  document.getElementById("res-name").innerText = e.target.value;
});

let gender = document.getElementById("gender");

gender.addEventListener("change", function(e) {

  document.getElementById("res-gender").innerText = e.target.value;
});

let result = document.getElementById("result");

result.addEventListener("mousemove", function(e) {

  document.getElementById("mouse-x").innerText = e.offsetX;
  document.getElementById("mouse-y").innerText = e.offsetY;
});
