import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

// Slice
const focusSlice = createSlice({
  name: "focus",
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

// Reducers
export default focusSlice.reducer;

// Actions
export const { setFocus } = focusSlice.actions;
