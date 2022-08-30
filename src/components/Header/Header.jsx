import HeaderContainer from "./part/HeaderContainer";
import CurrentUrlText from "./part/CurrentUrlText";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
const SortContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    & > div:first-of-type {
        padding: 0.275rem;
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
    }

    & > i {
        font-size: 40px;
        cursor: pointer;
    }
    ${({ theme }) => {
        const selected = theme.color["hover"];
        return css`
            & > i:hover {
                color: ${selected};
            }
        `;
    }}
`;
const Header = () => {
    const navigation = useNavigate();

    return (
        <>
            <HeaderContainer>
                <SortContainer>
                    <div
                        onClick={() => {
                            navigation("/");
                        }}
                    >
                        Bucket
                    </div>
                    <CurrentUrlText></CurrentUrlText>
                    <i
                        className="material-icons"
                        onClick={() => {
                            navigation("/create");
                        }}
                    >
                        add
                    </i>
                </SortContainer>
            </HeaderContainer>
        </>
    );
};

export default React.memo(Header);
