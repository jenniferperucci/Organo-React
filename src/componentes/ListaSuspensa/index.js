import {ListasSuspensas} from './StyleListaSuspensa'

const ListaSuspensa = (props) => {
    return (
        <ListasSuspensas>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </ListasSuspensas>
    )
}

export default ListaSuspensa