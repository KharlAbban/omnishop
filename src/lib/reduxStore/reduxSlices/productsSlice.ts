import { ProductsStateType, ProductType } from "@/utils/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

if (!backendUrl) throw new Error("No backend server url found!!");

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async () => {
        const meatProducts = await axios.get(`${backendUrl}/products`);
        return meatProducts.data as ProductType[];
    }
)

const productsInitialState: ProductsStateType = {
    items: [],
    status: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState: productsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProducts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch products!!";
        })
    }
});

export default productsSlice.reducer;