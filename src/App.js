import './App.css';


import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);

    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    // console.log("componentDidMount()");
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 10 });
    // }, 5000);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount()");
  }
  handleshow = () => {
    this.setState({ show: !this.state.show });
    // if (!this.state.show) {
    //   clearInterval(this.state.int);
    //   this.setState({ count: 0 });
    // } else {
    //   const int = setInterval(() => {
    //     this.setState({ count: this.state.count + 1 });
    //   }, 1000);
    //   this.setState({ int });
    // }
  };
  render() {
    console.log("render()");
    console.log(this.state.int);

    return (
      <header className='hed'>
      <div className='bag'>
        {this.state.show ? <Counter /> : ""}
        <br />
       
        <button className='button' onClick={this.handleshow}>
          {" "}
          {this.state.show ? "Hide" : "Show"}
        </button>
        <br />
        
      </div>
      </header>

      
    );
  }
}

export default App