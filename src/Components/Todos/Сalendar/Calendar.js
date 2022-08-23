import { useContext } from 'react';
import { AppContext } from '../../../context/context';
import AirDatepicker from 'air-datepicker';

import './calendar.scss'

export const Calendar = () => {
    const {theme, font} = useContext(AppContext);
    let dp = new AirDatepicker('#el', {
        classes: `${font}`
    });
    return (
        <div className={`${theme}-wrapper-calendar wrapper-calendar`}>
            {new AirDatepicker('#el', {
                isMobile: true,
                autoClose: true,
            })}
        </div>
    )
}