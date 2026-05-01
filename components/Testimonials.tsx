'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

const cards = [
  {
    src: '/images/test_1.png',
    name: 'Michael T.',
    role: 'Creative Agency Owner',
    review: '"We reached a ceiling where we couldn\'t take on more clients. AgentFlow automated our reporting and task creation, freeing our team to focus on the work they actually love."',
    accent: '#83C732',
  },
  {
    src: '/images/test_2.png',
    name: 'Sarah M.',
    role: 'Head of Customer Success',
    review: '"Onboarding used to be a nightmare for our users. AgentFlow automated the entire setup sequence, guiding users through every step without a single manual email. It\'s seamless."',
    accent: '#83C732',
  },
  {
    src: '/images/test_3.png',
    name: 'James T.',
    role: 'Growth Marketing Director',
    review: '"We were losing 30% of our leads to slow follow-ups. AgentFlow\'s instant AI-response workflow now engages every lead in under 60 seconds. Our conversion rate has doubled!"',
    accent: '#83C732',
  },
  {
    src: '/images/test_4.png',
    name: 'Maria L.',
    role: 'Operations Manager',
    review: '"AgentFlow automated our stock sync between 4 platforms. We stopped overselling overnight and saved 20 hours of manual data entry every week. Absolute game changer."',
    accent: '#83C732',
  },
  {
    src: '/images/test_5.png',
    name: 'Elena K.',
    role: 'Chief Compliance Officer',
    review: '"Manual verification was our biggest bottleneck. AgentFlow integrated our API stack to automate 95% of approvals instantly. We can finally scale without hiring a massive ops team."',
    accent: '#83C732',
  },
]

export default function Testimonials() {
  const [offset, setOffset] = useState(0)
  const touchStartX = useRef(0)
  const visible = 3
  const max = cards.length - visible

  const prev = () => setOffset(o => Math.max(0, o - 1))
  const next = () => setOffset(o => Math.min(max, o + 1))

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    if (delta < -40) prev()
  }

  return (
    <section style={{ padding: '120px 0', background: 'var(--bg)', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(131,199,50,0.06)', top: -100, right: -100, animation: 'orbMove 20s ease-in-out infinite' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ width: 28, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Client Results</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)' }}>
            Real clients.<br /><span style={{ color: 'var(--orange)' }}>Real results.</span>
          </h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={prev} disabled={offset === 0} className="t-nav-btn" style={{ opacity: offset === 0 ? 0.3 : 1 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={next} disabled={offset === max} className="t-nav-btn" style={{ opacity: offset === max ? 0.3 : 1 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div style={{ overflow: 'hidden' }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div style={{
            display: 'flex',
            gap: 16,
            transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            transform: `translateX(calc(-${offset} * (320px + 16px)))`,
          }}>
            {cards.map((card, i) => (
              <div key={i} className="t-card" style={{
                width: 320,
                flexShrink: 0,
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(131,199,50,0.15)',
                background: '#111a0f',
                cursor: 'pointer',
                position: 'relative',
              }}>
                {/* Image — fixed height */}
                <div style={{ position: 'relative', width: '100%', height: 220, overflow: 'hidden' }}>
                  <Image
                    src={card.src}
                    alt={card.name}
                    fill
                    className="t-card-img"
                    style={{ objectFit: 'cover', objectPosition: 'center 20%', transition: 'transform 0.5s ease' }}
                    sizes="320px"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #111a0f 0%, transparent 60%)' }} />
                </div>

                {/* Text */}
                <div style={{ padding: '16px 20px 20px' }}>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', margin: '0 0 14px' }}>
                    {card.review}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid rgba(131,199,50,0.2)', paddingTop: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(131,199,50,0.15)', border: '1px solid rgba(131,199,50,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#83C732"><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/></svg>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 0.3 }}>{card.name}</p>
                      <p style={{ margin: 0, fontSize: 10, color: '#83C732', letterSpacing: 0.3 }}>{card.role}</p>
                    </div>
                  </div>
                </div>

                {/* hover glow border */}
                <div className="t-glow" style={{ position: 'absolute', inset: 0, borderRadius: 16, border: '1px solid #83C732', opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => setOffset(i)} style={{
              width: i === offset ? 32 : 8, height: 8, borderRadius: 4,
              border: 'none', padding: 0,
              background: i === offset ? 'var(--orange)' : 'var(--border-2)',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      <style>{`
        .t-nav-btn {
          width: 48px; height: 48px; border-radius: 10px;
          border: 1px solid var(--border-2);
          background: var(--surface-2);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; color: var(--text-3);
        }
        .t-nav-btn:hover:not(:disabled) { border-color: var(--orange); color: var(--orange); }
        .t-card:hover .t-card-img { transform: scale(1.04); }
        .t-card:hover .t-glow { opacity: 1 !important; }
        @media(max-width:768px){ .t-card { width: 80vw !important; } }
      `}</style>
    </section>
  )
}
