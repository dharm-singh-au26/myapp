import React from 'react';
 
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      {/* <Counter/> */}

      {/* <Message/> */}
      {/* <Greet name='Bruce' heroName='batman'>
        <p>This is a children tag</p>
      </Greet>
      <Greet name='live' heroName='spiderman'>
        <button>Action</button>
      </Greet> */}
       {/* class component */}
     {/* <Welcome name='Bruce' heroName='batman'/>
      <Welcome name='live' heroName='spiderman'/>
      <Welcome name='melody' heroName='choclate'/>
      <Hello/>  */}

      
    </div>
  );
}

export default App;
