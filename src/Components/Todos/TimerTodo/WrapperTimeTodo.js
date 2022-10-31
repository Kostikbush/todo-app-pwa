import { CSSTransition } from "react-transition-group";
import { useContext, useState } from "react";

import { TimerTodo } from "./TimerTodo";
import { AppContext } from "../../../context/context";
import { Alert } from "../../Alert/Alert";
import { Btn } from "../../Btn/Btn";
import "../../../index.scss";
import "./timerTodo.scss";

export const WrapperTimeTodo = ({setShowClock,showClock,timeCompleted,setTimeCompleted}) => {
	const [alertVue, setAlertVue] = useState(true);
	const {theme} = useContext(AppContext);
	setTimeout(()=> {
		setAlertVue(false);
	}, 6000);
	const handleClick = () => {
		setShowClock(!showClock);
	};
      
	return (
		<div className={`show-clock ${theme}-clock-show`}>
			<TimerTodo
				timeCompleted={timeCompleted}
				setTimeCompleted={setTimeCompleted}
			/>
			<Btn
				handleClick={handleClick}
				text='поставить таймер'
				style={`${theme} btn-aset btn-set btn`}/>
                
			<CSSTransition   
				in={alertVue}            
				timeout={500}
				classNames='set'
				unmountOnExit
			>
				<Alert
					style='alert-messeg'
					text='таймер можно поставить минимум на 10 мин.
                    Если хотите отменить таймер, откройте и закройте таймер.
                    '
				/>
			</CSSTransition>
		</div>
	);
};