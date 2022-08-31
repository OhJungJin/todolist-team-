import Layout from "components/Layout.js/Layout";
import React, { useState, useEffect } from "react";
import Comment from "components/Comment/Comment";
import { useParams, useNavigate, Link } from "react-router-dom";
import useContent from "hooks/useContent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "redux/commentSlice";
import {
	fetchTodo,
	updateTodoThunk,
	toggleTodo,
	updateTodoList,
} from "redux/todoSlice";

export default function Detail() {
	const dispatch = useDispatch();
	const param = useParams(3);
	const data = useSelector((state) => state.todos);
	const todos = data.data;

	useEffect(() => {
		dispatch(fetchTodo());
		dispatch(fetchComment(param.id));
		console.log("새로고침 되었습ㄴㄴ");
	}, []);
	const myTodo = todos?.filter((x) => {
		return x.id === parseInt(param.id);
	});
	const [datas, onChange] = useContent({
		content: myTodo[0]?.content,
	});

	const [isComment, setComment] = useState(true);
	const [iscontent, setcontent] = useState(true);
	const navigate = useNavigate();

	const updateTodoContent = (data) => {
		dispatch(updateTodoThunk(data));
		dispatch(updateTodoList(data));
	};

	const deleteContent = () => {
		if (window.confirm("삭제 하시겠습니까?")) {
			fetch(`https://teamhomwork.herokuapp.com/todos/${param.id}`, {
				method: "DELETE",
			}).then((res) => {
				if (res.ok) {
				}
			});
			alert("삭제 되었습니다. 홈화면으로 이동합니다.");
			navigate(-1);
		}
	};

	const deleteCommeent = (id) => {
		if (window.confirm("삭제 하시겠습니까?")) {
			fetch(`https://teamhomwork.herokuapp.com/comment/${id}`, {
				method: "DELETE",
			}).then((res) => {
				if (res.ok) {
				}
			});
			alert("삭제 되었습니다.");
		}
	};

	return (
		<div>
			{isComment === true ? (
				<div className="container h-screen mx-auto">
					<div className="flex justify-around w-3/5 p-4 mx-auto my-4">
						<p className="w-3/5 text-2xl">{myTodo[0]?.title}</p>
						<button
							className="w-1/5 border-2"
							onClick={() => {
								setcontent(!iscontent);
							}}
						>
							{iscontent === true ? "수정하기" : "수정취소"}
						</button>
						<button className="w-1/5 border-2" onClick={deleteContent}>
							삭제하기
						</button>
						<p
							className="text-2xl font-bold"
							onClick={() => {
								navigate(-1);
							}}
						>
							X
						</p>
					</div>
					<div className="grid content-between w-3/4 mx-auto border-4 rounded-lg h-2/3 border-sky-600">
						{iscontent === true ? (
							<div>
								<p className="mt-4">{myTodo[0]?.content}</p>
							</div>
						) : (
							<div>
								<input
									className="mt-4"
									name="content"
									value={datas?.content}
									onChange={onChange}
								/>
								<button
									onClick={() => {
										updateTodoContent({
											id: param.id,
											content: datas.content,
										});
										setcontent(!iscontent);
									}}
								>
									수정 완료
								</button>
							</div>
						)}

						<div className="flex justify-end mb-4 mr-4 space-x-5">
							{/* 이버튼 누르면 댓글창이 나와요 */}
							<button
								className="p-2 border-2 border-black rounded-lg "
								onClick={() => {
									setComment(false);
								}}
							>
								댓글보기
							</button>
							<button
								className="p-2 border-2 border-black rounded-lg "
								onClick={() => {
									dispatch(
										updateTodoThunk({ id: param.id, done: !myTodo[0]?.done }) //여기서 취소 완료 변경
									);
									toggleTodo({ id: param.id, done: !myTodo[0]?.done });
								}}
							>
								{myTodo[0]?.done ? "취소" : "완료"}
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="container h-screen mx-auto">
					<div className="flex justify-around w-3/5 p-1 mx-auto my-4">
						<p className="w-3/5 text-2xl">{myTodo[0]?.title}</p>
						<button
							className="w-1/5 border-2"
							onClick={() => {
								setcontent(!iscontent);
							}}
						>
							{iscontent === true ? "수정하기" : "수정취소"}
						</button>
						<button className="w-1/5 border-2" onClick={deleteContent}>
							삭제하기
						</button>
						<p
							className="text-2xl font-bold"
							onClick={() => {
								navigate(-1);
							}}
						>
							X
						</p>
					</div>
					<div className="grid content-between w-3/4 h-48 mx-auto border-4 border-solid rounded-lg border-sky-600 ">
						{iscontent === true ? (
							<div>
								<p className="mt-4">{myTodo[0]?.content}</p>
							</div>
						) : (
							<div>
								<input
									className="mt-4"
									name="content"
									value={datas.content}
									onChange={onChange}
								/>
								<button
									onClick={() => {
										updateTodoContent({
											id: param.id,
											content: datas.content,
										});
										setcontent(!iscontent);
									}}
								>
									수정 완료
								</button>
							</div>
						)}

						<div className="flex justify-end mb-4 mr-4 space-x-5">
							{/* 이 버튼을 누루면 댓글창이 사라져요 */}
							<button
								className="p-2 border-2 border-black rounded-lg "
								onClick={() => {
									setComment(true);
								}}
							>
								댓글닫기
							</button>
							<button
								className="p-2 border-2 border-black rounded-lg "
								onClick={() => {
									dispatch(
										updateTodoThunk({ id: param.id, done: !myTodo[0]?.done })
									);
									toggleTodo({ id: param.id, done: !myTodo[0]?.done });
								}}
							>
								{myTodo[0]?.done ? "취소" : "완료"}
							</button>
						</div>
					</div>
					<Comment userId={param.id} deleteCommeent={deleteCommeent}></Comment>
				</div>
			)}
		</div>
	);
}
