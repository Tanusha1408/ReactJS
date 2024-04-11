import react from 'react';

//function Greet() {
//   return <h1>Hello Tanusha</h1>
//}

//export const Greet = () => <h1>Hello Tanusha</h1>

//const Greet = (props) => {
//  console.log(props)
//  return (
//    <div>
//      <h1>
//        Hello, {props.name} likes {props.color}
//      </h1>
//      {props.children}
//    </div>
//  )

//diff. childs should be enclosed into one html tag
//we can treat the name text as attribute also using props.name

//}

//**destructuring in the parameter

//const Greet = ({name, color}) => {
//  return (
//    <div> 
//      <h1>
//        Hello, {name} likes {color}
//      </h1>
//    </div>
//  )
//}

//**destructuring in the function body

const Greet = props => {
  const {name, color} = props
  return (
    <div> 
      <h1>
        Hello, {name} likes {color}
      </h1>
    </div>
  )
}


export default Greet;