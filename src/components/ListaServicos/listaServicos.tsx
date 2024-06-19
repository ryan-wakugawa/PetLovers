import { Servico } from "@prisma/client"
import { useEffect, useState } from "react"
import { deleteServico, sendData } from ".";

export default function ListaServico({ tema }: { tema: string }) {
    const [servicos, setServicos] = useState<Array<Servico>>([])
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);

    const fetchServicos = async () => {
        try {
            const response = await fetch('http://localhost:8000/servico/servicos')
            const data = await response.json()
            setServicos(data)
        } catch (error) {
            console.log(error);
        }
    }

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

    const handleUpdate = async (id: number) => {
        if (validate()) {
            try {
                await sendData(id, nome, preco)
                resetForm()
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleDelete = (id: number) => {
        try {
            deleteServico(id)
            fetchServicos()
        } catch (error) {
            alert('Erro ao deletar (pet está atrelado a um cliente)')
        }
    }

    useEffect(() => {
        fetchServicos()
    }, [])

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {servicos.map((servico, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {servico.nome}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="h-100 container-fluid">
                                        <h3>Serviço</h3>
                                        <form className="h-100 d-flex flex-column">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={servico.nome} aria-label="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                                <input type="number" step={0.01} className="form-control" placeholder={servico.valor.toString()} aria-label="preco" value={preco} onChange={(event) => setPreco(Number(event.target.value))} />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }} onClick={() => handleUpdate(servico.id)}>Editar</button>
                                                <button className="btn btn-danger m-1" type="button" onClick={() => handleDelete(servico.id)}>Excluir</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}