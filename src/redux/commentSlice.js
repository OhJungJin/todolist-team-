import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
  },
  // {
  // 	id,
  //     cardID,
  //     userName,
  // 	comment,
  // 	isDeleted,
  //     createdAt,
  // },
  reducers: {
    loadCommentList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { loadCommentList } = commentSlice.actions;
export default commentSlice.reducer;
