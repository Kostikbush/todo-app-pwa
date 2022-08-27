import { useState, useEffect, useContext } from "react";
import { TimeCreate } from "./TimeCreate";
import { Timer } from "./Timer";
import { AppContext } from "../../../../context/context";
import { Alert } from "../../../Alert/Alert";
import { CSSTransition } from "react-transition-group";


export const WrapperTimer = ({todo}) => {
    const date = new Date();
    const [isCount, setIsCount] = useState(true);
    const [timeIsNull,setTimeIsNull] = useState(false);
    const [secondsCount, setSecondsCount] = useState(null);
    const [alert, setAlert] = useState(false)
    const [timeNow, setTimeNow] = useState(date.getHours()*3600 + date.getMinutes()*60 || 0);
    const {theme} = useContext(AppContext);


    let percent= (secondsCount*100)/(todo.timeCompleted - todo.timeCreate);
    let ringColor = `#ec4899`;
    let shadow = '1px 12px 35px rgba(209, 0, 160, 0.762)'
    if(theme === 'origin'){
        ringColor=`#ec4899`;
        shadow='1px 12px 35px rgba(209, 0, 160, 0.762)'
    }
    if(theme === 'light'){
        ringColor = '#000';
        shadow='1px 12px 35px rgba(56, 56, 56, 0.762)'
    }
    if(theme === 'dark'){
        ringColor='#fff';
        shadow ='1px 12px 35px rgba(201, 201, 201, 0.762)'
    }
    const style = {
        position: 'relative',
        height: '5px',
        width: '100%',
        boxShadow:shadow,
        backgroundColor: 'rgb(63, 75, 99)',
        color: '#000',
        transition: '.3s all',
    }
    const styleChild = {
        backgroundColor: ringColor,
        height: '5px',
        width: percent,
        position: 'absolute',
        top: 0,
        left: 0,
    }
    useEffect(()=> {
        const newDate = new Date();
        setTimeNow(newDate.getHours()*3600 + newDate.getMinutes()*60);
            if(todo.timeCompleted === null || todo.timeCompleted === 'undefined' || todo.timeCompleted === NaN){
                setTimeIsNull(true)
            }
            else{
                setTimeIsNull(false)
            }
            if(todo.timeCompleted !== null) {
                setSecondsCount(todo.timeCompleted - timeNow)
            }
    },[])
    return (
        <div className="relative ml-11">
            {timeIsNull ?
            <TimeCreate todo={todo}/>
             :
             <div>
                <Timer setAlert={setAlert} setTimeIsNull={setTimeIsNull} isCount={isCount} setIsCount={setIsCount} setTimeNow={setTimeNow} todo={todo} setSecondsCount={setSecondsCount} secondsCount={secondsCount}/>
            </div>
             }
             <div className={`${(todo.complete || todo.timeCompleted == null) ? 'hidden' : ''}`} style={style}><div className={`${todo.complete ? 'hidden' : ''}`} style={styleChild}></div></div>
             <CSSTransition
                in={alert}            
                timeout={500}
                classNames='set'
                unmountOnExit
             >
             <Alert style='alert-w-timer' text='ДО сгорания задачи осталось меньше 5 минут!'/>
             </CSSTransition>
        </div>
    )
}