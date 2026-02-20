// async function sendData(){
//     try{
//          const response=await fetch("https://dummyjson.com/product/add", {
//         method: 'POST' ,
//         headers:{'Content-type': 'application/json'},
//         body:JSON.stringify({
//             title:"Macbook",
//             description: "Macbook Pro",
//             price:100000,
//             discountpercentage:5,
//             rating:4.5,
//             stock:5,
//             brand:"apple",
//         })
//         })

//        const data=await response.json()
//        console.log(data)
//     }catch(e){
//         console.log("data not found")
//     }  
// }
// sendData()


// Storages
// local storage stores in the format of obj    
// localStorage.setItem("name","john")
// console.log(localStorage.getItem("name"))
// localStorage.setItem("age",30)
// console.log(localStorage.getItem("age"))
// console.group(JSON.parse(localStorage.getItem("age"))) // it will convert string to number
// localStorage.removeItem("name")
// localStorage.clear() // it will clear all the data in local storage

sessionStorage.setItem("name","Yuvraj")
console.log(sessionStorage.getItem("name"))
sessionStorage.setItem("age",30)
console.log(sessionStorage.getItem("age"))
console.group(JSON.parse(sessionStorage.getItem("age"))) // it will convert string to number
// sessionStorage.removeItem("name")
sessionStorage.clear() // it will clear all the data in local storage

document.cookie="name=Yuvraj; expires=Sat, 21 feb 2026 23:59:59 GMT; path=/"
document.cookie="age=30; expires=Sat, 21 feb 2026 23:59:59 GMT; path=/"

console.log(document.cookie)

async function sendRequest(){
    await fetch("http://127.0.0.1:5500/js%20assisgnment/class.html")
}
sendRequest()


