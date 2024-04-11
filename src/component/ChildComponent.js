import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent;

//<button onClick={props.greetHandler}>Greet Parent</button> ONCLICK HANDLER
//<button onClick={() => props.greetHandler()}>Greet Parent</button> ARROW FN.
//now we can pass any no. of handlers to the greet component