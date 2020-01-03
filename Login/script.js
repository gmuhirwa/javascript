// Login System

var ourFamily = [

{username: "Germain", password: "Germando10"}, 
{username: "Maureen", password: "Germando10"}, 
{username: "Elsa", password: "Germando10"}, 
{username: "Edsel", password: "Germando10"}
]

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  /*console.log("Your username is: " + username  + "and your password is " + password)*/
  for (i = 0; i < ourFamily; i++) {
    if (username == ourFamily[i].username && password == ourFamily[i].password) {
      console.log(username + "is logged in!!!")
      return // completely stops the function
    }
  }
  console.log("incorrect username or password")
 }

