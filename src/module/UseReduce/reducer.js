import { SET_TODO,ADD_TODO, CHANGE_STATUS, DELETE_TODO,CLEAR_DONE } from "./constants"

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
    switch(action.type) {
        case SET_TODO:
            return {
                ...state,
                todo:action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                toDoList: [...state.toDoList.filter(item=>item.id !== action.payload)]
            }
        case CLEAR_DONE:
            return {
                ...state,
                toDoList: [...state.toDoList.filter(item => !item.complete)]
            }
        case CHANGE_STATUS:
            return {
                ...state,
                toDoList: [...state.toDoList.map(item => item.id === action.payload ? { ...item, complete: !item.complete } : {...item})]
            }
        case ADD_TODO:
            if(action.payload) {
                return {
                    ...state,
                    toDoList: [{id: Date.now(), task: action.payload, complete: false},...state.toDoList]
                }
            }
            return {
                ...state
            }
        default:
            throw new Error('Ivalid action')
    }
}
export default reducer