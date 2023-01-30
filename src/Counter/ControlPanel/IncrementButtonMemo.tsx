// @flow
import * as React from 'react';
import {Button} from "../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, incrementCurrentValueAC} from "../../reducer/counterReducer";
import {useCallback, useMemo} from "react";

type Props = {

};
export const IncrementButton = () => {
    const incButtonDisabled = useSelector<CounterStateType,boolean>(state => state.counter.disables.increment)
    const errorInputMinValue = useSelector<CounterStateType,boolean>(state => state.errors.errorInputMinValue)
    const dispatch = useDispatch()
    const incCallBackHandler = () => {
        dispatch(incrementCurrentValueAC())
    }
    const incCallBackHandlerMemo = useCallback(incCallBackHandler,[])
    let error = incButtonDisabled ||
        errorInputMinValue
    let errorMemo = useMemo(()=>{
        return incButtonDisabled || errorInputMinValue
    },[error])
    let title = useMemo(()=>{
        return 'inc'
    },[])
    return (
        <Button disable={errorMemo}
                callBack={incCallBackHandlerMemo}
                title={title}/>
    );
};

// const ButtonMemo = React.memo(Button)

