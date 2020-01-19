// DOM manipulation --- Event Handling
document.addEventListener("DOMContentLoaded", function (event) {

 function sayHello (event) {
 /* console.log(this);*/
 console.log(event);
 this.textContent = "Said it!";
 var name = document.getElementById("name").value;
 var message = "<h2>Hello " + name + "!</h2>"

 document.getElementById("content").textContent = message;
 document.getElementById("content").innerHTML = message;

if (name === "student") {
  var title = document.querySelector("#title").textContent;
  title += " & Lovin' it!";
  document.querySelector("h1").textContent = title;  // h1 title is the only one can replace #title css!
 }
}

// Unobstrusive event binding
document.querySelector("button").addEventListener("click", sayHello);
document.querySelector("body").addEventListener("mousemove",
  function (event) {
  	if (event.shiftKey === true ) {
       console.log("x: " + event.clientX);
     console.log("y: " + event.clientY);
  	}
     
     }
    );
  }
);



/*// Action listner to a button
document.querySelector("button").onclick = sayHello;
*/