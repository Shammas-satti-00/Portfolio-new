import { useState, useEffect } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Game Development",
      skills: [
        { name: "Unity 3D", level: 80 },
        { name: "C#", level: 70 },
        { name: "OpenGl", level: 90 },
        { name: "C++", level: 85 },
        { name: "Core", level: 80 },

      ]
    },
    {
      title: "AI & Backend Development",
      skills: [
        { name: "Python", level: 80 },
        { name: "NLP", level: 80 },
        { name: "Node.js", level: 90 },
        { name: "MongoDB ", level: 75 },
        { name: "Flask", level: 70 },
        
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "GitHub", level: 90 },
        {name: "Unity 3D", level: 90},
        {name: "OpenGL", level: 80},
        {name: "Java", level: 80},
        {name: "Python", level: 85},
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className={`skills-intro ${isVisible ? 'fade-in' : ''}`}>
            <h3>Technical Proficiency</h3>
            <p>
              I’ve developed expertise across the full game development pipeline from designing immersive gameplay and intuitive user experiences to implementing robust systems, physics, and AI-driven mechanics.
              Here's a breakdown of my technical skills and proficiency levels.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`skill-category ${isVisible ? 'slide-in-left' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h4 className="category-title">{category.title}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`additional-skills ${isVisible ? 'slide-in-right' : ''}`}>
            <h4>Additional Skills</h4>
            <div className="skills-tags">
              <span className="skill-tag">Gameplay Programming</span>
              <span className="skill-tag">Physics Simulation</span>
              <span className="skill-tag">AI Programming</span>
              <span className="skill-tag">Level Design & World Building</span>
              <span className="skill-tag">VR/AR Development</span>
              <span className="skill-tag">Testing</span>
              <span className="skill-tag">Audio Integration</span>
              <span className="skill-tag">Three.js</span>
              <span className="skill-tag">Version Control</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: var(--bg-primary);
          padding: 100px 0;
        }

        .skills-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .skills-intro {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease forwards;
        }

        .skills-intro h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .skills-intro p {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .skill-category {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 15px;
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease forwards;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .skill-level {
          font-size: 0.9rem;
          color: var(--accent-primary);
          font-weight: 600;
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: var(--border-color);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 4px;
          transition: width 1.5s ease;
        }

        .additional-skills {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 0.8s ease forwards;
        }

        .additional-skills h4 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }

        .skill-tag {
          background: var(--card-bg);
          color: var(--accent-primary);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 2px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            gap: 2.5rem;
          }

          .skills-intro h3 {
            font-size: 2.2rem;
          }

          .skill-category {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .skills-tags {
            gap: 0.6rem;
          }

          .skill-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .skills-intro h3 {
            font-size: 2rem;
          }

          .category-title {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 640px) {
          .skills-intro h3 {
            font-size: 1.8rem;
          }

          .skill-category {
            padding: 1.2rem;
          }

          .category-title {
            font-size: 1.3rem;
          }

          .skill-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .skills-intro h3 {
            font-size: 1.8rem;
          }

          .category-title {
            font-size: 1.3rem;
          }

          .skill-category {
            padding: 1rem;
          }

          .skills-tags {
            gap: 0.5rem;
          }

          .skill-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.5rem;
          }
        }

        @media (max-width: 360px) {
          .skills-intro h3 {
            font-size: 1.6rem;
          }

          .category-title {
            font-size: 1.2rem;
          }

          .skill-tag {
            font-size: 0.65rem;
            padding: 0.25rem 0.4rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
