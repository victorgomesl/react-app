import "./styles.css";
import DownloadLogo from '../../assets/downloadlogo.png';
import CookiesLogo from '../../assets/cookieslogo.png';
import PSQuareLogo from '../../assets/psquarelogo.png';
import SuporteLogo from '../../assets/suportelogo.png';

function LinksUteis() {
   return (
    <section className="section upcoming" aria-labelledby="upcoming-label" id="tournament">
      <div className="container-links">

        <p className="section-subtitle" id="upcoming-label">
          click & GO!
        </p>

        <h2 className="h2-links section-title">
          Links <span className="span">Úteis</span>
        </h2>

        <p className="section-text-links" >
          Alguns links úteis para você clicar e ir direto <br />para o que interessa.
        </p>

        <ol className="upcoming-list">

          <li className="upcoming-item">

            <div className="upcoming-card left has-before">

              <img src={DownloadLogo} width="86" height="81" loading="lazy"
                alt="Downloads" className="card-banner" />

              <h3 className="h3-links card-title">Download</h3>

              <div className="card-meta">Baixe agora!</div>

            </div>

            <div className="upcoming-time">
              <time className="time" dateTime="10:00"></time>

              <time className="date" dateTime="2022-05-25"></time>

              <div className="social-wrapper">
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube#"></ion-icon>
                </a>

                <a href="#" className="social-link">
                  <ion-icon name="logo-twitch#"></ion-icon>
                </a>
              </div>
            </div>

            <div className="upcoming-card right has-before">

              <img src={CookiesLogo} width="86" height="81" loading="lazy"
                alt="Trigger Brain Squad" className="card-banner" />

              <h3 className="h3-links card-title">Cookies</h3>

              <div className="card-meta">Turbine sua conta</div>

            </div>

          </li>

          <li className="upcoming-item">

            <div className="upcoming-card left has-before">

              <img src={PSQuareLogo} width="86" height="81" loading="lazy"
                alt="The Black Hat Hackers" className="card-banner" />

              <h3 className="h3-links card-title">PSQuare VIP</h3>

              <div className="card-meta">Troque itens</div>

            </div>

            <div className="upcoming-time">
              <time className="time" dateTime="12:30"></time>

              <time className="date" dateTime="2024-01-10"></time>

              <div className="social-wrapper">
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube#"></ion-icon>
                </a>

                <a href="#" className="social-link">
                  <ion-icon name="logo-twitch#"></ion-icon>
                </a>
              </div>
            </div>

            <div className="upcoming-card right has-before">

              <img src={SuporteLogo} width="86" height="81" loading="lazy"
                alt="Your Worst Nightmare" className="card-banner" />

              <h3 className="h3-links card-title">Suporte</h3>

              <div className="card-meta">Precisa de ajuda?</div>

            </div>

          </li>

        </ol>

      </div>
    </section>
  )
}

export default LinksUteis
