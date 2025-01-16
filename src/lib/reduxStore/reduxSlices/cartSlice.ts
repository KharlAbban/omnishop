import { CartItemType, CartStateType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartInitialState: CartStateType = {
    items: [],
    selected: []
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