import React from "react";
import styled from "styled-components";
import useContent from "hooks/useContent";
import useAxios from "hooks/useAxios";
import { api } from "redux/axios";
import { toStringByFormatting } from "func/string";
import { useParams } from "react-router-dom";

const CommentInput = styled.input`
	width: ${(props) => props.width || "512px"};
`;
const EditComment = () => {
	const axiosState = useAxios();
	const params = useParams();
	const [datas, onChange, reset] = useContent({
		userName: "",
		desc: "",
	});
	const addComment = async () => {
		const result = await api.post("comment", {
			...datas,
			isDeleted: false,
			cardNum: params.id,
			createdAt: toStringByFormatting(new Date()),
		});
		window.location.reload();
	};
	return (
		<span style={{ display: "flex", flexDirection: "column" }}>
			<div>
				<CommentInput
					width={"120px"}
					name="userName"
					placeholder="닉네임"
					onChange={onChange}
					value={datas.userName}
				></CommentInput>
				<CommentInput
					name="desc"
					placeholder="댓글쓰기"
					onChange={onChange}
					value={datas.desc}
				></CommentInput>
				<button onClick={addComment}>생성</button>
			</div>
		</span>
	);
};

export default EditComment;
