var displ = <HTMLInputElement>document.getElementById("display");

function evalu(): void {
    displ.value = eval(displ.value).toFixed(2);
}

function deleteChar(): void {
    displ.value = displ.value.substring(0, displ.value.length - 1)
}

function fe(): void {
    displ.value = Number(displ.value).toExponential();
}

function exp(): void {
    displ.value = String(Math.exp(Number(displ.value)));
}

function fact(x)
  {
if (x === 0)
 {
    return 1;
 }
 return x * fact(x-1);
}

function factorial(x) 
{ 
    displ.value = fact(x);
}

function restrictAlphabets(e: any): boolean {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
}
var memvalue;

function memory(id: String): void {

    if(id=='MS'){
        memvalue = Number(displ.value);
    }
    else if(id=='MC'){
        memvalue = 0;
    }
    else if(id=='M+'){
        displ.value = Number(displ.value) + memvalue;
    }
    else if(id=='M-'){
        displ.value = String(memvalue - Number(displ.value));
    }
    else if(id=='MR'){
        if (memvalue)
            displ.value += memvalue;
    }

    var mem = (<HTMLInputElement>document.getElementById("memory"));
    mem.innerHTML = (memvalue === 0 ? "No Stored Value in Memory " : memvalue);

}

var togglev = true;

function update(): void {

    if (togglev) {
        var x2 = (<HTMLInputElement>document.getElementById("x2"));

        x2.innerText = "x^3";

        var x3 = (<HTMLInputElement>document.getElementById("sqrt"));

        x3.innerText = "3√x";

        var yx = (<HTMLInputElement>document.getElementById("xraisey"));

        yx.innerText = "y√x";

        var x10 = (<HTMLInputElement>document.getElementById("10x"));

        x10.innerText = "2^x";

        var log = (<HTMLInputElement>document.getElementById("log"));

        log.innerText = "logyx";

        var logn = (<HTMLInputElement>document.getElementById("logn"));

        logn.innerText = "e^x";

        var nd2 = (<HTMLInputElement>document.getElementById("2nd"));

        nd2.style.color = "black";

        nd2.style.backgroundColor = "#a0b8ff";

        togglev = !togglev;
    }
    else {


        var x2 = (<HTMLInputElement>document.getElementById("x2"));

        x2.innerText = "x^2";

        var x3 = (<HTMLInputElement>document.getElementById("sqrt"));

        x3.innerText = "2√x";

        var yx = (<HTMLInputElement>document.getElementById("xraisey"));

        yx.innerText = "x^y";

        var x10 = (<HTMLInputElement>document.getElementById("10x"));

        x10.innerText = "10^x";

        var log = (<HTMLInputElement>document.getElementById("log"));

        log.innerText = "log";

        var logn = (<HTMLInputElement>document.getElementById("logn"));

        logn.innerText = "ln";

        var nd2 = (<HTMLInputElement>document.getElementById("2nd"));

        nd2.style.color = "black";

        nd2.style.backgroundColor = "white";

        togglev = !togglev;
    }
}

function power(): void {
    if (togglev) {
        displ.value = String(Math.pow(Number(displ.value), 2));
    }
    else {
        displ.value = String(Math.pow(Number(displ.value), 3));

    }
}
function root(): void {
    if (togglev) {
        displ.value = eval(String(Math.sqrt(Number(displ.value)) * 2));
    }
    else {
        displ.value = eval(String(Math.sqrt(Number(displ.value)) * 3));
    }
}

function ex(): void {
    if (togglev) {
        displ.value += '**'
    }
    else {
        displ.value += '**'
    }
}

function x10(): void {
    if (togglev) {
        displ.value = String(Math.pow(10, Number(displ.value)));
    }
    else {
        displ.value = String(Math.pow(2, Number(displ.value)));
    }
}

function loge(): void {
    if (togglev) {
        displ.value = String(Math.log10(Number(displ.value)));
    }
    else {
        displ.value = String(Math.log10(Number(displ.value)));
    }
}

function nlog(): void {
    if (togglev) {
        displ.value = String(Math.log2(Number(displ.value)));
    }
    else {
        displ.value = eval(String(2.718281828 ** Number(displ.value)));
    }
}


var radtodeg = true;

function deg(): void {
    if (radtodeg) {
        var chg = (<HTMLInputElement>document.getElementById("change"));
        chg.innerText = "DEG";
        chg.style.color = "black";
        chg.style.backgroundColor = "#a0b8ff";

        radtodeg = !radtodeg
    }
    else {
        var chg = (<HTMLInputElement>document.getElementById("change"));
        chg.innerText = "RAD";
        chg.style.color = "black";
        chg.style.backgroundColor = "white";
        radtodeg = !radtodeg
    }
}

function sine(): void {
    if (radtodeg) {
        displ.value = String(Math.sin(Number(displ.value)));
    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));
        displ.value = String(Math.sin(Number(displ.value)));
    }
}

function cosec(): void {
    if (radtodeg) {
        displ.value = String(Math.cos(Number(displ.value)));

    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));

        displ.value = String(Math.cos(Number(displ.value)));

    }
}
function tane(): void {
    if (radtodeg) {
        displ.value = String(Math.tan(Number(displ.value)));

    }
    else {
        displ.value = eval(String((Number(displ.value)) * (Math.PI / 180)));

        displ.value = String(Math.tan(Number(displ.value)));
    }
}