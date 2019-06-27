import React, { Component } from 'react'
import Index from '@/views/index'
import Detail from '@/views/detail'
import Login from '@/views/login'
import RouterAuth from '@/utils/Auth'
// 1、引入路由
// import { BrowserRouter, HashRouter } from 'react-router-dom'
// as 给 HashRouter 取了一个别名
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <RouterAuth path="/detail/:id" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    )
  }
}
