import React, { useContext } from "react";

import { AppContext } from "../../../context/context";
import './loader.scss';

const Loader = () => {
    const {loading, theme} = useContext(AppContext);
    return (
        <div className={`${loading ? `flex m-5 justify-center` : 'hidden'} `}>
            <div className={`${theme}-loader lds-ripple`}><div></div><div></div></div>
        </div>
    )
}

export default Loader;