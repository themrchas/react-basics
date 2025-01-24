export default function Click2(props)  {

    const clickHandler = props.clickHandler;

    let click2Style = {

        
        color: "black",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    };

    return (
        <button style={click2Style} onClick={clickHandler} type="button">Click2 Me</button>
    )





}