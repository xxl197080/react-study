import {INPUTVAL, ADDTODO} from '../actionTypes'

const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case INPUTVAL:
    newState.inputVal = action.value
    return newState

    case ADDTODO:
      newState.todoList.push(state.inputVal)
      return newState
    default:
      return newState;
  }
}
