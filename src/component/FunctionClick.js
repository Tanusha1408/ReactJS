import React from 'react'

function FunctionClick() {
  function clickHandler() {
      console.log('Button clicked')
  } 

  return (
    <div>
       <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick;

//EventHandler on Functional component
//passing a function as an event handler "onClick = camel case"
//event handler is a function but not a function call, do not add parenthesis