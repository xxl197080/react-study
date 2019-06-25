import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import CarApp from './components/CarApp'

ReactDOM.render(
  <React.Fragment>
    <TodoApp />
    <hr />
    <CarApp />
  </React.Fragment>,
  document.getElementById('root')
)
