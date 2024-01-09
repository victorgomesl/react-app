import "./styles.css";

function Hero() {
   return (
    <section-hero>
    <div className="hero has-before" id="home">
      <div className="container-hero">

        <p className="section-subtitle-hero">Enjoy The Game</p>

        <h1 className="h1-hero title hero-title">Baixe agora mesmo o <br /> PangYa Ex!</h1>

        <a href="#" className="btn" data-btn>download</a>

        {/* Se você quiser adicionar a seção de banner, descomente o código abaixo */}
        {/* <div className="hero-banner">
          <img src="./assets/images/hero-banner.png" width="850" height="414" alt="hero banner" className="w-100" />

          <img src="./assets/images/hero-banner-bg.png" alt="" className="hero-banner-bg" />
        </div> */}

      </div>
    </div>
    </section-hero>
  )
}

export default Hero
