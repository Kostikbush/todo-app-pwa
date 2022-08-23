import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import '../SetTodos/setTodos.scss';
import {IoIosArrowDown} from 'react-icons/io'
import { Btn } from "../../Btn/Btn";
export const InstallApp = () => {
    const {theme} = useContext(AppContext);
    const [showSet, setShowSet] = useState(false);

    const handleInstallApp =()=> {
    }
    return (
        <div className={`${theme}-wrapper-setting-color ${showSet ? 'sets' : 'set-hide'} `}>
            <h3 className={`${showSet ? 'mt-0' : 'mt-16'}`}>Установить приложение</h3>
            <button onClick={()=> setShowSet(!showSet)}><IoIosArrowDown className={`${showSet ? 'set-arrow-down' : 'set-arrow-up'}`} size={20}/></button>
            <Btn handleClick={handleInstallApp} style={`${showSet ? `${theme} btn-aset  btn btn-set` : 'btn-hide-set'}`} text='Установить как приложение'/>
        </div>
    )
}