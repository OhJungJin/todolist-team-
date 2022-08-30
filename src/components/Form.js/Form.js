import React from "react";

function Form({
	title,
	onChangeTitleHandler,
	content,
	onChangeContentHandler,
	addTodoData,
}) {
	return (
		<div className="grid place-items-center grid-rows-[50px_200px_50px_200px] h-full">
			<div className="w-11/12 pl-4 mt-4 text-2xl font-bold text-left ">
				제목
			</div>
			<input
				className="w-11/12 m-4 border-2 shadow-xl h-5/6 hover:border-green-500 rounded-2xl"
				type="text"
				name="title"
				value={title}
				onChange={onChangeTitleHandler}
			/>
			<div className="w-11/12 pl-4 mt-4 text-2xl font-bold text-left ">
				내용
			</div>
			<input
				className="w-11/12 m-4 border-2 shadow-xl h-5/6 hover:border-green-500 rounded-2xl"
				type="text"
				name="content"
				value={content}
				onChange={onChangeContentHandler}
			/>
			<button
				className="w-11/12 m-4 text-2xl font-bold border-2 shadow-xl h-1/4 hover:bg-green-500 hover:text-white rounded-2xl"
				onClick={addTodoData}
			>
				등록하기
			</button>
		</div>
	);
}

export default Form;
