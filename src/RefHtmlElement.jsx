import { useRef, useState } from "react";

export function RefHtmlElement() {

    const [inputVal,setInputVal] = useState(""); 

    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    const updateInputVal = (evt) => {
        console.log("inputRef is",inputRef);
        setInputVal( _ => inputRef.current.value);
    }

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

    

    return (

        <div>
            <h2>Another example of accessing tag properties using 'ref'</h2>
            <h3>Entered input value: {inputVal}</h3>
            <div style={componentCss.controls}>
                <input type="text" id="inputCatName" ref={inputRef}/>
                <button type="button" onClick={updateInputVal}>Update cat name</button>
            </div>
        </div>

    )



}