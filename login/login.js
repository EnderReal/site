document.getElementById("forgot_button").onclick = function() {
    window.alert("bravo");
}

var admin_name = "admin";
var admin_pass = "admin";

document.getElementById("login").onclick = function() {
   if(document.getElementsByClassName("name")[0].value == admin_name && document.getElementsByClassName("password")[0].value == admin_pass) 
    window.alert("good");
}

document.getElementById('login').addEventListener("keypress", function(event){
    if(event.key == 13){
        event.preventDefault();
        document.getElementsByClassName("submit").onclick;
    }
});


