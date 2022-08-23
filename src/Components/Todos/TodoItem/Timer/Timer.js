import { TimesUp } from "./TimesUp"
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { timesUp } from "../../../../redux/action";

export const Timer = ({setTimeIsNull,setIsCount,isCount,todo, timeItem, setTimeItem, setTimeNow}) => {
    const [hoursIsZero, setHoursIsZero]= useState(false);
    const [minitsIsZero, setMinitssIsZero]= useState(false);
    const dispatch = useDispatch()
    useEffect(()=> {
        let date = new Date();
        setTimeNow(date.getHours()*3600 + date.getMinutes()*60)
            const interval = setInterval(()=> {
                isCount ? setTimeItem(timeItem-1) : setTimeItem(timeItem-1);
            }, 1000);
            return () => {
                clearInterval(interval);
            }
    }, [timeItem]);
    useEffect(()=> {
        let date = new Date();
        setTimeNow(date.getHours()*3600 + date.getMinutes()*60)
        setTimeout(()=> {
            if(todo.complete === true){
                    setTimeIsNull(true)
                }
            if(timeItem < 0){
                setIsCount(false)
            }
        }, 1000)
        if(todo.complete !== true){
            if(timeItem < 0){
                dispatch(timesUp(todo))
            }
        }
        if(todo.dateCreate !== date.getFullYear()+date.getMonth()+date.getDate()){
            
            dispatch(timesUp(todo))
        }
    }, [timeItem])
    const hours = Math.floor(timeItem/3600);
    const minits = Math.floor((timeItem- hours*3600)/60);
    const seconds = timeItem - (minits*60+hours*3600);
    useEffect(()=> {
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
    }, [seconds])
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