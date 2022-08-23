import React, { useContext, useState } from "react";
import {AppContext} from "../../context/context";
import {BsClockHistory} from 'react-icons/bs'
import {MdPostAdd} from 'react-icons/md';
import { WrapperTimeTodo } from "./TimerTodo/WrapperTimeTodo";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { addTodo, arrSots, savedTodos } from "../../redux/action";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [showClock, setShowClock] = useState(false);
    const {theme, font} = useContext(AppContext);
    const [textAddForm, setTextAddForm] = useState('');
    const [timeCompleted, setTimeCompleted] = useState(null)
    const AddFormInputHandler = (event) => {
        setTextAddForm(event.target.value);
    }
    const onKeyPressHandler = (event) => {
        if(event.key === 'Enter'){
            if(textAddForm.trim()) {
                dispatch(addTodo(textAddForm, timeCompleted))
                setTextAddForm('');
                setTimeCompleted(null);
                dispatch(arrSots())
                setTimeout(()=> {
                    dispatch(savedTodos())
                },2000)
            } 
         } 
         
    }
    const onClickHandler = () => {   
            if(textAddForm.trim()) {
                dispatch(addTodo(textAddForm, timeCompleted))
                setTextAddForm('');
                setTimeCompleted(null);
                dispatch(arrSots());
                setTimeout(()=> {
                    dispatch(savedTodos())
                },2000)
            }
    }
    const handleShowClock = () => {
        setShowClock(!showClock)
    }
    return (
        <div className={`${font} ${theme}-form-add  flex items-center justify-center mb-4 rounded-2xl border-2 p-5 py-2 mt-20 w-full`}>
            <input 
                onKeyPress={onKeyPressHandler}
                maxLength="40" 
                value={textAddForm}
                placeholder="Add a task" 
                className={
                    `${theme}-add-input 
                    bg-transparent w-full 
                    border-none ${font} 
                    outline-none`
                    } 
                onChange={AddFormInputHandler}
                />
            <div className="text-white flex justify-between align-middle text-center">
                <button>
                    <BsClockHistory
                     className={`${theme}-icon-form mx-3 self-end`} 
                     size={20} 
                     onClick={handleShowClock}/>
                </button>

                <CSSTransition
                    in={showClock}            
                    timeout={600}
                    classNames='set'
                    unmountOnExit
                >
                    <WrapperTimeTodo
                     timeCompleted={timeCompleted} 
                     setTimeCompleted={setTimeCompleted}
                     setShowClock={setShowClock} 
                     showClock={showClock}
                      />
                </CSSTransition>
                <button onClick={onClickHandler}>
                    <MdPostAdd 
                        className={`${theme}-icon-form mx-5 self-end`}
                        size={26}
                    />
                </button>
             </div>
             
        </div>
    )
}


export default AddTodo;