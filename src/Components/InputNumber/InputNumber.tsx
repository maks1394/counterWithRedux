import React, {ChangeEvent} from 'react';
import s from './InputNumber.module.css'

type Props = {
    value:string
    onChange: (value:string)=>void
    error:boolean
};
export const InputNumber = (props: Props) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.onChange(e.currentTarget.value)
    }
    const className = props.error ? s.error:''
    return (
        <input className={className} value={props.value} type={'number'} onChange={onChangeHandler}/>
    );
};