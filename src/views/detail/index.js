import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Hello extends Component {
  render () {
    return (
      <h2 onClick={this.goHome}>hello</h2>
    )
  }
  goHome = () => {
    this.props.history.push('/')
  }
}
const Hello2 = withRouter(Hello)

export default class Detail extends Component {
  render() {
    console.log(this.props.match.params)
    let {match} = this.props
    return (
      <div>
        <h1>详情页</h1>
        <h2>{ match.params.id }</h2>
        {/* <Hello history={this.props.history} /> */}
        {/* <Hello {...this.props} /> */}
        <Hello2 />
      </div>
    )
  }
}
