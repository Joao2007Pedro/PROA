import Whats from "../assets/imagens/whats.png";
import Insta from "../assets/imagens/insta.png";
import Face from "../assets/imagens/face.png";
import Style from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={Style.footer}>
      <p>
        <strong>Nossa Loja - Instrumentos Musicais</strong>
      </p>
      <p>Rua Tito, 54 - Lapa</p>
      <p>Sao Paulo - Brasil</p>
      <div className={Style.icones}>
        <img src={Whats} alt="WhatsApp" />
        <img src={Insta} alt="Instagram" />
        <img src={Face} alt="Facebook" />
      </div>
    </footer>
  );
}

export default Footer;
