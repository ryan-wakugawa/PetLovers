import { Produto } from "@prisma/client";
import { FormEvent, useContext, useEffect, useState } from "react"
import { deleteProduto, sendData } from ".";

export default function ListaProduto({ tema }: { tema: string }) {
    const [produtos, setProdutos] = useState<Array<Produto>>([])
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);

    const fetchProdutos = async () => {
        try {
            const response = await fetch('http://localhost:8000/produto/produtos')
            const data = await response.json()
            setProdutos(data)
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
            deleteProduto(id)
            fetchProdutos()
        } catch (error) {
            console.log('Erro ao deletar');
        }
    }

    useEffect(() => {
        fetchProdutos()
    }, [])

    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {produtos.map((produto, index) => (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {produto.nome}
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="h-100 container-fluid">
                                        <h3>Produto</h3>
                                        <form className="h-100 d-flex flex-column">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={produto.nome} aria-label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                                                <input type="number" step={0.01} className="form-control" placeholder={produto.valor.toString()} aria-label="preco" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-secondary m-1" type="button" style={{ background: tema }} onClick={() => handleUpdate(produto.id)}>Editar</button>
                                        <button className="btn btn-danger m-1" type="button" onClick={() => handleDelete(produto.id)}>Excluir</button>
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