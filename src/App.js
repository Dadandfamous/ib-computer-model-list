import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  render() {
    return (
    
    <div className="App">
    <select>
      <option value = "">-- pick a model --</option>

    {/*////// NO YEAR BRACKETS */}

            {Object.keys(data).map(comp => <option value={comp} key={comp}>{comp} {data[comp].year}</option>)}

    {/*////// NO YEAR BRACKETS */}

       </select>
    
    </div>
  )
  }
}
  export default App;

//   {Object.keys(subjects).map((keyName, i) => (
//     <li className="travelcompany-input" key={i}>
//         <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
//     </li>
// ))}


// _renderObject(){
//   return Object.keys(ObjectTest).map(obj, i) => {
//       return (
//           <div>
//               id is: {ObjectTest[obj].id} ;
//               name is: {ObjectTest[obj].name}
//           </div>
//       )
//   })
// }



// <select>
//       <option value = ">-- pick a model --<"></option>
//       <option value = {data[obj].}>two</option>
//       <option value = "Bally Astrocade">Bally Astrocade (1977)"></option>
//       <option value = "Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)"></option>
//       <option value = "Commodore 64">Commodore 64 (1982)"></option>
//        </select>


// class App extends Component {
//   render() {
    
//   }
// }