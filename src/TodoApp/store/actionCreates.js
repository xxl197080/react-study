import { GET_TODO_LIST } from './actionTypes'

// 获取 todoList 的 action
export const getTodoList = (list) => {
  return {
    type: GET_TODO_LIST,
    list
  }
}
