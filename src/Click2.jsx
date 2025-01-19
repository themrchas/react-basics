export default function Click2(props)  {

    const callBack = props.click2Callback;

    let click2Style = {

        
        color: "black",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    };

    return (
        <button style={click2Style} onClick={callBack} type="button">Click Me</button>
    )





}