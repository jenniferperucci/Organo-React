import { Botoes } from "./StyleBotao"

const Botao = (props) => {
    return (<Botoes>
        {props.children}
    </Botoes>)
}

export default Botao