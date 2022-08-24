import React, {useEffect} from "react";
import {AppContext} from "./context/context";
import Loader from './Components/Todos/Loader/Loading';
import Message from "./Components/Message/Message";
import './Components/SettingComp/ChangeFont/changeFont.scss'
import {AiFillSetting} from 'react-icons/ai';
import { CSSTransition } from "react-transition-group";
import { Setting } from "./Components/SettingComp/Setting";
import { WrapperTodos } from "./Components/Todos/WrapperTodos";
import { useDispatch, useSelector } from "react-redux";
import { getSettings, getTodos } from "./redux/action";
import { useSetting } from "./customHooks/useSetting/useSetting";
import { handleThemeBody } from "./style-for-handle-theme/style-theme";
const App = () => {
  const dispatch = useDispatch(); 
  const theme = useSelector(state => {
    const {settingReducer} = state;
    return settingReducer.settingsSaved.theme;
})
const font = useSelector(state => {
  const {settingReducer} = state;
  return settingReducer.settingsSaved.font;
})
const loading = useSelector(state => {
  const {loaderReducer} = state;
  return loaderReducer.loading;
})
  const {
    handleSettings,
    settingVeu,
  } = useSetting();
  handleThemeBody(theme);
  useEffect(()=> {
      dispatch(getTodos());
      dispatch(getSettings());
  }, [])
  return (
    <React.Fragment>
      <AppContext.Provider value={{theme, font, loading}}>
        <div className={`${font} flex justify-between`}>
          <Message settingVeu={settingVeu}/> 
          <CSSTransition
            in={settingVeu}
            timeout={400}
            classNames='icon__setting'
            >
            <AiFillSetting
              size={30}
              className={`${theme}-icon-setting`}
              onClick={handleSettings}
            />
          </CSSTransition>
        </div>
        <CSSTransition
              in={settingVeu}
              timeout={500}
              classNames='set'
              unmountOnExit
              >
              <Setting/>
        </CSSTransition>
        <div className={`App ${settingVeu ? 'app-fill' : ''} text-rose-50`}>
          <Loader/>
          <WrapperTodos/>
        </div>
        
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
