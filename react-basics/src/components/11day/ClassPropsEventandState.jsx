import React, { Component } from 'react'

export default class ClassPropsEventandState extends Component {
    handleClick=()=>{
        alert(this.props.username)
    }
  render() {
    let {username:uname,isActive,children}=this.props
    return (
      <>
        <h1>Props, event and state demo</h1>
        {/* {this.props.username}
        {this.props.isActive ? <><h3>Active User</h3></> :<h3 >Not Active User</h3> }
        <br/>
        {this.props.children} */}

        {/* {uname}
        {isActive ? <><h3>Active User</h3></> :<h3 >Not Active User</h3> }
        <br/>
        {children} */}

        <button type="button" class="btn btn-primary me-3" onClick={()=>alert("button clicked")}>Click Me</button>
        <button type="button" class="btn btn-primary" onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}
