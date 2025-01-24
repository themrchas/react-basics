import React, {useState} from 'react'

export default function ObjectState() {

    let [autoDescription,setAutoDescription] = useState({make:"Ford", model:"Pinto"})

   const currentDetails = {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "20px 0px",
        fontSize: "1.5em"
   }

   const inputStyle = {
        fontSize:"1.0em",
        marginRight: "40px"
   }

    let changeMake = ((evt) => {

        let newMake = evt.target.value;

        //Note the use of parens around the arrow function.  this is needed when returing a one-line object literal
        setAutoDescription( (prevAutoDescription)  => ({...prevAutoDescription, make : newMake}) );

    });

    let changeModel = ((evt) => {

        let newModel = evt.target.value;

        setAutoDescription( prevAutoDescription  => ({...prevAutoDescription, model : newModel}) );

    });


    return(

        <div>

            <h3>This demonstrates how to use the spread operator to update an object</h3>

            <div style={currentDetails}>

                <div>Current make: {autoDescription.make}</div>
                <div>Current model: {autoDescription.model}</div>

            </div>
           
           
            <input style={inputStyle} type="text" onChange={changeMake} value={autoDescription.make}/>
            <input style={inputStyle} type="text" onChange={changeModel} value={autoDescription.model}/>
            
        </div>
        

    )

    





}