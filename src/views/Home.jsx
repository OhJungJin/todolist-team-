import Layout from "components/Layout.js/Layout";
import List from "components/List/List";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "redux/todoSlice";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo());
	}, []);

	const data = useSelector((state) => state.todos);

	return (
		<Layout>
			<List></List>
		</Layout>
	);
}
