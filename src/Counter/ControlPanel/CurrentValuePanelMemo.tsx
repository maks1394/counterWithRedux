// @flow
import * as React from 'react';
import s from "./ControlPanel.module.css";
import {useSelector} from "react-redux";
import {CounterStateType} from "../../reducer/counterReducer";

type Props = {

};
export const CurrentValuePanel = () => {
    const errorInputMinValue = useSelector<CounterStateType,boolean>(state => state.errors.errorInputMinValue)
    const currentCount = useSelector<CounterStateType,number>(state => state.counter.currentValue)
    const maxValue = useSelector<CounterStateType,number>(state => state.counter.maxValue)
    const classNameSpan = (errorInputMinValue || currentCount >= maxValue) ? s.redSpan : s.span //=== dont work

    return (
        <span className={classNameSpan}>{!(errorInputMinValue)? currentCount:'Incorrect value!'}</span>
    );
};

export const CurrentValuePanelMemo = React.memo(CurrentValuePanel)