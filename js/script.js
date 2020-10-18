
function sayHowdy () {
  const name = document.getElementById("name").value;

  const message = "Howdy there " + name + " welcome to WebWork!";

 document.getElementById("content").textContent = message
};