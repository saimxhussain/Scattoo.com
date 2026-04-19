'use client'
import Image from 'next/image'
import Link from 'next/link'

const SM = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/agentflow-ai/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/agentflow_ig/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/agentflowAI/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Threads',
    href: 'https://www.threads.com/@agentflow_ig',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.474 12.01v-.017c.03-3.579.886-6.43 2.548-8.469C5.865 1.205 8.62.024 12.2 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.594 12c.022 3.089.713 5.5 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.353 1.33-3.18.87-.789 2.096-1.208 3.547-1.292a13.954 13.954 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.583-1.313-.878-2.39-.887h-.02c-.925 0-2.064.268-2.817 1.46l-1.73-1.078C8.17 5.662 9.787 5.033 11.62 5.018h.037c1.603.012 2.903.479 3.862 1.387 1.011.956 1.555 2.346 1.618 4.134.049.022.098.044.146.066 1.104.526 1.989 1.308 2.56 2.508.77 1.648.756 4.273-1.24 6.218-1.79 1.751-3.965 2.648-7.417 2.669z"/></svg>,
  },
  {
    label: 'X',
    href: 'https://x.com/Saim_Dev',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

const NAV_COLS = [
  {
    title: 'Services',
    links: [
      { l: 'Lead Generation', h: '#services' },
      { l: 'AI Agents', h: '#services' },
      { l: 'Social Automation', h: '#services' },
      { l: 'Voice AI Agents', h: '#services' },
      { l: 'Outreach Campaigns', h: '#services' },
      { l: 'Custom APIs', h: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { l: 'About', h: '#about' },
      { l: 'Process', h: '#process' },
      { l: 'Case Studies', h: '#case-studies' },
      { l: 'Pricing', h: '#pricing' },
      { l: 'Book a Call', h: 'https://cal.com/saim-hussain-9ekrz6', ext: true },
    ],
  },
  {
    title: 'Contact',
    links: [
      { l: 'saimxhussain@gmail.com', h: 'mailto:saimxhussain@gmail.com' },
      { l: 'LinkedIn (Personal)', h: 'https://www.linkedin.com/in/saim-hussain-ab318b3b4/', ext: true },
      { l: 'Karachi, Pakistan', h: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8e8e8' }}>
      {/* Main footer body */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 48px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, borderBottom: '1px solid #f0f0f0' }}>
        {/* Brand col */}
        <div>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
            <Image src="/logo.png" alt="Scattoo" width={36} height={36} style={{ borderRadius: 6 }} />
            <span style={{ fontFamily: 'EquitanSans, sans-serif', fontWeight: 900, fontSize: 18, letterSpacing: 3, color: '#0a0a0a' }}>
              SCATTOO<span style={{ color: '#FF4D00' }}>.</span>
            </span>
          </a>
          <p style={{ fontSize: 13, fontWeight: 400, color: '#888', lineHeight: 1.75, maxWidth: 280, marginBottom: 28 }}>
            We automate. You dominate. AI systems for B2B businesses that want to scale without scaling headcount.
          </p>
          {/* Social icons row */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {SM.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                width: 38, height: 38, borderRadius: 10, border: '1.5px solid #e8e8e8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#888', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#FF4D00'; el.style.color = '#FF4D00'; el.style.background = '#fff9f6' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#e8e8e8'; el.style.color = '#888'; el.style.background = 'transparent' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {NAV_COLS.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: 'EquitanSans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: '#0a0a0a', marginBottom: 20 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {col.links.map(lk => (
                <li key={lk.l}>
                  <a href={lk.h} target={'ext' in lk && lk.ext ? '_blank' : undefined} rel="noreferrer"
                    style={{ fontSize: 13, fontWeight: 400, color: '#777', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF4D00'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#777'}
                  >{lk.l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar — Semrush style */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: '#aaa' }}>© 2025 Scattoo. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy" style={{ fontSize: 12, color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#FF4D00'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#aaa'}
          >Privacy Policy</Link>
          <span style={{ fontSize: 12, color: '#ddd' }}>|</span>
          <span style={{ fontSize: 12, color: '#aaa', fontFamily: 'EquitanSans, sans-serif', fontWeight: 700, letterSpacing: 1 }}>WE AUTOMATE. YOU DOMINATE.</span>
        </div>
      </div>

      {/* Giant brand name — Semrush style */}
      <div style={{
        background: 'linear-gradient(135deg, #fff4f0 0%, #fff0f8 50%, #f0f4ff 100%)',
        padding: '48px 0 0', overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: 'EquitanSans, sans-serif', fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 240px)',
          lineHeight: 0.85, letterSpacing: -6,
          color: 'rgba(10,10,10,0.85)',
          textAlign: 'center',
          userSelect: 'none',
          paddingBottom: 0,
        }}>
          SCATTOO
        </div>
      </div>
    </footer>
  )
}
