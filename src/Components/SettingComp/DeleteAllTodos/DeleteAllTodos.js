import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import '../SetTodos/setTodos.scss';
import {IoIosArrowDown} from 'react-icons/io';
import { Btn } from "../../Btn/Btn";
import { useDispatch } from "react-redux";
import { deleteAllTodos, savedTodos } from "../../../redux/action";
export const DeleteAllTodos = () => {
    const dispatch = useDispatch();
    const {theme} = useContext(AppContext);
    const [showSet, setShowSet] = useState(false);
    const handledelete =()=> {
        dispatch(deleteAllTodos())
        dispatch(savedTodos())
    }

    return (
        <div className={`${theme}-wrapper-setting-color ${showSet ? 'sets' : 'set-hide'} `}>
            <h3 className='mt-2'>Удалить все задачи</h3>
            <button onClick={()=> setShowSet(!showSet)}><IoIosArrowDown className={`${showSet ? 'set-arrow-down' : 'set-arrow-up'}`} size={20}/></button>
            <Btn handleClick={handledelete} style={`${showSet ? `${theme} btn-aset  btn btn-set` : 'btn-hide-set hidden'}`} text='Удалить все задачи'/>
        </div>
    )
}