import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import AddTodoList from "views/AddTodoList";
import Detail from "views/Detail";
import { loadTodoList } from "./redux/todoSlice";

function App() {
	const dispatch = useDispatch();

	const loadList = async () => {
		const res = await axios.get("https://teamhomwork.herokuapp.com/todos");

		dispatch(loadTodoList(res.data));
	};

	React.useEffect(() => {
		loadList();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/add" element={<AddTodoList />}></Route>
			<Route path="/detail/:id" element={<Detail />}></Route>
			<Route path="/detail" element={<Detail />}></Route>
		</Routes>
	);
}

export default App;
