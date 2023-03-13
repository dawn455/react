import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList1 from './TodoList1'
import TodoList2 from './TodoList2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList1 />
    <TodoList2 />
  </React.StrictMode>,
)
