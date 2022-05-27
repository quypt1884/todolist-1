import React,{Component} from "react";

class ToDoForm extends Component {
    render() {
        return (
            <div>
                <form className='m-2' onSubmit={e=>e.preventDefault()}>
                    <input 
                        type="text"
                        placeholder='Add a todo'
                        value={this.props.value}
                        className='border border-black rounded-lg outline-none p-1 mr-3'
                        onChange={this.props.handleChangeAdd}
                    />
                    <button className="border border-teal-300 rounded-lg bg-teal-300 p-1 mr-3" onClick={this.props.addToDo}>Add</button>
                    <button onClick={this.props.clearDone} className="border border-red-300 rounded-lg bg-red-300 p-1">Clear done</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;