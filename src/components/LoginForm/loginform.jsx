import "./styles.css";
import Discord from "../Discord/Discord";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica para lidar com o envio do formulário
  };
  return (
    <div className="login-container">
       <h3 className="h3-loginform title loginform-title">Entrar na conta</h3>
       <p className="section-text-cadastro">
        Preencha o formulário abaixo e realize <br />seu login no site.
      </p>
            <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="loginId">Login ID</label>
          <form action="./index.html" method="get" className="footer-form">
              <input type="email" name="email_address" required placeholder="Login ID" autoComplete="off"
                className="input-field" />
            </form>
        </div>
        <div className="form-input">
          <label htmlFor="senha">Senha</label>
          <form action="./index.html" method="get" className="footer-form">
              <input type="email" name="email_address" required placeholder="Senha" autoComplete="off"
                className="input-field" />
              <center>
                <button type="submit" className="btn-loginform" data-btn>Login</button>
              </center>
              <p className="section-text-loginform">
              Ainda não possui uma conta?<br />{' '}
              <a href="/cadastro" style={{ display: 'inline' }}>
              Clique aqui
              </a>{' '}
              e faça seu cadastro agora mesmo.
              </p>
           </form>
        </div>
      </form>
    </div>
  );
}

export default LoginForm
