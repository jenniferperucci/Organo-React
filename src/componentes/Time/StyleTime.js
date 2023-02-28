import styled from 'styled-components';

export const Times= styled.section`
    text-align: center;
    padding: 32px;
 h3{
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
 }
 @media (min-width:375px){
    padding: 5px;
 h3{
    font-size:20px;
}      
}
`;

export const Funcionarios = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
@media (min-width:375px){
    margin-top: 10px;
}
`;
