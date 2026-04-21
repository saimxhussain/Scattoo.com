'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    sub: 'Understand your business inside out',
    desc: 'We map your current workflows, identify bottlenecks, and pinpoint exactly which tasks are stealing time from your team every single day.',
    tags: ['Workflow audit', 'Goal alignment', 'System mapping'],
  },
  {
    num: '02',
    title: 'Build',
    sub: 'Architect your digital workforce',
    desc: 'We design and build your automation pipelines from scratch. Connect your tools, sync your data, and integrate AI agents that actually work for your business.',
    tags: ['AI agent design', 'Pipeline architecture', 'Integration planning'],
  },
  {
    num: '03',
    title: 'Deploy',
    sub: 'Go live with confidence',
    desc: 'We push your systems into production with zero downtime. Monitoring, iteration, and continuous improvement are all handled on our end.',
    tags: ['Live deployment', 'System monitoring', 'Ongoing optimization'],
  },
]

function SlideCard({ s, i }: { s: typeof steps[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isRight = i % 2 !== 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // slide in from left or right depending on position
    el.style.opacity = '0'
    el.style.transform = isRight ? 'translateX(60px)' : 'translateX(-60px)'
    el.style.transition = `opacity 0.8s ${i * 160}ms ease, transform 0.8s ${i * 160}ms ease`

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateX(0)'
        obs.disconnect()
      }
    }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [i, isRight])

  return (
    <div
      ref={ref}
      className="process-card"
      style={{
        width: '44%',
        background: 'var(--surface)',
        border: '1px solid var(--border-2)',
        borderRadius: 20,
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.18)',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, var(--orange), var(--orange-subtle))',
      }} />

      {/* Header */}
      <div style={{
        padding: '28px 32px 24px',
        background: 'var(--surface-3)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '52px',
          color: 'var(--text-6)',
          lineHeight: 1,
          flexShrink: 0,
          marginTop: 2,
        }}>
          {s.num}
        </div>
        <div>
          <h3 style={{
            fontSize: '20px',
            color: 'var(--text)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: '0 0 6px',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
          }}>
            {s.title}
          </h3>
          <p style={{
            fontSize: 13,
            color: 'var(--orange)',
            margin: 0,
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}>
            {s.sub}
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '28px 32px 32px' }}>
        <p style={{
          color: 'var(--text-3)',
          lineHeight: 1.7,
          marginBottom: 24,
          fontSize: 14,
        }}>
          {s.desc}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {s.tags.map((tag, j) => (
            <span
              key={j}
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: 'var(--orange)',
                background: 'var(--orange-surface)',
                padding: '5px 12px',
                borderRadius: 4,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: '1px solid var(--orange-subtle)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="process"
      style={{
        padding: '140px 0',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orb background glow — same pattern as other sections */}
      <div className="orb" style={{
        width: 500,
        height: 500,
        background: 'rgba(131,199,50,0.05)',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'orbMove 20s ease-in-out infinite',
      }} />

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>

        {/* Section header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 24, height: 3, background: 'var(--orange)', borderRadius: 2, display: 'inline-block' }} />
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--orange)',
              textTransform: 'uppercase',
            }}>
              How it works
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            color: 'var(--text)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            margin: 0,
            fontFamily: 'var(--font-display)',
          }}>
            Three steps to autopilot
          </h2>
        </div>

        {/* THE CENTRAL LINE */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '200px',
          bottom: '60px',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--section-line) 10%, var(--section-line) 90%, transparent)',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 2 }}>
          {steps.map((s, i) => {
            const isRight = i % 2 !== 0
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: isRight ? 'flex-end' : 'flex-start',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* GLOWING NODE */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '16px',
                  height: '16px',
                  background: '#ff4d4d',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px 6px rgba(255, 77, 77, 0.35)',
                  border: '3px solid var(--bg)',
                  zIndex: 5,
                }} />

                <SlideCard s={s} i={i} />
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-card { width: 100% !important; }
          #process > div > div:last-child > div {
            justify-content: flex-start !important;
            padding-left: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
