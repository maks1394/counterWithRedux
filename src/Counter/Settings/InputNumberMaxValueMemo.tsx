// @flow
import React from 'react';
import {CounterStateType, onChangeInputMaxValueAC} from "../../reducer/counterReducer";
import {InputNumber} from "../../Components/InputNumber/InputNumber";
import {useDispatch, useSelector} from "react-redux";

type Props = {

};
export const InputNumberMaxValue = (props: Props) => {
    const inputMaxValue = useSelector<CounterStateType,string>(state => state.settings.inputMaxValue)
    const dispatch = useDispatch()
    const errorInputMaxValue = useSelector<CounterStateType,boolean>(state => state.errors.errorInputMaxValue)
    return (
        <InputNumber value={inputMaxValue}
                     onChange={(e)=>dispatch(onChangeInputMaxValueAC(e))}
                     error={errorInputMaxValue}/>
    );
};

export const InputNumberMaxValueMemo = React.memo(InputNumberMaxValue)