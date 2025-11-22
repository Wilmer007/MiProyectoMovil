import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./rutineSlice";
import rutineReducer from "./rutineSlice";


export const store = configureStore ({

    reducer: {

        user: userReducer,
        rutines: rutineReducer,

    }

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;