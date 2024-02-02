import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const stores =configureStore({
    reducer:{
        app:appSlice,
    },
});
export default stores;