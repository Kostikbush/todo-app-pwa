import React, { useEffect, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { AppContext } from './context/context';
import Loader from './Components/Todos/Loader/Loading';
import Message from './Components/Message/Message';
import { Setting } from './Components/SettingComp/Setting';
import { WrapperTodos } from './Components/Todos/WrapperTodos';
import { getSettings, getTodos } from './redux/action';
import { useSetting } from './customHooks/useSetting/useSetting';
import { handleThemeBody } from './style-for-handle-theme/style-theme';
import logo from './logo-app.jpg';
import './Components/SettingComp/ChangeFont/changeFont.scss';
const App = () => {
	const [showClock, setShowClock] = useState(false);
	const [firstFrame, setFirstFrames] = useState(true);
	const dispatch = useDispatch();
	const theme = useSelector((state) => {
		const { settingReducer } = state;
		return settingReducer.settingsSaved.theme;
	});
	const font = useSelector((state) => {
		const { settingReducer } = state;
		return settingReducer.settingsSaved.font;
	});
	const loading = useSelector((state) => {
		const { loaderReducer } = state;
		return loaderReducer.loading;
	});
	const { handleSettings, settingVeu, setSettingVeu } = useSetting();
	handleThemeBody(theme);
	useEffect(() => {
		setTimeout(() => {
			setFirstFrames(false);
		}, 3000);
		dispatch(getTodos());
		dispatch(getSettings());
	}, []);
	const handleShow = () => {
		setSettingVeu(false);
		setShowClock(false);
	};
	return (
		<AppContext.Provider
			value={{
				handleShow,
				theme,
				font,
				loading,
				showClock,
				setShowClock,
				setSettingVeu,
			}}
		>
			<CSSTransition
				timeout={500}
				classNames="alert"
				unmountOnExit
				in={firstFrame}
			>
				<div className="my-logo__container">
					<div className="my-logo__img">
						<img alt="logo-Kostick-Busharove" src={logo} />
					</div>
				</div>
			</CSSTransition>
			<div
				onClick={() => setShowClock(false)}
				className={`${font} flex justify-between`}
			>
				<Message
					setSettingVeu={setSettingVeu}
					settingVeu={settingVeu}
				/>
				<CSSTransition
					in={settingVeu}
					timeout={400}
					classNames="icon__setting"
				>
					<AiFillSetting
						size={35}
						className={`${theme}-icon-setting`}
						onClick={handleSettings}
					/>
				</CSSTransition>
			</div>
			<CSSTransition
				in={settingVeu}
				timeout={500}
				classNames="set"
				unmountOnExit
			>
				<Setting />
			</CSSTransition>
			<div
				className={`App ${settingVeu ? 'app-fill' : ''} text-rose-50`}
			>
				<Loader />
				<WrapperTodos />
			</div>
		</AppContext.Provider>
	);
};

export default App;
