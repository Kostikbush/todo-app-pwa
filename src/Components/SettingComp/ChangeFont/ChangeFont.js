import './changeFont.scss';
import {AppContext} from "../../../context/context";
import {useContext} from 'react'
import { IoIosArrowDown} from "react-icons/io";
import { useSetting } from "../../../customHooks/useSetting/useSetting";
import { useDispatch } from 'react-redux';
import { changeFont, savedSettings } from '../../../redux/action';

export const ChangeFont = () => {
    const dispatch = useDispatch()
    const {theme} = useContext(AppContext);
    const {showFont, handleSettingFont} = useSetting();
    const handleFont = (e) => {
        dispatch(changeFont(e.target.classList[0]))
        dispatch(savedSettings())
    }
    return (
        <div className={`${theme}-font-wrapper-color ${showFont ? 'change-font-wrapper' : 'hide-wrapper-font'} `}>
            <h3 className='h3-font'>ШРИФТ</h3>
            <div className="seting-arrow"><button onClick={handleSettingFont}><IoIosArrowDown className={`${showFont ? 'move-arrow-up' : 'move-arrow-down'}`} size={20}/></button></div>
            <ul className={`${showFont ? 'wrapper-list-font' : 'hide-wrapper-li'}`}>
                <li onClick={handleFont} className={`beer-money font-li ${theme}-font-li-bg`}>Beer-money</li>
                <li onClick={handleFont} className={`gunny-rewritten font-li ${theme}-font-li-bg`}>Gunny Rewritten</li>
                <li onClick={handleFont} className={`artist font-li ${theme}-font-li-bg`}>MADE TheArtist Script</li>
                <li onClick={handleFont} className={`nautilys font-li ${theme}-font-li-bg`}>Nautilus Pompilius</li>

                <li onClick={handleFont} className={`christmas ${theme}-font-li-bg`}>Christmas ScriptC</li>
                <li onClick={handleFont} className={`alexander font-li ${theme}-font-li-bg`}>Alexander</li>
                <li onClick={handleFont} className={`boomboom font-li ${theme}-font-li-bg`}>Boomboom</li>
                <li onClick={handleFont} className={`marck font-li ${theme}-font-li-bg`}>Marck Script</li>

                <li onClick={handleFont} className={`lemon font-li ${theme}-font-li-bg`}>Lemon Tuesday</li>
                <li onClick={handleFont} className={`gagalin font-li ${theme}-font-li-bg`}>Gagalin</li>
                <li onClick={handleFont} className={`celestina font-li ${theme}-font-li-bg`}>Celestina</li>
                <li onClick={handleFont} className={`engine font-li ${theme}-font-li-bg`}>Engine</li>

                <li onClick={handleFont} className={`kobzar font-li ${theme}-font-li-bg`}>Kobzar KS</li>
                <li onClick={handleFont} className={`lobster font-li ${theme}-font-li-bg`}>Lobster</li>
                <li onClick={handleFont} className={`bradobrei font-li ${theme}-font-li-bg`}>Bradobrei</li>
                <li onClick={handleFont} className={`sans-seriv font-li ${theme}-font-li-bg`}>sans-seriv</li>
            </ul>
        </div>
    )
}