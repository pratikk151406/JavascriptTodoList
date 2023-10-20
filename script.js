const input =document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")


function AddTask(){

    if (input.value === ""){
alert("Please enter a task name")
    }else{
        let li= document.createElement("li")
        li.innerHTML=input.value
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
    SavedData()
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        SavedData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        SavedData()
    }

    
},false);
function SavedData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function Showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
Showtask();