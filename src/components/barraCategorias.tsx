import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Adicione este arquivo para estilos personalizados

type Props = {
    tema: string
    categorias: string[],
    seletorView: (novaTela: string, evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const BarraCategorias: React.FC<Props> = ({ tema, categorias, seletorView }) => {
    return (
        <div className="d-flex btn-group btn-group-toggle my-3 mx-5" data-toggle="buttons">
            {categorias.map((categoria, index) => (
                <button key={index} className="btn btn-outline-secondary" onClick={(evento) => seletorView(categoria, evento)} style={{background: tema, width:100}}>
                    {categoria}
                </button>
            ))}
        </div>
    );
};

export default BarraCategorias;
