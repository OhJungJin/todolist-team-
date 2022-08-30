import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "./axios";
export const fetchComment = createAsyncThunk("get/comment", async arg => {
  const response = await api.get(`comment/?cardNum=${arg}`);
  return response.data;
});

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [fetchComment.fulfilled]: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export default commentSlice.reducer;
