import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTodo = createAsyncThunk("get/todo", async () => {
  const response = await axios.get("https://teamhomwork.herokuapp.com/todos");
  return response;
});

export const updateTodoThunk = createAsyncThunk("update/todo", async data => {
  const res = await axios.patch(
    `https://teamhomwork.herokuapp.com/Todos/${data.id}`,
    data
  );
  return res.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {
    loadTodoList: (state, action) => {
      state.data = action.payload;
    },

    addTodoList: (state, action) => {
      state.data.push(action.payload);
    },
    updateTodoList: (state, action) => {
      const idx = state.data.findIndex(x => {
        return x.id === parseInt(action.payload.id);
      });
      console.log(action.payload, idx);
      state.data[idx].content = action.payload.content;
    },
    toggleTodo: (state, action) => {
      const idx = state.data.findIndex(x => {
        return x.id === parseInt(action.payload.id);
      });
      state.data[idx].done = action.payload.done;
    },
    deleteTodoList: (state, action) => {
      const idx = state.data.findIndex(x => {
        return x.id === parseInt(action.payload);
      });
      state.data.splice(idx, 1);
    },
  },
  extraReducers: {
    [fetchTodo.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.data = payload.data;

      state.isSuccess = true;
    },
    [fetchTodo.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = true;
    },
    [updateTodoThunk.fulfilled]: (state, { payload }) => {
      const idx = state.data.findIndex(x => {
        return x.id === parseInt(payload.id);
      });
      state.data[idx] = payload;
    },
  },
});

export const {
  loadTodoList,
  updateTodoList,
  toggleTodo,
  addTodoList,
  deleteTodoList,
} = todoSlice.actions;
export default todoSlice.reducer;
