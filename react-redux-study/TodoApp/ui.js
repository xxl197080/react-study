import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import {TodoListWarp, TodoInputWarp } from './style'


export default class TodoListUI extends Component {
  render() {
    let {todoList, onClick, inputVal, onInputChg} = this.props
    return (
      <TodoListWarp>
        <TodoInputWarp>
          <Input value={inputVal} onChange={onInputChg} placeholder="请输入内容" />
          <Button type="danger" onClick={onClick}>ADD</Button>
        </TodoInputWarp>
        <List dataSource={todoList}
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
    this.props.getInitTodoList()
  }
}
