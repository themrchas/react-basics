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



    }
  

    return (
      <div>
        <h3>This demonstrates how to update an array using the spread operator</h3>
        {fruit.map((item, index) => {
          return (<div key={index}>
            <span className={styles.fruitType}>{item}</span>
            <button onClick={() => removeItem(index)} type="button">Remove</button>
          </div>);
        })}
      </div>
    );



}