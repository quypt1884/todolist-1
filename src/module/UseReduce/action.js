import {SET_TODO,ADD_TODO,DELETE_TODO,CLEAR_DONE,CHANGE_STATUS} from './constants'

export const setToDo = payload =>  {
    return {
        type: SET_TODO,
        payload
    }
}

export const addToDo = payload =>  {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteToDo = payload =>  {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const clearDone = () =>  {
    return {
        type: CLEAR_DONE,
    }
}

export const changeStatus = payload =>  {
    return {
        type: CHANGE_STATUS,
        payload
    }
}
