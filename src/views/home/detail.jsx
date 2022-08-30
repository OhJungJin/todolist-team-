import { restApi } from "apis";
import PercentColorProgressBar from "components/Progressbar/PercentColorProgressBar";
import Header from "components/Header/Header";
import Comment from "components/Comment/Comment";

import useAxios from "hooks/useAxios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
`;
const PostCard = styled.div`
    width: 80%;
    min-width: 1024px;
    height: 50%;
    border-radius: 25px;
    padding: 1rem;
    overflow: auto;
    background-color: lightgray;
    position: relative;
`;

const divStyle = {
    padding: "1rem",
    width: "80%",
    display: "flex",
    justifyContent: "center",
};
const ButtonGroup = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    display: flex;
    gap: 1rem;
`;

const Done = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.7);
`;

const Detail = () => {
    const [postInfo, setPostInfo] = useState();
    const navigation = useNavigate();
    const axiosState = useAxios();
    const params = useParams();
    const getDetailItem = useCallback(async () => {
        const result = await axiosState.loadData(
            restApi.get(`to_do/${params?.id}`)
        );
        setPostInfo(result?.data);
    }, [axiosState, params]);

    useEffect(() => {
        getDetailItem();
    }, [params]);

    const deletePost = async () => {
        const result = await axiosState.loadData(
            restApi.patch(`to_do/${params.id}`, { is_deleted: true })
        );
        if (result.status === 200) {
            navigation("/");
        }
    };
    const doneToggle = async () => {
        console.log(postInfo);
        const result = await axiosState.loadData(
            restApi.patch(`to_do/${params.id}`, { is_done: !postInfo.is_done })
        );
        if (result.status === 200) {
            window.location.reload();
        }
    };

    return (
        <>
            <Header></Header>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    left: "98px",
                    width: "calc(100% - 98px)",
                    position: "relative",
                    alignItems: "center",
                }}
            >
                <Container>
                    <ButtonGroup>
                        <button onClick={deletePost}>삭제</button>
                        <button
                            onClick={() => {
                                navigation(`/modify/${params.id}`);
                            }}
                        >
                            수정
                        </button>
                        <button onClick={doneToggle}>
                            {!postInfo?.is_done ? "완료하기" : "취소하기"}
                        </button>
                    </ButtonGroup>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "30px",
                            ...divStyle,
                        }}
                    >
                        {postInfo?.title || "제목없음"}
                    </div>
                    <PostCard>
                        {postInfo?.content}
                        {postInfo?.is_done && (
                            <Done>
                                <div
                                    style={{
                                        color: "orange",
                                        fontWeight: "bold",
                                        fontSize: "158px",
                                        letterSpacing: "58px",
                                        transformOrigin: "50%",
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        transform:
                                            "translate(-50%, -65%) rotateZ(-15deg)",
                                    }}
                                >
                                    CLEAR!!!
                                </div>
                            </Done>
                        )}
                    </PostCard>
                    <div style={{ fontWeight: "bold", ...divStyle }}>
                        <div>{postInfo?.start_at}</div> ~
                        <div>{postInfo?.end_at}</div>
                    </div>
                    <PercentColorProgressBar
                        maxWidth={"80%"}
                        startAt={postInfo?.start_at}
                        endAt={postInfo?.end_at}
                    ></PercentColorProgressBar>
                </Container>
                <Comment></Comment>
            </div>
        </>
    );
};
export default Detail;
