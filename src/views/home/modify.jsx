import React, { useEffect } from "react";
import Header from "components/Header/Header";
import styled from "styled-components";
import useInputs from "hooks/useInput";
import useAxios from "hooks/useAxios";
import { restApi } from "apis/index";
import { useNavigate, useParams } from "react-router-dom";
const Container = styled.div`
    position: absolute;
    left: 98px;
    width: calc(100% - 98px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    padding: 5rem;
`;
const ModifyList = () => {
    const axiosState = useAxios();
    const navigation = useNavigate();
    const params = useParams();
    const [datas, onChange, reset, setDatas] = useInputs({
        title: "",
        content: "",
        start_at: "",
        end_at: "",
    });

    const getLegacyData = async () => {
        const result = await axiosState.loadData(
            restApi.get(`to_do/${params.id}`)
        );
        setDatas((el) => ({ ...result.data }));
    };
    const validator = () => {
        // 제목
        if (!datas?.title || datas.title.length < 2) {
            alert("올바르지 않은 제목입니다.");
            return false;
        }
        if (datas?.start_at.length <= 0) {
            alert("시작일을 입력해주세요.");
            return false;
        } else if (datas?.end_at.length <= 0) {
            alert("종료일을 입력해주세요.");
            return false;
        }
        const tempStartAt = new Date(datas.start_at).getTime();
        const tempEndAt = new Date(datas.end_at).getTime();

        if (tempStartAt > tempEndAt) {
            alert("종료일은 시작일 보다 적을 수 없습니다.");
            return false;
        }

        return window.confirm("정말 수정하시겠습니까?");
    };

    const modifyPost = async () => {
        if (validator()) {
            const { status } = await axiosState.loadData(
                restApi.patch(`to_do/${params.id}`, {
                    ...datas,
                })
            );
            if (status === 200) {
                navigation("/");
            }
        }
    };

    useEffect(() => {
        getLegacyData();
    }, []);

    return (
        <>
            <Header></Header>
            <Container>
                <div
                    style={{
                        width: "100%",
                        gap: "0 1rem",
                        fontSize: "20px",
                    }}
                >
                    제목:
                    <input
                        name={"title"}
                        onChange={onChange}
                        value={datas?.title}
                        style={{
                            width: "100%",
                            height: "54px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            padding: "0 1rem",
                            border: "1px solid lightgray",
                            borderRadius: "10px",
                        }}
                    ></input>
                </div>
                <div
                    style={{
                        width: "100%",
                        gap: "0 1rem",
                        fontSize: "20px",
                    }}
                >
                    내용:
                    <textarea
                        name={"content"}
                        onChange={onChange}
                        value={datas?.content}
                        style={{
                            border: "1px solid lightgray",
                            width: "100%",
                            minHeight: "610px",
                            fontSize: "20px",
                            fontWeight: "bold",
                            padding: "1rem",
                            borderRadius: "10px",
                        }}
                    ></textarea>
                </div>
                <div style={{ display: "flex", gap: "0 1rem" }}>
                    <div>시작일</div>
                    <input
                        type={"date"}
                        value={datas?.start_at}
                        onChange={onChange}
                        name={"start_at"}
                    ></input>
                    <div>종료일</div>
                    <input
                        type={"date"}
                        value={datas?.end_at}
                        onChange={onChange}
                        name={"end_at"}
                    ></input>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                        margin: "2rem 0",
                        gap: ".5rem",
                    }}
                >
                    <button
                        onClick={() => {
                            reset();
                        }}
                    >
                        취소
                    </button>
                    <button onClick={modifyPost}> 수정</button>
                </div>
            </Container>
        </>
    );
};

export default ModifyList;
