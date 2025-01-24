import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

import Button1 from './Buttons/Button1.jsx'
import Button2 from './Buttons/Button2.jsx'
import Button3 from './Buttons/Button3.jsx'

import TypeCheck from './TypeCheck.jsx'

import Click1 from './Click1.jsx';
import Click2 from './Click2.jsx';

//Basic example of useState
import BasicState from './BasicState.jsx'

//Example of using the spread operator to update an object's state
import ObjectState from './ObjectState.jsx'

import ArrayState from './ArrayState.jsx'

import Effects from './Effects.jsx'




const click2Callback = _ => {
  console.log("Component fired a click handler defined in parent component.")
}



function App() {
  //const [count, setCount] = useState(0)

  const typeCheckUsers = [{name:"Beavis",age:15,hobby:"Collecting beer cans"},{name:"Mr. Johnson",age:64,hobby:"Telling war stories"}]

  return (


    <>
     <Header />
     <Card />

     <div className="button-container">
     <Button1 comment="This button uses the index.css file for styling." buttonText="Press here"/>
     <Button2 comment="This button uses the module.css file for styling." buttonText="Press here"/>
     <Button3 comment="This button uses inline css file for styling." buttonText="Press here"/>
     </div>
    
    <div className="list-example">
      <h3>Example using TypeCheck propTypes and defaultProps</h3>
      <TypeCheck users={typeCheckUsers} />
    </div>

    <Click1 />
    <Click2 clickHandler={click2Callback} />
    <BasicState />

    <ObjectState />

    <ArrayState />

    <Effects />

     <Footer />
    </>
  )
}

export default App
