import { Component } from "react";

class Test extends Component{
  componentWillMount() {
    console.log('hello world I componentwillmount')
  }
  render(){
    return <h1>hi there!</h1>
  }
}