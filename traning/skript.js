alert ("Hello, lets check your way");

let button = document.getElementById("answers");

button.addEventListener("click", questResults);

function questResults () {
    let result = "";
    
    let a1 = document.getElementById("a1").value;
    if (a1 === "good"){
        result = "you are in a right way"; 
    } else {
         result = "try to change something";
    } 

    alert (result);
}


