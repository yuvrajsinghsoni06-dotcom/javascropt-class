// const firstname = document.getElementById("name");
// firstname.style.color = "red";
// firstname.style.backgroundColor = "pink";
// firstname.style.textAlign = "center";


// // console.log(firstname);


// const conatainer = document.getElementsByClassName("fruits");
// // conatainer[0].style.backgroundColor = "blue";
// // conatainer[1].style.backgroundColor = "green";
// // conatainer[2].style.backgroundColor = "yellow";

// // for (let fruit of conatainer){
// //     fruit.style.backgroundColor = "yellow";
// // }


// Array.from(conatainer).forEach(fruits =>{
//     fruits.style.backgroundColor = "blue";
// })


// const fruits = document.getElementsByTagName("li");
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "green";
// }

// Array.from(fruits).forEach(fruits =>{
//     fruits.style.backgroundColor = "yellow";
// })



// const q = document.querySelector(".fruits");
// q.style.backgroundColor = "blue";


// const qall = document.querySelectorAll(".fruits");
// const qall1 = document.querySelectorAll(".vegetables");
// // qall.style.backgroundColor = "red";

// console.log(qall);
// console.log(qall1);

// qall.forEach(fruits =>{
//     fruits.style.backgroundColor = "red";
// })

// qall1.forEach(vegetables =>{
//     vegetables.style.backgroundColor = "green";
// })

// Use querySelector with a dot (.) for the class name
// const first = document.querySelector(".fruits");
// const firstele = first.firstElementChild; // Works instantly!

// const second = document.querySelector(".vegetables");
// const secondele = second.firstElementChild; // Works instantly!

// firstele.style.backgroundColor = "red";
// secondele.style.backgroundColor = "yellow";


// const ulelements = document.querySelectorAll("ul");

// ulelements.forEach(ul => {
//     const firstli = ul.lastElementChild;
//     firstli.style.backgroundColor = "blue";

// })


// const element = document.querySelector(".desserts");
// const lastele = element.lastElementChild;

// // CHANGED: Use .font instead of .fontFamily for shorthand properties
// lastele.style.font = "italic bold 20px Arial, sans-serif";


// const sibling = document.querySelector(".vegetables");
// const nextsibling = sibling.nextElementSibling;
// nextsibling.style.backgroundColor = "pink";


//  
// const sibiling  = document.getElementById("vegetables");
// sibiling.previousElementSibling.style.backgroundColor = "red";


// const element = document.getElementById("ice-cream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// const parent = document.getElementById("fruits")
// const child = parent.children
// Array.from(child).forEach(fruits => {
//     fruits.style.backgroundColor = "blue";
// })
// const parent1 = document.getElementById("vegetables")
// const child1 = parent1.children
// Array.from(child1).forEach(fruits => {
//     fruits.style.backgroundColor = "red";
// })
// const parent2 = document.getElementById("desserts")
// const child2 = parent2.children
// Array.from(child2).forEach(fruits => {
//     fruits.style.backgroundColor = "yellow";
// }

// const ele = document.createElement("p");
// ele.textContent ="i can do it";
// ele.style.color = "red";
// ele.style.fontSize = "15px";
// ele.style.textAlign = "center";

// // document.body.prepend(ele);
// document.getElementById("box4").append(ele);

// // const box2 = document.getElementById("box2");
// // document.body.insertbefore(ele, box2);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(ele, boxes[1]);


// document.getElementById("box4").removeChild(ele);



// const e4 = document.createElement("li");
// e4.textContent = "grapes";
// e4.style.backgroundColor = "yellow";

// const papa = document.querySelector("#fruits");
// // papa.prepend(e4);
// document.getElementById("fruits").insertBefore(e4, orange);


// const fun = document.getElementById("fun");
// const btn = document.getElementById("btn");

// function changecolor(e){
//     e.target.style.backgroundColor = "pink";
//     e.target.textContent = "💀"
// }
// fun.addEventListener("click", changecolor);

// btn.addEventListener("click", (e) =>{
//     fun.style.backgroundColor = "tomato ";
//     fun.textContent = "Ouch!😢"

// })
// btn.addEventListener("mouseover", (e)=>{
//     fun.style.backgroundColor = "white";
//     fun.textContent = " See"

// })
// btn.addEventListener("mouseout", (e)=>{
//     fun.style.backgroundColor = "lightgray";
//     fun.target.textContent = " Click ME 😊😊"

// })

// document.addEventListener("keydown", (e) =>{
//     console.log(e);
// });
// document.addEventListener("keyup", (e) =>{ 
//     console.log(`key realesed: ${e.key}`);
// });


// const way = document.getElementById("btn");

// // Notice the lowercase "k"
// way.addEventListener("keydown", (e) => {
//     way.textContent = "🤣";
//     way.style.backgroundColor = "Tomato";
// });

// way.addEventListener("keyup", (e) => {
//     way.textContent = "Click ME 😊😊";
//     way.style.backgroundColor = "lightgreen";
// });

// const btn = document.querySelectorAll(".btns");

// btn.forEach(btn => {
//     btn.style.backgroundColor = "yellow";
//     btn.textContent = "😂"
// })

// btn.forEach(btn => {
//     btn.addEventListener("Click" , (e) => {
//        e.target.style.backgroundColor = "blue";
//     // e.target.textContent = "Ouch!😢"
//     });
// })

// const newbtn = document.createElement("button");
// newbtn.textContent = "Button 5";
// newbtn.classList = "btns";
// document.body.append(newbtn);

// buttons = document.querySelectorAll(".btns");
// console.log(buttons);

// buttons.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         e.target.remove();
//         buttons = document.querySelectorAll(".btns");
//         console.log(buttons);
//     })
// })
// const myH1  = document.getElementById("h1");
// const button = document.getElementById("btns");
// button.classList.add("enabled");
// // button.classList.remove("enabled");
// button.addEventListener("mouseover", (e) => {
//     button.classList.toggle("hover");
// });
// button.addEventListener("mouseout", (e) => {
//     button.classList.toggle("hover");
// });
// // button.classList.add("hover");
// button.addEventListener("click" , (e) => {
//     if(button.classList.contains("enabled")){
//         button.classList.replace("enabled", "disabled");
//     }
//     else{
//         button.classList.replace("disabled", "enabled");
//     }
    
// })

// myH1.addEventListener("click" , (e) => {
//     if(myH1.classList.contains("enabled")){
//         myH1.classList.toggle("disabled");
//     }
//     else{
//         myH1.classList.toggle("enabled");
//     }
// })
// myH1.addEventListener("mouseout" , (e)=> {
//     myH1.classList.toggle("hover")
// })

// const mybtns = document.querySelectorAll(".btns");
 
// // mybtns.forEach(btn => {
// //     btn.classList.add("enabled");
// // })
// mybtns.forEach(btn => {
//     btn.addEventListener("click", event => {
//         event.target.classList.toggle("hover");
//     })
// })
// mybtns.forEach(btn => {
//     btn.classList.toggle("disabled");
// })


//  const a =setTimeout(() => {
//     window.alert("hello")
// }, 2000);

// clearTimeout(a);
// let timerId;
// function startTimer(){
//     timerId = setInterval(() => {window.alert("time's up")}, 5000);
//     console.log("Starting timer..")
// }

// function stopTimer(){
//     clearInterval(timerId);
//     console.log("timer stopped");
// }
// let timerId;
// let num = 0;
// function printnumber(){
//     num++;
//     console.log(num);
//       timerId =setInterval(printnumber, 1000);
// }

// function clearTimer(){
//     clearInterval(timerId);
// }

// hello(goodbye);
// function hello(callback){
//     console.log("hello");
//     callback();
// }
// function goodbye(){
//     console.log("goodbye");
// }

// function sumation(callback,x,y){
//     let result = x + y;
//     callback(result);
// }

// function result(result){
//     console.log(result)
// }


// function displaypage(result){
//     document.getElementById("doo").textContent = result;
// }
// sumation(displaypage,5,6);

// function power(callback, base, exponent){
//     let result = base ** exponent;
//     callback(result);
// }

// function solution(result){
//     document.getElementById("doo").textContent = result;
// }

// power(solution, 90 , 45);


// function fun1(callback){
//     setTimeout(() => {
//         console.log("task 1");
//         callback()},5000);
    
// }

// function fun2(){
//     console.log("task 2");
//     console.log("task 3");
//     console.log("task 4");
// }

// fun1(fun2);

// function task1(callback){
//     setTimeout(()=> {
//         console.log("Task1 completed");
//         callback();
//     }, 2000);
// }
// function task2(callback){
//     setTimeout(()=> {
//         console.log("Task2 completed");
//         callback();
//     }, 1000);
// }
// function task3(callback){
//     setTimeout(()=> {
//         console.log("Task3 completed");
//         callback();
//     }, 4000);
// }
// function task4(callback){
//     setTimeout(()=> {
//         console.log("Task4 completed");
//         callback();
//     }, 3000);
// }

// task1(() => {
//     task2(() =>{
//         task3(() => {
//             task4(() =>{
//                 console.log("All tasks Completed");
//             })
//         })
//     })
// })

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchencleaned = true;
//             if(kitchencleaned){
//                 resolve("You cleaned the kitchen");
//             } else {
//                 reject("You didn't clean the kitchen");
//             }
//         }, 1500);
//     });
// }

// function walkDog(){
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             const dogwalked = true;
//             if(dogwalked){
//                 resolve("You walked the dog");
//             } else {
//                 reject("You didn't walk the dog");
//             }             
//         }, 2000);
//     });
// }

// function takeOutTrash(){  
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashtakenout = false;
//             if(trashtakenout){
//                 resolve("You took out the trash");
//             } else {
//                 reject("You didn't take out the trash");
//             }
//         }, 2500);
//     });
// }

// // --- The Corrected Promise Chain ---
// // walkDog()
//     // .then(value => { console.log(value); return cleanKitchen(); }) // Fixed casing here
//     // .then(value => { console.log(value); return takeOutTrash(); })
//     // .then(value => { console.log(value); console.log("All tasks completed!"); })
//     // .catch(error => { console.error("An error occurred:", error); }); // Added catch block


// async function dochores(){

//     try{
//         const walkdogresult = await walkDog();
//         console.log(walkdogresult);

//         const cleaningkitchenresult = await cleanKitchen();
//         console.log(cleaningkitchenresult);

//         const trashtakenoutresult = await takeOutTrash();
//         console.log(trashtakenoutresult);

//         console.log("All tasks Are performed")

//     }
//     catch(error){
//         console.error(error);

//     }

    



// }


// dochores()


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));

// async function fetchdata() {
//     try {
//         // 1. Get the value from the input field dynamically
//         const pokemon_name = document.getElementById("pokemon");

//         // 2. Inject the variable into the fetch URL using backticks
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
        
//         if (!response.ok) {
//             throw new Error("Could not fetch the data");
//         }
        
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.error(error);
//     }
// }

// const para = document.getElementById("para");
// para.style.backgroundColor = "blue"
// para.textContent = "Hello DOM"

// const form = document.getElementById("infoForm");
// // const submit  = document.getElementById("submit")
// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
    
//     const formData = {
//         name : document.getElementById("name").value,
//         age : document.getElementById("age").value,
//         gender : document.getElementById("gender").value
//     }
    
//     console.log(formData)
// })

// const btn = document.getElementById("btn");
//         const text = document.getElementById("text");

//         // Change text and color when the button is clicked
//         function handleevent(){
//             text.textContent = "Button Clicked!"; // Added the exclamation mark!
//             text.style.color = "blue";        
//         }
        
//         btn.removeEventListener("click",handleevent)
//         btn.addEventListener("click", handleevent)
        
        // // Change color to red when the mouse is over the PARAGRAPH (Fixed!)
        // text.addEventListener("mouseover", () => {
        //     text.style.color = "red";
        // });

// function prompt(){
//     console.log("hello world")
// }


// const timerid =setTimeout(prompt,2000)




// clearTimeout(timerid)
// console.log("timer is cleared using clearTimeout")

// const a = setInterval(prompt,2000)
// clearInterval(a)
// console.log("cleared using clearinterval")
// // intervalmess()

const message = "we did it"
function examready(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const condn = false;
            if(condn){
                resolve("we did it")
            }
            else{
                reject("oops i did it again")
            }
        }, 3000)
    });
}

examready().then(()=>{
    console.log(message)
}).catch((e)=>{
    console.error(e)
}).finally(()=>{
    console.log("operation would be completed regardless you did or not")
})