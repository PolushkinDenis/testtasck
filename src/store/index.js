import {combineReducers, createStore} from "redux"
import { loginReducer } from "./loginReducer"
import { authReducer } from "./authReducer"

const rootReducer = combineReducers({
    dataLogin: loginReducer,
    newLogin: authReducer
})

export const store = createStore(rootReducer)