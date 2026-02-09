const button = document.querySelector("button");

function message(event) {
    console.log(event);
    alert("You have Activated the button");
}

button.addEventListener("click", message);
