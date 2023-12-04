import { combineReducers } from "@reduxjs/toolkit";
import flightsListSlice from "./flightListSlice";

const reducers = combineReducers({
    flights:flightsListSlice
})

export default reducers