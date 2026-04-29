import Style from "../css/Endereco.module.css";

function Endereco() {
  return (
    <section id="secao3" className={Style.section}>
      <div className={Style.container}>
        <div className={Style.mapa}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051867!2d-46.69433512459502!3d-23.5280858788227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1773270394404!5m2!1spt-BR!2sbr"
            title="Mapa da loja"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={Style.info}>
          <h2>Nossa Loja - Instrumentos Musicais</h2>
          <p>
            Esta situada na Rua Tito, 54 - Pompeia, proximo ao teatro Cacilda
            Becker, em uma construcao do seculo XIX, numa area de 500m2, com uma
            variada gama de instrumentos, em um ambiente agradavel para toda a
            familia!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Endereco;
