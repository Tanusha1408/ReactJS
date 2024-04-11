import React from 'react';

const Hello = () => {

//jsx version of hello component
//  return (
//    <div className= 'dummyClass'>
//      <h1>Hello Tanu</h1>
//    </div>
//   )

//without jsx version of hello component
    //return React.createElement('div', null, 'Hello Tanu') [no header]
//create element can accept many children
    return React.createElement(
      'div', 
       //null,
       {id: 'hello', className: 'dummyClass'},
       React.createElement('h1', null, 'Hello Tanu'
    ))

}


export default Hello;