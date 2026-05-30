// // // Form events - allows to validate and prevent before submition using js

// // const handleSubmit = (event) => {
// //     event.preventDefault()
// //     console.log("Form Submitted")
// // }

// // const form = document.querySelector('form')
// // form.addEventListener('submit', handleSubmit

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")

// btn.addEventListener("click",functiom(){console.log("button")})
// div.addEventListener("click",function(){console.log("div")})

alert("Hello yuvraj is very successful person")
let a = prompt("Enter a here" , "567")
a = Number.parseInt(a)
alert("You entered a of type " + typeof a)
let write = confirm("do you want to write it on the page")
if(write){
    document.write(a)
}
else{
    document.write("pls allow me to Write")
}