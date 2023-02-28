import styled from 'styled-components';


export const Botoes = styled.button`
    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #FFF;
    margin: 32px 0;
    &:hover{
    color: #95FFD4;
    }
    @media (min-width:375px){
    border-radius:4px;
    font-size:15px;
    padding: 12px;
    margin: 28px 0;
    }
`;



