import React, { useState } from 'react'
import ToDoForm from '../../component/ToDoForm'
import ToDo from '../../component/ToDo'

const ToDoList = () => {
  const [txtToDo, setTxtToDo] = useState('');
  const [todolist, setToDoList] = useState([
    {
      "id": 1,
      "task": "Give dog a bath",
      "complete": true
    }, {
      "id": 2,
      "task": "Do laundry",
      "complete": true
    }, {
      "id": 3,
      "task": "Vacuum floor",
      "complete": false
    }, {
      "id": 4,
      "task": "Feed cat",
      "complete": true
    }, {
      "id": 5,
      "task": "Change light bulbs",
      "complete": false
    }
  ]);

  const changeStatus = (id)=> {
    const mapped = todolist.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const addToDo = (txtTodo) => {
    const todo = [{id: Date.now(), task: txtTodo, complete: false},...todolist]
    setToDoList(todo);
    setTxtToDo("");
  }

  const deleteToDo = (id)=> {
    let listToDo= todolist.filter(todo=> {
      return !(todo.id === id)
    })
    setToDoList(listToDo);
  }

  const clearDone = () => {
    let todo = todolist.filter( todo => {
      return todo.complete === false
    })
    setToDoList(todo);
  }

  const onchange = (e) => {
    setTxtToDo(e.currentTarget.value)
  }

  return (
    <div className='w-1/2 m-auto'>
        <h1 className='font-semibold text-xl'>TO DO LIST FUNCTION</h1>
        <ToDoForm clearDone={clearDone} value={txtToDo} addToDo={()=>addToDo(txtToDo)} onchange={(e)=>onchange(e)} />
        {
          todolist.map(todo => {
            return (
              <ToDo key={todo.id} name="todo" todo={todo}  deleteToDo = {()=>deleteToDo(todo.id)} changeStatus={()=>changeStatus(todo.id)}/>
            )
          })
        }
    </div>
  )
}

export default ToDoList