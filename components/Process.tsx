'use client'
import { useRef, useEffect, useState } from 'react'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. Monitoring and iteration are on us.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

function StepCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const isRight = i % 2 !== 0 

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{
      display: 'flex',
      justifyContent: isRight ? 'flex-end' : 'flex-start',
      width: '100%',
      position: 'relative',
      marginBottom: '100px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`
    }}>
      {/* The Red Center Node */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '18px',
        height: '18px',
        background: '#ff4d4d',
        borderRadius: '50%',
        zIndex: 10,
        boxShadow: '0 0 20px rgba(255, 77, 77, 0.8)',
        border: '4px solid #000'
      }} />

      {/* The Card */}
      <div className="process-card" style={{
        width: '44%',
        display: 'grid',
        gridTemplateColumns: '1fr', 
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Header Section (The "Background" part) */}
        <div style={{ 
          padding: '40px', 
          background: 'var(--surface-3)', 
          borderBottom: '1px solid var(--border-3)' 
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '64px', color: 'var(--orange-subtle)', lineHeight: 0.8, marginBottom: 16 }}>{s.num}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--text)', textTransform: 'uppercase' }}>{s.title}</div>
        </div>

        {/* Content Section */}
        <div style={{ padding: '40px' }}>
          <p style={{ color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 24, fontSize: 16 }}>{s.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {s.tags.map((tag, j) => (
              <span key={j} style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', background: 'var(--orange-subtle)', padding: '6px 12px', borderRadius: 6, textTransform: 'uppercase' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ padding: '140px 0', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        
        {/* Central Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'rgba(255,255,255,0.15)',
          transform: 'translateX(-50%)'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => <StepCard key={i} s={s} i={i} />)}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          div[style*="left: 50%"] { left: 24px !important; transform: none !important; }
          div[style*="justify-content"] { justify-content: flex-start !important; padding-left: 50px; }
          .process-card { width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
