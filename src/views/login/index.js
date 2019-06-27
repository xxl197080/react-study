import React, { Component } from 'react'
import {connect} from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <button onClick={this.props.loginIn}>点击登陆成功</button>
      </div>
    )
  }
}

// const mapDispatchToProps = {
//   loginIn: () => ({type: 'LOGIN_IN'})
// }

// 处理登陆成功之后跳转到那个页面
const mapDispatchToProps = (dispatch, props) => {
  return {
    loginIn: () => {
      console.log(props)
      dispatch({type: 'LOGIN_IN'})
      // 判断state 有 bug ，state 是一次性的，如果在点击了其他页面打回到登录页面，在登录页面刷新一下，state就没有了，所以要通过 search 来判断，search 需要字符串切割
      let redirect = props.location.state ? props.location.state.redirect : '/'
      props.history.push(redirect)
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
