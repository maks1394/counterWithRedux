import React, {useLayoutEffect} from 'react';
import s from './Counter.module.css'
import {Settings} from "./Settings/Settings";
import {ControlPanel, ControlPanelMemo} from "./ControlPanel/ControlPanel";
import {useTypedDispatch} from "../redux/store";
import {getValuesFromLocalTC} from "../reducer/counterReducer";

type Props = {
};
export const Counter = (props: Props) => {
    const dispatch = useTypedDispatch()
    useLayoutEffect(()=>{
        dispatch(getValuesFromLocalTC())
    },[])
    return (
        <div className={s.counter_container}>
            <Settings/>
            <ControlPanel/>
        </div>
    );
};