import LojaImagem from "../assets/imagens/loja.jpg";
import Style from "../css/AboutUs.module.css";

function AboutUs() {
  return (
    <section id="secao1" className={Style.section}>
      <div className={Style.container}>
        <div className={Style.texto}>
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
            Se voce e um amante da musica, esta em busca de um novo instrumento
            musical e nao abre mao da qualidade, chegou ao lugar certo! Aqui em
            nossa loja voce encontra os melhores itens, como: teclado, piano
            (digital e acustico), contrabaixo, bateria, guitarra, violao, sopro
            e muito mais! Nossos instrumentos possuem o selo de qualidade das
            melhores marcas do mercado! Escolha os seus favoritos e os receba em
            casa com toda a comodidade que voce precisa. Confira nossas opcoes
            disponiveis e tenha em maos instrumentos de ponta!
          </p>
        </div>
        <div className={Style.imagem}>
          <img src={LojaImagem} alt="Interior da loja de instrumentos musicais" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
