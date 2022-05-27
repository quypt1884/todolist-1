import React, {Component} from 'react';

class ToDo extends Component{
    render() {
        return (
            <div className='flex justify-between items-center border border-slate-300 rounded-lg p-2 m-1'>
                <p className={this.props.todo.complete ? "line-through" :""}>{this.props.todo.task}</p>
                <div>
                    <button className='border border-teal-300 rounded-lg bg-teal-300 p-2 mr-1' onClick={this.props.changeStatus}>Done</button>
                    <button className='border border-red-300 rounded-lg bg-red-300 p-2' onClick={this.props.deleteToDo}>Remove</button>
                </div>
            </div>
        );
    }
}
export default ToDo