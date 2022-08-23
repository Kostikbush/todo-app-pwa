import { savedIndexDB } from "../../saved-app/indexdb";
import { ArrSort } from "../../sort/sort";
import { ADD_TODO, REMOVE_TODO, SORT_ARR, COMPLETED_TODO, WRIGHT_CHANGE, TIMES_UP,SAVED_TODOS, GET_TODOS, NOT_COMPLETED_TODO, REMOVE_ALL_TO_DAY_TODO, REMOVE_ALL_COMPLETED_TODO, REMOVE_ALL_TIMES_UP_TODO, DELETE_ALL_TODOS } from "../type";
const initialState = {
        todosToDay: [],
        todosCompleted:[],
        todosTimeUp: [],
}
export const todosReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            const date = new Date();
            const timeCreate = date.getHours()*3600 + date.getMinutes()*60; 
            const dateCreate = date.getFullYear()+date.getMonth()+date.getDate();
            const todo = {
                title: action.data.title,
                id: Date.now(),
                complete: false,
                timeCreate: timeCreate,
                dateCreate: dateCreate,
                timeCompleted: action.data.timeCompleted,
            }
            return {
                ...state,
                todosToDay: [...state.todosToDay, todo],
            }
        case SORT_ARR: 
            return {
                ...state,
                todosToDay: [...state.todosToDay.sort(ArrSort)]
            }
        case REMOVE_TODO: 
            const newArrRemoveTodo = state.todosToDay.filter(todo => todo.id !== action.data.id);
            const newArrCompletedTodoRemove = state.todosCompleted.filter(todo => todo.id !== action.data.id)
            const newArrTimesUp = state.todosTimeUp.filter(todo => todo.id !== action.data.id)
            return {
                ...state,
                todosToDay: [...newArrRemoveTodo],
                todosCompleted: [...newArrCompletedTodoRemove],
                todosTimeUp: [...newArrTimesUp]
            }
        case COMPLETED_TODO:
            const newArrComplete = state.todosToDay.filter(todo => todo.id !== action.data.id);
            const newTodoCompleted = {
                id: action.data.id,
                complete: true,
                title: action.data.title,
                timeCreate: action.data.timeCreate,
                timeCompleted: action.data.timeCompleted,
                dateCreate: action.data.dateCreate,    
            }
            return {
                ...state,
                todosToDay: [...newArrComplete],
                todosCompleted: [...state.todosCompleted, newTodoCompleted]
            }
        case NOT_COMPLETED_TODO:
            const newArrNotComplete = state.todosCompleted.filter(todo => todo.id !== action.data.id);
            const newTodoNotCompleted = {
                id: action.data.id,
                complete: false,
                title: action.data.title,
                timeCreate: action.data.timeCreate,
                timeCompleted: action.data.timeCompleted,
                dateCreate: action.data.dateCreate,    
            }
            return {
                ...state,
                todosToDay: [...state.todosToDay, newTodoNotCompleted],
                todosCompleted: [...newArrNotComplete]
            }
        case WRIGHT_CHANGE:
            const newTodoWright = {
                id: action.data.id,
                complete: action.data.complete,
                title: action.data.changeTileTodo,
                timeCreate: action.data.timeCreate,
                timeCompleted: action.data.timeCompleted,
                dateCreate: action.data.dateCreate,
            }
            const itemIndex = state.todosToDay.findIndex(res => res.id === action.data.id);
                    const newTodos = [
                        ...state.todosToDay.slice(0, itemIndex),
                        newTodoWright, 
                        ...state.todosToDay.slice(itemIndex + 1)
                    ];
            return {
                ...state,
                todosToDay: [...newTodos]
            }
        case TIMES_UP: 
            const newArrTodo = state.todosToDay.filter(todo => todo.id !== action.data.todo.id)
            const todoNew = {
                title: action.data.todo.title,
                id: action.data.todo.id,
                timeCreate: action.data.todo.timeCreate,
                timeCompleted: null,
                complete: false
            }
            return {
                ...state,
                todosToDay: [...newArrTodo],
                todosTimeUp: [...state.todosTimeUp, todoNew]
            }

        case SAVED_TODOS:
            savedIndexDB(state)
            return {
                ...state
            }
        case GET_TODOS:
            return{
                ...state,
                todosToDay: action.data.todosToDay,
                todosCompleted: action.data.todosCompleted,
                todosTimeUp: action.data.todosTimeUp,
            }
        case REMOVE_ALL_TO_DAY_TODO:
            return {
                ...state,
                todosToDay: []
            }
        case REMOVE_ALL_COMPLETED_TODO:
            return {
                ...state,
                todosCompleted: []
            }
        case REMOVE_ALL_TIMES_UP_TODO:
            return {
                ...state,
                todosTimeUp: []
            }
        case DELETE_ALL_TODOS: 
            return {
                ...state,
                todosCompleted: [],
                todosTimeUp: [],
                todosToDay: [],
            }
        default: 
            return state
    }
}