import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

// Slice
const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    setBackdrop: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

// Reducers
export default backdropSlice.reducer;

// Actions
export const { setBackdrop } = backdropSlice.actions;
