import {ChangeTheme} from "./ChangeTheme/ChangeTheme";
import {AppContext} from "../../context/context";
import React, { useContext} from "react";
import { ChangeFont } from "./ChangeFont/ChangeFont";
import { SetTodos } from "./SetTodos/SetTodos";
import "./setting.scss";
import { InstallApp } from "./InstallApp/InstallApp";
import { ShowAlert } from "./ShowAlert/ShowAlert";
import { DeleteAllTodos } from "./DeleteAllTodos/DeleteAllTodos";

export const Setting = () => {
	const {theme, font} = useContext(AppContext);
	return (
		<div className={`${theme}-setting-change  setting-body ${font}`}>
			<ul>
				<li>
					<ChangeTheme/>
				</li>
				<li>   
					<ChangeFont/>
				</li>
				<li>
					<SetTodos/>
				</li>
				<li>
					<InstallApp/>
				</li>
				<li>
					<ShowAlert/>
				</li>
				<li className='mb-7'>
					<DeleteAllTodos/>
				</li>
			</ul>
		</div>
	);
};