import Colaborador from '../Colaborador'
import {Times, Funcionarios} from './StyleTime'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <Times style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Funcionarios>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome}nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </Funcionarios>
        </Times> 
        : ''
    )
}

export default Time