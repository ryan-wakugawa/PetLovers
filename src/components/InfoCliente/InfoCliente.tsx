import { useState } from "react";
import Cliente from "../../model/Cliente";
import { deletarCliente, sendData } from "./index";

export default function EdicaoCliente(props: { clientes: Cliente[], fetchClientes: () => Promise<void> }) {
    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [email, setEmail] = useState("");

    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [informacoesAdicionais, setInformacoesAdicionais] = useState("");

    const [telefoneNumero, setTelefoneNumero] = useState("");
    const [telefoneDDD, setTelefoneDDD] = useState("");

    const [mensagem, setMensagem] = useState("")
    const [index, setIndex] = useState("")

    const resetForm = () => {
        setNome("");
        setNomeSocial("");
        setEmail("");
        setEstado("");
        setCidade("");
        setBairro("");
        setRua("");
        setNumero("");
        setCodigoPostal("");
        setInformacoesAdicionais("");
        setTelefoneNumero("");
        setTelefoneDDD("");
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const response = await sendData(index, nome, nomeSocial, email, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais, telefoneNumero, telefoneDDD)
            if (response.status === 200) {
                setMensagem("Cliente editado com sucesso!")
                await props.fetchClientes()
            } else {
                setMensagem("Falha ao editar :(")
            }
        } catch (error) {
            console.log(error);
            setMensagem("Falha ao editar :(")
        }
    }

    const handleSelect = async (event: any) => {
        try {
            const response = await fetch(`http://localhost:32831/cliente/${event.target.value}`)
            const cliente = await response.json() as Cliente
            setNome(cliente.nome)
            setNomeSocial(cliente.nomeSocial);
            setEmail(cliente.email)
            setEstado(cliente.endereco.estado);
            setCidade(cliente.endereco.cidade);
            setBairro(cliente.endereco.bairro);
            setRua(cliente.endereco.rua);
            setNumero(cliente.endereco.numero);
            setCodigoPostal(cliente.endereco.codigoPostal);
            setInformacoesAdicionais(cliente.endereco.informacoesAdicionais);
            setTelefoneNumero(cliente.telefones[0].numero);
            setTelefoneDDD(cliente.telefones[0].ddd);
            setIndex(event.target.value)
            console.log(event.target.value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (event: any) => {
        event.preventDefault()
        try {
            const response = await deletarCliente(index)
            if (response.status === 200) {
                setMensagem("Cliente deletado com sucesso!")
                resetForm()
                await props.fetchClientes()
            } else {
                setMensagem("Falha ao excluir :(")
                await props.fetchClientes()
            }
        } catch (error) {
            console.log(error);
            setMensagem("Falha ao excluir :(")
            await props.fetchClientes()
        }

    }

    return (
        <div className="d-flex flex-column m-4">
            <div>
                <h2>Ver informações</h2>
                <select className="form-select" onChange={handleSelect}>
                    <option disabled selected>Selecione um cliente</option>
                    {props.clientes.map(cliente => {
                        return <option value={cliente.id}>{cliente.nome}</option>
                    })}
                </select>
            </div>
            <form className="justify-content-around" onSubmit={handleSubmit}>
                <div className="d-flex flex-wrap row align-items-center m-3">
                    <label className="form-label" id="nome">
                        Nome:
                        <input className="form-control" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                    <label className="form-label" id="nomeSocial">
                        Nome social:
                        <input className="form-control" type="text" placeholder="Digite seu nome social" value={nomeSocial} onChange={e => setNomeSocial(e.target.value)} />
                    </label>
                    <label className="form-label" id="email">
                        Email:
                        <input className="form-control" type="text" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>

                <hr />

                <h3>Endereço:</h3>
                <div className="d-flex flex-wrap row align-items-center m-3">
                    <label className="z form-label" id="estado">
                        Estado:
                        <input className="form-control" type="text" placeholder="Digite seu estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                    </label>
                    <label className="form-label" id="cidade">
                        Cidade:
                        <input className="form-control" type="text" placeholder="Digite sua cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </label>
                    <label className="form-label" id="bairro">
                        Bairro:
                        <input className="form-control" type="text" placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    </label>
                    <label className="form-label" id="rua">
                        Rua:
                        <input className="form-control" type="text" placeholder="Digite sua rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                    </label>
                    <label className="form-label" id="numeroEndereco">
                        Numero:
                        <input className="form-control" type="text" placeholder="Digite seu número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </label>
                    <label className="form-label" id="codigoPostal">
                        Código Postal:
                        <input className="form-control" type="text" placeholder="Digite seu código postal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                    </label>
                    <label className="form-label" id="informacoes">
                        Informações Adicionais:
                        <input className="form-control" type="text" placeholder="Digite informações adicionais" value={informacoesAdicionais} onChange={(e) => setInformacoesAdicionais(e.target.value)} />
                    </label>
                </div>

                <hr />

                <h3>Telefone:</h3>
                <div className="d-flex row align-items-center m-3">
                    <label className="col form-label" id="ddd">
                        DDD:
                        <input className="form-control" type="text" placeholder="Digite o DDD" value={telefoneDDD} onChange={(e) => setTelefoneDDD(e.target.value)} />
                    </label>
                    <label className="col form-label" id="numeroTelefone">
                        Número:
                        <input className="form-control" type="text" placeholder="Digite seu número de telefone" value={telefoneNumero} onChange={(e) => setTelefoneNumero(e.target.value)} />
                    </label>
                </div>
                <div className="justify-content-around text-center">
                    <h3>{mensagem}</h3>
                    <div className="d-flex row g-1">
                        <button className="col btn btn-success" type="submit">Editar</button>
                        <button className="col btn btn-danger" type="button" onClick={handleDelete}>Excluir</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
