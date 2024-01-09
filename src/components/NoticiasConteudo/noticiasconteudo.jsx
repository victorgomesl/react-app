import "./styles.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
export { newsData };
import imagem1 from "../../assets/noticias/imagem1.jpg";
import imagem2 from "../../assets/noticias/imagem2.jpg";
import imagem3 from "../../assets/noticias/imagem3.jpg";
import imagem4 from "../../assets/noticias/imagem4.jpg";
import imagem5 from "../../assets/noticias/imagem5.jpg";
import imagem6 from "../../assets/noticias/imagem6.jpg";


const newsData = [
  {
    id: 1,
    image: '{imagem1.jpg}',
    title: 'Título da Notícia 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link1'
  },
  {
    id: 2,
    image: '{imagem2.jpg}',
    title: 'Título da Notícia 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link2'
  },
  {
    id: 3,
    image: '{imagem3.jpg}',
    title: 'Título da Notícia 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link3'
  },
  {
    id: 4,
    image: '{imagem4.jpg}',
    title: 'Título da Notícia 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link4'
  },
  {
    id: 5,
    image: '{imagem5.jpg}',
    title: 'Título da Notícia 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link4'
  },
  {
    id: 6,
    image: '{imagem6.jpg}',
    title: 'Título da Notícia 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate diam non elit bibendum, at fermentum risus pellentesque. Praesent facilisis, urna et tristique condimentum, dui enim efficitur velit, non vulputate libero tortor vel velit. Pellentesque quis arcu velit. Phasellus a sapien at lacus dignissim eleifend sit amet vel arcu. Vestibulum non libero nisl. Curabitur in risus sed odio iaculis lacinia eu ac metus. Phasellus elementum arcu at mi euismod varius. Morbi lobortis elit sit amet gravida dignissim. Cras fringilla facilisis malesuada. Aliquam erat volutpat. Mauris euismod arcu in velit aliquam, vitae volutpat nisl bibendum. Phasellus ultricies nisi id convallis ullamcorper',
    link: 'link4'
  },
  // ... Outras notícias
];

// Associe cada ID de notícia à sua imagem correspondente
const imageMapping = {
  1: imagem1,
  2: imagem2,
  3: imagem3,
  4: imagem4,
  5: imagem5,
  6: imagem6,
}

function limitarTexto(texto, limite) {
  if (texto.length <= limite) {
    return texto;
  }
  return texto.slice(0, limite) + '...';
}

function NoticiasConteudo() {
  const noticiasPorPagina = 4; // Número de notícias por página
  const [pageNumber, setPageNumber] = useState(0); // Estado para controlar a página atual

  const offset = pageNumber * noticiasPorPagina;
  const noticiasAtuais = newsData
    .slice(pageNumber * noticiasPorPagina, (pageNumber + 1) * noticiasPorPagina)
    .map((news) => (
      <div className="pnews-item" key={news.id}>
        <div className="pnews-content">
        <img src={imageMapping[news.id]} alt={news.title} />
          <div className="pnews-text">
            <h2>{news.title}</h2>
            <p>{limitarTexto(news.description, 200)}</p>
            <Link to={`/noticias/${news.id}`}>Ler mais...</Link> {/* Link para os detalhes da notícia */}
          </div>
        </div>
      </div>
    ));


  // Calcula o número de páginas com base na quantidade de notícias
  const numPages = Math.ceil(newsData.length / noticiasPorPagina);

  // Função para mudar de página
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // Scroll para o topo da página ao trocar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageNumber]);

  return (
    <div className="container-pnews">
      <h2 className="h2-pnews section-title-pnews">
        Últimas <span className="span">Notícias</span>
      </h2>
      <p className="section-text-pnews">
        Confira as notícias e novidades e fique por dentro de <br />tudo que acontece no jogo.
      </p>
      <div className="pnews-list">
        {noticiasAtuais}
      </div>
      {/* Paginação */}
      {numPages > 1 && (
        <div className="pagination">
        <button
          onClick={() => handlePageChange({ selected: pageNumber - 1 })}
          className={pageNumber > 0 ? 'show-button' : 'hide-button'}
        >
          &laquo; Anterior
        </button>
        {[...Array(numPages)].map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange({ selected: index })}
            className={pageNumber === index ? 'active' : ''}
          >
            {index + 1}
          </span>
        ))}
        <button
          onClick={() => handlePageChange({ selected: pageNumber + 1 })}
          className={pageNumber < numPages - 1 ? 'show-button' : 'hide-button'}
        >
          Próximo &raquo;
        </button>
      </div>
      )}
    </div>
  );
}

export default NoticiasConteudo;
