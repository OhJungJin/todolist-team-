import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    loadTodoList: (state, action) => {
      state.list = action.payload;
    },

    addTodoList: (state, action) => {
      state.list.push(action.payload);
    },
    updateTodoList: (state, action) => {
      const idx = state.list.findIndex(x => {
        return x.id === parseInt(action.payload.id);
      });
      console.log(action.payload, idx);
      state.list[idx].title = action.payload.title;
      state.list[idx].content = action.payload.content;
      state.list[idx].done = action.payload.done;
    },
    deleteTodoList: (state, action) => {
      const idx = state.list.findIndex(x => {
        return x.id === parseInt(action.payload);
      });
      state.list.splice(idx, 1);
    },
  },
});

export const { loadTodoList, updateTodoList, addTodoList, deleteTodoList } =
  todoSlice.actions;
export default todoSlice.reducer;
