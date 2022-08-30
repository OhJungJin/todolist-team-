import styled from "styled-components";
import useInputs from "hooks/useInput";
import useAxios from "hooks/useAxios";
import { restApi } from "apis/index";

import CommentList from "./part/CommentList";
import { toStringByFormatting } from "func/string";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CommentInput = styled.input`
    width: ${(props) => props.width || "512px"};
`;
const Comment = () => {
    const axiosState = useAxios();
    const params = useParams();
    const [datas, onChange, reset] = useInputs({
        nickname: "",
        content: "",
    });
    const addComment = async () => {
        const { data } = await axiosState.loadData(
            restApi.post("comment", {
                ...datas,
                is_deleted: false,
                todo_id: params.id,
                created_at: toStringByFormatting(new Date()),
            })
        );
        reset();
        window.location.reload();
    };
    return (
        <span style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <CommentInput
                    width={"120px"}
                    name="nickname"
                    placeholder="닉네임"
                    onChange={onChange}
                    value={datas.nickname}
                ></CommentInput>
                <CommentInput
                    name="content"
                    placeholder="댓글쓰기"
                    onChange={onChange}
                    value={datas.content}
                ></CommentInput>
                <button onClick={addComment}>생성</button>
            </div>
            <CommentList></CommentList>
        </span>
    );
};

export default Comment;
