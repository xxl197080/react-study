import React, { Component } from 'react'
import Home from '@/views/index/home'
import List from '@/views/index/list'
import About from '@/views/index/about'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

export default class Index extends Component {
  render() {
    // let {match} = this.props
    return (
      <div>
        <NavLink to={`/home`}>首页</NavLink> ---
        <NavLink to={`/list`}>列表页</NavLink> ---
        <NavLink to={`/about`}>关于页</NavLink>
        <hr />
        {/* <Switch>
          <Route path={`/home`} component={Home} />
          <Route path={`/list`} component={List} />
          <Route path={`/about`} component={About} />
          <Route component={Home} />
        </Switch> */}
        <Switch>
          <Route path={`/home`} component={Home} />
          <Route path={`/list`} component={List} />
          <Route path={`/about`} component={About} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}
