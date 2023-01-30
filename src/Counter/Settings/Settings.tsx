// @flow
import React from 'react';
import s from "./Settings.module.css";
import {SetSettingsButtonMemo} from "./SetSettingsButton";
import {InputNumberMaxValueMemo} from "./InputNumberMaxValueMemo";
import {InputNumberMinValueMemo} from "./InputNumberMinValueMemo";

type Props = {
};
export const Settings = (props: Props) => {
    return (
        <div className={s.settings_container}>
            <div className={s.values}>
                <div className={s.item}>
                    <span>max value: </span>
                    <InputNumberMaxValueMemo />
                </div>
                <div className={s.item}>
                    <span>start value: </span>
                    <InputNumberMinValueMemo />
                </div>
            </div>
            <div className={s.button_container}>
                <SetSettingsButtonMemo/>
            </div>
        </div>
    );
};