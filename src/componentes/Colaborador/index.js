import {Colaboradores, Cabecalho, Rodape} from './StyleColaborador'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (<Colaboradores>
        <Cabecalho style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </Cabecalho>
        <Rodape>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </Rodape>
    </Colaboradores>)
}

export default Colaborador