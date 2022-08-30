import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComment = createAsyncThunk("get/comment", async arg => {
  try {
    const response = await axios.get(
      `https://teamhomwork.herokuapp.com/comment/?cardNum=${arg}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
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
