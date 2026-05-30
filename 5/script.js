const keypressButton = document.querySelector("#keypress");

keypressButton.addEventListener("keydown", function (event) {
    console.log("Key down:", event.key);
});

keypressButton.addEventListener("keyup", function (event) {
    console.log("Key up:", event.key);
});
