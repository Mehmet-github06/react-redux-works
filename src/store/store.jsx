import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterreducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
// export const store = createStore(counterreducer)

const rootReducer = combineReducers({
  counter: counterreducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  (process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test") && composeWithDevTools()
);
