import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Dharm'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Dharm'
            })
        },2000)
    }
  render() {
    console.log('******************Parent Component Render**********')
    return (
      <div>
        ParentComp
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
        </div>
    )
  }
}

export default ParentComp