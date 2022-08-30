import React from "react";
import useInput from "hooks/useInput";

function Form({
	title,
	onChangeTitleHandler,
	content,
	onChangeContentHandler,
	addTodoData,
}) {
	return (
		<div className="grid">
			<input
				className="w-full h-20 m-4 border-2 border-amber-700"
				type="text"
				name="title"
				value={title}
				onChange={onChangeTitleHandler}
			/>
			<input
				className="w-full h-20 m-4 border-2 border-amber-700"
				type="text"
				name="content"
				placeholder="hi"
				value={content}
				onChange={onChangeContentHandler}
			/>
			<button className="w-full border-2 m-4" onClick={addTodoData}>
				hi
			</button>
		</div>
	);
}

export default Form;
