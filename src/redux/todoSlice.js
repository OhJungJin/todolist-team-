import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk(
	"get/todo",
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"https://teamhomwork.herokuapp.com/todos"
			);
			console.log(response);
			return response;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		// list: [
		// 	{
		// 		id: 1,
		// 		title: "json-server",
		// 		content: "json-server를 배워봅시다.",
		// 		done: false,
		// 		createdAt: "",
		// 	},
		// ],
	},
	reducers: {
		loadTodoList: (state, action) => {
			state = action.payload;
		},
		addTodoList: (state, action) => {
			state.push(action.payload);
		},
		updateTodoList: (state, action) => {
			const idx = state.findIndex((x) => {
				return x.id === parseInt(action.payload.id);
			});
			state[idx].title = action.payload.title;
			state[idx].content = action.payload.content;
			state[idx].done = action.payload.done;
		},
		deleteTodoList: (state, action) => {
			const idx = state.findIndex((x) => {
				return x.id === parseInt(action.payload);
			});
			state.splice(idx, 1);
		},
	},
	extraReducers: {
		[fetchTodo.pending]: (state, { payload }) => {
			state.loading = true;
		},
		[fetchTodo.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.data = payload;
			state.isSuccess = true;
		},
		[fetchTodo.rejected]: (state, { payload }) => {
			state.message = payload;
			state.loading = false;
			state.isSuccess = true;
		},
	},
});

export const { loadTodoList, updateTodoList, addTodoList, deleteTodoList } =
	todoSlice.actions;

export default todoSlice.reducer;
