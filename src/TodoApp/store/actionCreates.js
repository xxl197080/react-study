import { GET_TODO_LIST, FETCH_TODO_LIST, ADD_TODO, INPUT_CHANGE } from './actionTypes'

// 获取 todoList 的 action
export const getTodoList = (list) => {
  return {
    type: GET_TODO_LIST,
    list
  }
}

export const getInitTodoList = () => {
  return {
    type: FETCH_TODO_LIST
  }
}
export const addTodo = () => {
  return {
    type: ADD_TODO
  }
}
export const changeInput = (value) => {
  return {
    type: INPUT_CHANGE,
    value
  }
}

// redux-thunk

// export const fetchTodoList = () => {
//   return (dispatch, getState) => {
//     fetch('http://localhost:3001/todos')
//       .then(response => response.json())
//       .then(res => {
//         dispatch(getTodoList(res))
//       })
//   }
// }
