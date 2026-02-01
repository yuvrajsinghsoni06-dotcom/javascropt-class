const Button = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const restartButton = document.querySelector("#restart");

function message(event) {
    console.log(event);
    alert("You have clicked the button");
}

Button.addEventListener("click", message);

stopButton.addEventListener("click", function () {
    Button.removeEventListener("click", message);
});

restartButton.addEventListener("click", function () {
    Button.addEventListener("click", message);
});
