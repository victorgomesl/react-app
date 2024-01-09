import "./styles.css";
import Update from '../../assets/update.jpg'; 
import Noticia from '../../assets/noticia.jpg'; 
import Evento from '../../assets/evento.jpg'; 
import { IonIcon } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';

function News() {
   return (
    <section class="section news" aria-label="our latest news" id="news">
    <div className="container-news">
      <p className="section-subtitle-news">O que há de novo</p>
      <h2 className="h2-news section-title">
        Notícias & <span className="span">Novidades</span>
      </h2>
      <p className="section-text-news">
        Confira as notícias e novidades e fique por dentro de <br />tudo que acontece no jogo.
      </p>
      
      <ul className="news-list">
      <li>
              <div class="news-card">
              <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 400 }}>
                  <img src={Update} width="600" height="400" loading="lazy"
                    alt="Innovative Business All Over The World." class="img-cover" />
                </figure>
                <div class="card-content">
                  <a href="#" class="card-tag">Update</a>
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <time class="card-meta-text" datetime="2022-01-01">Jan 01 2024</time>
                    </li>
                    <li class="card-meta-item">
                    <IonIcon icon={personOutline} aria-hidden="true"/>
                      <p class="card-meta-text">Admin</p>
                    </li>
                  </ul>
                  <h3 class="h3">
                    <a href="#" class="card-title">Manutenção em itens.</a>
                  </h3>
                  <p class="card-text">
                    A equipe do Pangya realizou uma manutenção no dia 01 de janeiro de 2024 para corrigir alguns itens que não...
                  </p>
                  <a href="#" class="link has-before">Leia mais</a>
                </div>
              </div>
            </li>
        <li>
              <div class="news-card">
              <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 400 }}>
                  <img src={Noticia} width="600" height="400" loading="lazy"
                    alt="How To Start Initiating An Startup In Few Days." class="img-cover" />
                </figure>
                <div class="card-content">
                  <a href="#" class="card-tag">Notícia</a>
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <time class="card-meta-text" datetime="2022-01-01">Jan 01 2024</time>
                    </li>
                    <li class="card-meta-item">
                    <IonIcon icon={personOutline} aria-hidden="true"/>
                      <p class="card-meta-text">Admin</p>
                    </li>
                  </ul>
                  <h3 class="h3">
                    <a href="#" class="card-title">Cookies de presente.</a>
                  </h3>
                  <p class="card-text">
                    Preparamos uma surpresa especial para você: os Cookies de presente! para ganhar basta entrar no PangYa e conferir...
                  </p>
                  <a href="#" class="link has-before">Leia mais</a>
                </div>
              </div>
            </li>
            <li>
              <div class="news-card">
              <figure className="card-banner img-holder" style={{ '--width': 600, '--height': 400 }}>
                  <img src={Evento} width="600" height="400" loading="lazy"
                    alt="Financial Experts Support Help You To Find Out." class="img-cover"/>
                </figure>
                <div class="card-content">
                  <a href="#" class="card-tag">Evento</a>
                  <ul class="card-meta-list">
                    <li class="card-meta-item">
                    <IonIcon icon={calendarOutline} aria-hidden="true"/>
                      <time class="card-meta-text" datetime="2022-01-01">Jan 01 2024</time>
                    </li>
                    <li class="card-meta-item">
                    <IonIcon icon={personOutline} aria-hidden="true"/>

                      <p class="card-meta-text">Admin</p>
                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title">Rate 4X.</a>
                  </h3>

                  <p class="card-text">
                    Ano novo? Legal! Agora é hora de passar de nível no PangYa! Passe suas férias com a gente e evolua quatro vezes mas rápido...
                  </p>

                  <a href="#" class="link has-before">Leia mais</a>

                </div>

              </div>
            </li>
      </ul>
    </div>
    </section>
  )
}

export default News
