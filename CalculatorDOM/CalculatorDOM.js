function add(){
   let number1 = document.getElementById("number1").value;
   let number2 = document.getElementById("number2").value;
   let c = parseInt(number1) + parseInt(number2)
   document.getElementById("c").innerHTML = c
}
function sub(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let c = parseInt(number1) - parseInt(number2)
    document.getElementById("c").innerHTML = c
 }
 function mul(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let c = parseInt(number1) * parseInt(number2)
    document.getElementById("c").innerHTML = c
 }
 function div(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let c = parseInt(number1) / parseInt(number2)
    document.getElementById("c").innerHTML = c
 }