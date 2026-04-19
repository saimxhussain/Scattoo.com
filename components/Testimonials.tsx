'use client'
import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'
import Image from 'next/image'

const cards = [
  {
    src: '/images/test_1.png',
    alt: 'Scaled to 2x Capacity',
    problem: 'Hitting a growth ceiling — couldn\'t take on more clients without adding headcount.',
    solution: 'Automated reporting and task creation so the team could focus on high-value work.',
    review: '"We reached a ceiling where we couldn\'t take on more clients. Scattoo automated our reporting and task creation, freeing our team to focus on the work they actually love."',
  },
  {
    src: '/images/test_2.png',
    alt: '65% Reduction in Churn',
    problem: 'Onboarding was a manual nightmare — users dropped off before completing setup.',
    solution: 'Fully automated onboarding sequence that guides users step-by-step without any manual emails.',
    review: '"Onboarding used to be a nightmare for our users. Scattoo automated the entire setup sequence, guiding users through every step without a single manual email. It\'s seamless."',
  },
  {
    src: '/images/test_3.png',
    alt: 'Instant Lead Response',
    problem: 'Losing 30% of leads due to slow follow-ups — sales reps couldn\'t respond fast enough.',
    solution: 'AI-response workflow that engages every new lead in under 60 seconds, 24/7.',
    review: '"We were losing 30% of our leads to slow follow-ups. Scattoo\'s instant AI-response workflow now engages every lead in under 60 seconds. Our conversion rate has doubled!"',
  },
  {
    src: '/images/test_4.png',
    alt: '90% Fewer Inventory Errors',
    problem: 'Overselling across 4 platforms due to manual stock sync — 20+ hours of data entry weekly.',
    solution: 'Real-time automated stock sync across all platforms — zero oversells, zero manual entry.',
    review: '"Scattoo automated our stock sync between 4 platforms. We stopped overselling overnight and saved 20 hours of manual data entry every week. Absolute game changer."',
  },
  {
    src: '/images/test_5.png',
    alt: 'Automated KYC Approvals',
    problem: 'Manual KYC verification was the biggest bottleneck — slowing down every new signup.',
    solution: 'API-integrated automation that handles 95% of KYC approvals instantly at scale.',
    review: '"Manual verification was our biggest bottleneck. Scattoo integrated our API stack to automate 95% of approvals instantly. We can finally scale without hiring a massive ops team."',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isLocked = useRef(false)
  const lastScrollY = useRef(0)
  const cooldown = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (inView && !isLocked.current) {
        // Lock scroll position
        isLocked.current = true
        lastScrollY.current = window.scrollY
      }

      if (!inView) {
        isLocked.current = false
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top <= 80 && rect.bottom >= window.innerHeight - 80

      if (!inView) return

      // Scrolling down
      if (e.deltaY > 0) {
        if (active < cards.length - 1) {
          e.preventDefault()
          if (cooldown.current) return
          cooldown.current = true
          setActive(i => i + 1)
          setTimeout(() => { cooldown.current = false }, 600)
        }
        // Last card — let scroll through naturally
      }

      // Scrolling up
      if (e.deltaY < 0) {
        if (active > 0) {
          e.preventDefault()
          if (cooldown.current) return
          cooldown.current = true
          setActive(i => i - 1)
          setTimeout(() => { cooldown.current = false }, 600)
        }
        // First card — let scroll through naturally
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [active])

  // Touch support
  const touchStartY = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) < 40) return
    if (delta > 0 && active < cards.length - 1) setActive(i => i + 1)
    if (delta < 0 && active > 0) setActive(i => i - 1)
  }

  const card = cards[active]

  const goTo = (i: number) => setActive(i)
  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(cards.length - 1, i + 1))

  return (
    <section
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        padding: '120px 0',
        background: '#fafafa',
        borderBottom: '1px solid #f0f0f0',
        overflow: 'hidden',
        // Tall enough so it's "in view" for a while during scroll
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Sticky inner container — sticks while user scrolls through cards */}
      <div style={{
        position: 'sticky',
        top: 0,
        paddingTop: 60,
        paddingBottom: 60,
        background: '#fafafa',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Client Results</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              Real clients.<br /><span style={{ color: '#FF4D00' }}>Real results.</span>
            </h2>

            {/* Right side: scroll hint + arrows */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
              {/* Scroll hint */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.5 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4v8a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><line x1="12" y1="18" x2="12" y2="22"/>
                </svg>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 11, fontWeight: 500, color: '#999', letterSpacing: 0.5 }}>Scroll to navigate</span>
              </div>
              {/* Arrows */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <button onClick={prev} disabled={active === 0} style={{
                  width: 52, height: 52, borderRadius: 12, border: '1.5px solid #e0e0e0',
                  background: active === 0 ? '#f5f5f5' : '#fff',
                  cursor: active === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', color: active === 0 ? '#ccc' : '#0a0a0a',
                  boxShadow: active === 0 ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                }}
                  onMouseEnter={e => { if (active > 0) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' } }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e0e0e0'; el.style.color = active === 0 ? '#ccc' : '#0a0a0a' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 13, fontWeight: 600, color: '#aaa', minWidth: 40, textAlign: 'center' }}>{active + 1} / {cards.length}</span>
                <button onClick={next} disabled={active === cards.length - 1} style={{
                  width: 52, height: 52, borderRadius: 12, border: '1.5px solid #e0e0e0',
                  background: active === cards.length - 1 ? '#f5f5f5' : '#fff',
                  cursor: active === cards.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', color: active === cards.length - 1 ? '#ccc' : '#0a0a0a',
                  boxShadow: active === cards.length - 1 ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                }}
                  onMouseEnter={e => { if (active < cards.length - 1) { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00' } }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e0e0e0'; el.style.color = active === cards.length - 1 ? '#ccc' : '#0a0a0a' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* SPLIT LAYOUT */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

            {/* LEFT — Image stack */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                {cards.map((c, i) => {
                  const offset = i - active
                  const absOffset = Math.abs(offset)
                  if (absOffset > 2) return null
                  const x = offset * 24
                  const y = offset * 12
                  const rotate = offset * 4
                  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.93 : 0.86
                  const zIndex = cards.length - absOffset
                  const opacity = absOffset === 2 ? 0.5 : 1
                  return (
                    <div
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        position: 'absolute', inset: 0,
                        transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
                        zIndex, opacity,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: offset === 0 ? 'default' : 'pointer',
                        borderRadius: 20, overflow: 'hidden',
                        boxShadow: i === active
                          ? '0 24px 64px rgba(0,0,0,0.18), 0 0 0 2px rgba(255,77,0,0.2)'
                          : '0 8px 24px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Image src={c.src} alt={c.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1280px) 50vw, 580px" />
                    </div>
                  )
                })}
              </div>

              {/* Progress dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
                {cards.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{
                    width: i === active ? 28 : 8, height: 8, borderRadius: 4,
                    border: 'none', padding: 0,
                    background: i === active ? '#FF4D00' : '#e0e0e0',
                    cursor: 'pointer', transition: 'all 0.3s ease',
                  }} />
                ))}
              </div>
            </div>

            {/* RIGHT — Problem / Solution / Review */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

              {/* Problem */}
              <div style={{
                background: '#fff', borderRadius: '16px 16px 4px 4px',
                padding: '32px 32px', border: '1.5px solid #f0f0f0', borderBottom: 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#ef4444' }}>Problem</span>
                </div>
                <p key={`p-${active}`} style={{ fontSize: 15, fontWeight: 400, color: '#555', lineHeight: 1.8, margin: 0, animation: 'fadeUp 0.4s ease forwards' }}>
                  {card.problem}
                </p>
              </div>

              {/* Solution */}
              <div style={{ background: '#0a0a0a', padding: '32px 32px', border: '1.5px solid #0a0a0a', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,77,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Solution</span>
                </div>
                <p key={`s-${active}`} style={{ fontSize: 15, fontWeight: 400, color: '#aaa', lineHeight: 1.8, margin: 0, position: 'relative', zIndex: 1, animation: 'fadeUp 0.4s ease forwards' }}>
                  {card.solution}
                </p>
              </div>

              {/* Review */}
              <div style={{ background: '#fff9f6', borderRadius: '4px 4px 16px 16px', padding: '32px 32px', border: '1.5px solid rgba(255,77,0,0.12)', borderTop: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,77,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#FF4D00">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Client Review</span>
                </div>
                <p key={`r-${active}`} style={{ fontSize: 14, fontWeight: 400, color: '#666', lineHeight: 1.85, fontStyle: 'italic', margin: 0, animation: 'fadeUp 0.4s ease forwards' }}>
                  {card.review}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Invisible scroll spacer — each "step" = 100vh so browser has room to scroll */}
      <div style={{ height: `${(cards.length - 1) * 100}vh`, pointerEvents: 'none' }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
