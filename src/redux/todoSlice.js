import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      {
        id: 1,
        title: "json-server",
        content: "json-server를 배워봅시다.",
        done: false,
        createdAt: "",
      },
    ],
  },
  reducers: {
    loadTodoList: (state, action) => {
      state = action.payload;
    },
  },
  addTodoList: (state, action) => {
    state.push(action.payload);
  },
  updateTodoList: (state, action) => {
    const idx = state.findIndex(x => {
      return x.id === parseInt(action.payload.id);
    });
    state[idx].title = action.payload.title;
    state[idx].content = action.payload.content;
    state[idx].done = action.payload.done;
  },
  deleteTodoList: (state, action) => {
    const idx = state.findIndex(x => {
      return x.id === parseInt(action.payload);
    });
    state.splice(idx, 1);
  },
});

export const { loadTodoList, updateTodoList, addTodoList, deleteTodoList } =
  todoSlice.actions;
export default todoSlice.reducer;
