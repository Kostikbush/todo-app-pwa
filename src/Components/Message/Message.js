import React, {useContext, useState } from "react";
import {AppContext} from "../../context/context";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const Message = ({settingVeu}) => {
  const {theme, font} = useContext(AppContext);

  const [showList, setShowList] = useState(false);
  const [highlightedHobby, setHighlightedHobby] = useState(false);


  const Onswitch = () => {
    setShowList(!showList)
  };

  const listSwitch = () => {
    setHighlightedHobby(!highlightedHobby)
    };
    return (
      <div className={`${settingVeu ? 'app-fill' : ''} "container" ${font}`} >
        <button className={`${theme}-display ${font}`} onClick={Onswitch}>
          Привет!
        </button>
        <CSSTransition
          in={showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={listSwitch}
          onExit={listSwitch}
        >
          <div className={`${theme}-list-body ${theme}-bg-list-body`}>
            <ul className="list">
              <li
                className="list-item"
              >
                Приятного использования!
              </li>
              <li className="list-item">
                Ограничения по символам равно 40, почему?


                Потому, что задача должна быть короткая и чётко сформулирована.


                Лучше создать много коротких дел, чем 1 длинное!
                
                Рекомендую писать большими буквами :)
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }



export default Message;