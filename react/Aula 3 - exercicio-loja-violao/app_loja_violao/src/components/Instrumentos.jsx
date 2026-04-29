import GuitarraImagem from "../assets/imagens/guitarrinha.jpg";
import Style from "../css/Instrumentos.module.css";

function ProdutoCard({ nome, preco }) {
  return (
    <article className={Style.produto}>
      <img src={GuitarraImagem} alt="Violao Yamaha" />
      <p className={Style.nome}>{nome}</p>
      <p className={Style.preco}>{preco}</p>
    </article>
  );
}

function Instrumentos({ produtos }) {
  return (
    <section id="secao2" className={Style.section}>
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} nome={produto.nome} preco={produto.preco} />
      ))}
    </section>
  );
}

export default Instrumentos;
