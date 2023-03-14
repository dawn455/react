import React,{Component} from "react";

class TodoItem extends Component{

  constructor(props){
    super(props)
    this.btnDel = this.btnDel.bind(this)
  }

  render(){
    const {content} = this.props
    return (
      <div >{content}
        <button  onClick={this.btnDel.bind(this)}>删除</button>
      </div>
    )
  }
  btnDel(){
    const {btnDel,index} = this.props
    btnDel(index)
  }
}


export default TodoItem