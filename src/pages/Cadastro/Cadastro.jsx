import "./styles.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CadastroForm from "../../components/CadastroForm/cadastroform";
import Discord from "../../components/Discord/Discord";

function Cadastro() {
   return (
      <div>
        <Header />
        <CadastroForm />
        <Discord />
        <Footer />
       </div>
  )
}

export default Cadastro
