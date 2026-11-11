
import { useState } from 'react'
import '../styles/Projects.css'

const projects = [
  {
    number: '01',
    title: 'UNPLAN',
    subtitle: '여행의 시작을 더 쉽고 즐겁게',
    description: '룰렛을 통해 국내 여행지를 랜덤으로 추천하는 여행지 추천 웹사이트입니다.',
    image: `${import.meta.env.BASE_URL}images/unplan.png`,
    tags: ['React', 'JavaScript', 'CSS'],
    type: 'PERSONAL PROJECT',
    links: [
      { label: 'VIEW PROJECT ↗', url: 'https://wook13590-droid.github.io/UNPLAN/' },
      { label: 'VIEW GITHUB ↗', url: 'https://github.com/wook13590-droid/UNPLAN' },
    ],
  },
  {
    number: '02',
    title: 'WHAT TO EAT?',
    subtitle: '오늘 뭐 먹지? 고민은 이제 그만',
    description: '다양한 음식 메뉴를 룰렛으로 추천하는 음식 랜덤 추천 웹사이트입니다.',
    image: `${import.meta.env.BASE_URL}images/what-to-eat.png`,
    tags: ['React', 'JavaScript', 'CSS'],
    type: 'PERSONAL PROJECT',
    links: [
      { label: 'VIEW PROJECT ↗', url: 'https://wook13590-droid.github.io/what-to-eat/' },
      { label: 'VIEW GITHUB ↗', url: 'https://github.com/wook13590-droid/what-to-eat' },
    ],
  },
  {
    number: '03',
    title: 'CHALFIT',
    subtitle: '나에게 어울리는 안경을 찾는 즐거움',
    description: 'AI를 활용한 얼굴형 분석과 선글라스 추천을 주제로 기획한 안경 쇼핑몰 팀 프로젝트입니다.',
    image: `${import.meta.env.BASE_URL}images/chalfit.png`,
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'TEAM PROJECT',
    links: [
      { label: 'VIEW PROJECT ↗', url: 'https://s2oory25.github.io/team/' },
      { label: 'VIEW GITHUB ↗', url: 'https://github.com/s2oory25/team' },
    ],
  },
  {
    number: '04',
    title: 'FRESHKEEPER',
    subtitle: '신선함을 더하는 웹페이지 디자인',
    description: '피그마를 활용해 기획하고 디자인한 웹페이지 UI/UX 프로젝트입니다.',
    image: `${import.meta.env.BASE_URL}images/freshkeeper.png`,
    tags: ['Figma', 'UI Design', 'Web Design'],
    type: 'UI/UX DESIGN',
    links: [
      {
        label: 'VIEW FIGMA DESIGN ↗',
        url: 'https://www.figma.com/design/FowvExPArazvAWEbsXdVWO/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91?node-id=1-4&t=eixyI1HSyI7ZDaFe-1',
      },
    ],
  },
  {
    number: '05',
    title: 'AI VIDEO',
    subtitle: 'AI로 제작한 영상 콘텐츠',
    description: 'AI를 활용해 제작한 영상 포트폴리오입니다. 동일한 작품의 60초 및 30초 버전을 감상할 수 있습니다.',
    image: `${import.meta.env.BASE_URL}images/ai-video.png`,
    tags: ['AI', 'Video Production', 'Creative'],
    type: 'AI CONTENT',
    links: [
      { label: '60 SEC VERSION ↗', url: 'https://drive.google.com/file/d/1wGb1kDXNr00fDFZMxPiT64GQfAVHA3SY/view' },
      { label: '30 SEC VERSION ↗', url: 'https://drive.google.com/file/d/1wvLHJOJ7FH6dchlwifn4JPJKSSA3Nvo8/view' },
    ],
  },
  {
    number: '06',
    title: 'AI CONTEST',
    subtitle: 'AI 기술로 완성한 공모전 영상',
    description: 'AI 도구를 활용해 제작한 공모전 출품 영상입니다.',
    image: `${import.meta.env.BASE_URL}images/ai-contest.png`,
    tags: ['AI', 'Video Production', 'Contest'],
    type: 'AI CONTEST',
    links: [
      { label: 'WATCH VIDEO ↗', url: 'https://drive.google.com/file/d/1fW7AUABHmUUu6JX4awLzL2E32aKI8arS/view' },
    ],
  },
]

function Projects() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  const previous = () => {
    setCurrent((current - 1 + projects.length) % projects.length)
  }

  const next = () => {
    setCurrent((current + 1) % projects.length)
  }

  return (
    <section className="projects section-padding" id="projects">
      <div className="projects-heading">
        <span className="section-label">02 — SELECTED WORKS</span>
        <h2>
          PROJECTS<span>.</span>
        </h2>
        <p>작은 아이디어에서 시작해 직접 완성한 작업들입니다.</p>
      </div>

      <div className="project-slider">
        <div className="project-image-area" key={project.number}>
          <img
            src={project.image}
            alt={`${project.title} 작업 화면`}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />

          <div className="project-image-fallback">
            <span>{project.number}</span>
            <strong>{project.title}</strong>
            <small>PROJECT PREVIEW</small>
          </div>

          <span className="project-image-index">
            PROJECT {project.number}
          </span>
        </div>

        <div className="project-bottom">
          <div className="project-information">
            <span className="project-category">{project.type}</span>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-demo"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="project-navigation">
            <div className="project-count">
              <strong>{project.number}</strong>
              <span> / {String(projects.length).padStart(2, '0')}</span>
            </div>

            <div className="project-progress">
              <span
                style={{
                  width: `${((current + 1) / projects.length) * 100}%`,
                }}
              />
            </div>

            <div className="project-arrows">
              <button onClick={previous} aria-label="이전 프로젝트">←</button>
              <button onClick={next} aria-label="다음 프로젝트">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
