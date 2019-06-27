// 容器组件
// 1、引入 react-redux 中的 connect
import { connect } from 'react-redux'
import TodoListUI from './ui'
import { addTodo, changeInput, getInitTodoList } from './store/actionCreates'

// 2、定义两个方法
/**
 * 2.1 mapStateToProps  从仓库中的 state 中获取数据，并作为 UI 组件的 props 传递下去
 * @param {Object} state 就是仓库中 state 的数据
 */
const mapStateToProps = (state) => {
  // console.log(state)
  let {todo} = state
  return {
    todoList: todo.todoList,
    inputVal: todo.inputVal
  }
}

/**
 * 2.2 mapDispatchToProps 将一些方法传递给 UI组件
 * @param {Function} dispatch 就是 store.dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onClick () {
      dispatch(addTodo())
    },
    onInputChg (event) {
      let value = event.target.value
      dispatch(changeInput(value))
    },
    getInitTodoList () {
      dispatch(getInitTodoList())
    }
  }
}

// 3、调用 connect 方法生成容器组件，并暴露出去
export default connect(mapStateToProps, mapDispatchToProps)(TodoListUI)
