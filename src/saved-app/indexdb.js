let idbSupported = false;
let db;
export const savedIndexDB = (savedData) => {
    const todos = 'todos';
    const settings = 'settings'; 

    function indexedDBOk() {
        idbSupported = true;
        return "indexedDB" in window;
    }
    if(!indexedDBOk) return;
    if(Array.isArray(savedData.todosToDay)){
        let openRequestTodo = indexedDB.open(todos, 1);

        openRequestTodo.onupgradeneeded = function(e) {
            let thisDB = e.target.result;
            if(!thisDB.objectStoreNames.contains(todos)) {
                 thisDB.createObjectStore(todos);
            }
        }
            
        openRequestTodo.onsuccess = function(e) {
            db = e.target.result;
            let transaction = db.transaction("todos","readwrite");
            let todos = transaction.objectStore("todos");
            let request = todos.put(savedData,0);

            request.onerror = function(e) {
                console.log("Error",e.target.error);
            }
            request.onsuccess = function(e) {
            }
        }
            
        openRequestTodo.onerror = function(e) {
            console.log('error')
        }   
    }
    if(typeof(savedData.theme) === 'string'){
        let openRequestSettings = indexedDB.open(settings, 1);

        openRequestSettings.onupgradeneeded = function(e) {
            let thisDB = e.target.result;
            if(!thisDB.objectStoreNames.contains(settings)) {
                 thisDB.createObjectStore(settings);
            }
        }
            
        openRequestSettings.onsuccess = function(e) { 
            db = e.target.result;
            let transaction = db.transaction(settings,"readwrite");
            let setting = transaction.objectStore(settings);
            let request = setting.put(savedData,0);

            request.onerror = function(e) {
                console.log("Error",e.target.error);
            }
            request.onsuccess = function(e) {
            }
        }
            
        openRequestSettings.onerror = function(e) {
            console.log('error')
        }   
    }     
}