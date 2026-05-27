
function Button(){

    // const styles = {
    //     /* button.module.css */
    //   backgroundColor: "#0070f3",
    //   color: "white",
    //   padding: "10px 20px",
    //   border: "none",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    //   width: "300px",
    //   height : "300px",
    
    // }
    let count = 0
    const clickhandler = (name)=> {
        if(count < 3){
            count++
            console.log(`${name} had clicked ${count} times`)
        }
        else{
            console.log(`${name} Stop clicking me`)
        }
        
    }
    const clickhandler2 = (e)=>{ e.target.textContent = "OUCH💀"}

    return(
        <button className="btn" onDoubleClick={(e) =>{clickhandler2(e)}}>Click me 👆</button>

    );
}

export default Button;