import styled from 'styled-components';

export const Formularios = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
    @media (min-width:375px) {
        margin: 45px 0;
    }
    form{
    max-width: 80%;
    background-color: #F2F2F2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0,0,0, 0.08);
    }
    
`;

export const Forms = styled.form`
    max-width: 80%;
    background-color: #F2F2F2;
    border-radius: 20px;
    padding: 36px 64px;
    box-shadow: 8px 8px 16px rgba(0,0,0, 0.08);
`;