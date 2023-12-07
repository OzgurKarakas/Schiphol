import instance from "../../services/instance";
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
    data:[],
    loading:false,
    error:null
}

export const fetchFlights=createAsyncThunk('flights/fetchFlights',async()=>{
    const response= await instance.get('/flights')
    return response.data;
});

const flightsListSlice=createSlice({
    name:'flights',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFlights.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(fetchFlights.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchFlights.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message ?? 'Error'
        })
    }
})

export default flightsListSlice.reducer;