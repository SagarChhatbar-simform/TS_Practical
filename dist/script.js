var scrn = document.getElementById("display");
function evalu() {
    scrn.value = eval(scrn.value);
}
function deleteChar() {
    scrn.value = scrn.value.substring(0, scrn.value.length - 1);
}
function fe() {
    scrn.value = Number(scrn.value).toExponential();
}
function exp() {
    scrn.value = String(Math.exp(Number(scrn.value)));
}
function factorial() {
    var i, n, j;
    j = 1;
    n = Number(scrn.value);
    for (i = 1; i <= n; i++) {
        j = j * i;
    }
    i = i - 1;
    scrn.value = String(j);
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
            memvalue.unshift(Number(scrn.value));
            break;
        case "MC":
            memvalue = [];
            break;
        case "M+":
            if (memvalue[0])
                scrn.value = Number(scrn.value) + memvalue[0];
            break;
        case "M-":
            if (memvalue[0])
                scrn.value = String(memvalue[0] - Number(scrn.value));
            break;
        case "MR":
            if (memvalue[0])
                scrn.value += memvalue[0];
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
        scrn.value = String(Math.pow(Number(scrn.value), 2));
    }
    else {
        scrn.value = String(Math.pow(Number(scrn.value), 3));
    }
}
function root() {
    if (togglev) {
        scrn.value = eval(String(Math.sqrt(Number(scrn.value)) * 2));
    }
    else {
        scrn.value = eval(String(Math.sqrt(Number(scrn.value)) * 3));
    }
}
function ex() {
    if (togglev) {
        scrn.value += '**';
    }
    else {
        scrn.value += '**';
    }
}
function x10() {
    if (togglev) {
        scrn.value = String(Math.pow(10, Number(scrn.value)));
    }
    else {
        scrn.value = String(Math.pow(2, Number(scrn.value)));
    }
}
function loge() {
    if (togglev) {
        scrn.value = String(Math.log(Number(scrn.value)));
    }
    else {
        scrn.value = String(Math.log(Number(scrn.value)));
    }
}
function nlog() {
    if (togglev) {
        scrn.value = String(Math.log(Number(scrn.value)));
    }
    else {
        scrn.value = eval(String(Math.pow(2.718281828, Number(scrn.value))));
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
        scrn.value = String(Math.sin(Number(scrn.value)));
    }
    else {
        scrn.value = eval(String((Number(scrn.value)) * (Math.PI / 180)));
        scrn.value = String(Math.sin(Number(scrn.value)));
    }
}
function cosec() {
    if (radtodeg) {
        scrn.value = String(Math.cos(Number(scrn.value)));
    }
    else {
        scrn.value = eval(String((Number(scrn.value)) * (Math.PI / 180)));
        scrn.value = String(Math.cos(Number(scrn.value)));
    }
}
function tane() {
    if (radtodeg) {
        scrn.value = String(Math.tan(Number(scrn.value)));
    }
    else {
        scrn.value = eval(String((Number(scrn.value)) * (Math.PI / 180)));
        scrn.value = String(Math.tan(Number(scrn.value)));
    }
}
