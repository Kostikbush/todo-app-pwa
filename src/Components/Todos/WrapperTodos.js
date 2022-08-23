import React from "react";
import TodoList from "./TodoList";
import './todos.scss'

const AddTodo = React.lazy(() => import('./AddTodo'))
export const WrapperTodos = () => {
    return (
        <div>
          <React.Suspense fallback={<p className="text-white">LOADING...</p>}>
              <AddTodo/>
          </React.Suspense>
          <TodoList/>
        </div>
    )
}