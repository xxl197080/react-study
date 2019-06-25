// action create 文件

// 引入 定义 action 的常量名
import { INPUTVAL, ADDTODO, ADDCAR, REDUCECAR, DELTODO } from './actionTypes'

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
export const addCar = (goods) => {
  return {
    type: ADDCAR,
    goods
  }
}
export const reduceCar = (goods) => {
  return {
    type: REDUCECAR,
    goods
  }
}
export const delTodo = (index) => {
  return {
    type: DELTODO,
    index
  }
}
