import React, { Component, createRef } from 'react'
import Refinclasschild from './Refinclasschild'

export default class Refinclass extends Component {
    constructor(props) {
      super(props)  
      this.state = {name:'' }
      this.myRef=React.createRef()
      this.focusRef=createRef()
    }
    fetchdata=()=>{
        this.myRef.current.style.color='blue'
        alert(this.myRef.current.value)}
    componentDidMount(){  this.focusRef.current.focus()   }
  render() {
    console.log("render called")
    return (
      <div>
        {/* <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input   type="text" name="name" class="form-control" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
         </div> */}
          <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input   type="text" name="name" class="form-control" ref={this.myRef}  defaultValue="ram"/>
         </div>
        <button type="button" class="btn btn-primary"  onClick={this.fetchdata}> Fetch Data </button>
        <br/>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input   type="text" name="name" class="form-control" ref={this.focusRef}/>
         </div>
         <Refinclasschild innerRef={this.focusRef}/>
      </div>
    )
  }
}
