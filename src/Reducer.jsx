import { useReducer } from "react";

export default function Reducer() {

    const reducer = (state , action) => { 

       let index = state.selectedBoxes.indexOf(action.value);

       const newState = index > -1
        ? state.selectedBoxes.filter( (item,itemIndex) => index !== itemIndex )
        : [...state.selectedBoxes, action.value]

        return {...state, selectedBoxes: newState }

   }

    const [state, dispatch] = useReducer(reducer, { selectedBoxes:[] } )

     // Handle checkbox changes
     const handleCheckboxChange = (e) => {
        const value = e.target.value;
        dispatch({ type: 'TOGGLE_CHECKBOX', value });
    };


    return (

        <div>

            <h2>Example of useReducer to control checkboxes</h2>

            <label>
                <input
                    type="checkbox"
                    value="option1"
                    checked={state.selectedBoxes.includes('option1')}
                    onChange={handleCheckboxChange}
                />
                Option 1
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="option2"
                    checked={state.selectedBoxes.includes('option2')}
                    onChange={handleCheckboxChange}
                />
                Option 2
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    value="option3"
                    checked={state.selectedBoxes.includes('option3')}
                    onChange={handleCheckboxChange}
                />
                Option 3
            </label>



        </div>
    )


}