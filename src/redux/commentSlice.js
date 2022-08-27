import { createSlice } from "@reduxjs/toolkit";


const commentSlice = createSlice({
	name: "todos",
	initialState: [
		{
			id,
            cardID,
            userName,
			comment,
			isDeleted,
            createdAt,
		},
	],
	reducers: {
		
	}
});

export const{} = commentSlice.actions
export default commentSlice.reducer;