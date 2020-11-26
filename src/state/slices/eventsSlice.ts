import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EventType = {};

type State = {
  events: any[];
};

const initialState: State = {
  events: [],
};

// Slice
const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventType[]>) => {
      return {
        events: action.payload,
      };
    },
  },
});

// Reducers
export default eventsSlice.reducer;

// Actions
export const { setEvents } = eventsSlice.actions;
