import { useState } from "react";

export default function FormularioCadastroCliente({ tema }) {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataEmissao, setDataEmissao] = useState(new Date());
  const [rg, setRg] = useState('');
  const [dataEmissaoRg, setDataEmissaoRg] = useState(new Date());
  const [telefone, setTelefone] = useState();

  return (
    <div className="h-100 container-fluid">
      <h3>Cliente</h3>
      <form className="h-100 d-flex flex-column">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome social"
            aria-label="Nome social"
            aria-describedby="basic-addon1"
          />
        </div>
        <hr />
        <label className="input-group mb-1">CPF:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="CPF"
            aria-label="CPF"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Data de emissão do CPF"
            aria-label="Data de emissão CPF"
            aria-describedby="basic-addon1"
          />
        </div>
        <hr />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="RG"
            aria-label="RG"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Telefone"
            aria-label="Telefone"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-flex justify-content-center input-group mt-auto mb-5">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            style={{ background: tema }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};