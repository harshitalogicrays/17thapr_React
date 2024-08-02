import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props) {
      super(props)
        console.log("constructor called")
      this.state = {username:'Ram'  }
      this.t=''
    }
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProps called")
        return state
    }
    componentDidMount(){
        console.log("componentDidMount called")
    }
    handleChange=()=>{
        console.log("handleChange called")
        this.setState({username:'Meera'})
    }
    shouldComponentUpdate(nextprops,nextState){
        console.log("shouldComponentUpdate called")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        // clearInterval(this.t)
        console.log("componentWillUnmount called")  
    }
  render() {
    console.log("render called")
    // this.t= setInterval(()=>{console.log("timer")},1000)
    return (
     <>
        <h1>{this.state.username}</h1>
        <button type="button" class="btn btn-primary" onClick={this.handleChange} >Change Name </button>
        
     </>
    )
  }
}
