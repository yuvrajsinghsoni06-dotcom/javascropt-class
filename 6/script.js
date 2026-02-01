const form = document.querySelector("#loginForm");

const handleSubmit = (event) => {
    event.preventDefault();

    const nameValue = document.querySelector("#name").value;
    const passwordValue = document.querySelector("#password").value;

    console.log("Form Submitted");
    console.log("Name:", nameValue);
    console.log("Password:", passwordValue);
};

form.addEventListener("submit", handleSubmit);
