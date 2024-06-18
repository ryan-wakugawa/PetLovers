import { FormEvent, useState } from "react";
import { sendData } from ".";

export default function FormularioCadastroServico({ tema } : {tema:string}) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);

    const resetForm = () => {
        setNome('');
        setPreco(0);
    }

    const validate = () => {
        let isValid = true
        if (!nome || !preco) {
            isValid = false
        }
        return isValid
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (validate()) {
            try {
                await sendData(nome, preco)
                resetForm()
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    return (
        <div className="h-100 container-fluid">
            <h3>Serviço</h3>
            <form className="h-100 d-flex flex-column" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" value={preco} onChange={(event) => setPreco(Number(event.target.value))} />
                </div>
                <div className="d-flex justify-content-center input-group mt-auto mb-5">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}