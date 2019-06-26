import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import {TodoListWarp, TodoInputWarp } from './style'
import store from '@/store'
import { getInitTodoList } from './store/actionCreates'

// 自己简单实现 redux-thunk

// 先保存 store.dispatch 原始的方法
let next = store.dispatch;
// 再重写 store.dispatch 方法，接收到一个 action 动作
store.dispatch = action => {
  // 判断 action 是不是一个函数，是的话就执行这个 action
  // 并把 store.dispatch 和 store.getState 方法传过去
  // action 执行之后又会 dispatch 跑到这里面来,这时候就是 对象的形式，直接走else
  if (typeof action === 'function') {
    action(store.dispatch, store.getState)
  } else {
    // 否则 action 不是函数，就可以用 store.dispatch 原始的方法派发
    next (action)
  }
}

export default class TodoApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: store.getState().todo.inputVal,
      todoList: store.getState().todo.todoList
    }
    store.subscribe(() => {
      this.setState({
        inputVal: store.getState().todo.inputVal,
        todoList: store.getState().todo.todoList
      })
    })
  }
  render() {
    // console.log(this.state.todoList)
    return (
      <TodoListWarp>
        <TodoInputWarp>
          <Input placeholder="请输入内容" />
          <Button type="danger">ADD</Button>
        </TodoInputWarp>
        <List dataSource={this.state.todoList}
          locale={{emptyText: '暂无数据'}}
          renderItem={item => {
            return (
              <List.Item key={item.id}>
                {item.name}
              </List.Item>
            )
          }}
          />
      </TodoListWarp>
    )
  }
  componentDidMount () {
    store.dispatch(getInitTodoList())
    // fetch('http://localhost:3001/todos')
    //   .then(response => response.json())
    //   .then(res => {
    //     // console.log(res)
    //     store.dispatch(getTodoList(res))
    //   })
  }
}
