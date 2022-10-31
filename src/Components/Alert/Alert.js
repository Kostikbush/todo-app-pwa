import { useContext } from "react";
import { useSelector } from "react-redux";

import { AppContext } from "../../context/context";
import "./alert.scss";


export const Alert = (props) => {
	const {theme, font} = useContext(AppContext);
	const alert = useSelector(state => {
		const {settingReducer} = state;
		return settingReducer.settingsSaved.alert;
	});
	return (
		<div style={props.styles} className={alert ? `flex text-center align-middle  ${theme}-alert-messeg ${props.style} ${font}`: "hidden"}>
			<span className={`${alert ? "": "hidden"}`}>{props.text}</span>
		</div>
	);
};