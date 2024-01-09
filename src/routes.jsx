// router.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/LoginPage';
import Cadastro from './pages/Cadastro/Cadastro';
import Noticias from './pages/Noticias/Noticias';
import Downloads from './pages/Downloads/Downloads';
import Shopping from './pages/Shopping/Shopping';
import NoticiaDetalhes from './components/NoticiasDetalhes/NoticiasDetalhes';


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/shopping" element={<Shopping />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<NoticiaDetalhes />} /> {/* Rota para os detalhes da notícia */}

    </Routes>
  );
}

export default MainRoutes;