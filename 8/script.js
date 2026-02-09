debugger;

console.log(a);

var a = 78;
let b = 345;

console.log(a);
console.log(b);

function print() {

    let c = 45;
    console.log(c);
    console.log("Inside function");

}

print();

function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace();
}

first();

let total = 100;

function calculate() {

    let total = 100;
}

calculate();
