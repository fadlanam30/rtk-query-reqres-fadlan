import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../../services/baseApi";
import AuthReducer from "./AuthReducer";

const reducers = combineReducers({
    auth: AuthReducer,
    api: baseApi.reducer,
})

export default reducers