import { ADD_TODO, CHANGE_FONT, CHANGE_THEME, COMPLETED_TODO, DELETE_ALL_TODOS, GET_SETTINGS, GET_TODOS, LOADER_OFF, LOADER_ON, NOT_COMPLETED_TODO, PLAY_MUSIC, REMOVE_ALL_COMPLETED_TODO, REMOVE_ALL_TIMES_UP_TODO, REMOVE_ALL_TO_DAY_TODO, REMOVE_TODO, SAVED_SETTINGS, SAVED_TODOS, SHOW_ALERT, SORT_ARR, TIMES_UP, WRIGHT_CHANGE} from "./type";

export function loaderOn() {
    return {
        type: LOADER_ON
    }
}
export function loaderOff() {
    return {
        type: LOADER_OFF
    }
}

export function addTodo (title, timeCompleted=null){
    return {
        type: ADD_TODO,
        data: {title, timeCompleted}
    }
}


export function arrSots() {
    return {
        type: SORT_ARR,
    }
}

export function removeTodo(id){
    return{
        type: REMOVE_TODO,
        data: {id},
    }
}

export function completeTodo (id, title, timeCreate, timeCompleted,dateCreate){
    return {
        type: COMPLETED_TODO,
        data: {id, title, timeCreate, timeCompleted, dateCreate}
    }
}
export function notCompleteTodo(id, title, timeCreate, timeCompleted, dateCreate){
    return {
        type: NOT_COMPLETED_TODO,
        data: {id, title, timeCreate, timeCompleted,dateCreate},
    }
}

export function wrightChange(id,changeTileTodo, timeCreate,timeCompleted,dateCreate) {
    return {
        type: WRIGHT_CHANGE,
        data: {id, changeTileTodo, timeCreate,timeCompleted,dateCreate}
    }
}

export function timesUp (todo) {
    return {
        type: TIMES_UP,
        data: {todo}
    }
}

export function savedTodos(){
    return{
        type: SAVED_TODOS,
    }
}
export function savedSettings(){
    return {
        type: SAVED_SETTINGS,
    }
}

export function getTodos(){
    return dispatch => {
        dispatch(loaderOn())
        let idbSupported = false;
        let db;
        function indexedDBOk() {
            idbSupported = true;
            return "indexedDB" in window;
        }
        if(!indexedDBOk) return;
        let openRequestTodo = indexedDB.open('todos', 1);

        openRequestTodo.onupgradeneeded = function(e) {
            let thisDB = e.target.result;
            if(!thisDB.objectStoreNames.contains('todos')) {
                 thisDB.createObjectStore('todos');
            }
        }
            
        openRequestTodo.onsuccess = function(e) {
            db = e.target.result;
            let transaction = db.transaction("todos","readonly");
            let todos = transaction.objectStore("todos");
            let request = todos.openCursor();

            request.onerror = function(e) {
                console.log("Error",e.target.error);
            }
            request.onsuccess = function() {
                let cursor = request.result;
                if(cursor){
                    let value = cursor.value;
                    dispatch({
                        type: GET_TODOS,
                        data: value,
                    })
                }
                
            }
        }
        openRequestTodo.onerror = function() {
            console.log('error')
        }
        dispatch(loaderOff())
    }
}
export function getSettings() {
    return dispatch => {
        dispatch(loaderOn())
        let idbSupported = false;
        let db;
        function indexedDBOk() {
            idbSupported = true;
            return "indexedDB" in window;
        }
        if(!indexedDBOk) return;
        let openRequestTodo = indexedDB.open('settings', 1);

        openRequestTodo.onupgradeneeded = function(e) {
            let thisDB = e.target.result;
            if(!thisDB.objectStoreNames.contains('settings')) {
                 thisDB.createObjectStore('settings');
            }
        }
            
        openRequestTodo.onsuccess = function(e) {
            db = e.target.result;
            let transaction = db.transaction("settings","readonly");
            let settings = transaction.objectStore("settings");
            let request = settings.openCursor();

            request.onerror = function(e) {
                console.log("Error",e.target.error);
            }
            request.onsuccess = function() {
                let cursor = request.result;
                if(cursor){
                    let key = cursor.key; 
                    let value = cursor.value; 
                    dispatch({
                        type: GET_SETTINGS,
                        data: value,
                    })
                }
                
            }
        }
        openRequestTodo.onerror = function() {
            console.log('error')
        }
        dispatch(loaderOff())
    }
}


export function removeAllTodoDay(){
    return {
        type: REMOVE_ALL_TO_DAY_TODO,
    }
}

export function removeAllTodoCompleted(){
    return {
        type: REMOVE_ALL_COMPLETED_TODO
    }
}
export function removeAllTodoTimesUp(){
    return {
        type: REMOVE_ALL_TIMES_UP_TODO,
    }
}

export function changeTheme(theme){
    return {
        type: CHANGE_THEME,
        data: {theme}
    }
}
export function changeFont(font){
    return {
        type: CHANGE_FONT,
        data: {font},
    }
}
export function playMusic(){
    return {
        type: PLAY_MUSIC,
    }
}

export function showAlert(){
    return {
        type: SHOW_ALERT,
    }
}
export function deleteAllTodos(){
    return {
        type: DELETE_ALL_TODOS,
    }
}