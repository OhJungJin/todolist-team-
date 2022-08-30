import { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import PercentColorProgressBar from "components/Progressbar/PercentColorProgressBar";
import { Link } from "react-router-dom";
const CardContainer = styled.div`
    margin: 2rem 2rem;
    width: 29%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    user-select: none;
`;

const ProgressBar = styled(PercentColorProgressBar)`
    top: -100%;
`;

const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    font-weight: bold;
    padding: 0.275rem 0;
    overflow: hidden;
    user-select: none;
    border-bottom: ${({ toggle }) => toggle && "2px solid black"};
`;
const CardDesc = styled.div`
    padding: 0.575rem;
    font-size: 14px;
`;
const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
const DoneClear = styled.div`
    color: orange;
    font-weight: bold;
    font-size: 25px;
    position: absolute;
    ${({ x, y }) => {
        return css`
            left: ${x}%;
            top: ${y}%;
            transform: translate(0, -50%) rotateZ(-15deg);
        `;
    }};
`;
const Card = ({ title, content, startAt, endAt, id, isDone }) => {
    const [toggle, setToggle] = useState(false);
    const onToggle = useCallback(() => {
        setToggle((el) => !el);
    }, []);

    return (
        <>
            <CardContainer onClick={onToggle}>
                <ProgressBar startAt={startAt} endAt={endAt}></ProgressBar>
                <CardTitle toggle={toggle}>
                    {title || "제목없음"}
                    {isDone && (
                        <Done>
                            <DoneClear x={0} y={45}>
                                CLEAR!!!
                            </DoneClear>
                            <DoneClear x={25} y={65}>
                                CLEAR!!!
                            </DoneClear>
                            <DoneClear x={50} y={45}>
                                CLEAR!!!
                            </DoneClear>
                            <DoneClear x={75} y={65}>
                                CLEAR!!!
                            </DoneClear>
                        </Done>
                    )}
                </CardTitle>
                {toggle && (
                    <CardDesc>
                        <div style={{ maxHeight: "124px", overflow: "hidden" }}>
                            {content || "내용없음"}
                        </div>
                        <ButtonGroup>
                            <Link to={`/detail/${id}`}>Detail</Link>
                        </ButtonGroup>
                    </CardDesc>
                )}
            </CardContainer>
        </>
    );
};

export default Card;
