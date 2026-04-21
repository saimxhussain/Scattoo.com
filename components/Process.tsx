'use client'
import { useRef, useEffect, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. From that point forward, monitoring and iteration are on us.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

function StepCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isRight = i % 2 !== 0 // Even index (0, 2) left, Odd index (1) right

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-item ${isRight ? 'right' : 'left'}`} style={{
      display: 'flex',
      justifyContent: isRight ? 'flex-end' : 'flex-start',
      width: '100%',
      position: 'relative',
      marginBottom: '60px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.2}s`
    }}>
      {/* The Red Connector Dot */}
      <div className="timeline-dot" style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20px',
        height: '20px',
        background: '#FF4D4D', // Your red dot color
        borderRadius: '50%',
        border: '4px solid var(--surface)',
        zIndex: 10,
        boxShadow: '0 0 15px rgba(255, 77, 77, 0.6)'
      }} />

      {/* The Content Card */}
      <div className="process-card" style={{
        width: '45%',
        background: 'var(--surface)',
        backdropFilter: 'blur(24px)',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '32px', background: 'var(--surface-3)', borderBottom: '1px solid var(--border-3)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', color: 'var(--orange-subtle)', lineHeight: 1 }}>{s.num}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--text)', marginTop: 10 }}>{s.title}</div>
        </div>
        <div style={{ padding: '32px' }}>
          <p style={{ fontSize: 15, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {s.tags.map((t, j) => (
              <span key={j} style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: 'var(--orange)', background: 'var(--orange-subtle)', padding: '4px 10px', borderRadius: 4 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0', position: 'relative', background: '#000' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        <Reveal>
           <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', color: '#fff', marginBottom: '100px' }}>
            Our <span style={{ color: 'var(--orange)' }}>Workflow.</span>
          </h2>
        </Reveal>

        <div style={{ position: 'relative' }}>
          {/* Central Vertical Line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(255,255,255,0.1)',
            transform: 'translateX(-50%)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((s, i) => <StepCard key={i} s={s} i={i} />)}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .timeline-line { left: 20px !important; }
          .timeline-dot { left: 20px !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 50px; }
          .process-card { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
