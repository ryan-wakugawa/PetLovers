import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Custom styles

interface Props{
    tema: string,
    categorias: string[],
    seletorView: Function
}

function BarraCategorias ({ tema, categorias, seletorView }: Props){
    return (
        <div className="d-flex btn-group btn-group-toggle my-3 mx-5" data-toggle="buttons">
            {categorias.map((categoria, index) => (
                <button
                    key={index}
                    className="btn btn-outline-secondary"
                    onClick={(evento) => seletorView(categoria, evento)}
                    style={{ background: tema, width: 100 }}
                >
                    {categoria}
                </button>
            ))}
        </div>
    );
};

export default BarraCategorias;
