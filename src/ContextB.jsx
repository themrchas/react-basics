import React, {useContext} from 'react'
import { TestContext } from './App'


export default function ContextB() {

    const passedContextValue = useContext(TestContext)

    return (

        <h3>Grandchild received value {passedContextValue} from the grandparent.</h3>

    )


}