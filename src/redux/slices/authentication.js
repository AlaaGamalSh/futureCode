import { createSlice } from "@reduxjs/toolkit";

import {} from "../services/auth_service";
// ----------------------------------------------------------------------

const slice = createSlice({
  name: "authentication",
  initialState: {
    isLoading: false,
  },
  reducers: {},
  extraReducers: {},
});

// Reducer
export default slice.reducer;

// Actions
//export const {} = slice.actions;
