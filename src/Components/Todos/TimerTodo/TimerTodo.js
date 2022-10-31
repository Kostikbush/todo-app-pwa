import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../../context/context";
import "./range.css";



export const TimerTodo = ({setTimeCompleted}) => {
	const {theme} = useContext(AppContext);
    
	const date = new Date();
	const hours = date.getHours();
	const minits = date.getMinutes();
	const [hour, setHour] = useState(hours);
	const [minit, setMinit] = useState(minits);

	const hourHandler = (e) => {
		if(e.target.value.length > 2){
			e.target.value = hours;
		}
		if(e.target.value.length < 0){
			e.target.value = hours;
		}
		if(Number(e.target.value) > 24){
			e.target.value = hours;
		}
		if(e.target.value > 0){
			setHour(Number(e.target.value));
		}else {
			setHour(null);
		}
        
        
	};
        
	const minitsHandler = (e) => {
		if(e.target.value.length > 2){
			e.target.value = minits;
		}
		if(Number(e.target.value) > 59){
			e.target.value = minits;
		}
		if(e.target.value.length < 0){
			e.target.value = minits;
		}  
		if(e.target.value > 0) {
			setMinit(Number(e.target.value));
 
		}else{
			setMinit(null);
		}
	};
	const rangeHours = (e) => {
		setHour(Number(e.target.value));
	};
	const rangeMinits = (e) => {
		setMinit(Number(e.target.value));
	};
	useEffect(() => {
		let time = hour*3600 + minit*60;
		let times = hours*3600 + minits*60;
		if(time > 0) {
			if(time-600 > times){
				setTimeCompleted(time);
			}
			else{
				setTimeCompleted(times+600);
			}
		}else{
			setTimeCompleted(null);
		}
	},[hour, minit]);
	return (
		<div className={"flex flex-col  justify-center items-center h-1/2 content-between"}>
			<div className="flex  justify-center items-center h-1/2 content-between">
				<div className={"hours time h-7 mr-2"}>
					<input
						onChange={hourHandler}
						className={`${theme}-form-timer bg-transparent input-timer`}
						value={hour}
						max="2"
						min="1"
						type='number'/>
					<button></button>
				</div>
				<span className={"mr-2"}>:</span>
				<div className={"minits time h-7"}>
					<input
						value={minit}
						className={`${theme}-form-add bord bg-transparent input-timer`}
						onChange={minitsHandler}
						max="2"
						min="1"
						type='number'/>
				</div>
			</div>
			<div className="range__input h-14">
				<input onChange={rangeHours} type="range" className={`${theme}-range`} defaultValue={hours} min="1" max="24"/>
				<input onChange={rangeMinits} type="range" className={`${theme}-range`} defaultValue={minits} min="0" max="59"/>
			</div>
		</div>
	);
};
