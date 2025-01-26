import React, {useContext} from 'react'
import { TestContext } from './App'
import ContextB  from './ContextB.jsx'


export default function ContextA() {

    const passedContextValue = useContext(TestContext)

    return (
        <div>
            <h3>Immediate child received value {passedContextValue} from the parent</h3>
            <ContextB />
        </div>

    )


}