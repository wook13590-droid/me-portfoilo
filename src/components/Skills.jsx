
import '../styles/Skills.css'

const skillGroups = [
  {
    number: '01',
    title: 'FRONTEND',
    description: '웹 화면을 구성하고 동적인 기능을 구현합니다.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    number: '02',
    title: 'DESIGN',
    description: '사용자 경험과 화면 디자인을 고민합니다.',
    skills: ['Figma', 'UI Design', 'Responsive Design'],
  },
  {
    number: '03',
    title: 'TOOLS',
    description: '프로젝트 개발과 협업에 사용하는 도구입니다.',
    skills: ['VS Code', 'GitHub', 'Vite'],
  },
]

function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-heading">
        <span className="section-label">03 — MY EXPERTISE</span>
        <h2>
          SKILLS &
          <br />
          <span>TOOLS.</span>
        </h2>
      </div>

      <p className="skills-intro">
        배우고 경험하며 꾸준히 성장하고 있는
        <br />
        기술과 도구들을 소개합니다.
      </p>

      <div className="skills-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.number}>
            <span className="skill-number">{group.number}</span>

            <div className="skill-group-info">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skill-items">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-bottom">
        <span>ALWAYS LEARNING</span>
        <span>GROWTH MINDSET ✳</span>
      </div>
    </section>
  )
}

export default Skills
