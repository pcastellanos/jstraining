function addition(){
    var value1 = getValue1();
    var value2 = getValue2();
    setResult(value2);
    alert("let's code the addition logic");
}

function subtraction(){
    alert("let's code the subtraction logic");
}

function division(){
    alert("let's code the division logic");
}

function multiplication(){
    alert("let's code the multiplication logic");
}

function remainder(){
    alert("let's code the remainder logic");
}
remainder

function getValue1(){
    return document.getElementById("value1").value;
}

function getValue2(){
    return document.getElementById("value2").value;
}

function setResult(result){
    document.getElementById("result").value = result;
}

