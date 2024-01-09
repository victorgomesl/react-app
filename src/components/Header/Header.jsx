import "./styles.css";
import Logo from '../../assets/logo.png';

function Header() {
   return (
    <header className="header active" data-header>
    <div className="container-header">

      <a href="/" className="logo-header">
        <img src={Logo} width="145" height="53" alt="Home" />
      </a>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="/" className="navbar-link" data-nav-link>home</a>
          </li>

          <li className="navbar-item">
            <a href="/noticias" className="navbar-link" data-nav-link>notícias</a>
          </li>

          <li className="navbar-item">
            <a href="/downloads" className="navbar-link" data-nav-link>downloads</a>
          </li>

          <li className="navbar-item">
            <a href="/shopping" className="navbar-link" data-nav-link>shopping</a>
          </li>

        </ul>
      </nav>

      <a href="/login" className="btn" data-btn>login / cadastre-se</a>

      <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>

    </div>
  </header>
  )
}

export default Header
