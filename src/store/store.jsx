import {legacy_createStore as createStore , combinereducers} from "redux"
import { counterreducer } from "./counterReducer"

export const store = createStore(counterreducer)  