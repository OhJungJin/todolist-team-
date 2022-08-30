import React from "react";
import Layout from "components/Layout.js/Layout";
import Form from "components/Form.js/Form";

import axios from "axios";
import useInput from "hooks/useInput";

export default function AddTodoList() {
	async function addTodoData() {
		try {
			const response = await axios.post(
				"https://teamhomwork.herokuapp.com/todos",
				{
					id: 7,
					title: title,
					content: content,
					done: true,
					createdAt: "",
				}
			);
			console.log(response);
		} catch (error) {
			console.log(error);
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
