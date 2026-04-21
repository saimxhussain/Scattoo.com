'use client'
import { useRef, useEffect, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team — and figure out the fastest way to eliminate them.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents — you get a clear roadmap showing exactly what we\'ll automate and the impact it will have.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. From that point forward, monitoring and iteration are on us. Your team can focus on growth; the AI handles execution — around the clock, without supervision.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

// 1,3 → left to right (fromLeft), 2 → right to left (fromRight)
function StepCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const fromRight = i === 1 // step 2 slides from right

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="process-card" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: 'var(--surface)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 20, overflow: 'hidden',
        border: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0) translateY(0)' : fromRight ? 'translateX(72px)' : 'translateX(-72px)',
        transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, box-shadow 0.25s ease, border-color 0.25s ease`,
        boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
      }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(131,199,50,0.35)'; el.style.boxShadow = '0 16px 52px rgba(131,199,50,0.14)' }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.12)' }}
      >
        <div style={{
          padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          order: fromRight ? 1 : 0,
          borderRight: fromRight ? 'none' : '1px solid var(--border-3)',
          borderLeft: fromRight ? '1px solid var(--border-3)' : 'none',
          background: fromRight ? 'var(--surface-3)' : 'transparent',
        }}>
          <div style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 'clamp(84px, 11vw, 130px)', color: 'var(--orange-subtle)', lineHeight: 0.8, marginBottom: 24, userSelect: 'none' as const, letterSpacing: -2 }}>{s.num}</div>
          <div style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 'clamp(36px, 4vw, 54px)', color: 'var(--text)', letterSpacing: 1, marginBottom: 12, lineHeight: 1.0 }}>{s.title}</div>
          <div style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 16, fontWeight: 600, color: 'var(--orange)', letterSpacing: 0.3 }}>{s.sub}</div>
        </div>
        <div style={{
          padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          order: fromRight ? 0 : 1,
          background: fromRight ? 'transparent' : 'var(--surface-3)',
        }}>
          <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 17, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.85, marginBottom: 32, maxWidth: 440 }}>{s.desc}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {s.tags.map((t, j) => (
              <span key={j} style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--orange)', background: 'var(--orange-subtle)', border: '1px solid rgba(131,199,50,0.25)', padding: '6px 14px', borderRadius: 8 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(131,199,50,0.06)', bottom: -80, right: -80, animation: 'orbMove 20s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 28, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
            <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Process / Timeline</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.0, letterSpacing: 1, color: 'var(--text)', marginBottom: 72 }}>
            How it works,{' '}<span style={{ color: 'var(--orange)' }}>step by step.</span>
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {steps.map((s, i) => <StepCard key={i} s={s} i={i} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .process-card{grid-template-columns:1fr !important;}
          .process-card > div{order:unset !important;border-left:none !important;border-right:none !important;border-bottom:1px solid var(--border-3);padding:36px 24px !important;}
        }
      `}</style>
    </section>
  )
}
