import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import './setTodos.scss';
import {IoIosArrowDown} from 'react-icons/io'
import { Btn } from "../../Btn/Btn";
import { CSSTransition } from "react-transition-group";
import { Alert } from "../../Alert/Alert";


export const SetTodos = () => {
    const {theme} = useContext(AppContext);
    const [alertVue, setAlertVue] = useState(false)
    const [showSet, setShowSet] = useState(false);
    const style = {
        padding: '5px',
        position: 'absolute',
        top: '-100%',
        width: '200px',
        height: '100px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
    }
    const handleSetText = () => {
        setAlertVue(true);
        setTimeout(()=> {
            setAlertVue(false)
        },2000)
    }
    console.log(alertVue)
    return (
        <div className={`relative ${theme}-wrapper-setting-color ${showSet ? 'sets' : 'set-hide'} `}>
            <h3 className={`${showSet ? 'mt-4' : 'mt-10'}`}>Запись</h3>
            <button onClick={()=> setShowSet(!showSet)}><IoIosArrowDown className={`${showSet ? 'set-arrow-down' : 'set-arrow-up'}`} size={20}/></button>
            <Btn handleClick={handleSetText} style={`${showSet ? `${theme} btn-aset  btn btn-set` : 'btn-hide-set'}`} text='записать задачи в txt фаил?'/>
            <CSSTransition   
                in={alertVue}            
                timeout={500}
                classNames='set'
                unmountOnExit
                >
                <Alert
                    styles={style}
                    text='УЖЕ В РАЗРАБОТКЕ!'
                />
            </CSSTransition>
        </div>
    )
}