import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import {TodoListWarp, TodoInputWarp } from './style'
import store from '@/store'
import { getTodoList } from './store/actionCreates'

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
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(res => {
        // console.log(res)
        store.dispatch(getTodoList(res))
      })
  }
}
