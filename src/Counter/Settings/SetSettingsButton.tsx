// @flow
import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, setSettingsAC, setSettingsTC} from "../../reducer/counterReducer";
import {Button} from "../../Components/Button/Button";
import {useTypedDispatch} from "../../redux/store";

type Props = {

};
const SetSettingsButton = (props: Props) => {
    const dispatch = useTypedDispatch()
    const disable = useSelector<CounterStateType,boolean>(state => state.settings.disables.setSettings)
    const buttonCallBackHandler = () => {
        dispatch(setSettingsTC())
    }
    return (
        <Button disable={disable} callBack={buttonCallBackHandler} title={'Set'}/>
    );
};

export const SetSettingsButtonMemo = React.memo(SetSettingsButton)

