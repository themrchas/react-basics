import styles from './Button2.module.css'

export default function Button2(props) {

    const comment = props.comment;
    const buttonText = props.buttonText

    return (
        <div>
        <span>{comment}</span>
        <button className={styles.button}>{buttonText}</button>
        </div>

    )


}