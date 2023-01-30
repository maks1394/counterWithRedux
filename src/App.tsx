import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SingleCounter} from "./Counter/SingleCounter/SingleCounter";

export type KeyType = 'minValue' | 'maxValue'


function App() {
    /*const [defaultMin, defaultMax] = [0, 5]
    const setInitMinValue = () => {
        const minValue = localStorage.getItem('minValue')
        if (minValue) {
            const parseMin = JSON.parse(minValue)
            return (+parseMin)
        } else {
            return defaultMin
        }
    }
    const setInitMaxValue = () => {
        const maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            const parseMax = JSON.parse(maxValue)
            return (+parseMax)
        } else {
            return defaultMax
        }
    }
    const [minValue, setMinValue] = useState<number>(() => {
        return setInitMinValue()
    })
    const [maxValue, setMaxValue] = useState<number>(() => {
        return setInitMaxValue()
    })
    const setToLocalStorage = (key: KeyType, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }*/

    return (
        <div className="App">
            <Counter/>
            {/*<SingleCounter
                minValue={minValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setToLocalStorage={setToLocalStorage}/>*/}
        </div>
    );
}

export default App;
