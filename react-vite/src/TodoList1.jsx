import React, { Fragment, useRef, useState } from "react"

function App() {

  let [arr,setArr] = useState([1,2]);

  let inputRef = useRef()

  // 点击按钮添加元素
  const add = () => {
    // 不能直接push
    setArr([...arr,inputRef.current.value]);
    // 清空输入框
    inputRef.current.value = ''
  }

  // 删除元素
  const delItem = (index) => {
    arr.splice(index,1);
    setArr([...arr])
  }
  return (
    <React.Fragment>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={add}>提交</button>
      </div>
      <ul>
        {
          arr.map((item,index) => 
          <li key={index}>{item}
            <button onClick={() => delItem(index)}>删除</button>
          </li>)

        }
      </ul>
    </React.Fragment>
  )
}

export default App
