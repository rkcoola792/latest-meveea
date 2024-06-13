import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:0
    },
    reducers:{
        addToCart:(state,action)=>{
            state.value+=1
        },
        decrease:(state,action)=>{
            state.value-=1
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer