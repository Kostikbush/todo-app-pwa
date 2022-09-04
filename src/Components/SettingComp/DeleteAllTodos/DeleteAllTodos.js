import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import "../SetTodos/setTodos.scss";
import { Btn } from "../../Btn/Btn";
import { useDispatch } from "react-redux";
import { deleteAllTodos, savedTodos } from "../../../redux/action";
import { BtnArrow } from "../../BtnArrow/BtnArrow";
export const DeleteAllTodos = () => {
	const dispatch = useDispatch();
	const {theme} = useContext(AppContext);
	const [showSet, setShowSet] = useState(false);
	const handledelete =()=> {
		dispatch(deleteAllTodos());
		dispatch(savedTodos());
	};

	return (
		<div className={`${theme}-wrapper-setting-color ${showSet ? "sets" : "set-hide"} `}>
			<h3 className='mt-2'>Удалить все задачи</h3>
			<BtnArrow
				show={showSet}
				setShow={setShowSet}
			/>
			<Btn handleClick={handledelete} style={`${showSet ? `${theme} btn-aset  btn btn-set` : "hidden"}`} text='Удалить все задачи'/>
		</div>
	);
};