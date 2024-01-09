import "./styles.css";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CadastroForm() {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione a lógica para lidar com o envio do formulário
    console.log('Dados do formulário:', {
      nomeCompleto: event.target.nomeCompleto.value,
      loginId: event.target.loginId.value,
      email: event.target.email.value,
      senha: event.target.senha.value,
      dataNascimento: startDate,
      concordaTermos: event.target.termos.checked,
    });
  };

  return (
    <div className="cadastro-container">
      <h3 className="h3-cadastro title cadastro-title">Cadastro</h3>
      <p className="section-text-cadastro">
        Preencha o formulário abaixo e realize <br />seu cadastro no PangYa Ex.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
              <label htmlFor="nomeCompleto">Nome completo</label>
              <input type="text" name="nomeCompleto" required placeholder="Nome completo" autoComplete="off" className="input-field" />
            </div>
            <div className="form-input">
              <label htmlFor="loginId">Login ID</label>
              <input type="text" name="loginId" required placeholder="Login ID" autoComplete="off" className="input-field" />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required placeholder="Email" autoComplete="off" className="input-field" />
            </div>
            <div className="form-input">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          name="dataNascimento"
          className="input-field"
          placeholderText="DD/MM/AAAA"
          showYearDropdown // Habilita a opção de mostrar o seletor de ano
          scrollableYearDropdown // Permite a rolagem no seletor de ano
          dropdownMode="select" // Exibe o seletor de ano como um dropdown
          yearDropdownItemNumber={10} // Define o número de anos exibidos (de 10 em 10)
          minDate={new Date('1940-01-02')} // Define a data mínima como a data atual
          maxDate={new Date('2023-12-31')} // Define a data máxima como 31/12/2023
          popperModifiers={{
            offset: {
              enabled: true,
              offset: '10px, 10px' // Ajuste o deslocamento do calendário conforme necessário
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: 'viewport'
            }
          }}
        />
      </div>
        <div className="form-input">
              <label htmlFor="email">Senha</label>
              <input type="senha" name="senha" required placeholder="Senha" autoComplete="off" className="input-field" />
            </div>
            <div className="form-input">
              <label htmlFor="email">Repita a senha</label>
              <input type="senha" name="senha" required placeholder="Repita a senha" autoComplete="off" className="input-field" />
            </div>
        <div className="checkbox">
          <input type="checkbox" name="termos" id="termos" />
          <p className="section-text-termos">
            Eu concordo com os{' '}
            <a href="/termos-de-uso" style={{ display: 'inline' }}>
              Termos de uso
            </a>
            <br />
            e com a{' '}
            <a href="/politica-de-privacidade" style={{ display: 'inline' }}>
              Política de privacidade
            </a>
            .
          </p>
        </div>
        <center>
          <button type="submit" className="btn-cadastro" data-btn>
            Cadastre-se
          </button>
        </center>
        <p className="section-text">
          Já possui uma conta?<br />{' '}
          <a href="/login" style={{ display: 'inline' }}>
            Clique aqui{' '}
          </a>{' '}
          e faça login agora mesmo.
        </p>
      </form>
    </div>
  );
}

export default CadastroForm;
