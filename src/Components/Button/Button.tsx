import React, {memo} from 'react';
import s from './Button.module.css'

type Props = {
    disable:boolean
    callBack:()=>void
    title:string
};
export const Button = memo((props: Props) => {
    console.log('Button render')
    const onClickHandler = ()=>{
        props.callBack()
    }
    return (
        <button className={s.button} onClick={onClickHandler} disabled={props.disable}>{props.title}</button>
    )
})