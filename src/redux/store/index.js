import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { authApi } from "../../services/authApi";
import reducers from "../reducers";


const persistedReducer = persistReducer(
    {
        key: 'reqres',
        storage: AsyncStorage,
    }, reducers
)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
        .concat(authApi.middleware)
})

const persistor = persistStore(store)

export { store, persistor }