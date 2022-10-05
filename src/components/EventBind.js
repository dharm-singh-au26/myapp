import React, { Component } from 'react'

 class EventBind extends Component {

  constructor(props){
    super(props)
    this.state = {
      message : 'Hello EventBind'
    }
  }
  clickHandler(){
    this.setState({
      message : 'GoodBye'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click EventBind</button> */}
        <button onClick={()=> this.clickHandler()}>Click EventBind</button>
      </div>
    )
  }
}

export default EventBind