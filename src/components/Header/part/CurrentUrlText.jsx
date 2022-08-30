import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const Text = styled.div`
    position: relative;
    color: black;
    transform: rotateZ(270deg);
    font-weight: bold;
    transform-origin: left top;
    ${({ fontSize }) =>
        css`
            font-size: ${fontSize || "16px"};
        `}
    overflow: hidden;
    & > div {
        transform: translateY(100%);
        width: 100%;
        height: 100%;
        transition: 500ms 250ms transform;
    }
`;

const CurrentUrlText = () => {
    const [text, setText] = useState("TEXT");

    const textVisible = { transform: "translateY(0)" };
    return (
        <Text>
            <div style={textVisible}>{text}</div>
        </Text>
    );
};

export default CurrentUrlText;
