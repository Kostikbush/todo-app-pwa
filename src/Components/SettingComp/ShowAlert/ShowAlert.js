import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import '../SetTodos/setTodos.scss';
import { Btn } from "../../Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { savedSettings, showAlert } from "../../../redux/action";
import { BtnArrow } from "../../BtnArrow/BtnArrow";

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
        <BtnArrow 
            show={showSet}
            setShow={setShowSet}
        />
        <Btn handleClick={handleShowAlert} style={`${showSet ? `${theme} btn-aset  btn btn-set` : 'hidden'}`} text={`${alert ? 'выключить подсказки': 'включить подсказки'}`}/>
    </div>
    )
}