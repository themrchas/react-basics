import React, {useState, useEffect} from 'react'

export default function Effects() {

    const [count,setCount] = useState(0)

    const [buttonColor, setButtoncolor] = useState("#90EE90")

   

    let buttonStyle = {

        width: "100px",
        color:  "black",
        backgroundColor: {buttonColor},
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "text"

    }
    


    //Fires when a component is mounted
    useEffect(() => { console.log("The component was just mounted.")}, []);

    const buttonClickHandler = ((evt) => {
       
            let newValue = Math.floor(Math.random() * 101);

            let prevDisplayedValue;

            setCount(prevCount => {
                                    prevDisplayedValue = prevCount;
                                    return newValue
                                  })

            if (newValue > prevDisplayedValue) {
                setButtonColor("#90EE90")
            }
            else {
                setButtonColor("#FF3632")
            }
  
      
    })

        //Fires on mount and when value changes
        useEffect( _ => {

            console.log("Component has been mounted or the state of 'buttonColor' has changed.")

        }, [buttonColor])


        //Fires after every re-render.
        useEffect( _ => console.log('Component re-rendered'));

    


    return(

        <div>
            <h2>Value: {count}</h2>
            <button style={buttonStyle} type="button" onClick={buttonClickHandler}>Modify Value</button>
            

        </div>
    )







}