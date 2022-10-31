import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import {BsFillPencilFill} from "react-icons/bs";
import { useContext } from "react";

import { AppContext } from "../../../context/context";
import { WrapperTimer } from "./Timer/WrapperTimer";
import { removeTodo, savedTodos } from "../../../redux/action";
import Check from "./Check";

export const TodoItem = (
	{
		todo, 
		index,
		handleWright,
	}) => {
	const dispatch = useDispatch();
	const {theme, font} = useContext(AppContext);
	const handleRemove = () => {
		dispatch(removeTodo(todo.id));
		setTimeout(()=> {
			dispatch(savedTodos());
		}, 2000);
	};
	return (
		<div  className={`${todo.complete ? "opacity-60" : "opacity-100"} w-full media
                rounded-xl items-center ${theme}-form-item p-5 
                flex mb-5`}>
			<span className="flex w-full items-center">
				<span className="mr-1">
					<Check todo={todo} />
				</span>
				<strong className={`mr-2 ${font === "artist" ? "text-3xl" : ""}`}>{index + 1}</strong>
				<span  className={`break-words mr-2 transition-all ease-in-out ${todo.complete ? `${theme}-MyText` : `${theme}-MyTextNoneLine`}`}>  
					{todo.title}  
				</span>
			</span>
			<div className="buttons">
				<span className={`mr-4 ${font === "artist" ? "text-3xl" : ""}`}>
					<WrapperTimer todo={todo}/>
				</span>
				{todo.complete ? "" : <button
					aria-label='pencil-btn'
					onClick={handleWright} className="mr-4">
					<BsFillPencilFill size={20}  
						className={`${theme}-icon-form`}/>
				</button>}
				<button className="self-center" onClick={handleRemove}>
					<BsTrash
						aria-label='trash-btn'
						size={24} 
						className={`${theme}-icon-form`}
					/>
				</button>
			</div>
		</div>
	);
};