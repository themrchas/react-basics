import { useRef } from "react";

export default function RefComponent() {

    const catName = useRef("Casper");

    const componentCss = {

        controls: {
            display:"flex",
            flexDirection: "row",
            width: "300px",
            justifyContent:"space-between"
   
        },
        message: {
            color:"red"
        }
    }

    const updateCatName = () => {
        catName.current = document.getElementById("inputCatName").value;
        document.getElementById("inputCatName").value = "";
    }

    return (

        <div>
            <h2>Examples of 'useRef'</h2>    
            <h3>useRef does not re-render a component when a 'ref' value changes</h3> 
            Current value of variable 'catName' {catName.current}
            <div style={componentCss.controls}>
                <input type="text" id="inputCatName"/>
                <button type="button" onClick={updateCatName}>Update cat name</button>
            </div>
            <div id="message" style={componentCss.message}>The value of 'catName' does not change because the component is not rendering!</div>
        </div>

    )


}