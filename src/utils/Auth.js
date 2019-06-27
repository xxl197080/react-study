// 实现高阶组件， 高阶函数，判断登陆
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const RouterAuth = ({component: Component, user, ...rest}) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={
        (routerProps) => {
          console.log(routerProps)
          if (user.userInfo) {
            // 有登陆状态，直接返回想去的登陆页面
            return <Component {...routerProps} />
          } else {
            // 没登陆状态，打回登陆页面, 需要用到重定向组件
            return (
              <Redirect to={{
                pathname: '/login',
                state: {redirect: routerProps.match.url}
              }} />
            )
          }
        }
      }
    />
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(RouterAuth)
