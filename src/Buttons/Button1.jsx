
export default function Button1(props) {

    const comment = props.comment;
    const buttonText = props.buttonText

    return (
        <div>
        <span>{comment}</span>
        <button className="button-global">{buttonText}</button>
        </div>

    )


}