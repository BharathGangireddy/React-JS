//import logo from './logo.svg';
import './App.css';
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

import React from 'react';
//import JSXFunction from './1.JSX/JSXParent.js';

//import Parent from './2.Props/1.Parent-to-Child/Parent'

//import Parent from './2.Props/2.Child-to-Parent/Parent'

//import Parent from './2.Props/3.Child-to-Child/Parent'

//import Parent from './3.State/Parent.js';

//import A from './3.State/1.Local-State/1.Simple-Data/A'

// import A from './3.State/2.State-Lifiting/1.Simple-Data/A'
import A from './3.State/3.Props-Drilling/A'

function App() {
  return <A />;   // JSX Component Call
}


export default App;

