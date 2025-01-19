import { useState } from "react"

export default function BasicState() {

    let styles = {

        decrementButton: {
            backgroundColor: "hsl(0, 3.30%, 48.20%)",
            font: "Arial, Helevetica",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "text",
            marginLeft: "20px"
        },
        incrementButton: {
           
                backgroundColor: "hsl(129, 74.20%, 74.10%)",
                font: "Arial, Helevetica",
                color: "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "text",
            
        }
    
        };

    const [count,setCount] = useState(0);

    //Note how we are provided the state of the previous variable via prevCount
    const incrementCount = _ => {

        setCount(prevCount => prevCount + 1)

    }

    const decrementCount = _ => {

        setCount(prevCount => prevCount - 1)


    }



    return(

        <div>
            <p>This example demonstrates the useState function and how to correctly force a state change</p>
            <p>Current Count: {count}</p>
            <div>
                <button style={styles.incrementButton} onClick={incrementCount}>Increase Count</button>
                <button style={styles.decrementButton} onClick={decrementCount}>Decrease Count</button>
            </div>
        </div>




    )


}