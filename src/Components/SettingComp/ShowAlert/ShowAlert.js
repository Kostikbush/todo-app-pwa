import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import '../SetTodos/setTodos.scss';
import {IoIosArrowDown} from 'react-icons/io'
import { Btn } from "../../Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { savedSettings, showAlert } from "../../../redux/action";

export const ShowAlert = () => {
    const {theme} = useContext(AppContext);
    const dispatch = useDispatch();
    const [showSet, setShowSet] = useState(false);
    const alert = useSelector(state => {
        const {settingReducer} = state;
        return settingReducer.settingsSaved.alert
    })
    const handleShowAlert =()=> {
        dispatch(showAlert())
        dispatch(savedSettings())
    }
    return (
    <div className={`${theme}-wrapper-setting-color ${showSet ? 'sets' : 'set-hide'} `}>
        <h3 className='mt-2'>Подсказки</h3>
        <button onClick={()=> setShowSet(!showSet)}><IoIosArrowDown className={`${showSet ? 'set-arrow-down' : 'set-arrow-up'}`} size={20}/></button>
        <Btn handleClick={handleShowAlert} style={`${showSet ? `${theme} btn-aset  btn btn-set` : 'btn-hide-set'}`} text={`${alert ? 'выключить подсказки': 'включить подсказки'}`}/>
    </div>
    )
}