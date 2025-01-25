import React, {useState} from 'react'

import styles from "./ArrayState.module.css";

export default function ArrayState() {
 

    const [fruit,setFruit] = useState(["apple","banana","pear"]);
    

    const removeItem = (index) => {

        setFruit((prevFruit) => {

            return prevFruit.filter((item,i) => 
                i !== index
            )
        }
     )

    } //removeItem

    const addItem = _ => {

      setFruit((prevFruit) => {
        
        let fruitToAdd = document.getElementById("inputFruit").value;

        document.getElementById("inputFruit").value = ""
        
        return [...prevFruit,fruitToAdd];


    }) //addItem
  
  }  


    return (
      <div>
        <h3>This demonstrates how to update an array using the spread operator</h3>
      

        {fruit.map((item, index) => {
          return (
            <div className={styles.flexFruitRow}>
              <div key={index} className={styles.fruitType}>{item}</div>
              <button onClick={() => removeItem(index)} type="button">Remove</button>
            </div>
          )
                
         
        })}

     
      <div className={styles.inputAddFruit}>
        <span>Add fruit&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="inputFruit"></input></span><button className={styles.btnAddFruit} onClick={addItem} type="button">Add</button>
      </div>

      </div> 
     
    );



}