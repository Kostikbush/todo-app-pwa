import React, { useContext } from "react";
import {AppContext} from "../../../context/context";
import {BiCheck} from "react-icons/bi";
import { useDispatch } from "react-redux";
import { arrSots, completeTodo, savedTodos } from "../../../redux/action";
import { notCompleteTodo } from "../../../redux/action";

const Check = ({todo}) => {
	const dispatch = useDispatch();
	const {theme} = useContext(AppContext);
	const handleClick = ()=> {
		if(todo.complete === false){
			dispatch(completeTodo(todo.id, todo.title, todo.timeCreate, todo.timeCompleted, todo.dateCreate));
		}else{
			dispatch(notCompleteTodo(todo.id, todo.title, todo.timeCreate,todo.timeCompleted, todo.dateCreate));
			dispatch(arrSots());
		}
		setTimeout(()=> {
			dispatch(savedTodos());
		},2000);
	};
	return (
		<div 
			onClick={handleClick}
			className={`transition-all ease-in-out duration-300 w-6 h-6 flex items-center justify-center mr-3 border-2 rounded-lg ${theme}-border-check ${todo.complete ? `${theme}-check-theme` : ""} `}>
			{
				todo.complete && <BiCheck  size={24} className='transition-all ease-in-out duration-300' />
			}
		</div>
	);
};
export default Check;