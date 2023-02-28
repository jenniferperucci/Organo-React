import styled from 'styled-components';

export const CampoDeTexto = styled.div`
    margin: 24px 0;
    @media (min-width:375px){
      margin: 20px 0;
    }
 label{
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    @media (min-width:375px){
      font-size: 16px;
    }
 }
 input{
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    @media (min-width:375px){
       font-size:15px;
       padding: 15px;
    }
 }
`;
