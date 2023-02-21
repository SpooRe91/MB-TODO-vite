import { configureStore } from "@reduxjs/toolkit";
import taksReducer from "../features/tasks/taskSlice";
import globalReducer from "../features/globalSlice";

export const store = configureStore({
    reducer: {
        taskSlice: taksReducer,
        globalSlice: globalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;