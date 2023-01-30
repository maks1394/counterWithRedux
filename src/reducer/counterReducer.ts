import {Dispatch, GetState} from "../redux/store";

const defaultMinValue = 0;
const defaultMaxValue = 5

export type ErrorType =
    'inputMaxValue less or equal than InputMinVaLue'
    | 'InputMinVaLue less than 0'
    | 'InputMaxVaLue less than 0'
    | ''
export type CounterStateType = {
    settings: {
        inputMinValue: string,
        inputMaxValue: string,
        disables: {
            setSettings: boolean
        }
    },
    counter: {
        currentValue: number,
        minValue: number,
        maxValue: number,
        disables: {
            increment: boolean,
            reset: boolean
        }
    }
    errors: {
        errorInputMinValue: boolean,
        errorInputMaxValue: boolean
    }
}

const initialState: CounterStateType = {
    settings: {
        inputMinValue: String(defaultMinValue),
        inputMaxValue: String(defaultMaxValue),
        disables: {
            setSettings: true
        }
    },
    counter: {
        currentValue: defaultMinValue,
        minValue: defaultMinValue,
        maxValue: defaultMaxValue,
        disables: {
            increment: false,
            reset: true
        }
    },
    errors: {
        errorInputMinValue: false,
        errorInputMaxValue: false
    }
}

type ActionType =
    OnChangeInputMinValueACType
    | OnChangeInputMaxValueACType
    | IncrementCurrentValueAC
    | ResetCurrentValueACType
    | SetSettingsACType
    | SetMinMaxValueACType

export const counterReducer = (state: CounterStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ON-CHANGE-INPUT-MIN-VALUE": {
            let copyState = {...state}
            if (+state.settings.inputMaxValue <= +action.payload.number) {
                if (!state.errors.errorInputMaxValue) {
                    copyState.errors = {...state.errors}
                    copyState.errors.errorInputMaxValue = true
                    copyState.errors.errorInputMinValue = true
                }
            } else {
                if (+action.payload.number < 0) {
                    if (!state.errors.errorInputMinValue) {
                        copyState.errors = {...state.errors}
                        copyState.errors.errorInputMinValue = true
                    }
                } else if ((+state.settings.inputMaxValue >= 0)) {
                    copyState.errors = {...state.errors}
                    copyState.errors.errorInputMaxValue = false
                    copyState.errors.errorInputMinValue = false
                }
            }

            copyState.settings = {...state.settings}
            copyState.settings.inputMinValue = String(action.payload.number)
            if ((+copyState.settings.inputMinValue === copyState.counter.minValue) && (+copyState.settings.inputMaxValue === copyState.counter.maxValue)) {
                if (!state.settings.disables.setSettings) {
                    copyState.settings.disables = {...state.settings.disables}
                    copyState.settings.disables.setSettings = true
                }
            } else if (copyState.errors.errorInputMinValue || copyState.errors.errorInputMaxValue) {
                if (!state.settings.disables.setSettings) {
                    copyState.settings.disables = {...state.settings.disables}
                    copyState.settings.disables.setSettings = true
                }
            } else {
                if (state.settings.disables.setSettings) {
                    if (state.settings.disables.setSettings) {
                        copyState.settings.disables = {...state.settings.disables}
                        copyState.settings.disables.setSettings = false
                    }
                }
            }
            return copyState
        }
        case "ON-CHANGE-INPUT-MAX-VALUE": {
            let copyState = {...state}
            if (+state.settings.inputMinValue >= +action.payload.number) {
                if (!state.errors.errorInputMaxValue) {
                    copyState.errors = {...state.errors}
                    copyState.errors.errorInputMaxValue = true
                    copyState.errors.errorInputMinValue = true
                }
            } else {
                if (+action.payload.number < 0) {
                    if (!state.errors.errorInputMaxValue) {
                        copyState.errors = {...state.errors}
                        copyState.errors.errorInputMaxValue = true
                    }
                } else if ((+state.settings.inputMinValue >= 0) && (state.errors.errorInputMaxValue)) {
                    copyState.errors = {...state.errors}
                    copyState.errors.errorInputMaxValue = false
                    copyState.errors.errorInputMinValue = false
                } else {
                    if (+action.payload.number >= 0) {
                        if (state.errors.errorInputMaxValue) {
                            copyState.errors = {...state.errors}
                            copyState.errors.errorInputMaxValue = false
                        }
                    }
                }
            }
            copyState.settings = {...state.settings}
            copyState.settings.inputMaxValue = action.payload.number
            if ((+copyState.settings.inputMinValue === copyState.counter.minValue) && (+copyState.settings.inputMaxValue === copyState.counter.maxValue)) {
                if (!state.settings.disables.setSettings) {
                    copyState.settings.disables = {...state.settings.disables}
                    copyState.settings.disables.setSettings = true
                }
            } else if (copyState.errors.errorInputMaxValue || copyState.errors.errorInputMinValue) {
                if (!state.settings.disables.setSettings) {
                    copyState.settings.disables = {...state.settings.disables}
                    copyState.settings.disables.setSettings = true
                }
            } else {
                if (state.settings.disables.setSettings) {
                    copyState.settings.disables = {...state.settings.disables}
                    copyState.settings.disables.setSettings = false
                }
            }
            return copyState
        }
        case "INCREMENT-CURRENT-VALUE": {
            let copyState = {...state}
            if (copyState.counter.currentValue < copyState.counter.maxValue) {
                copyState.counter = {...state.counter}
                copyState.counter.currentValue = copyState.counter.currentValue + 1
            }

            if (copyState.counter.currentValue === copyState.counter.maxValue) {
                if (!copyState.counter.disables.increment) {
                    copyState.counter.disables = {...state.counter.disables}
                    copyState.counter.disables.increment = true
                }
            }

            if (copyState.counter.currentValue > copyState.counter.minValue) {
                if (copyState.counter.disables.reset) {
                    copyState.counter.disables = {...copyState.counter.disables}
                    copyState.counter.disables.reset = false
                }
            }

            return copyState
        }
        case "RESET-CURRENT-VALUE": {
            let copyState = {...state}
            copyState.counter = {...state.counter}
            copyState.counter.currentValue = state.counter.minValue
            copyState.counter.disables = {...state.counter.disables}
            copyState.counter.disables.reset = true
            copyState.counter.disables.increment = false
            return copyState
        }
        case "SET-SETTINGS": {
            let copyState = {
                ...state,
                counter: {
                    ...state.counter,
                    minValue: Number(state.settings.inputMinValue),
                    maxValue: Number(state.settings.inputMaxValue),
                    currentValue: Number(state.settings.inputMinValue),
                    disables: {...state.counter.disables, reset: true, increment: false}
                }
            }
            copyState.settings.disables = {...state.settings.disables}
            copyState.settings.disables.setSettings = true
            return copyState
        }
        case "SET-MIN-MAX-VALUE": {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    inputMinValue: String(action.payload.minValue),
                    inputMaxValue: String(action.payload.maxValue)
                },
                counter: {
                    ...state.counter,
                    minValue: action.payload.minValue,
                    maxValue: action.payload.maxValue,
                    currentValue: action.payload.minValue
                }
            }
        }
        default: {
            return state
        }
    }
}

type OnChangeInputMinValueACType = ReturnType<typeof onChangeInputMinValueAC>
export const onChangeInputMinValueAC = (number: string) => {
    return {
        type: 'ON-CHANGE-INPUT-MIN-VALUE',
        payload: {
            number
        }
    } as const
}

type OnChangeInputMaxValueACType = ReturnType<typeof onChangeInputMaxValueAC>
export const onChangeInputMaxValueAC = (number: string) => {
    return {
        type: 'ON-CHANGE-INPUT-MAX-VALUE',
        payload: {
            number
        }
    } as const
}

type IncrementCurrentValueAC = ReturnType<typeof incrementCurrentValueAC>
export const incrementCurrentValueAC = () => {
    return {
        type: 'INCREMENT-CURRENT-VALUE'
    } as const
}

type ResetCurrentValueACType = ReturnType<typeof resetCurrentValueAC>
export const resetCurrentValueAC = () => {
    return {
        type: 'RESET-CURRENT-VALUE'
    } as const
}

type SetSettingsACType = ReturnType<typeof setSettingsAC>
export const setSettingsAC = () => {
    return {
        type: 'SET-SETTINGS'
    } as const
}

type SetMinMaxValueACType = ReturnType<typeof setMinMaxValueAC>
export const setMinMaxValueAC = (minValue: number, maxValue: number) => {
    return {
        type: "SET-MIN-MAX-VALUE",
        payload: {
            minValue,
            maxValue
        }
    } as const
}

export const getValuesFromLocalTC = () => {
    return (dispatch: Dispatch) => {
        let minValue = 0
        let maxValue = 5
        const minValueFromLS = localStorage.getItem('minValue')
        if (minValueFromLS) {
             minValue = JSON.parse(minValueFromLS)
        }
        const maxValueFromLS = localStorage.getItem('maxValue')
        if (maxValueFromLS) {
            maxValue = JSON.parse(maxValueFromLS)
        }
        dispatch(setMinMaxValueAC(Number(minValue),Number(maxValue)))
    }
}

export const setSettingsTC = ()=>{
    return (dispatch:Dispatch,getState:GetState)=>{
        dispatch(setSettingsAC())
        setToLocalStorage('minValue',getState().settings.inputMinValue)
        setToLocalStorage('maxValue',getState().settings.inputMaxValue)
    }
}

const setToLocalStorage = (key: KeyType, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

type KeyType = 'minValue' | 'maxValue'
