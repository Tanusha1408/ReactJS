import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import EventBind from './component/EventBind'
import ParentComponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import NameList from './component/NameList'

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="tanu" color="white" > 
         <p>She is a good gurl</p>
      </Greet> */}
      {/* <Greet name="havi" color="blue" >
         <button>Action</button>
      </Greet> */}
      {/* <Greet name="chinnu" color="black" >
         <p>She is a also good gurl!</p>
      </Greet> */}

      {/* <Welcome name="tanu" color="white" /> */}
      {/* <Welcome name="havi" color="blue" /> */}
      {/* <Welcome name="chinnu" color="black" /> */}
      {/* <Hello  /> */}
      

    </div>
  );
}

//GREET IS THE FUNCTIONAL COMPONENTS**
//GREET IS THE CLASS COMPONENTS**
export default App;  
