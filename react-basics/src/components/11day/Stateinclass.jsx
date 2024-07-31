import React, { Component } from 'react'

export default class Stateinclass extends Component {
    constructor(props) {
      super(props) 
      this.state = {num1:10,num2:20,result:0,str:'',username:''}
    }
    addNumbers=()=>{
        this.setState({result:parseInt(this.state.num1) + parseInt(this.state.num2) , str : this.props.name })
    }
  render() {
    return (
     <>
       <div class="mb-3">
            <label for="" class="form-label">Num1</label>
            <input type="number" name="num1" class="form-control" value={this.state.num1}
           onChange={(e)=>this.setState({num1:e.target.value})} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Num2</label>
            <input type="number" name="num2" class="form-control" value={this.state.num2}
              onChange={(e)=>this.setState({num2:e.target.value})}/>
        </div>
     <button type="button" class="btn btn-primary" onClick={this.addNumbers}>Add Numbers</button>
     <h2>{this.state.str} :  {this.state.result}</h2>
     <hr/>
     <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" name="username" class="form-control" value={this.state.username} 
            onChange={(e)=>this.setState({username:e.target.value})}/>
        </div>
        <h1>Hello {this.state.username}</h1>
        <hr/>
     </>
    )   
  }
}
