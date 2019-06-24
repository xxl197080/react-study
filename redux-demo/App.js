import React from 'react'
// 引入仓库
import store from './store'

export class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: store.getState().name
    }
    store.subscribe(() => {
      this.setState(() => ({
        name: store.getState().name
      }))
    })
  }
  render () {
    return (
      <div>
        <h1>我叫hello - {this.state.name} </h1>
        <button onClick = {this.changeName}>点击修改仓库中的name</button>
      </div>
    )
  }
  changeName () {
    // 写一个 action
    let action = {
      type: 'CHANGENAME',
      value: '李四'
    }
    // 将 action 派发出去
    store.dispatch(action)
  }
}

export class World extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: store.getState().name
    }
    store.subscribe(() => {
      this.setState(() => ({
        name: store.getState().name
      }))
    })
  }
  render () {
    return (
      <div>
        <h1>我叫world - {this.state.name} </h1>
      </div>
    )
  }
}
