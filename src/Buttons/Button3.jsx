

export default function Button3(props) {

    const comment = props.comment;
    const buttonText = props.buttonText;

    const styles = {

        backgroundColor: "hsl(263, 100.00%, 50.00%)", 
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "text"
    }

    return (
        <div>
        <span>{comment}</span>
        <button style={styles}>{buttonText}</button>
        </div>

    )


}