import React, { useContext} from "react";

import {ChangeTheme} from "./ChangeTheme/ChangeTheme";
import {AppContext} from "../../context/context";
import { ChangeFont } from "./ChangeFont/ChangeFont";
import { SetTodos } from "./SetTodos/SetTodos";
import { InstallApp } from "./InstallApp/InstallApp";
import { ShowAlert } from "./ShowAlert/ShowAlert";
import { DeleteAllTodos } from "./DeleteAllTodos/DeleteAllTodos";
import "./setting.scss";

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