const defaultState = {
  user: {}
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'LOGIN_IN') {
    newState.user = {userInfo: '张三'}
  }
  return newState
}
