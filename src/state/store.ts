import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import colorThemeReducer from 'state/slices/colorThemeSlice';

const rootReducer = combineReducers({
  colorTheme: colorThemeReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
