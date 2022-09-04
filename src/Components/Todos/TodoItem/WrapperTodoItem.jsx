import  PropTypes  from 'prop-types';
import { CSSTransition } from "react-transition-group";
import { TodoItemChange } from "./TodoItemChange";
import {TodoItem} from './TodoItem'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { savedTodos, wrightChange } from '../../../redux/action';



const WrapperTodoItem = ({todo, index}) => {
    const [wright, setWrite] = useState(false);
    const [changeTileTodo, setHandleWrite] = useState(todo.title);
    const dispatch = useDispatch()

    const handleKeyPressWrite = (e) => {
        if(e.key === 'Enter') {
            setWrite(!wright)
            if(wright === true){
                dispatch(wrightChange(todo.id,changeTileTodo, todo.timeCreate,todo.timeCompleted,todo.dateCreate))
                setTimeout(()=> {
                    dispatch(savedTodos())
                },2000)
            }
        }
    }
    const handleWriteChange = (event) => {
        setHandleWrite(event.target.value)
      }

    const handleWright = () => {
        setWrite(!wright)
        if(wright === true){
            dispatch(wrightChange(todo.id,changeTileTodo, todo.timeCreate,todo.timeCompleted,todo.dateCreate))
            setTimeout(()=> {
                dispatch(savedTodos())
            },2000)
        }   
    }
    return (
            <li>
            {wright ? 
            <CSSTransition
                in={wright}
                timeout={400}
                classNames="write-transi"
                unmountOnExit
                appear
            >
                <TodoItemChange
                    todo={todo}
                    handleWright={handleWright}
                    handleKeyPressWrite={handleKeyPressWrite}
                    handleWriteChange={handleWriteChange}
                    />
            </CSSTransition>
             : 
             <CSSTransition
                timeout={400}
					classNames="write-transi"
				>
					<TodoItem 
						index={index} 
						todo={todo}
						handleWright={handleWright}
					/>
				</CSSTransition>
			}
		</li>
        
	);
};

TodoItem.propTypes ={
	index: PropTypes.number,
	todo: PropTypes.object,
};



export default WrapperTodoItem;