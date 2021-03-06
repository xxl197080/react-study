import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import store from '../../store'
import { setInputVal, addTodo } from '../../store/actionCreat'

class TodoApp extends React.Component {
  constructor  (props) {
    super(props)
    this.state = {
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    }
    store.subscribe(() => {
      console.log('数据改变了')
      this.setState({
        inputVal: store.getState().inputVal,
        todoList: store.getState().todoList
      })
    })
  }
  render () {
    return (
      <div>
        <TodoInput inputVal={this.state.inputVal} changeInput={this.changeInput} addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
      </div>
    )
  }
  changeInput = (event) => {
    let value = event.target.value
    // dispatch 接收的是一个对象，所以要加括号调用
    store.dispatch(setInputVal(value))
  }
  addTodo () {
    store.dispatch(addTodo())
  }
}

export default TodoApp;
