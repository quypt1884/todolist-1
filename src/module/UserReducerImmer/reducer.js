import { SET_TODO,ADD_TODO, CHANGE_STATUS, DELETE_TODO,CLEAR_DONE } from "./constants"
 import produce from 'immer';
export const initState =  {
    todo:"",
    toDoList: 
    [{
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
     }]
}

const reducer = (state, action) => {
    produce(state, (draft)=>{
        switch(action.type) {
            case SET_TODO:
                draft.todo.push(action.payload)
                break;
            case DELETE_TODO:
                draft.toDoList.filter(item=>item.id !== action.payload)
                break;
            case CLEAR_DONE:
                draft.toDoList.filter(item=>!item.complete)
                break;
            case CHANGE_STATUS:
                draft.toDoList.map(item => item.id === action.payload ? { ...item, complete: !item.complete } : {...item})
                break;
            case ADD_TODO:
                if(action.payload) {
                    draft.toDoList.unshift({id: Date.now(), task: action.payload, complete: false})
                    break;
                }
                
                break
            default:
                throw new Error('Ivalid action')
        }
    });
}
export default reducer