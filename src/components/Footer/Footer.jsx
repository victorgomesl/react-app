import "./styles.css";
import Logo from '../../assets/logo.png';
import { IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';
import { logoDiscord } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import { logoYoutube } from 'ionicons/icons';


function Footer() {
   return (
    <footer className="footer">

      <div className="section footer-top">
        <div className="container-footer">

          <div className="footer-brand">

            <a href="#" className="logo3">
              <img src={Logo} width="230" height="53" loading="lazy" alt="Unigine logo" />
            </a>

            <p className="footer-text">
              Um novo mundo online de diversão e fantasia, jogue golf com o PangYa Ex.
            </p>

            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                <IonIcon icon={logoFacebook} aria-hidden="true"/>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                <IonIcon icon={logoInstagram} aria-hidden="true"/>
                </a>
              </li>

              <li>
                <a href="#" target="_blank" className="social-link">
                <IonIcon icon={logoDiscord} aria-hidden="true"/>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                <IonIcon icon={logoYoutube} aria-hidden="true"/>
                </a>
              </li>

            </ul>

          </div>

          <div className="footer-list">

            <p className="title footer-list-title has-after">Links</p>
            <ul>
              <li>
                <a href="/login" className="footer-link">Login</a>
              </li>
              <li>
                <a href="/cadastro" className="footer-link">Cadastre-se</a>
              </li>
              <li>
                <a href="/downloads" className="footer-link">Downloads</a>
              </li>
              <li>
                <a href="/shopping" className="footer-link">Shopping</a>
              </li>
              <li>
                <a href="#" className="footer-link">Termos de uso</a>
              </li>
              <li>
                <a href="#" className="footer-link">Política de privacidade</a>
              </li>
            </ul>

          </div>

          <div className="footer-list">

            <p className="title footer-list-title has-after">Contato</p>

            <div className="contact-item">
              <span className="span">Localização:</span>

              <address className="contact-link">
                Porto Alegre/RS, Brasil
              </address>
            </div>

            <div className="contact-item">
              <span className="span">Email:</span>

              <a href="mailto:Info@gamehive.com" className="contact-link">info@pangyaex.com.br</a>
            </div>

            <div className="contact-item">
              <span className="span">WhatsApp:</span>

              <a href="tel:+12345678910" className="contact-link">+55 (51) 999.999.999</a>
            </div>

          </div>

          <div className="footer-list">

            <p className="title footer-list-title has-after">Newsletter</p>

            <form action="./index.html" method="get" className="footer-form">
              <input type="email" name="email_address" required placeholder="Email" autoComplete="off"
                className="input-field" />

              <button type="submit" className="btn" data-btn>Inscrever-se</button>
            </form>

          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">

          <p className="copyright">
            &copy; 2024 PangYa Ex Brasil - Todos direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
