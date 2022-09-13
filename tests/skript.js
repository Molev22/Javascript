let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
    let result = 0;
    
    let a1 = document.getElementById("q1").value;
    if (a1 === "7") {
        result++;
    }

    let a2 = document.getElementById("q2").value;
    if (a2 === "8") {
        result++;
    }
    let a3 = document.getElementById("q3").value;
    if (a3 === "0,5") {
        result++;
    } if (a3 === "0.5") {
        result++;
    }
    let a4 = document.getElementById("q4").value;
    if (a4 === "-2") {
        result++;
    }
    let a5 = document.getElementById("q5").value;
    if (a5 === "18") {
        result++;
    }

 alert ("Количество правельних ответов: " + result);

}
