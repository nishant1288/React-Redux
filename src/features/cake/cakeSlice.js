//import createSlice
import { createSlice } from '@reduxjs/toolkit';

//declare initial state
const initialState = {
    numOfCakes: 10
}

//invoke the function and assign it to constant cakeSlice
const cakeSlice = createSlice({ //accepts an object as arguement
    name: 'cake',
    initialState, //equals to initialState : initialState,
    reducers: {
        ordered: (state) => { //cake order state transition
            state.numOfCakes--
        },
        restocked: (state, action) => { // cake restocked state transition
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer; 
export const {ordered, restocked} = cakeSlice.actions; 

//createSlice automatically generates action creator with the same names as the reducer function we have written. In this case it is ordered and restocked.