import { Component, Fragment, PureComponent, useState } from "react";
import ReactDOM from "react-dom";

console.log("hellooooo")

class DefiningUser extends Component{
  render(){
    console.log("defining user")
    return <label>Hello {this.props.user}!</label>
  }
}
class PageHome extends PureComponent{
    state = {}
  render(){
    console.log("page home!")
    return (
      <Fragment>
        <DefiningUser user={this.state.user} />
        <button onClick = {() => this.setState({user: "Maftuna"})}>set user</button>
      </Fragment>
    )
  }
}


ReactDOM.render(<PageHome />, document.getElementById('root'))
