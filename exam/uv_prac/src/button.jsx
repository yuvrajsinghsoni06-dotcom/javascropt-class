
function Button(){

    const styles = {
        /* button.module.css */
      backgroundColor: "#0070f3",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }

    return(
        <button style={styles}>Click me</button>

    );
}

export default Button;