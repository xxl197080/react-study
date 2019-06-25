// action create 文件

// 引入 定义 action 的常量名
import { INPUTVAL, ADDTODO } from './actionTypes'

export const setInputVal = (value) => {
  return {
    type: INPUTVAL,
    value
  }
}
export const addTodo = () => {
  return {
    type: ADDTODO
  }
}
