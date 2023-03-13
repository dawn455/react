import React, { Component, Fragment, useRef, useState } from "react";
import './style.css'
import TodoItem from './TodoItem'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', '尤克里里']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)} />
          <button onClick={this.btnClcik.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem 
                  content={item} 
                  index={index} 
                  key={index}
                  btnDel={this.btnDel.bind(this)}></TodoItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    }
    )
  }
  btnClcik() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  btnDel(index) {
    // immutable
    // state不允许我们做任何的改变 拷贝副本改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList
