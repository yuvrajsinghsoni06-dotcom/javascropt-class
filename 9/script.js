setTimeout(() => {
    console.log("After 2 seconds");
}, 2000);

console.log("First Line");

setTimeout(() => {
    alert("After 3 seconds !!");
}, 3 * 1000);

console.log("Second Line");

const intervalId = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10 * 1000);

const timeoutId = setTimeout(() => {
    console.log("This will not be printed");
}, 5000);

clearTimeout(timeoutId);
