import React, {Component} from 'react';
import ToDo from './component/ToDo';
import ToDoForm from './component/ToDoForm';

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
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
      ],
      todo:""
    };
  }

  handleChangeAdd = (e) => {
    this.setState({todo : e.target.value});
  }

  addToDo = () => {
    if(this.state.todo.length) {
      let id = Date.now()
      this.state.todos.unshift(
        {id, task: this.state.todo, complete: false}
      )
      this.setState({ 
        todos: this.state.todos,
        todo: "",
      });
    }
  }

  clearDone = () => {
    const clrDone = this.state.todos.filter( todo =>!todo.complete)
    this.setState({todos: clrDone})
    // console.log(this)
  }

  changeStatus = (id ) => {
    let mapped = [...this.state.todos];
    mapped.map(task => {
      if(task.id ===id)
      {
        task.complete =!task.complete;
      }
      return task;
    });
    this.setState({mapped});
  }

  deleteToDo = (id ) => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== id
    });
    this.setState({ todos });
  }

  render() {
    return (
      <div  className='w-1/2 m-auto'>
        <h1 className='font-semibold text-xl'>TO DO LIST CLASS</h1>
        <ToDoForm clearDone={this.clearDone} value={this.state.todo} handleChangeAdd= {e=>this.handleChangeAdd(e)} addToDo={this.addToDo} />
        {
          this.state.todos?.map(todo => {
            return (
              <ToDo key={todo.id} name="todo" todo={todo} deleteToDo={()=>this.deleteToDo(todo.id)} changeStatus={()=>this.changeStatus(todo.id)}/>
            )
          })
        }
      </div>
    );
  }
}
export default ToDoList