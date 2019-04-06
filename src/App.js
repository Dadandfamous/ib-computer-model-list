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

  state = {}

  // this bit changes local react state, when using dropdown:
  updateSelection = (event)  => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    
    <div className="App">
    <select  onChange={this.updateSelection}>
      <option value = {this.state.value}>-- pick a model --</option>

    {/*////// NO YEAR BRACKETS */}

            {Object.keys(data).map(comp => <option value={comp} key={comp}>{comp} {data[comp].year}</option>)}

    {/*////// NO YEAR BRACKETS */}

       </select>
    
    </div>
  )
  }
}
  export default App;

