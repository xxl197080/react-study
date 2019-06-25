import React from 'react'

class TodoInput extends React.Component {
  render () {
    return (
      <div>
        <input type="text" value={this.props.inputVal} onChange={this.props.changeInput} />
        <button onClick={this.props.addTodo}>ADD</button>
      </div>
    )
  }
}

export default TodoInput
