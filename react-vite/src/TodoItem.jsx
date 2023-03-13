import React,{Component} from "react";

class TodoItem extends Component{

  constructor(props){
    super(props)
    this.btnDel = this.btnDel.bind(this)
  }

  render(){
    return (
      <div >{this.props.content}
        <button  onClick={this.btnDel.bind(this)}>删除</button>
      </div>
    )
  }
  btnDel(){
    this.props.btnDel(this.props.index)
  }
}

export default TodoItem