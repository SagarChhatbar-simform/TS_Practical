var displ = document.getElementById("display");
function evalu() {
    displ.value = eval(displ.value);
}
function deleteChar() {
    displ.value = displ.value.substring(0, displ.value.length - 1);
}
function fe() {
    displ.value = Number(displ.value).toExponential();
}
function exp() {
    displ.value = String(Math.exp(Number(displ.value)));
}


function factorial() {
    var i, n, j;
    j = 1;
    n = Number(displ.value);
    for (i = 1; i <= n; i++) {
        j = j * i;
    }
    i = i - 1;
    displ.value = String(j);
}


function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}
var memvalue = [];
function memory(id) {
    switch (id) {
        case "MS":
            memvalue.unshift(Number(displ.value));
            break;
        case "MC":
            memvalue = [];
            break;
        case "M+":
            displ.value = Number(displ.value) + memvalue[0];
            break;
        case "M-":
            displ.value = String(memvalue[0] - Number(displ.value));
            break;
        case "MR":
            if (memvalue[0])
                displ.value += memvalue[0];
            break;
    }
    var mem = document.getElementById("memory");
    mem.innerHTML = (memvalue.length === 0 ? "empty memory" : memvalue[0]);
}
var togglev = true;
function update() {
    if (togglev) {
        var x2 = document.getElementById("x2");
        x2.innerText = "x^3";
        var x3 = document.getElementById("sqrt");
        x3.innerText = "3√x";
        var yx = document.getElementById("xraisey");
        yx.innerText = "y√x";
        var x10 = document.getElementById("10x");
        x10.innerText = "2^x";
        var log = document.getElementById("log");
        log.innerText = "logyx";
        var logn = document.getElementById("logn");
        logn.innerText = "e^x";
        var nd2 = document.getElementById("2nd");
        nd2.style.color = "black";
        nd2.style.backgroundColor = "#a0b8ff";
        togglev = !togglev;
    }
    else {
        var x2 = document.getElementById("x2");
        x2.innerText = "x^2";
        var x3 = document.getElementById("sqrt");
        x3.innerText = "2√x";
        var yx = document.getElementById("xraisey");
        yx.innerText = "x^y";
        var x10 = document.getElementById("10x");
        x10.innerText = "10^x";
        var log = document.getElementById("log");
        log.innerText = "log";
        var logn = document.getElementById("logn");
        logn.innerText = "ln";
        var nd2 = document.getElementById("2nd");
        nd2.style.color = "black";
        nd2.style.backgroundColor = "white";
        togglev = !togglev;
    }
}
function power() {
    if (togglev) {
        displ.value = String(Math.pow(Number(displ.value), 2));
    }
    else {
        displ.value = String(Math.pow(Number(displ.value), 3));
    }
}
function root() {
    if (togglev) {
        displ.value = eval(String(Math.sqrt(Number(displ.value)) * 2));
    }
    else {
        displ.value = eval(String(Math.sqrt(Number(displ.value)) * 3));
    }
}
function ex() {
    if (togglev) {
        displ.value += '**';
    }
    else {
        displ.value += '**';
    }
}
function x10() {
    if (togglev) {
        displ.value = String(Math.pow(10, Number(displ.value)));
    }
    else {
        displ.value = String(Math.pow(2, Number(displ.value)));
    }
}
function loge() {
    if (togglev) {
        displ.value = String(Math.log10(Number(displ.value)));
    }
    else {
        displ.value = String(Math.log10(Number(displ.value)));
    }
}
function nlog() {
    if (togglev) {
        displ.value = String(Math.log2(Number(displ.value)));
    }
    else {
        displ.value = eval(String(Math.pow(2.718281828, Number(displ.value))));
    }
}
var radtodeg = true;
function deg() {
    if (radtodeg) {
        var chg = document.getElementById("change");
        chg.innerText = "DEG";
        chg.style.color = "black";
        chg.style.backgroundColor = "#a0b8ff";
        radtodeg = !radtodeg;
    }
    else {
        var chg = document.getElementById("change");
        chg.innerText = "RAD";
        chg.style.color = "black";
        chg.style.backgroundColor = "white";
        radtodeg = !radtodeg;
    }
}
function sine() {
    if (radtodeg) {
        displ.value = String(Math.sin(Number(displ.value)));
    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));
        displ.value = String(Math.sin(Number(displ.value)));
    }
}
function cosec() {
    if (radtodeg) {
        displ.value = String(Math.cos(Number(displ.value)));
    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));
        displ.value = String(Math.cos(Number(displ.value)));
    }
}
function tane() {
    if (radtodeg) {
        displ.value = String(Math.tan(Number(displ.value)));
    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));
        displ.value = String(Math.tan(Number(displ.value)));
    }
}
