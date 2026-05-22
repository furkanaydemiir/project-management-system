import { configureStore } from "@reduxjs/toolkit";
import projectReducer  from "./projectSlice";
import teamReducer from "./teamSlice";

export const store = configureStore({
    reducer:{
        projects:projectReducer,
        team:teamReducer
    }
})