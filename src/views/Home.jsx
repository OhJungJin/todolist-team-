import Layout from "components/Layout.js/Layout";
import List from "components/List/List";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "redux/todoSlice";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodo({ data }));
	}, []);

	const data = useSelector((state) => state.todos);
	console.log(data);
	// useEffect(() => {
	// 	let completed = false;
	// 	async function get() {
	// 		const res = await axios.get("https://teamhomwork.herokuapp.com/todos");
	// 		if (!completed) setData(res.data);
	// 	}
	// 	get();
	// }, []);

	return (
		<Layout>
			<List>Home</List>
		</Layout>
	);
}
