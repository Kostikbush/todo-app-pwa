import { useContext, useState } from "react";
import { AppContext } from "../../../context/context";
import "../SetTodos/setTodos.scss";
import { Btn } from "../../Btn/Btn";
import { BtnArrow } from "../../BtnArrow/BtnArrow";
export const InstallApp = () => {
	const {theme} = useContext(AppContext);
	const [showSet, setShowSet] = useState(false);
	const handleInstallApp = async ()=> {
		let deferredPrompt;
		window.addEventListener("beforeinstallprompt", (e) => {
			deferredPrompt = e;
		});
		if (deferredPrompt !== null) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === "accepted") {
				deferredPrompt = null;
			}
		}
	};
	return (
		<div className={`${theme}-wrapper-setting-color ${showSet ? "sets" : "set-hide"} `}>
			<h3 className={`${showSet ? "mt-0" : "mt-2"}`}>Установить приложение</h3>
			<BtnArrow
				show={showSet}
				setShow={setShowSet}
			/>
			<Btn handleClick={handleInstallApp} style={`${showSet ? `${theme} btn-aset  btn btn-set` : "btn-hide-set hidden"}`} text='Установить как приложение'/>
		</div>
	);
};