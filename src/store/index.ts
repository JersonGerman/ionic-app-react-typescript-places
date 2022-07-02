import { configureStore } from "@reduxjs/toolkit";
import place from "./slices/place.slice";
import counter from "./slices/counter.slice";

export default configureStore({
    reducer:{
        place,
        counter
    }
})