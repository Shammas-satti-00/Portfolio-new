import { useState, useEffect } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    const element = document.getElementById('skills')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Game Dev Core',
      icon: '🎮',
      color: '#667eea',
      desc: 'Building immersive, performant gameplay using industry-standard tools.',
      skills: [
        { name: 'Unity 3D / 2D', detail: 'Game loop architecture, physics integration, prefab systems, UI Canvas' },
        { name: 'C# Scripting', detail: 'Advanced OOP, delegates, events, coroutines, clean architecture' },
        { name: 'Weapon & Combat Systems', detail: 'Modular weapons, rotation calc, cooldowns, firing VFX' },
        { name: 'Level Design', detail: '3D scene construction, chunk-based layouts, material application' },
      ],
    },
    {
      title: 'Graphics & Low-Level',
      icon: '⚡',
      color: '#06b6d4',
      desc: 'Understanding graphics pipelines, physics engines, and deep optimizations.',
      skills: [
        { name: 'C++ Programming', detail: 'Memory management, data structures, algorithm efficiency' },
        { name: 'OpenGL / Shaders', detail: '2D/3D custom graphics rendering, matrix math, coordinate spaces' },
        { name: 'Physics & Vectors', detail: 'Raycasting, rigidbodies, velocity, flight simulation movement' },
        { name: 'Optimization & Debugging', detail: 'Unity Profiler, GC reduction, level chunking, LOD systems' },
      ],
    },
    {
      title: 'AI & Workflows',
      icon: '🧠',
      color: '#a78bfa',
      desc: 'Incorporating intelligent features, team workflows, and full-stack utilities.',
      skills: [
        { name: 'Game AI Systems', detail: 'State machines, pathfinding, NPC behavior, combat tracking' },
        { name: 'Git / Version Control', detail: 'GitHub, branching workflows, conflict resolution' },
        { name: 'Python & NLP', detail: 'Integrating sentiment models, automation scripting' },
        { name: 'Node.js & MongoDB', detail: 'Backend support, database management, simple REST APIs' },
      ],
    },
  ]

  const tags = [
    'Gameplay Programming', 'Physics Simulation', 'Level Generation',
    'Weapon Systems', 'Performance Optimization', 'Vector Mathematics',
    'Custom Tool Development', 'Chunk-Based Levels', 'Unity Profiling', 'OpenGL Rendering',
    'Photon PUN', 'State Machines',
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Specialized in gameplay engineering, physics simulations, and interactive systems — built for real shipped titles.
        </p>

        {/* ── Category Tabs ── */}
        <div className={`skills-tabs ${isVisible ? 'tabs-visible' : ''}`}>
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              className={`skill-tab ${activeCard === i ? 'skill-tab-active' : ''}`}
              style={{ '--tab-color': cat.color }}
              onClick={() => setActiveCard(i)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* ── Active Skill Panel ── */}
        <div className={`skills-panel ${isVisible ? 'panel-visible' : ''}`}>
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`skill-panel-content ${activeCard === i ? 'panel-active' : ''}`}
            >
              <div className="panel-header" style={{ '--panel-color': cat.color }}>
                <div className="panel-icon">{cat.icon}</div>
                <div>
                  <h3 className="panel-title">{cat.title}</h3>
                  <p className="panel-desc">{cat.desc}</p>
                </div>
              </div>

              <div className="panel-skills-grid">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="panel-skill-item" style={{ animationDelay: `${si * 0.07}s` }}>
                    <div className="psi-left">
                      <div className="psi-dot" style={{ background: cat.color }}></div>
                    </div>
                    <div>
                      <p className="psi-name">{skill.name}</p>
                      <p className="psi-detail">{skill.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Specialization Tags ── */}
        <div className={`spec-box ${isVisible ? 'spec-visible' : ''}`}>
          <h4 className="spec-heading">Areas of Specialization</h4>
          <div className="spec-tags">
            {tags.map((tag, i) => (
              <span key={i} className="spec-tag" style={{ animationDelay: `${i * 0.04}s` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: var(--bg-secondary);
          padding: 70px 0;
          align-items: flex-start;
        }

        /* ── Tabs ── */
        .skills-tabs {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
        }

        .tabs-visible {
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: inherit;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .skill-tab:hover {
          color: var(--text-primary);
          border-color: var(--tab-color, var(--accent-primary));
        }

        .skill-tab-active {
          background: var(--tab-color, var(--accent-primary));
          border-color: var(--tab-color, var(--accent-primary));
          color: white;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--tab-color, var(--accent-primary)) 40%, transparent);
        }

        .tab-icon { font-size: 1rem; }

        /* ── Panel ── */
        .skills-panel {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
        }

        .panel-visible {
          animation: fadeUp 0.65s 0.1s ease forwards;
        }

        .skill-panel-content {
          display: none;
        }

        .panel-active {
          display: block;
          animation: panelIn 0.35s ease forwards;
        }

        @keyframes panelIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .panel-header {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .panel-icon {
          font-size: 2.2rem;
          flex-shrink: 0;
          background: var(--bg-tertiary);
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .panel-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          letter-spacing: -0.02em;
        }

        .panel-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .panel-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .panel-skill-item {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
          padding: 1rem 1.1rem;
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.25s ease;
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }

        .panel-active .panel-skill-item {
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }

        .panel-skill-item:hover {
          border-color: var(--border-glow);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--shadow-glow);
        }

        .psi-left {
          padding-top: 4px;
          flex-shrink: 0;
        }

        .psi-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 3px;
        }

        .psi-name {
          font-size: 0.97rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.2rem;
        }

        .psi-detail {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        /* ── Spec Tags Box ── */
        .spec-box {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem 2.5rem;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
        }

        .spec-visible {
          animation: fadeUp 0.65s 0.25s ease forwards;
        }

        .spec-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .spec-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          justify-content: center;
        }

        .spec-tag {
          font-size: 0.82rem;
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
          padding: 5px 14px;
          border-radius: 20px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          cursor: default;
          transition: all 0.2s ease;
          opacity: 0;
          animation: fadeUp 0.4s ease forwards;
        }

        .spec-visible .spec-tag { opacity: 0; animation: fadeUp 0.4s ease forwards; }

        .spec-tag:hover {
          background: rgba(102, 126, 234, 0.15);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .skills-panel { padding: 1.5rem; }
          .panel-skills-grid { grid-template-columns: 1fr; gap: 0.9rem; }
          .panel-header { flex-direction: column; gap: 0.8rem; }
          .skill-tab { padding: 0.55rem 1rem; font-size: 0.85rem; }
        }

        @media (max-width: 480px) {
          .skills-tabs { gap: 0.5rem; }
          .spec-box { padding: 1.5rem; }
        }
      `}</style>
    </section>
  )
}

export default Skills
