import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "./reduxSlices/productsSlice"
import cartReducer from "./reduxSlices/cartSlice"

export const reduxStore = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;