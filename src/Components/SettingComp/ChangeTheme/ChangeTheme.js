import {AppContext} from "../../../context/context";
import React, { useContext } from "react";
import { IoIosArrowDown} from "react-icons/io";
import './chengeTheme.scss'
import { useSetting } from "../../../customHooks/useSetting/useSetting";
import { Btn } from "../../Btn/Btn";
import { useDispatch } from "react-redux";
import { changeTheme, savedSettings } from "../../../redux/action";
import { handleThemeBody } from "../../../style-for-handle-theme/style-theme";
import { CSSTransition } from "react-transition-group";
import { BtnArrow } from "../../BtnArrow/BtnArrow";

export const ChangeTheme = () => {
    const dispatch = useDispatch()
    const {theme} = useContext(AppContext);
    const {showTheme, handleSettingTheme} = useSetting();
    const handleTheme = (e) => {
        dispatch(changeTheme(e.target.classList[1]))
        handleThemeBody(e.target.classList[1]);
        dispatch(savedSettings())
    }
    return (
        <div className={`${theme}-wrapper-theme ${showTheme ? 'theme-wrapper-show' : 'theme-wrapper-hide'} w-full flex flex-col align-middle justify-center pb-5`}>
            <h3 className="mt-8">ТЕМА</h3>
            <div className="seting-arrow">
                <BtnArrow 
                    setShow={handleSettingTheme}
                    show={showTheme}
                    />
            </div>
            <CSSTransition
                in={showTheme}
                timeout={100}
                classNames='setting-animation'
                unmountOnExit
            >
                <div className={`media-theme-show flex justify-around p-2`}>
                    <Btn handleClick={handleTheme} style={`btn light`} text='СВЕТЛАЯ'/>
                    <Btn handleClick={handleTheme} style={`btn dark`} text='ТЁМНАЯ'/>
                    <Btn handleClick={handleTheme} style={`btn origin`} text='ОРИГИНАЛЬНАЯ'/>
                </div>
            </CSSTransition>    
        </div>
    )
}