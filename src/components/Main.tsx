import { useEffect, useState } from "react";
import Cliente from "../model/Cliente";
import CadastroCliente from "./CadastroCliente/CadastroCliente";
import EdicaoCliente from "./InfoCliente/InfoCliente";
import ListaClientes from "./ListaClientes";

export default function Main() {
    const [clientes, setClientes] = useState<Cliente[]>([])

    const fetchClientes = async () => {
        try {
            const response = await fetch(`http://localhost:32831/cliente/clientes`)
            const data = (await response.json()) as Cliente[]
            setClientes(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClientes()
    }, [])

    return (
        <>
            <ListaClientes clientes={clientes} />
            <div className="d-flex row mx-4" >
                <button className="btn btn-dark" onClick={e => fetchClientes()}>Atualizar</button>
            </div>
            <div className="d-flex row g-0">
                <div className="col border shadow rounded m-4">
                    <CadastroCliente fetchClientes={fetchClientes}/>
                </div>
                <div className="col border shadow rounded m-4">
                    <EdicaoCliente clientes={clientes} fetchClientes={fetchClientes}/>
                </div>
            </div>
        </>
    )
}