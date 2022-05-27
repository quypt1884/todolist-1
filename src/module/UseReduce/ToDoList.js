import React from 'react'
import { useReducer } from 'react'
import reducer, {initState} from './reducer'
import {setToDo,addToDo, deleteToDo,clearDone,changeStatus } from './action'
import ToDoForm from '../../component/ToDoForm'
import ToDo from '../../component/ToDo'
 
const ToDoList = () => {

  const [state, dispatch] = useReducer(reducer,initState)
  const {todo, toDoList} = state

  return (
    <div className='w-1/2 m-auto'>
    <h1 className='font-semibold text-xl'>TO DO LIST USEREDUCER</h1>
    <ToDoForm 
      addToDo = {()=>{
        dispatch(addToDo(todo))
        dispatch(setToDo(''))
      }}
      clearDone={()=>dispatch(clearDone())} 
      value={todo}
      onchange = { e=> dispatch(setToDo(e.target.value))}
      />
    {
      toDoList.map(todo => {
        return (
          <ToDo 
            key={todo.id} 
            name="todo" 
            todo={todo}  
            deleteToDo = {()=>{dispatch(deleteToDo(todo.id))}}
            changeStatus={()=>{dispatch(changeStatus(todo.id))}}
          />
        )
      })
    }
</div>
  )
}

export default ToDoList