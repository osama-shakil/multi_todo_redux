import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootreducer=combineReducers(
    {todo:todoReducer}
)

export default rootreducer