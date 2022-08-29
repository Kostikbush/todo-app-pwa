import { TimesUp } from "./TimesUp"
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { savedTodos, timesUp } from "../../../../redux/action";

export const Timer = ({setAlert,setTimeIsNull,setIsCount,isCount,todo, secondsCount, setSecondsCount, setTimeNow}) => {
    const [hoursIsZero, setHoursIsZero]= useState(false);
    const [minitsIsZero, setMinitssIsZero]= useState(false);
    const dispatch = useDispatch()
    useEffect(()=> {
        let date = new Date();
        setTimeNow(date.getHours()*3600 + date.getMinutes()*60)
            const interval = setInterval(()=> {
                isCount ? setSecondsCount(secondsCount-1) : setSecondsCount(secondsCount-1);
            }, 1000);
        setTimeNow(date.getHours()*3600 + date.getMinutes()*60)
        setTimeout(()=> {
        if(todo.complete === true){
            setTimeIsNull(true)
        }
        if(secondsCount < 0){
            setIsCount(false)
        }
        }, 1000)
        if(todo.complete !== true){
            if(secondsCount < 0){
            dispatch(timesUp(todo))
            dispatch(savedTodos())
            }
            if(todo.dateCreate !== date.getFullYear()+date.getMonth()+date.getDate()){
            dispatch(timesUp(todo))
            dispatch(savedTodos())
        }
        }
        if(hours === 0){
            setHoursIsZero(true)
        }else{
            setHoursIsZero(false)
        }
        if(minits === 0){
            setMinitssIsZero(true)
        }else{
            setMinitssIsZero(false)
        }

            return () => {
                clearInterval(interval);
            }
    }, [secondsCount]);
    const hours = Math.floor(secondsCount/3600);
    const minits = Math.floor((secondsCount- hours*3600)/60);
    const seconds = secondsCount - (minits*60+hours*3600);
    useEffect(()=> {
        if(todo.complete !== true && secondsCount !== 'undefined'){
            if(secondsCount !== 0){
                if(secondsCount < 300 && secondsCount !== null){
                    setAlert(true)
                    setTimeout(()=> {
                        setAlert(false)
                    },2000)
                }
            }
        }
    }, [minits])

    return (
        <>
        {isCount ?(
            <div className={`flex w-14 mr-8`}>
                <span>{hoursIsZero ? '': hours+'ч'+':'}</span>
                <span>{minitsIsZero ? '' : minits+'m'+':'} </span>
                <span>{seconds}с</span>
            </div>):(
            <TimesUp/>
        )}
        </>
    )
}