export default function FormularioCadastroServico({ tema } : {tema:string}) {
    return (
        <div className="h-100 container-fluid">
            <h3>Serviço</h3>
            <form className="h-100 d-flex flex-column">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="number" step={0.01} className="form-control" placeholder="0.00" aria-label="preco" aria-describedby="basic-addon1" />
                </div>
                <div className="d-flex justify-content-center input-group mt-auto mb-5">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}