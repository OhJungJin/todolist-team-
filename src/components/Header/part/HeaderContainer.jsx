import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    width: 98px;
    height: 100%;
    border-right: 1px solid gray;
    left: 0%;
`;

const HeaderContainer = ({ children }) => {
    return (
        <>
            <Container>{children}</Container>
        </>
    );
};

export default React.memo(HeaderContainer);
