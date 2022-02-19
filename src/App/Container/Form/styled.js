import styled, { css } from "styled-components";

export const FormContainer = styled.form`
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    max-width: 150px;
    border-radius: 10px;
    background-color: #ccc;
    align-items: center;
`;

export const Label = styled.label`
    display: grid;
    grid-template-columns: 1fr;
    margin: 40px;

    @media(max-width: 767px) {
        grid-template-columns: 175px;
        font-size: 18px;
        margin: 20px;
    }

    ${({ clock }) => clock && css`
        font-size: 20px;
        text-align: right;

        @media(max-width: 767px) {
            grid-template-columns: 175px;
            font-size: 10px;
            margin: 20px;
        }   
    `}

    ${({center}) => center && css`
        text-align: center;
    `}

`;