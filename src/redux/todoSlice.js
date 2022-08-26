import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todos",
	initialState: [
		{
			id,
			title,
			content,
			checked,
		},
	],
	reducers: {},
});

export default todoSlice.reducer;
