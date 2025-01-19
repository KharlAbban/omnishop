import { CartItemType, CartStateType } from "@/utils/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

if (!backendUrl) throw new Error("No backend server url found!!");

export const fetchCartItems = createAsyncThunk(
    "cart/fetchCartItems",
    async (userEmail: string) => {
        const cartItems = await axios.get(`${backendUrl}/api/cart/getItems/${userEmail}`);
        return cartItems.data as CartItemType[];
    }
);

export const saveCartItems = createAsyncThunk(
    "cart/saveCartItems",
    async ({cartItems, userEmail}: {cartItems: CartItemType[], userEmail: string}) => {
        const savedItems = await axios.post(`${backendUrl}/api/cart/saveItems/${userEmail}`, cartItems);
        return savedItems.data as CartItemType[];
    }
);

const cartInitialState: CartStateType = {
    items: [],
    selected: [],
    status: "idle",
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItemType>) => {
            const existingItem = state.items.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeItemFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
            state.selected = state.selected.filter(id => id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
            state.selected = [];
        },
        updateItemQuantity: (state, action: PayloadAction<{ productId: string, quantity: number }>) => {
            const item = state.items.find(item => item.productId === action.payload.productId);
            if (item) {
                item.quantity = action.payload.quantity
            }
        },
        toggleSelectedItem: (state, action: PayloadAction<{productId: string, isSelected: boolean}>) => {
            const {productId, isSelected} = action.payload;
            if (isSelected) {
                state.selected.push(productId);
            } else {
                state.selected = state.selected.filter(selectedId => selectedId !== productId)
            }
        },
        toggleSelectAll: (state, action: PayloadAction<boolean>) => {
            state.selected = action.payload ? state.items.map(item => item.productId) : []
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCartItems.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchCartItems.fulfilled, (state, action: PayloadAction<CartItemType[]>) => {
            state.status = "succeeded";
            state.items = [...action.payload];
        })
        .addCase(fetchCartItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Could not fetch cart items!";
        })
        .addCase(saveCartItems.pending, (state) => {
            state.status = "loading";
        })
        .addCase(saveCartItems.fulfilled, (state, action: PayloadAction<CartItemType[]>) => {
            state.status = "succeeded";
            state.items = [...action.payload];
        })
        .addCase(saveCartItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Could not save cart items!";
        })
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    updateItemQuantity,
    toggleSelectedItem,
    toggleSelectAll
} = cartSlice.actions;

export default cartSlice.reducer;