import React, { Component, Fragment, useRef, useState } from "react";
import './style.css'
import TodoItem from './TodoItem'


class TodoList extends Component {
  // 当组件的state或者props发生改变的时候render函数会重新渲染页面
  // 当父组件的render函数被运行时，它的子组件的render都将被重新运行一次
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', '尤克里里']
    }
    this.inputChange = this.inputChange.bind(this)
    this.btnClcik = this.btnClcik.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange} />
          <button onClick={this.btnClcik}>提交</button>
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
