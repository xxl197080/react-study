const initState = {
  name: '张三'
}

export default (state = initState, action) => {
  // 需要 return 一份新的 state 数据出去，这个函数会默认进来一次，我们可以在默认进来的时候做仓库的初始化操作。
  if (action.type === 'CHANGENAME') {
    // 生成一个新的 state 赋值给现在的 state，但是不能改变现在这个state
    // 方法 1
    // return Object.assign({}, state, { name: action.value })

    // 方法 2
    // return { ...state, name: action.value }

    // 方法 3
    // let newState = { ...state }
    // newState.name = action.value
    // return newState

    // 方法 4
    let newState = JSON.parse(JSON.stringify(state))
    newState.name = action.value
    return newState
  }
  // 上面条件都没有的时候，返回当前不变的 state
  return state;
}
