
var n = prompt("1. Add\n 2. Subtract\n 3. Multiply\n 4. Divide\n");

var x = prompt('Enter First Number');
var y = prompt('Enter Second Number');
x = parseInt(x);
y = parseInt(y);
if (n == 1){
    function add_function(x,y){return x + y};
    z = x + y;
    alert(z);
}
else if (n == 2){
    function subtract_function(x,y){return x - y};
    z = x - y;
    alert(z);
}
else if (n == 3){
    function mutiply_function(x,y){return x * y};
    z = x * y;
    alert(z);
}
else if (n == 4){
    function divide_function(x,y){return x / y};
    z = x / y;
    alert(z);
}
