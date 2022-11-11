import { createReducer } from "@reduxjs/toolkit"
import { authApi } from "../../../services/authApi"
import { logoutAction } from "../../actions/AuthAction"

const initialState = {
    token: null,
}

const AuthReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        logoutAction,
        (state) => ({
            ...state,
            token: null
        })
    )
    builder.addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action) => ({
            ...state,
            token: action.payload.token,
        })
    )
})

export default AuthReducer