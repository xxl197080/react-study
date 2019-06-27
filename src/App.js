import React, { Component } from 'react'
import Index from '@/views/index'
import Detail from '@/views/detail'
// 1、引入路由
// import { BrowserRouter, HashRouter } from 'react-router-dom'
// as 给 HashRouter 取了一个别名
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    )
  }
}
