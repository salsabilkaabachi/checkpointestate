import './App.css';
import React, { Component } from "react";

class Counter extends Component {
  state = { fullName:"salsabil kaabachi",
  profession:"Tehnicien supérieur en réseaux informatique",   

  bio:"Ce technicien aura pour tâches principales d'installer et configurer les ordinateurs et autres équipements informatiques et d'assurer leur compatibilité. Il est aussi chargé d'installer et de configurer des logiciels et programmes informatiques" ,
    count: 0,
    int: 0,
  };
  componentDidMount() {
    console.log("componentDidMount()");
    const int = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({ int });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.int);
  } 
    
  
  
  

  render() {
    return <div>
        
    <h1 className="title">{this.state.fullName}</h1>
      
  <p className="paragraphe">{this.state.profession}</p>
    <p className="paragraphe">{this.state.bio}</p>
    <p > Time:{this.state.count}</p></div>;
  }
}

export default Counter