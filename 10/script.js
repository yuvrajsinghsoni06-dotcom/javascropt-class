let count = 1;

const countIntervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 10) {
        clearInterval(countIntervalId);
    }
}, 1000);

console.log("First Line");

setTimeout(() => {
    console.log("After 0 seconds");
}, 0);

console.log("Second Line");
