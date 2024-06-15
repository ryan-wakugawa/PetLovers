import { useState } from "react";
import { sendData } from "./index";

export default function CadastroCliente({ fetchClientes }: {fetchClientes: any}) {
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

    const validate = () => {
        let isValid = true
        if (!nome || !nomeSocial || !estado || !cidade || !bairro || !rua || !numero || !codigoPostal || !informacoesAdicionais || !telefoneNumero || !telefoneDDD) {
            isValid = false;
            setMensagem("Todos os campos são obrigatórios.")
        }
        return isValid
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            if (validate()) {
                await sendData(nome, nomeSocial, email, estado, cidade, bairro, rua, numero, codigoPostal, informacoesAdicionais, telefoneNumero, telefoneDDD)
                setMensagem("Cadastro feito com sucesso!")
                resetForm()
                await fetchClientes()
            }
        } catch (error) {
            console.log(error);
            setMensagem("Falha no cadastro :(")
            return error
        }
    }

    return (
        <div className="d-flex flex-column m-4">
            <h2>Cadastrar cliente</h2>
            <form onSubmit={handleSubmit}>
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
                    <label className="form-label" id="estado">
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
                <div className="justify-content-around row align-content-end text-center">
                    <h3 className={mensagem === "Cadastro feito com sucesso!" ? "text-success" : "text-danger"}>{mensagem}</h3>
                    <button className="col btn btn-primary" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}