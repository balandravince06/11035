function todoList(){
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoInput").value = "";
    newItem.addEventListener('dblclick', function(){
        newItem.style.textDecoration = "red line-through";
        newItem.style.color = "red";
        })
        newItem.addEventListener('click', function(){
            newItem.style.textDecoration = "none";
            newItem.style.color = "";
            })
if(item === ""){
    alert("Please input your to do list.");
}
else{
document.getElementById("todoList").appendChild(newItem)
let a = document.createElement('a');
a.textContent="delete";
a.href="javascript:void(0)";
a.className="remove";
newItem.appendChild(a);
a.addEventListener('click', function(){
a.textContent = "";
newItem.parentNode.removeChild(newItem);
})
}
let btn = document.querySelector('ul');
btn.addEventListener('click', function(e){
    var newItem = document.getElementById("li");
    var newItem = e.target.parentNode;
    newItem.removeChild(text); 
})
}

