function calc() {
    const num1 =parseFloat (document.getElementById('num1') .value);
    const num2 =parseFloat (document.getElementById('num2') .value);
    const oper = document.getElementById('operators') .value;
    const result= document.getElementById("success");
    const validation= document.getElementById("wrong");

    if (oper == "+") {
        result.innerText = num1 + num2;
    }else if (oper == "-") {
        result.innerText = num1-num2;
    }else if (oper == "*") {
        result.innerText = num1*num2;
    }else if(oper == "/"){
        result.innerText = num1/num2;
    }
    
    // Error

    function error(massage) {
        result.style.display = "none";
        validation.classList.remove("d-none");
        validation.innerHTML =  massage;
    }

   if(num2 == 0 ){
        error("Error: Cannot divide by zero");
    } else if(!Number(num1) || !Number(num2)){
        error("Error: Enter Valid Number");
    } else{
        result.style.display = "block"
        validation.style.display = "none";
    }

}