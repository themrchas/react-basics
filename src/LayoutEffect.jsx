import { useState, useLayoutEfffect, useRef, useEffect} from 'react'


export  const LayoutEffect = () => {

    const [boxWidth, setBoxWidth] = useState(0);
    const boxRef = useRef();

    const cssStyle = {
        width: "50%",
        height: "100px",
        backgroundColor: "lightblue",
        color: "black"
    }

    useEffect( _ => {

        //Measure the width of the box immediately after rendering
        if (boxRef.current) {
            setBoxWidth(boxRef.current.offsetWidth);
        }

    });

    return (
        <div>
            <div ref={boxRef} style={cssStyle} >Resize me!</div>
            <p>The box width size is: {boxWidth}px</p>
        </div>
    )


}