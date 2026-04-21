'use client'
import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const COUNTRIES = [
  { code: 'US', name: 'United States',   symbol: '$',    defaultRate: 50,    min: 10,   max: 500,    step: 10  },
  { code: 'GB', name: 'United Kingdom',  symbol: '£',    defaultRate: 40,    min: 8,    max: 400,    step: 5   },
  { code: 'EU', name: 'Europe (EUR)',    symbol: '€',    defaultRate: 45,    min: 10,   max: 450,    step: 5   },
  { code: 'PK', name: 'Pakistan',        symbol: '₨',    defaultRate: 500,   min: 100,  max: 10000,  step: 100 },
  { code: 'IN', name: 'India',           symbol: '₹',    defaultRate: 1000,  min: 200,  max: 20000,  step: 200 },
  { code: 'AE', name: 'UAE',             symbol: 'AED',  defaultRate: 185,   min: 40,   max: 1800,   step: 20  },
  { code: 'SA', name: 'Saudi Arabia',    symbol: 'SAR',  defaultRate: 190,   min: 40,   max: 1800,   step: 20  },
  { code: 'CA', name: 'Canada',          symbol: 'CA$',  defaultRate: 68,    min: 14,   max: 680,    step: 10  },
  { code: 'AU', name: 'Australia',       symbol: 'A$',   defaultRate: 76,    min: 15,   max: 760,    step: 10  },
  { code: 'BD', name: 'Bangladesh',      symbol: '৳',    defaultRate: 1000,  min: 200,  max: 15000,  step: 200 },
  { code: 'NG', name: 'Nigeria',         symbol: '₦',    defaultRate: 25000, min: 5000, max: 250000, step: 2500},
  { code: 'ZA', name: 'South Africa',    symbol: 'R',    defaultRate: 930,   min: 200,  max: 9300,   step: 100 },
  { code: 'SG', name: 'Singapore',       symbol: 'S$',   defaultRate: 67,    min: 14,   max: 670,    step: 10  },
  { code: 'MY', name: 'Malaysia',        symbol: 'RM',   defaultRate: 235,   min: 50,   max: 2350,   step: 25  },
  { code: 'BR', name: 'Brazil',          symbol: 'R$',   defaultRate: 250,   min: 50,   max: 2500,   step: 25  },
  { code: 'TR', name: 'Turkey',          symbol: '₺',    defaultRate: 1600,  min: 300,  max: 16000,  step: 200 },
  { code: 'JP', name: 'Japan',           symbol: '¥',    defaultRate: 7500,  min: 1500, max: 75000,  step: 500 },
  { code: 'KR', name: 'South Korea',     symbol: '₩',    defaultRate: 66500, min:10000, max:665000,  step: 5000},
]

const fmt = (symbol: string, n: number): string => {
  if (n >= 1_000_000) return `${symbol}${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${symbol}${(n / 1_000).toFixed(1)}k`
  return `${symbol}${n}`
}

export default function ROICalculator() {
  const [hours,   setHours]   = useState(10)
  const [country, setCountry] = useState(COUNTRIES[0])
  const [rate,    setRate]    = useState(COUNTRIES[0].defaultRate)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('agentflow_country')
      if (saved) {
        const found = COUNTRIES.find(c => c.code === saved)
        if (found) { setCountry(found); setRate(found.defaultRate) }
      }
    } catch {}
  }, [])

  const weekly      = hours * rate
  const monthly     = Math.round(weekly * 4.33)
  const yearly      = Math.round(monthly * 12)
  const saved       = Math.round(yearly * 0.85)
  const automatable = Math.round(hours * 0.85)
  const s           = country.symbol

  const selectCountry = (c: typeof COUNTRIES[0]) => {
    setCountry(c); setRate(c.defaultRate)
    try { localStorage.setItem('agentflow_country', c.code) } catch {}
  }

  return (
    <section id="roi-calculator" style={{ padding: '72px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(131,199,50,0.07)', top: -100, left: '30%', animation: 'orbMove 20s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 24, height: 3, background: '#83C732', borderRadius: 2 }} />
            <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#83C732' }}>ROI Calculator</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.0, letterSpacing: 1, color: 'var(--text)', marginBottom: 8 }}>
            See what manual work <span style={{ color: '#83C732' }}>is costing you.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 17, color: 'var(--text-4)', marginBottom: 40, lineHeight: 1.6 }}>Adjust the sliders. The numbers might surprise you.</p>
        </Reveal>

        <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>

          {/* LEFT — Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Country */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px' }}>
              <div style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--text)', marginBottom: 12 }}>Your country / currency</div>
              <select value={country.code} onChange={e => { const found = COUNTRIES.find(c => c.code === e.target.value); if (found) selectCountry(found) }}
                style={{ width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border-2)', borderRadius: 10, padding: '10px 14px', color: 'var(--text)', fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 14, cursor: 'pointer', outline: 'none' }}>
                {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name} ({c.symbol})</option>)}
              </select>
            </div>

            {/* Hours */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>Hours/week on manual tasks</span>
                <span style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 32, color: '#83C732', letterSpacing: 1 }}>{hours}h</span>
              </div>
              <input type="range" min={1} max={60} value={hours} onChange={e => setHours(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#83C732', cursor: 'pointer', height: 4 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, color: 'var(--text-6)' }}>1h</span>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, color: 'var(--text-6)' }}>60h</span>
              </div>
            </div>

            {/* Rate */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>Your hourly rate / value</span>
                <span style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 32, color: '#83C732', letterSpacing: 1 }}>{s}{rate}/h</span>
              </div>
              <input type="range" min={country.min} max={country.max} step={country.step} value={rate} onChange={e => setRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#83C732', cursor: 'pointer', height: 4 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, color: 'var(--text-6)' }}>{s}{country.min}</span>
                <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, color: 'var(--text-6)' }}>{fmt(s, country.max)}</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(131,199,50,0.15), rgba(131,199,50,0.05))', border: '1px solid rgba(131,199,50,0.3)', borderRadius: 20, padding: '36px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(131,199,50,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(131,199,50,0.8)', marginBottom: 12 }}>You&apos;re losing per month</p>
              <p style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 'clamp(48px, 7vw, 72px)', color: 'var(--text)', letterSpacing: 1, lineHeight: 1, margin: '0 0 8px' }}>
                {fmt(s, monthly)}
              </p>
              <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>in time spent on tasks AI can handle</p>
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px' }}>
              <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--text-5)', marginBottom: 18 }}>Breakdown</p>
              {[
                { label: 'Wasted per week',       val: fmt(s, weekly) },
                { label: 'Hours automatable/week', val: `${automatable}h` },
                { label: 'Value recovered/month',  val: fmt(s, Math.round(saved / 12)), highlight: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 15, color: 'var(--text-3)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-display), MonumentExtended, sans-serif', fontSize: 24, color: row.highlight ? '#83C732' : 'var(--text)', letterSpacing: 0.5 }}>{row.val}</span>
                </div>
              ))}
            </div>

            <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase', background: 'linear-gradient(135deg, #83C732, #7A9137)', color: '#fff', padding: '17px 32px', textDecoration: 'none', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 8px 32px rgba(131,199,50,0.4)', transition: 'all 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 16px 48px rgba(131,199,50,0.6)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 8px 32px rgba(131,199,50,0.4)' }}
            >
              Recover {fmt(s, Math.round(saved / 12))}/mo — Book a Free Call →
            </a>
            <p style={{ fontFamily: 'var(--font-body), Degular, sans-serif', fontSize: 12, color: 'var(--text-6)', textAlign: 'center', margin: 0 }}>Assumes 85% automation rate. Monthly estimate. No commitment required.</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.roi-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  )
}
