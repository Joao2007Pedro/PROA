import Logo from "../assets/imagens/guitarras_header.jpg";
import Style from "../css/Header.module.css";

function Header() {
  return (
    <header className={Style.header}>
      <img className={Style.banner} src={Logo} alt="" />
      <nav className={Style.nav}>
        <ul>
          <li>
            <a href="#secao1">Home</a>
          </li>
          <li>
            <a href="#secao1">Quem Somos</a>
          </li>
          <li>
            <a href="#secao2">Instrumentos</a>
          </li>
          <li>
            <a href="#secao3">Endereço</a>
          </li>
          <li>
            <a href="#secao4">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;