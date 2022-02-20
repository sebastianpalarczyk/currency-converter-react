import styled from "styled-components";

export const Loading = styled.label`
    display: grid;
    grid-template-columns: 350px;
    margin: 40px;
    text-align: center;

    @media(max-width: 767px) {
        grid-template-columns: 175px;
        font-size: 18px;
        margin: 20px;
    }
`;   