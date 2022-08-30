import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ProgressContainer = styled.div`
    position: relative;
    overflow: hidden;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    & > span {
        display: none;
        user-select: none;
        z-index: 2;
    }
    ${(props) => {
        const perc = props.percent;

        const color =
            perc <= 10
                ? "blue"
                : perc <= 25
                ? "green"
                : perc <= 50
                ? "yellow"
                : perc <= 75
                ? "orange"
                : perc < 100
                ? "red"
                : "black";
        return css`
            width: ${props?.maxWidth || "100%"};
            height: ${props?.maxHeight || "1rem"};

            & > div {
                position: absolute;
                left: ${!props?.reverse ? "0%" : "100%"};
                top: 0;
                width: ${props.percent || 0}%;
                background-color: ${color};
                height: 100%;
            }
            &:hover > span {
                display: block;
            }
        `;
    }}
`;

const PercentColorProgressBar = ({
    startAt,
    endAt,
    maxWidth,
    maxHeight,
    ...rest
}) => {
    const [result, setResult] = useState(0);
    useEffect(() => {
        const goalTime =
            new Date(endAt).getTime() - new Date(startAt).getTime();
        const currentAtTime =
            new Date().getTime() - new Date(startAt).getTime();
        setResult(Math.round((currentAtTime / goalTime) * 100));
    }, [startAt, endAt]);
    return (
        <ProgressContainer
            percent={result}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
        >
            <div></div>
            <span>{result}%</span>
        </ProgressContainer>
    );
};

export default PercentColorProgressBar;
