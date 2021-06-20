// create your App component here

import React { Component } from "react";


export class App extends React.Component {
  
  
  componentDidMount() {
    
    URL = "http://api.open-notify.org/astros.json";
    
    fetch(URL).then(res => res.json()).then(json => console.log(json));
    
  }
  
}
