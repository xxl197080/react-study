const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'INPUTVAL':
    return Object.assign({}, state, { inputVal: action.value })

    case 'ADDTODO':
      return Object.assign({}, state, {
        todoList: [...state.todoList, state.inputVal]
      })
    default:
      return state;
  }
}
