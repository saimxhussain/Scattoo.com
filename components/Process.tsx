'use client'
import { useRef, useEffect, useState } from 'react'
import Reveal from './Reveal'

const steps = [
  { num: '01', title: 'Discovery', sub: 'Understand your business inside out', desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team — and figure out the fastest way to eliminate them.', tags: ['Workflow audit', 'Goal alignment', 'System mapping'] },
  { num: '02', title: 'Build', sub: 'Architect your digital workforce', desc: 'We design and build your automation pipelines. Connect your tools, sync your data, integrate AI agents — you get a clear roadmap showing exactly what we\'ll automate and the impact it will have.', tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'] },
  { num: '03', title: 'Deploy', sub: 'Go live with confidence', desc: 'We push your systems into production. From that point forward, monitoring and iteration are on us. Your team can focus on growth; the AI handles execution — around the clock, without supervision.', tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'] },
]

function StepCard({ s, i }: { s: typeof steps[0], i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Connecting line between steps */}
      {i < steps.length - 1 && (
        <div style={{ position: 'absolute', left: 44, bottom: -3, width: 2, height: 3, zIndex: 2, overflow: 'hidden' }}>
          <div style={{
            width: '100%', height: visible ? '100%' : '0%',
            background: 'linear-gradient(to bottom, #FF4D00, rgba(255,77,0,0.2))',
            transition: 'height 0.8s ease 0.6s',
          }} />
        </div>
      )}

      {/* Step number dot on the left */}
      <div style={{
        position: 'absolute', left: 32, top: 52, width: 26, height: 26, zIndex: 3,
        borderRadius: '50%',
        background: visible ? '#FF4D00' : 'rgba(255,77,0,0.2)',
        border: '2px solid rgba(255,77,0,0.5)',
        boxShadow: visible ? '0 0 16px rgba(255,77,0,0.6)' : 'none',
        transition: 'all 0.4s ease 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease 0.5s' }} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: 16, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        marginLeft: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,77,0,0.25)'; el.style.boxShadow = '0 8px 40px rgba(255,77,0,0.1)' }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.08)'; el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)' }}
      >
        <div style={{ padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 0 : 1 }}>
          <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(70px, 10vw, 120px)', color: 'rgba(255,77,0,0.10)', lineHeight: 0.8, marginBottom: 20, userSelect: 'none' as const, letterSpacing: -4 }}>{s.num}</div>
          <div style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 42px)', color: '#fff', letterSpacing: -1, marginBottom: 6, lineHeight: 1 }}>{s.title}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#FF4D00', letterSpacing: 0.5 }}>{s.sub}</div>
        </div>
        <div style={{ padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 1 : 0, background: 'rgba(255,255,255,0.03)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>{s.desc}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {s.tags.map((t, j) => (
              <span key={j} style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#FF4D00', background: 'rgba(255,77,0,0.10)', border: '1px solid rgba(255,77,0,0.2)', padding: '5px 12px', borderRadius: 6 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(100,60,255,0.07)', bottom: -80, right: -80, animation: 'orbMove 20s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Process / Timeline</span>
          </div>
          <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#fff', marginBottom: 72 }}>
            How it works,<br /><span style={{ color: '#FF4D00' }}>step by step.</span>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {steps.map((s, i) => <StepCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
