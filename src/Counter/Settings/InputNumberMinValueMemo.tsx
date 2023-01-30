
import React from 'react';
import {CounterStateType, onChangeInputMinValueAC} from "../../reducer/counterReducer";
import {InputNumber} from "../../Components/InputNumber/InputNumber";
import {useDispatch, useSelector} from "react-redux";

type Props = {

};
export const InputNumberMinValue = (props: Props) => {
    const inputMinValue = useSelector<CounterStateType,string>(state => state.settings.inputMinValue)
    const errorInputMinValue = useSelector<CounterStateType,boolean>(state => state.errors.errorInputMinValue)
    const dispatch = useDispatch()

    return (
        <InputNumber value={inputMinValue}
                     onChange={(e)=>dispatch(onChangeInputMinValueAC(e))}
                     error={errorInputMinValue}/>
    );
};

export const InputNumberMinValueMemo = React.memo(InputNumberMinValue)