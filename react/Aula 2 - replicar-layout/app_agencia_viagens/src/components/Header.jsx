import { Link } from "react-router-dom";
import Style from "../css/Header.module.css";
import Logo from "../assets/imagens/viagens.jpg";
import Lupa from "../assets/imagens/lupa.png";

function Header() {
  return (
    <header>
      <div className={Style.logo}>
        <img src={Logo} alt="Logo da agência" />
      </div>

      <div className={Style.links}>
        <nav className={Style.menu}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Grand Canyon</a>
            </li>
            <li>
              <a href="">Katmandu</a>
            </li>
            <li>
              <a href="">Muralhas da China</a>
            </li>
            <li>
              <a href="">Aruba</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={Style.pesquisa}>
        <input type="search" />
      </div>

      <div className={Style.lupa}>
        <img src={Lupa} alt="" />
      </div>
    </header>
  );
}

export default Header;
