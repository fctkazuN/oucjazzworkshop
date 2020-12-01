import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type EventType = {
  start: string;
  title: string;
  location: string;
  description: string;
};

type State = {
  events: EventType[];
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
