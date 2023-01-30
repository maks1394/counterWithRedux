import React from 'react';
import s from './ControlPanel.module.css'
import {IncrementButton, } from "./IncrementButtonMemo";
import {ResetButton} from "./ResetButtonMemo";
import {CurrentValuePanel} from "./CurrentValuePanelMemo";

type Props = {
};
export const ControlPanel = (props: Props) => {
    return (
        <div className={s.container}>
            <div className={s.panel_container}>
                <CurrentValuePanel/>
            </div>
            <div className={s.control_container}>
                <IncrementButton />
                <ResetButton />
            </div>
        </div>
    );
};

export const ControlPanelMemo = React.memo(ControlPanel)