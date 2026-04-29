import Whats from "../assets/imagens/whats.png";
import Insta from "../assets/imagens/insta.png";
import Face from "../assets/imagens/face.png";
import Style from "../css/Contato.module.css";

function SocialIcons() {
  return (
    <div className={Style.icones}>
      <img src={Whats} alt="WhatsApp" />
      <img src={Insta} alt="Instagram" />
      <img src={Face} alt="Facebook" />
    </div>
  );
}

function Contato() {
  return (
    <section id="secao4" className={Style.section}>
      <div className={Style.container}>
        <form className={Style.formulario}>
          <label htmlFor="nome">Entre com o seu nome:</label>
          <input id="nome" type="text" placeholder="Digite seu nome aqui" />

          <label htmlFor="email">Entre com o seu e-mail:</label>
          <input id="email" type="email" placeholder="Digite seu email aqui" />

          <textarea id="mensagem" placeholder="Faca seu pedido por aqui:" />

          <button type="button">Enviar</button>
        </form>

        <div className={Style.redes}>
          <h3>Acesse tambem nossas redes socias:</h3>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

export default Contato;
