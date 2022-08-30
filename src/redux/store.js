import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import CommentReducer from "./commentSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    comments: CommentReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
