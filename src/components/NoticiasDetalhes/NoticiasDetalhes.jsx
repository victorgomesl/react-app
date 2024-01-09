// NoticiaDetalhes.jsx

import "./styles.css";
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Discord from "../../components/Discord/Discord";
import { newsData } from '../noticiasconteudo/noticiasconteudo';

function NoticiaDetalhes() {
  const { id } = useParams();
  const noticia = newsData.find((news) => news.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolando para o topo da página
  }, []); // Chamado uma vez, quando o componente é montado

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <div>
      <Header />
        <div className="container-ndetalhes">
          <h2>{noticia.title}</h2>
          <p>{noticia.description}</p>
          <Link to="/noticias" className="pagination">
            <button className="custom-button">Voltar para Notícias</button>
          </Link>
        </div>
      <Discord />
      <Footer />
    </div>
  );
}

export default NoticiaDetalhes;
