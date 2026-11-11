
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-label">
          <span className="hero-dot"></span>
          FRONTEND DEVELOPER PORTFOLIO
        </div>

        <h1>
          안녕하세요,
          <br />
          <span>장태욱</span>입니다<span className="hero-period">.</span>
        </h1>

        <p className="hero-description">
          아이디어를 감각적인 웹 경험으로 만드는
          <br />
          프론트엔드 개발자입니다.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary">
            VIEW MY WORK ↗
          </a>

          <a href="#about" className="hero-secondary">
            MORE ABOUT ME
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-center">
          <span>CREATIVE</span>
          <strong>JTW.</strong>
          <span>DEVELOPER</span>
        </div>

        <span className="hero-small-text">DESIGN × CODE</span>
        <span className="hero-number">2026</span>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero
