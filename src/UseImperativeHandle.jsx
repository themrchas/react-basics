import {useRef, useImperativeHandle, forwardRef} from 'react';

const ImperativeHandleParent = _ => {

    //This is passed to the child component
    const buttonRef = useRef();

    const handleClick = () => {

        {/* Trigger the button click using the method exposed in the child component */}
        buttonRef.current.clickButton();
    
    };


    return (

        
        <div>

            {/* Pass the parent buttonRef reference to the child */}
            <ImperativeHandleChild ref={buttonRef} />

            <button onClick={handleClick}>Click From Parent</button>

        </div>
    )

}

//ref is a refernce to buttonRef provided as argument from parent 
const ImperativeHandleChild = forwardRef( (props,ref) => {

    //This refers to the button in the child component
    const buttonRef = useRef();

    //This essentially maps parent ref to the clickButton function
    useImperativeHandle(ref, () => ({

        
        clickButton() {

            
            buttonRef.current.click();
        }
    }))

    return <button ref={buttonRef} onClick={() => alert('Button Clicked')}>Click Me!</button>


})

export default ImperativeHandleParent;


