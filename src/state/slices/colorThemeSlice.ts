import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";
import { Thunk, Dispatch } from "../store";

export type ThemeType = ThemeMode.LIGHT | ThemeMode.DARK;

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

type ColorTheme = {
  themeMode: ThemeMode;
};

const initialState: ColorTheme = {
  themeMode: ThemeMode.DARK,
};

// Slice
const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      const { payload } = action;
      state.themeMode = payload;
    },
  },
});

// Reducers
export default colorThemeSlice.reducer;

// Actions
const { setThemeMode } = colorThemeSlice.actions;

// Thunks
export const toggleThemeMode = (): Thunk => (dispatch: Dispatch) => {
  const { themeMode } = store.getState().colorTheme;
  const mode = themeMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;

  dispatch(setThemeMode(mode));
};
