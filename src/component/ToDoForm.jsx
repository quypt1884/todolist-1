import React from 'react'

const ToDoForm = ({onchange,value,addToDo,clearDone}) => {
    return (
    <div>
        <form className=' m-2' onSubmit={e=>e.preventDefault()}>
            <input 
                type="text"
                placeholder='Add a todo'
                value={value}
                onChange={onchange}
                className='border border-black rounded-lg outline-none p-1 mr-3'
            />
            <button className="border border-teal-300 rounded-lg bg-teal-300 p-1 mr-3" onClick={addToDo}>Add</button>
            <button onClick={clearDone} className="border border-red-300 rounded-lg bg-red-300 p-1">Clear done</button>
        </form>
    </div>
  )
}

export default ToDoForm