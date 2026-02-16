// // // // // // // // // // // js - Callback Functions
// // // // // // // // // // // js call stack - a stack data structure that keeps track of function calls in a program ( when a function is executed it gets pop away
// // // // // // // // // // // from the stack and when it finishes executing it gets pushed back onto the stack )

// // // // // // // // // // function print(){
// // // // // // // // // //     console.log("Hello, Students!", name);
// // // // // // // // // // }

// // // // // // // // // // function greet(num){
// // // // // // // // // //     console.log("Welcome to the JavaScript course.");
// // // // // // // // // //     setTimeout(()=>{
// // // // // // // // // //         console.log("Inside setTimeout")
// // // // // // // // // //         let firstname="Uv"
// // // // // // // // // //         num(firstname)
// // // // // // // // // //     },2000);
// // // // // // // // // // }

// // // // // // // // // // greet(print);
// // // // // // // // // // this an example of call back hell 
// // // // // // // // // console.log("starting homework...")

// // // // // // // // // setTimeout(()=>{
// // // // // // // // //     console.log("Homework completed!")
// // // // // // // // //     console.log("starting Timer!")
// // // // // // // // //     setTimeout(()=>{
// // // // // // // // //         console.log("dinner done!")
// // // // // // // // //         console.log("getting ready to put out!")
// // // // // // // // //         setTimeout(()=>{
// // // // // // // // //             console.log("Going to the playground!")
// // // // // // // // //         },1000);
// // // // // // // // //     },1500);
// // // // // // // // // },2000);

// // // // // // // // function finishHomework(callback) {
// // // // // // // //     console.log("Starting homework...");
// // // // // // // //     setTimeout(() => {
// // // // // // // //         console.log("Homework completed!");
// // // // // // // //         callback();
// // // // // // // //     }, 2000);
// // // // // // // // }

// // // // // // // // function eatdinner(callback) {
// // // // // // // //     console.log("Starting dinner...");
// // // // // // // //     setTimeout(() => {
// // // // // // // //         console.log("Dinner done!");
// // // // // // // //         callback();
// // // // // // // //     }, 1500);
// // // // // // // // }

// // // // // // // // function gooplaygrond(){
// // // // // // // //     console.log("Getting ready to go to the playground...");
// // // // // // // // }

// // // // // // // // finishHomework(() =>{
// // // // // // // //     eatdinner(() =>{
// // // // // // // //         gooplaygrond();
// // // // // // // //     });
// // // // // // // // });
// // // // // // // const input=document.quearySelector("#tasks")
// // // // // // // const btn=document.quearySelector(".btn")
// // // // // // // const lists=document.querySelector(".lists")

// // // // // // // btn.addEventlistener('click',(e)=>{
// // // // // // //     e.preventDefault()
// // // // // // //     if(input.value===""){
// // // // // // //         alert("enter details")
// // // // // // //         return
// // // // // // //     }
// // // // // // //     const li=document.createElement("li")
// // // // // // //     li.innerText=input.value

// // // // // // //     deleteButton.innerText="Delete"
// // // // // // //     li.innerText=input.value

// // // // // // //     li.appendChild(deleteButton)
// // // // // // //     lists.appendChild(li)
// // // // // // //     deleteButton.addEventListener('click',()=>{
// // // // // // //         lists.removeChild(li)
// // // // // // //     })
// // // // // // //     input.value=""
// // // // // // // })
// // // // // // const p =new Promise(function(resolve,reject){
// // // // // //     setTimeout(() => {
// // // // // //         let done=true;  
// // // // // //         if(done){
// // // // // //             resolve({name:"Master Yuvraj", age:19})
// // // // // //         }else{
// // // // // //             reject("something went wrong sir")
// // // // // //         }
// // // // // //     }, 5000);
// // // // // //    })

// // // // // // p.then((data)=>{
// // // // // //     console.log("Resolved",data)
// // // // // // }).catch((err)=>{
// // // // // //     console.log("Rejected",err)
// // // // // // }).finally(()=>{
// // // // // //     console.log("Finaly block")
// // // // // // })
// // // // function dohomework(){
// // // //     const p=new Promise(function(resolve,reject){
// // // //         setTimout(()=>{
// // // //             let done=true;
// // // //             if(done){
// // // //                 console.log("homework is done")
// // // //                 resolve("homework Completed")
// // // //             }else{
// // // //                 reject("Homework is not done")
// // // //             }
// // // //         },2000)
// // // //         })
// // // //         return p
// // // //     }
// // // // function eatdinner(){
// // // //     const p=new Promise(function(resolve,reject){
// // // //         setTimout(()=>{
// // // //             let done=true;
// // // //             if(done){
// // // //                 console.log("Dinner eaten")
// // // //                 resolve("Dinner Completed")
// // // //             }else{
// // // //                 reject("dinner not Eaten")
// // // //             }
// // // //         },2000)
// // // //         })
// // // //         return p
// // // //     }
// // // // function playoutside(){
// // // //     const p=new Promise(function(resolve,reject){
// // // //         setTimout(()=>{
// // // //             let done=true;
// // // //             if(done){
// // // //                 console.log("Can go out to play ")
// // // //                 resolve("Playing  outside")
// // // //             }else{
// // // //                 reject("can't Go outside to play")
// // // //             }
// // // //         },2000)
// // // //         })
// // // //         return p
// // // //     }
// // // //     dohomework().then((data)=>{
// // // //         console.log(data)
// // // //         return eatdinner()
// // // //     }).then((data)=>{
// // // //         console.log(data)
// // // //         return playoutside()
// // // //     }).then((data)=>{
// // // //         console.log(data)
// // // //     }).catch((err)=>{
// // // //         console.log(err)
// // // //     }).finally(()=>{
// // // //         console.log("Go to sleep")
// // // //     // })

// // // console.log("First line")
// // // setTimeout(()=>{
// // //     console.log("Inside timout")
// // // })
// // // const p=new Promise((resolve,reject)=>{
// // //     resolve()
// // // })
// // // p.then(()=>{
// // //     console.log("Inside promise")
// // // }).catch(()=>{
// // //     console.log("Inside catch")
// // // })
// // // const p2=new Promise((resolve,reject)=>{
// // //     resolve()
// // // })
// // // p2.then(()=>{
// // //     console.log("Inside second promise")
// // // }).catch(()=>{
// // //     console.log("Inside second catch")
// // // })
// // // const p3=new Promise((resolve,reject)=>{
// // //     resolve()
// // // })
// // // p3.then(()=>{
// // //     console.log("Inside third promise")
// // // }).catch(()=>{
// // //     console.log("Inside third catch")
// // // })
// // // console.log("Last line")

// // // const form=document.querySelector("#Form")
// // //  # asyn awit

// // function deliveredfood(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(()=>{
// //             console.log("food delivered")
// //             resolve("food delivered")
// //         },1000)
// //     })
// // }

// // function Preparedfood(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(()=>{
// //             console.log("Food Prepared")
// //             resolve("Food prepared")
// //         },1000)
// //     })
// // }
// // function Orderedfood(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(()=>{
// //             console.log("Food ordered")
// //             resolve("Food ordered")
// //         },1000)
// //     })
// // }
// // async function order(){
// //   const data1 = await Orderedfood()
// //   console.log(data1)
// //   const data2 = await Preparedfood()
// //   console.log(data2)
// //   const data3 = await deliveredfood()
// //   console.log(data3)
// // }

// // order()

// // // Orderedfood().then(data)=>{
// // //     console.log(data)
// // //     return Preparedfood()
// // // }.then((data)=>{
// // //     console.log(data)
// // //     return deliveredfood() 
// // // }).then ((data)=>{
// // //     console.log(data)
// // // }).catch((err)=>{
// // //     console.log(err)
// // // })


// // #### Error handling
// sample = "Suprise "
// console.log("first")
// try{
//     let age = 14
//     if(age<18){
//         throw new Error("access Denied")
//     }    
// }catch(err){
//     console.error(err)
// }finally{throw new Error("Data")
//     console.log("finally block")
// }
// console.log("last")

 async function getdata(){
    try{
        const response= await fetch("https://dummyjson.com/products")
        console.log(response.ok)
        if(response.ok===false)throw new Error("data not found")
        const data= await response.json()
        // data.products.forEach((ele)=>{
        console.log(data)
    //  })
    }catch(error){
        console.log("data not found!!")
    }
}

getdata()