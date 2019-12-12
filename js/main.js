/*var input = document.querySelector("#input");

input.addEventListener('blur',function(){
	console.log("fvewvew"); 
});

*/

console.log("Hola");

var form = document.getElementById("form");

form.addEventListener("blur", function( event ) {
  event.input.style.background = "red";    
}, true);