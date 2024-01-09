import "./styles.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NoticiasConteudo from "../../components/NoticiasConteudo/noticiasconteudo";
import Discord from "../../components/Discord/Discord";


function Noticias() {
   return (
      <div>
         <Header />
         <NoticiasConteudo />
         <Discord />
         <Footer />
       </div>
  )
}

export default Noticias
