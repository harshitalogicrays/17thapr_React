import React, {  PureComponent } from 'react'

export default class Purecomp extends PureComponent {
    constructor(props) {
      super(props)
        console.log("constructor called")
      this.state = {username:'Ram'  }
    }
    handleChange=()=>{
        console.log("handleChange called")
        this.setState({username:'Meera'})
    }
  render() {
    console.log("render called")
    return (
     <>
        <h1>{this.state.username}</h1>
        <button type="button" class="btn btn-primary" onClick={this.handleChange} >Change Name </button>
        
     </>
    )
  }
}
