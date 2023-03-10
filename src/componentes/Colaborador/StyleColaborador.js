import styled from 'styled-components';

export const Colaboradores = styled.div`
 width: 280px;
 @media (min-width:375px) {
 width: 260px;
 }
`;

export const Cabecalho = styled.div`
    background-color:  #F0F0F0;
    border-radius: 10px 10px 0px 0px;
    img{
    width: 100px;
    border-radius: 50%;
    position: relative;
    bottom: -50px; 
    @media (min-width:375px) {
    width: 90px;
    }
    }
`;

export const Rodape = styled.div`
    background: #FFFFFF;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;
h4{
    color: #6278F7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
    }
h5{
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
}
@media (min-width:375px) {
    padding-top: 75px;
    padding-bottom: 30px;
    }
`;
