import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default abstract class Ediçao{
    public abstract editar(target: Cliente|Pet|Produto|Servico): void
}