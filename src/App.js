import React from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import AddTodoList from "views/AddTodoList";
import Detail from "views/Detail";

function App() {
	const loadbucket = async () => {
		const res = await axios.get("https://teamhomwork.herokuapp.com/comment");
		return res.data;
	};

	React.useEffect(() => {
		loadbucket();
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
