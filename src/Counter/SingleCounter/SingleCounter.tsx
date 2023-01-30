import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {KeyType} from "../../App";
import s from './../Counter.module.css'
import {Settings} from "../Settings/Settings";
import {ControlPanel} from "../ControlPanel/ControlPanel";

type Props = {
    // minValue: number
    // setMinValue: Dispatch<SetStateAction<number>>
    // maxValue: number
    // setMaxValue: Dispatch<SetStateAction<number>>
    // setToLocalStorage: (key: KeyType, value: any) => void
};
export const SingleCounter = (props: Props) => {
    const [isCorrectSettings, setIsCorrectSettings] = useState<boolean>(true)
    const [settingsMode,setSettingsMode] = useState<boolean>(false)
    return (
        <div className={s.counter_container}>
            {/*{settingsMode?<Settings*/}
            {/*    setIsCorrectSettings={setIsCorrectSettings}*/}
            {/*    minValue={props.minValue}*/}
            {/*    setMinValue={props.setMinValue}*/}
            {/*    maxValue={props.maxValue}*/}
            {/*    setMaxValue={props.setMaxValue}*/}
            {/*    setToLocalStorage={props.setToLocalStorage}*/}
            {/*    setSettingsMode={setSettingsMode}*/}
            {/*/>:*/}
            {/*<ControlPanel*/}
            {/*    isCorrectSettings={isCorrectSettings}*/}
            {/*    minValue={props.minValue}*/}
            {/*    maxValue={props.maxValue}*/}
            {/*    setSettingsMode={setSettingsMode}*/}
            {/*/>}*/}
        </div>
    );
};