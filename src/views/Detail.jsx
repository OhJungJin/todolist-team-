import Layout from "components/Layout.js/Layout";
import React, { useState } from "react";
import Comment from "components/Comment/Comment";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentList } from "redux/commentSlice";

export default function Detail() {
	const [isComment, setComment] = useState(true);
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const param = useParams(3);

	const todoList = useSelector((state) => state.todos.list);
	const myTodo = todoList.filter((x) => {
		return x.id === parseInt(param.id);
	});

	const loadCommnet = async () => {
		const res = await axios.get(
			`https://teamhomwork.herokuapp.com/comment/?cardId=${param.id}`
		);
		dispatch(loadCommentList(res.data));
	};

	React.useEffect(() => {
		loadCommnet();
	}, []);

	return (
		<div>
			{isComment === true ? (
				<div className="container mx-auto h-screen">
					<div className="flex justify-around p-1 w-3/5 mx-auto my-4">
						<p className="w-3/5 text-2xl">{myTodo[0].title}</p>
						<button className="w-1/5 border-2">수정하기</button>
						<button
							className="w-1/5 text-2xl font-bold"
							onClick={() => {
								navigate(-1);
							}}
						>
							X
						</button>
					</div>
					<div className="grid content-between h-48 w-3/4 mx-auto border-4 border-sky-600 border-solid rounded-lg ">
						<div>
							<p className="mt-4">{myTodo[0].content}</p>
						</div>
						<div className="flex justify-end space-x-5 mr-4 mb-4">
							{/* 이 버튼을 누루면 댓글창이 사라져요 */}
							<button
								className=" border-2 border-black rounded-lg p-2"
								onClick={() => {
									setComment(false);
								}}
							>
								댓글닫기
							</button>
							<button className=" border-2 border-black rounded-lg p-2">
								완료!
							</button>
						</div>
					</div>
					<Comment userId={param.id}></Comment>
				</div>
			) : (
				// false
				<div className="container mx-auto h-screen">
					<div className="flex justify-around p-4 w-3/5 mx-auto my-4">
						<p className="w-3/5 text-2xl">title</p>
						<button className="w-1/5 border-2">수정하기</button>
						<button className="w-1/5 text-2xl font-bold">X</button>
					</div>
					<div className="h-2/3 w-3/4 mx-auto border-4 border-sky-600 rounded-lg grid content-between">
						<div>
							<p className="mt-4">aaa</p>
						</div>

						<div className="flex justify-end space-x-5 mr-4 mb-4">
							{/* 이버튼 누르면 댓글창이 나와요 */}
							<button
								className=" border-2 border-black rounded-lg p-2"
								onClick={() => {
									setComment(true);
								}}
							>
								댓글보기
							</button>
							<button className=" border-2 border-black rounded-lg p-2">
								완료!
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
