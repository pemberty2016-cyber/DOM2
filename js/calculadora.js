function sumar () {
    let n1 = parseInt (document.getElementById("num1").value);
    let n2 = parseInt (document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${n1 + n2}`;   
}

function restar () {
    let n1 = parseInt (document.getElementById("num1").value);
    let n2 = parseInt (document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${n1 - n2}`;   
}

function multi () {
    let n1 = parseInt (document.getElementById("num1").value);
    let n2 = parseInt (document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${n1 * n2}`;   
}

function divi () {
    let n1 = parseInt (document.getElementById("num1").value);
    let n2 = parseInt (document.getElementById("num2").value);
    document.getElementById("resultado1").value = `${n1 / n2}`;   
}
