import { useContext } from "react";
import { AppContext } from "../../context/context";
export const Btn = ({handleClick, style, text}) => {
    const {theme} = useContext(AppContext);
    //${theme} btn-aset  btn
    return (
        <button 
                onClick={handleClick}
                className={`${style}`}>
                {text}
        </button>
    )
}