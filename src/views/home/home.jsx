import React, { useCallback, useEffect, useState } from "react";
import useAxios from "hooks/useAxios";
import Header from "components/Header/Header";
import styled from "styled-components";
import Card from "components/Card/Card";
import { restApi } from "apis/index";

const Container = styled.div`
    width: calc(100% - 98px);
    padding: 2rem;
    overflow: hidden;
    position: absolute;
    left: 98px;
    display: flex;
    justify-content: baseline;
    flex-wrap: wrap;
`;

const Home = () => {
    const [toDoList, setToDoList] = useState();
    const axiosState = useAxios();
    const getTodo = useCallback(async () => {
        const { data } = await axiosState.loadData(
            restApi.get("to_do?is_deleted=false&_sort=created_at&_order=DESC")
        );
        setToDoList(data);
    }, [axiosState]);
    useEffect(() => {
        getTodo();
    }, []);

    return (
        <>
            <Header></Header>
            <Container>
                {toDoList?.map((el) => (
                    <Card
                        key={el.id}
                        title={el?.title}
                        content={el?.content}
                        startAt={el.start_at}
                        endAt={el.end_at}
                        id={el.id}
                        isDone={el.is_done}
                    ></Card>
                ))}
            </Container>
        </>
    );
};

export default Home;
