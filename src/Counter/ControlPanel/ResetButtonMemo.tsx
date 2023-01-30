// @flow
import * as React from 'react';
import {Button} from "../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, resetCurrentValueAC} from "../../reducer/counterReducer";

type Props = {};
export const ResetButton = (props: Props) => {
    const resetButtonDisabled = useSelector<CounterStateType, boolean>(state => state.counter.disables.reset)
    const errorInputMinValue = useSelector<CounterStateType, boolean>(state => state.errors.errorInputMinValue)
    const dispatch = useDispatch()
    const resetCallBackHandler = () => {
        dispatch(resetCurrentValueAC())
    }
    let error = resetButtonDisabled ||
        errorInputMinValue
    return (
        <Button disable={error}
                callBack={resetCallBackHandler}
                title={'reset'}/>

    );
};


export const ResetButtonMemo = React.memo(ResetButton)