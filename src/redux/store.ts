import {AnyAction, applyMiddleware, legacy_createStore} from "redux";
import {counterReducer} from "../reducer/counterReducer";
import thunk, { ThunkDispatch} from "redux-thunk";
import { useDispatch} from "react-redux";


export const store = legacy_createStore(counterReducer,applyMiddleware(thunk))
export type Dispatch = typeof store.dispatch
export type GetState = typeof store.getState
export type RootState = ReturnType<typeof store.getState>

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
// export type TypedThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     AnyAction
//     >;

export const useTypedDispatch  = () =>  useDispatch<TypedDispatch>()
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// @ts-ignore
window.store= store