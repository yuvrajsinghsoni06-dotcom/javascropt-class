const button = document.querySelector("button");
const containerDiv = document.querySelector(".container");
const outerDiv = document.querySelector(".outer");

button.addEventListener(
    "click",
    function () {
        console.log("Button clicked");
    },
    true
);

containerDiv.addEventListener(
    "click",
    function () {
        console.log("Container div clicked");
    },
    true
);

outerDiv.addEventListener(
    "click",
    function () {
        console.log("Outer div clicked");
    },
    true
);
