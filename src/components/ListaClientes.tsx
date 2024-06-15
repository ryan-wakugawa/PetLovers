import Cliente from "../model/Cliente"

export default function ListaClientes(props: { clientes: Cliente[] }) {
    return (
        <div className="table-responsive">
            <table className="table table-striped align-middle">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Bairro</th>
                        <th scope="col">Rua</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Codigo Postal</th>
                        <th scope="col">Informações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clientes.map(cliente => {
                        return (
                            <tr>
                                <td>{cliente.nome}</td>
                                <td>{cliente.nomeSocial}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefones.map(telefone => {
                                    return (
                                        `${telefone.ddd} ${telefone.numero}\n`
                                    )
                                })}</td>
                                {Object.values({ ...cliente.endereco, id: '', links: ''}).map(value => {
                                    return (
                                        value !== '' ? <td>{value}</td> : <></>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}