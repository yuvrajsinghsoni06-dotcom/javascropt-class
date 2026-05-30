const submitButton = document.querySelector("#submitBtn");

const toggleButton = document.querySelector("#toggleBtn");

toggleButton.addEventListener("click", function () {
    submitButton.classList.toggle("btn");
});
