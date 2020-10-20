
function sayHowdy () {
  const name = document.getElementById("name").value;

  const message = "howdy there " + name + " welcome to WebWork!";
// reaches out to the content div inside index.html and displays the message with variable input from the button
 document.getElementById("content").textContent = message

if (name === "Jake") {
  const x = 'wee'
const title = document.querySelector("#title").textContent;
title += x;
  document.querySelector("#title").textContent = title;
}
}