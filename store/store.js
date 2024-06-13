import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSLice";

export default configureStore({
    reducer:{
cart:cartSlice
    }
})