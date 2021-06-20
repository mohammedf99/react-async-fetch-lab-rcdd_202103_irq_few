// create your App component here

import React, { Component } from "react";


export class App extends Component {
  
    state = {
      peopleInSpace: []
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }
  
  componentDidMount() {
    
    URL = "http://api.open-notify.org/astros.json";
    
    fetch(URL).then(res => res.json()).then(json => setState({peopleInSpace: json}));
    
  }
  
}

export default App;