'use client'
import Reveal from './Reveal'

const svcs = [
  { tag: '01', title: 'Lead Generation', desc: 'Scrape LinkedIn, Google Maps, and Indeed. Enrich with emails and phones. Push to CRM. Qualify with AI. Fully automated pipeline.' },
  { tag: '02', title: 'Social Automation', desc: 'AI writes captions, generates images, schedules posts across 6 platforms — Instagram, LinkedIn, X, Facebook, Threads, Pinterest.' },
  { tag: '03', title: 'Voice AI Agents', desc: 'Deploy phone agents that call leads, qualify prospects, and book appointments — human-sounding, 24/7, at unlimited scale.' },
  { tag: '04', title: 'Outreach Campaigns', desc: 'Cold email sequences, follow-ups, and multi-channel touchpoints — personalized at scale using AI enrichment and dynamic templates.' },
  { tag: '05', title: 'Real Time Events', desc: 'Trigger automations the moment something happens — a form fill, email reply, CRM update, or webhook. No delays, no missed signals.' },
  { tag: '06', title: 'AI Agents', desc: 'Custom GPT-4o and Claude-powered agents that think, decide, and act autonomously — handling tasks your team shouldn\'t be doing.' },
  { tag: '07', title: 'Self-Hosted', desc: 'Your systems, your control. We deploy on your infrastructure for full data ownership, custom domains, and zero platform lock-in.' },
  { tag: '08', title: 'Custom APIs', desc: 'Fully extensible. Build on top of our systems or connect anything via REST, webhooks, and custom integration layers.' },
  { tag: '09', title: 'AI Document Processing', desc: 'Extract, classify, and route data from invoices, contracts, and forms automatically. Zero manual data entry, instant structured output.' },
  { tag: '10', title: 'Conversational AI', desc: 'Deploy trained chatbots on your website, WhatsApp, or app. Handle support, qualify leads, and book calls — without a human in the loop.' },
  { tag: '11', title: 'Workflow Intelligence', desc: 'Connect your entire stack — CRM, ERP, Slack, email, sheets — into one intelligent workflow that routes, decides, and acts automatically.' },
  { tag: '12', title: 'Reporting Automation', desc: 'Auto-generate weekly performance reports, client decks, and dashboards from live data. Delivered to your inbox, Slack, or client portal.' },
]

const icons: Record<string, React.ReactNode> = {
  '01': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  '02': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>,
  '03': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  '04': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  '05': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  '06': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  '07': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/></svg>,
  '08': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  '09': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  '10': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  '11': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="2" cy="12" r="2"/><circle cx="22" cy="12" r="2"/><line x1="4" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="20" y2="12"/></svg>,
  '12': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', borderBottom: '1px solid var(--section-line)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(131,199,50,0.06)', top: -150, right: -150, animation: 'orbMove 18s ease-in-out infinite' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 24, height: 3, background: 'var(--orange)', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)' }}>Services / Capabilities</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
            <h2 style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: -2, color: 'var(--text)' }}>
              What we deploy<br /><span style={{ color: 'var(--orange)' }}>for you.</span>
            </h2>
            <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: 1,
              textTransform: 'uppercase', background: 'var(--surface-2)', color: 'var(--text)', padding: '13px 26px',
              textDecoration: 'none', borderRadius: 8, transition: 'all 0.2s', flexShrink: 0,
              border: '1px solid var(--border-2)', backdropFilter: 'blur(12px)',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--orange)'; el.style.borderColor = 'var(--orange)'; el.style.color = '#fff'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--surface-2)'; el.style.borderColor = 'var(--border-2)'; el.style.color = 'var(--text)'; el.style.transform = 'translateY(0)' }}
            >Get a Custom Quote →</a>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 3 }}>
          {svcs.map((s, i) => (
            <Reveal key={i} delay={i * 40}>
              <div style={{
                background: 'var(--surface)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                padding: '32px 26px', borderRadius: 12,
                border: '1px solid var(--border)', transition: 'all 0.25s', cursor: 'default',
                height: '100%', boxSizing: 'border-box' as const,
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(131,199,50,0.5)'; el.style.transform = 'translateY(-4px)'; el.style.background = 'var(--orange-surface)'; el.style.boxShadow = '0 12px 40px rgba(131,199,50,0.12)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)'; el.style.background = 'var(--surface)'; el.style.boxShadow = 'none' }}
              >
                <div style={{ color: 'var(--orange)', marginBottom: 16, display: 'flex' }}>{icons[s.tag]}</div>
                <div style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 2, color: 'var(--text-5)', marginBottom: 10 }}>{s.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-heading), Michroma, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 400, color: 'var(--text-3)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
