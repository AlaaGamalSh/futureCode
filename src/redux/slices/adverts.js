import { createSlice } from "@reduxjs/toolkit";
import {
  getAds,
  addNewAdverts,
  editAdverts,
  deleteAdvert,
  getStors,
} from "../services/adverts_service";

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "adverts",
  initialState: {
    isLoadingGetAds: false,
    isLoadingAddAdverts: false,
    isLoadingUpdateAdverts: false,
    isLoadingDeleteAdverts: false,
    allAds: [],
    advertId: null,
    stors: [],
    isLoadingGetStors: false,
  },

  reducers: {
    setAdvertId: (state, action) => {
      state.advertId = action.payload;
    },
  },

  extraReducers: {
    // get Ads
    [getAds.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoadingGetAds = false;
      state.allAds = action.payload.data.data;
    },
    [getAds.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoadingGetAds = false;
    },
    [getAds.pending]: (state) => {
      console.log("pending");
      state.isLoadingGetAds = true;
    },
    //
    // Add Ads
    [addNewAdverts.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoadingAddAdverts = false;
    },
    [addNewAdverts.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoadingAddAdverts = false;
    },
    [addNewAdverts.pending]: (state) => {
      console.log("pending");
      state.isLoadingAddAdverts = true;
    },
    //
    // Update Ads
    [editAdverts.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoadingUpdateAdverts = false;
    },
    [editAdverts.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoadingUpdateAdverts = false;
    },
    [editAdverts.pending]: (state) => {
      console.log("pending");
      state.isLoadingUpdateAdverts = true;
    },
    //
    // Delete Ads
    [deleteAdvert.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoadingDeleteAdverts = false;
    },
    [deleteAdvert.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoadingDeleteAdverts = false;
    },
    [deleteAdvert.pending]: (state) => {
      console.log("pending");
      state.isLoadingDeleteAdverts = true;
    },
    //
    // get Stors
    [getStors.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.isLoadingGetStors = false;
      state.stors = action.payload.data.data;
    },
    [getStors.rejected]: (state, action) => {
      console.log("rejected");
      state.isLoadingGetStors = false;
    },
    [getStors.pending]: (state) => {
      console.log("pending");
      state.isLoadingGetStors = true;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setAdvertId } = slice.actions;
