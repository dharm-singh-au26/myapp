import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Render')
    return (
      <div>PureComp{this.props.name}</div>
    )
  }
}

export default PureComp