import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import colorThemeReducer from "./slices/colorThemeSlice";
import eventsReducer from "./slices/eventsSlice";
import focusReducer from "./slices/focusSlice";
import memberReducer from "./slices/memberSlice";

const rootReducer = combineReducers({
  colorTheme: colorThemeReducer,
  events: eventsReducer,
  focus: focusReducer,
  member: memberReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
