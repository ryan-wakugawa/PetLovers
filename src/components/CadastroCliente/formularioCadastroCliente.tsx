import { FormEvent, useState } from "react";
import { sendData } from ".";

export default function FormularioCadastroCliente({ tema }) {
  const [nome, setNome] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataEmissaoRg, setDataEmissaoRg] = useState('');
  const [telefone, setTelefone] = useState('');

  const resetForm = () => {
    setNome('');
    setNomeSocial('');
    setCpf('');
    setDataEmissaoCpf('');
    setRg('');
    setDataEmissaoRg('');
    setTelefone('');
  }

  const validate = () => {
    let isValid = true
    if (!nome || !nomeSocial || !cpf || !dataEmissaoCpf || !rg || !dataEmissaoRg || !telefone) {
      isValid = false;
    }
    return isValid
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      try {
        await sendData(nome, nomeSocial, dataEmissaoCpf, cpf, dataEmissaoRg, rg, telefone)
        resetForm()
        alert('Cadastrado com sucesso')
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Preencha todos os campos');
    }
  }


  return (
    <div className="h-100 container-fluid">
      <h3>Cliente</h3>
      <form className="h-100 d-flex flex-column" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nome social"
            aria-label="Nome social"
            aria-describedby="basic-addon1"
            value={nomeSocial}
            onChange={(event) => setNomeSocial(event.target.value)}
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
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group mb-1">Data de emissão:</label>
          <input
            type="date"
            className="form-control"
            aria-label="Data de emissão CPF"
            aria-describedby="basic-addon1"
            value={dataEmissaoCpf}
            onChange={(event) => setDataEmissaoCpf(event.target.value)}
          />
        </div>
        <hr />
        <label className="input-group mb-1">RG:</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="RG"
            aria-label="RG"
            aria-describedby="basic-addon1"
            value={rg}
            onChange={(event) => setRg(event.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group mb-1">Data de emissão:</label>
          <input
            type="date"
            className="form-control"
            aria-label="Data de emissão RG"
            aria-describedby="basic-addon1"
            value={dataEmissaoRg}
            onChange={(event) => setDataEmissaoRg(event.target.value)}
          />
        </div>
        <hr />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Telefone"
            aria-label="Telefone"
            aria-describedby="basic-addon1"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center input-group mt-auto mb-5">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            style={{ background: tema }}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};