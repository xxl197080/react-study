import { GET_TODO_LIST } from './actionTypes'

const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === GET_TODO_LIST) {
    // console.log(newState)
    newState.todoList = action.list
  }
  return newState;
}
