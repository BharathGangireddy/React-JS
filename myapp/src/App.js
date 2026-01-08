//import logo from './logo.svg';
// import React from 'react';
// import Child from './Child';

// /* 
//   Class Component :: It creats with the help of "Constructor Function"
//   new Keyword
// */
// class App extends React.Component {

//   constructor(props){
//     super(props) // Without super() we can't use "this" keyword
//     this.state  = { 
//       name : "Bharath Gangireddy" // Local State
//     }
//   }
//     render() {
//       return <div>
//         <h2>Parent App : {this.state.name}</h2>
//        {/*  {new Child().render()} {/* JS way of calling } */}
//        <Child name = {this.state.name} />{/* Passing as a child to Child Component */}

//       </div>
    
//     }
// }


// /* Functional Component :: It creats with the help of "Function Declaration"
// */
// function App() {
//   let users = ["Bharath" , "Sairam"]
//   const userName = "Bharath"
//   const email = "bh@gmail.com"
//   return (
//   <div>
//     <h1> App Parent Functional Component</h1>
//     <Child userName =  {users[0]} />
//     <Child userName = {users[1]} />
//   </div>
//   )
// }
//import JSXFunction from './1.JSX/JSXParent.js';

//import Parent from './2.Props/1.Parent-to-Child/Parent'

//import Parent from './2.Props/2.Child-to-Parent/Parent'

//import Parent from './2.Props/3.Child-to-Child/Parent'

//import Parent from './3.State/Parent.js';

//import A from './3.State/1.Local-State/1.Simple-Data/A'

// import A from './3.State/2.State-Lifiting/1.Simple-Data/A'

// import A from './3.State/3.Props-Drilling/A'

//import A from './3.State/4.Global-State/1.Context-API/A'

//import A from './3.State/4.Global-State/2.Redux-Concept/React-Component/A'
// import A from './3.State/4.Global-State/3.Redux-Toolkit/React-Component/A'
//import Data from './3.State/1.Local-State/2.Complex-Data/Data';
//import A from './3.State/4.Global-State/2.Context-API-useReducer/A';
// import A from './4.Side-Effects/1.Default-Behaviour.js/A';

//import A from './7.Side-Effects/2.Runs-Conditionally.js/A';
//import Parentt from './4.Destructuring/Parentt';
//import Parent from './5.Performance/2.Fragment/Parent';

//import Parent from './5.Performance/1.Conditional-Rendering/Parent';

//import Parent from './6.Map(loops-array)/Parent';

//import A from './9.Side-Effects/4.Cleanup-Tasks/A';
//import A from './9.Side-Effects/4.Cleanup-Tasks/A';
//import './App.css';
//import InputElement from './11.Refs Concept/1.Refer-DOM-Element/InputElement';

//import A from './3.State/2.AsyncData/4.Global-State/1.Context-API-use-State/A';
//import Variables from './10.NormalvsStatevsReff Variable/Variables';
//import A from './3.State/2.AsyncData/1.Local-State/2.Complex-Data(useReducer)/A';
//import Parent from './9.Side-Effects/5.ApiCalls(only GET-request)/Parent';
//import Container from './9.Side-Effects/4.Cleanup-Tasks/Container';

//import InputElement from './11.Refs Concept/2.Refer-Value/Value';
//import Value from './11.Refs Concept/2.Refer-Value/Value';
// import Count1 from './5.Performance/3.How-To-Remove-Dupliate-Logic/Count1';
// import Count2 from './5.Performance/3.How-To-Remove-Dupliate-Logic/Count2';
// import Count3 from './5.Performance/3.How-To-Remove-Dupliate-Logic/Count3';
// import Home from './12.Routing/Home';
//import Products from './12.Routing/Products';
//import Parent from './12.Routing/Parent';
import React from 'react';
import Controlled from './11.Refs Concept/3.ControlledvsUncontrolledComponent/Controlled';
import Uncontrolled from './11.Refs Concept/3.ControlledvsUncontrolledComponent/Uncontrolled';
//import A from './3.State/2.AsyncData/4.Global-State/2.Context-API-useReducer/A';
//import A from './3.State/1.SyncData/4.Global-State/2.Context-API-useReducer/A';
//import Parent from './5.Performance/4.VirtualDOM/Parent';
//import A from './3.State/2.AsyncData/4.Global-State/1.Context-API-use-State/A';
//import Parent from './12.Routing/2.Routing-Practice-2/Parent-Route-container';
//import Parent from './12.Routing/2.Routing-Practice-2/Parent';

function App() {
  return (
  <React.Fragment>
    {/* <Parent /> */}
    {/* <A /> */}
    {/* <Variables /> */}
    {/* <InputElement /> */}
    {/* <Value /> */}
    {/* <Count1 />
    <Count2 />
    <Count3 /> */}
      
    {/* <Parent /> */}
    {/* <A /> */}
    <Controlled />
    <Uncontrolled />

      </React.Fragment>
  )
  //return <Parent />;
 // return <Container />;   // JSX Component Call
//  return <Data />
}
export default App;

