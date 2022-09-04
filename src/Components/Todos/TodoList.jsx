import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {AppContext} from "../../context/context";
import WrapperTodoItem from "./TodoItem/WrapperTodoItem";
import { useDispatch, useSelector } from 'react-redux';
import { arrSots, getTodos, removeAllTodoCompleted, removeAllTodoDay, removeAllTodoTimesUp, savedTodos } from "../../redux/action";
import { Btn } from "../Btn/Btn";
import { BtnArrow } from "../BtnArrow/BtnArrow";

const TodoList = () => {
    const [showTodosToDay, setShowTodosToDay] = useState(true);
    const [showTodosComplete, setShowTodosComplete] = useState(false);
    const [showTodosTimeUp, setShowTodosTimeUp]= useState(false)
    const dispatch = useDispatch()
    const {font, theme, handleShow} = useContext(AppContext);
    const todosToday = useSelector(state => {
        const {todosReducer} = state;
        return todosReducer.todosToDay;
    })
    const todosCompleted = useSelector(state => {
        const {todosReducer} = state;
        return todosReducer.todosCompleted;
    })
    const todosTimeUp = useSelector(state => {
        const {todosReducer} = state;
        return todosReducer.todosTimeUp;
    })
    const handleRemoveAllTodo = (e)=> {
        if(e.target.innerText === 'УДАЛИТЬ ВСЕ ЗАДАЧИ НА СЕГОДНЯ'){
            dispatch(removeAllTodoDay())
        }
        if(e.target.innerText === 'УДАЛИТЬ ВСЕ ВЫПОЛНЕННЫЕ ЗАДАЧИ'){
            dispatch(removeAllTodoCompleted())
        }
        if(e.target.innerText === 'УДАЛИТЬ ВСЕ СГОРЕВШИЕ ЗАДАЧИ'){
            dispatch(removeAllTodoTimesUp())
        }
        setTimeout(()=> {
            dispatch(savedTodos())
        },500)
    }
    useEffect(()=> {
        dispatch(getTodos())
        dispatch(arrSots())
    },[])
    return(
        <div
        onClick={handleShow}
         className={`${font} size-h2`}>
            <div className={`${theme}-box-shad transition-all mb-12 p-1 ${theme}-wrapper-list-todos ${showTodosToDay ? 'h-auto-wrapper' : 'h-wrapper'}`}>
                <h2>Дела на сегодня</h2>
                <BtnArrow
                show={showTodosToDay}
                setShow={setShowTodosToDay}
                />                
                 <TransitionGroup component='ul' className={`${font} ${showTodosToDay ? 'translate-x-0 transition-all' : 'transfo'}`}>
                        {todosToday.map((todo, index) => {
                            return (
                                <CSSTransition
                                    timeout={100}
                                    classNames={'note'}
                                    key={todo.id}
                                    >
                                    <WrapperTodoItem index={index} todo={todo}/>
                                </CSSTransition>
                                    )
                                })}
                </TransitionGroup> 
                {todosToday.length ? <Btn text='Удалить все задачи на сегодня' style={showTodosToDay ?`${theme} btn btn-set` : 'hidden'} handleClick={handleRemoveAllTodo}/> : <div className={showTodosToDay ? '' : 'hidden'}>У вас нет задач</div>}
            </div>
            <div className={`${theme}-box-shad mb-12 p-1 ${theme}-wrapper-list-todos ${showTodosComplete ? 'h-auto-wrapper' : 'h-wrapper'}`}>
                <h2>Выполненные дела</h2>
                <BtnArrow
                show={showTodosComplete}
                setShow={setShowTodosComplete}
                />
                <TransitionGroup component='ul' className={`${font} ${showTodosComplete ? 'translate-x-0 transition-all' : 'transfo'}`}>
                        {todosCompleted.map((todo, index) => {
                            return (
                                <CSSTransition
                                    timeout={500}
                                    classNames={'note'}
                                    key={todo.id}>
                                    <WrapperTodoItem index={index} todo={todo}/>
                                </CSSTransition>
                                    )
                                })}
                </TransitionGroup> 
                {todosCompleted.length ? <Btn text='Удалить все выполненные задачи' style={showTodosComplete ? `${theme} btn btn-set` : 'hidden'} handleClick={handleRemoveAllTodo}/> : <div className={showTodosComplete ? '' : 'hidden'}>У вас нет выполненных задач</div>}
            </div>
            <div className={`${theme}-box-shad p-1 ${theme}-wrapper-list-todos ${showTodosTimeUp ? 'h-auto-wrapper' : 'h-wrapper'}`}>
                <h2>Сгоревшие задачи</h2>
                <BtnArrow
                show={showTodosTimeUp}
                setShow={setShowTodosTimeUp}
                />
                <TransitionGroup component='ul' className={`${font} ${showTodosTimeUp ? 'translate-x-0 transition-all' : 'transfo'}`}>
                        {todosTimeUp.map((todo, index) => {
                            return (
                                <CSSTransition
                                    timeout={500}
                                    classNames={'note'}
                                    key={todo.id}>
                                    <div className={`${todo.complete ? 'opacity-60' : 'opacity-100'} w-full media
                                        rounded-xl items-center ${theme}-form-item p-5 
                                        flex mb-5`}>
                                        <span className="flex w-full items-center">
                                            <strong className={`mr-2 ${font === 'artist' ? 'text-3xl' : ''}`}>{index + 1}</strong>
                                            <span  className={`break-words mr-2 transition-all ease-in-out ${todo.complete ? `${theme}-MyText` : `${theme}-MyTextNoneLine`}`}>  
                                                {todo.title}  
                                            </span>
                                        </span>
                                    </div>
                                </CSSTransition>
                                    )
                                })}
                </TransitionGroup> 
                {todosTimeUp.length ? <Btn text='Удалить все сгоревшие задачи' style={showTodosTimeUp ? `${theme} btn btn-set` : 'hidden'} handleClick={handleRemoveAllTodo}/> : <div className={showTodosTimeUp ? '' : 'hidden'}>У вас нет сгоревших задач</div>}
            </div>
        </div>
    )
}

if(TodoList !== 'undefined'){
    TodoList.propTypes = {
        todosToday: PropTypes.arrayOf(PropTypes.object),
    }
}
export default TodoList;