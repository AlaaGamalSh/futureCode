import { createAsyncThunk } from "@reduxjs/toolkit";
import * as URLS from "../../urls";
//axios
import axios from "../../utils/axios";

//---------------------------------------------------------------

// GET =>  get Ads
export const getAds = createAsyncThunk(
  "adverts/getAds",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(URLS.getAdsURL);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// POST =>  post Ads
export const addNewAdverts = createAsyncThunk(
  "adverts/addNewAdverts",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(URLS.addAdvertURL, data, {
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// POST =>  update Ads
export const editAdverts = createAsyncThunk(
  "adverts/editAdverts",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(URLS.updateAdvertURL, data, {
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// POST =>  delete Ads
export const deleteAdvert = createAsyncThunk(
  "adverts/deleteAdvert",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${URLS.deleteAdvertURL}/${id}`);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// GET =>  get Stors
export const getStors = createAsyncThunk(
  "adverts/getStors",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(URLS.getStorsURL);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
