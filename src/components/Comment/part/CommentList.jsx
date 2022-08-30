import useAxios from "hooks/useAxios";
import { restApi } from "apis/index";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: beige;
`;
const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const CommentContent = styled.div`
    display: flex;
    row-gap: 1rem;
`;
const CommandList = () => {
    const [comments, setComments] = useState();
    const [focus, setFocus] = useState({ key: 0, content: "" });

    const axiosState = useAxios();
    const params = useParams();
    const getComment = useCallback(async () => {
        const result = await axiosState.loadData(
            restApi.get(`comment?todo_id=${params.id}&is_deleted=false`)
        );
        setComments(result.data);
    }, [axiosState]);

    useEffect(() => {
        getComment();
    }, [focus]);

    const focusComment = useCallback((e, value) => {
        setFocus((el) => ({ key: e.target.name, content: value }));
    }, []);

    const modifyComment = useCallback(async () => {
        const result = await axiosState.loadData(
            restApi.patch(`comment/${focus.key}`, { content: focus.content })
        );
        if (result.status === 200) {
            setFocus((el) => ({ key: 0, content: "" }));
        }
    }, [focus]);

    const deleteComment = useCallback(
        async (e) => {
            const result = await axiosState.loadData(
                restApi.patch(`comment/${e.target.name}`, { is_deleted: true })
            );
            if (result.status === 200) {
                setFocus((el) => ({ key: 0, content: "" }));
            }
        },
        [focus]
    );
    return (
        <Container>
            {comments?.map((el, idx) => (
                <CommentBox key={el.id}>
                    <span style={{ fontWeight: "bold" }}>
                        "{el?.nickname}"님의 댓글
                        <span
                            style={{ fontSize: "12px", fontWeight: "normal" }}
                        >
                            ({el?.created_at})
                        </span>
                    </span>
                    <CommentContent>
                        <div
                            style={{
                                fontSize: "15px",

                                width: "80%",
                                maxWidth: "1024px",
                                margin: "1rem",
                                marginTop: ".575rem",
                                overflow: "auto",
                                maxHeight: "48px",
                            }}
                        >
                            {+focus.key === +el?.id ? (
                                <textarea
                                    style={{ width: "100%", resize: "none" }}
                                    value={focus.content}
                                    onChange={(e) => {
                                        setFocus((el) => ({
                                            ...el,
                                            content: e.target.value,
                                        }));
                                    }}
                                ></textarea>
                            ) : (
                                <>{el?.content}</>
                            )}
                        </div>
                        <div>
                            {+focus.key === +el?.id ? (
                                <button
                                    name={el?.id}
                                    index={idx}
                                    onClick={modifyComment}
                                >
                                    완료
                                </button>
                            ) : (
                                <button
                                    name={el?.id}
                                    index={idx}
                                    onClick={(e) => {
                                        focusComment(e, el.content);
                                    }}
                                >
                                    수정
                                </button>
                            )}
                            <button name={el?.id} onClick={deleteComment}>
                                삭제
                            </button>
                        </div>
                    </CommentContent>
                </CommentBox>
            ))}
        </Container>
    );
};

export default React.memo(CommandList);
