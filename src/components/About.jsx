
import '../styles/About.css'

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-heading">
        <span className="section-label">01 — ABOUT ME</span>
        <h2>
          A LITTLE BIT
          <br />
          <span>ABOUT ME.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <p className="about-big-text">
            새로운 것을 배우고,
            <br />
            직접 만들어가는 과정에서
            <br />
            <span>성장하는 개발자</span>입니다.
          </p>

          <p className="about-description">
            웹 개발을 배우며 다양한 아이디어를 실제 웹사이트로 구현하고 있습니다.
            단순히 작동하는 화면을 넘어, 사용자가 편리하고 즐겁게 이용할 수 있는
            경험을 만드는 것을 중요하게 생각합니다.
          </p>
        </div>

        <div className="about-info">
          <div className="about-info-item">
            <span>01</span>
            <div>
              <h3>CREATIVE</h3>
              <p>새로운 아이디어를 고민하고 나만의 방식으로 표현합니다.</p>
            </div>
          </div>

          <div className="about-info-item">
            <span>02</span>
            <div>
              <h3>GROWTH</h3>
              <p>새로운 기술을 배우고 꾸준히 실력을 쌓아갑니다.</p>
            </div>
          </div>

          <div className="about-info-item">
            <span>03</span>
            <div>
              <h3>CHALLENGE</h3>
              <p>다양한 프로젝트에 도전하며 경험을 넓혀갑니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
