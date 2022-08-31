import React from "react";
import Layout from "components/Layout.js/Layout";
import Form from "components/Form.js/Form";

import { api } from "redux/axios";
import axios from "axios";
import useInput from "hooks/useInput";
import { useNavigate } from "react-router-dom";
export default function AddTodoList() {
	const navigate = useNavigate();

	async function addTodoData() {
		if (title == "" || content == "") {
			alert("빈칸을 입력해주세요.");
		} else {
			try {
				const response = await api.post("todos/", {
					title: title,
					content: content,
					done: false,
					createdAt: "",
				});
				navigate(-1);
			} catch (error) {}
		}
	}
	const [title, onChangeTitleHandler] = useInput();
	const [content, onChangeContentHandler] = useInput();

	return (
		<Layout>
			<Form
				title={title}
				onChangeTitleHandler={onChangeTitleHandler}
				content={content}
				onChangeContentHandler={onChangeContentHandler}
				addTodoData={addTodoData}
			></Form>
		</Layout>
	);
}
