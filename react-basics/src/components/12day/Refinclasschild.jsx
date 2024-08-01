import React, { Component } from 'react'

export default class Refinclasschild extends Component {
  render() {
    return (
      <div>
        <button
            type="button"
            class="btn btn-primary" onClick={()=>alert(this.props.innerRef.current.value)}
        >
            Button
        </button>
        
      </div>
    )
  }
}
