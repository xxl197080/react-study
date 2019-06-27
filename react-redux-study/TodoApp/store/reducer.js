import { GET_TODO_LIST, ADD_TODO, INPUT_CHANGE } from './actionTypes'

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
  if (action.type === ADD_TODO) {
    let lastTodoList = newState.todoList[newState.todoList.length - 1]
    let id = lastTodoList ? lastTodoList.id + 1 : 1
    newState.todoList.push({
      id: id,
      name: newState.inputVal
    })
  }
  if (action.type === INPUT_CHANGE) {
    newState.inputVal = action.value
  }
  return newState;
}
