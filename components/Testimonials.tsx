'use client'
import { useState } from 'react'
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

function getCardStyle(index: number, active: number, total: number): React.CSSProperties {
  const offset = index - active
  const absOffset = Math.abs(offset)
  if (absOffset > 2) return { display: 'none' }
  const x = offset * 180
  const rotate = offset * 7
  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.87 : 0.74
  const zIndex = total - absOffset
  const opacity = absOffset === 2 ? 0.45 : 1
  return {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: `translateX(calc(-50% + ${x}px)) rotate(${rotate}deg) scale(${scale})`,
    zIndex,
    opacity,
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: offset === 0 ? 'default' : 'pointer',
  }
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const card = cards[active]

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(cards.length - 1, i + 1))

  return (
    <section style={{ padding: '120px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: '#FF4D00', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#FF4D00' }}>Client Results</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: '#0a0a0a' }}>
              Real clients.<br /><span style={{ color: '#FF4D00' }}>Real results.</span>
            </h2>
            {/* Arrows */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button onClick={prev} disabled={active === 0} style={{
                width: 52, height: 52, borderRadius: 12, border: '1.5px solid #e0e0e0',
                background: active === 0 ? '#f5f5f5' : '#fff', cursor: active === 0 ? 'not-allowed' : 'pointer',
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
                background: active === cards.length - 1 ? '#f5f5f5' : '#fff', cursor: active === cards.length - 1 ? 'not-allowed' : 'pointer',
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
        </Reveal>

        {/* Card deck — strict 1:1 ratio */}
        <div style={{ position: 'relative', height: 500, width: '100%', marginBottom: 64 }}>
          {cards.map((c, i) => (
            <div key={i} style={getCardStyle(i, active, cards.length)} onClick={() => { if (i !== active) setActive(i) }}>
              <div style={{
                width: 460, height: 460,
                borderRadius: 20, overflow: 'hidden', position: 'relative',
                boxShadow: i === active
                  ? '0 32px 80px rgba(0,0,0,0.2), 0 0 0 2px rgba(255,77,0,0.25)'
                  : '0 8px 32px rgba(0,0,0,0.12)',
              }}>
                <Image src={c.src} alt={c.alt} fill style={{ objectFit: 'cover' }} sizes="460px" />
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 64 }}>
          {cards.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 4,
              border: 'none', padding: 0,
              background: i === active ? '#FF4D00' : '#e0e0e0',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }} />
          ))}
        </div>

        {/* Problem | Solution | Review */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>

          {/* Problem */}
          <div style={{
            background: '#fff', borderRadius: '16px 4px 4px 16px',
            padding: '40px 36px', border: '1.5px solid #f0f0f0', borderRight: 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: 'rgba(239,68,68,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#ef4444' }}>Problem</span>
            </div>
            <p key={`problem-${active}`} style={{ fontSize: 15, fontWeight: 400, color: '#555', lineHeight: 1.8 }}>{card.problem}</p>
          </div>

          {/* Solution */}
          <div style={{
            background: '#0a0a0a', padding: '40px 36px',
            border: '1.5px solid #0a0a0a', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -40, right: -40, width: 160, height: 160,
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: 'rgba(255,77,0,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Solution</span>
            </div>
            <p key={`solution-${active}`} style={{ fontSize: 15, fontWeight: 400, color: '#aaa', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>{card.solution}</p>
          </div>

          {/* Review */}
          <div style={{
            background: '#fff9f6', borderRadius: '4px 16px 16px 4px',
            padding: '40px 36px', border: '1.5px solid rgba(255,77,0,0.12)', borderLeft: 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: 'rgba(255,77,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF4D00">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" />
                </svg>
              </div>
              <span style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#FF4D00' }}>Client Review</span>
            </div>
            <p key={`review-${active}`} style={{ fontSize: 14, fontWeight: 400, color: '#666', lineHeight: 1.85, fontStyle: 'italic' }}>{card.review}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
