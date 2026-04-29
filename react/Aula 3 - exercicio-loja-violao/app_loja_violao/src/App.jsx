import "./css/App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Instrumentos from "./components/Instrumentos";
import Endereco from "./components/Endereco";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  const produtos = [
    {
      id: 1,
      nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE",
      preco: "R$ 989,50",
    },
    {
      id: 2,
      nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE",
      preco: "R$ 989,50",
    },
    {
      id: 3,
      nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE",
      preco: "R$ 989,50",
    },
    {
      id: 4,
      nome: "VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE",
      preco: "R$ 989,50",
    },
  ];

  return (
    <main>
      <Header />
      <AboutUs />
      <Instrumentos produtos={produtos} />
      <Endereco />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
