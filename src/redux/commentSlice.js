import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./axios";

export const fetchComment = createAsyncThunk("get/comment", async (arg) => {
  const response = await api.get(`comment/?cardNum=${arg}`);
  return response.data;
});

export const updateCommentThunk = createAsyncThunk("update/comment", async ({ id, payload }) => {
  const response = await api.patch(`comment/${id}`, payload);
  return response.data;
});


const commentSlice = createSlice({
  name: "comments",
  initialState: {
    isLoading: false,
    commentList: [],
  },
  extraReducers: {
    [fetchComment.fulfilled]: (state, { payload }) => {
      state.commentList = payload;
    },
    [updateCommentThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updateCommentThunk.fulfilled]: (state, data) => {
      state.isLoading = false;
      state.commentList = state.commentList.map(comment => {
        if(comment.id === data.payload.id) {
          return data.payload
        } else {
          return comment
        }
      })
    },
  },
});

export default commentSlice.reducer;
export const { updateComment } = commentSlice.actions