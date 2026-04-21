'use client'
import Reveal from './Reveal'

const GMAIL_LINK = "https://mail.google.com/mail/u/0/?to=saimm.dev@gmail.com&fs=1&tf=cm&body=Hi%20Saim!%20I%20came%20across%20AgentFlow%2C%20and%20I'm%20interested%20in%20automating%20my%20business.%20Can%20we%20chat%3F"

export default function CTA() {
  return (
    <section style={{ padding: '130px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Animated orbs */}
      <div className="orb" style={{ width: 700, height: 700, background: 'rgba(131,199,50,0.09)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'orbMove 16s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 350, height: 350, background: 'rgba(122,145,55,0.07)', top: -60, right: -60, animation: 'orbMove2 12s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 280, height: 280, background: 'rgba(131,199,50,0.06)', bottom: -60, left: 60, animation: 'orbMove 22s ease-in-out infinite reverse' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(131,199,50,0.06) 100%)',
            backdropFilter: 'blur(60px)', WebkitBackdropFilter: 'blur(60px)',
            border: '1px solid rgba(131,199,50,0.2)',
            borderRadius: 32, padding: '100px 60px', textAlign: 'center',
            boxShadow: '0 40px 120px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 80px rgba(131,199,50,0.06)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Inner glow top */}
            <div style={{ position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:'60%',height:2,background:'linear-gradient(90deg,transparent,rgba(131,199,50,0.6),transparent)',borderRadius:2 }} />
            {/* Inner glow bottom */}
            <div style={{ position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:'40%',height:1,background:'linear-gradient(90deg,transparent,rgba(131,199,50,0.3),transparent)',borderRadius:2 }} />

            {/* Live badge */}
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(131,199,50,0.1)',border:'1px solid rgba(131,199,50,0.3)',padding:'8px 20px',borderRadius:100,marginBottom:40 }}>
              <span style={{ width:8,height:8,background:'var(--orange)',borderRadius:'50%',animation:'gpulse 2s infinite',display:'inline-block' }} />
              <span style={{ fontFamily:'var(--font-body), Degular, sans-serif',fontSize:13,fontWeight:600,color:'var(--orange)',letterSpacing:1.5,textTransform:'uppercase' }}>Ready to automate?</span>
            </div>

            {/* Headline */}
            <h2 style={{ fontFamily:'var(--font-display), MonumentExtended, sans-serif',fontWeight:800,fontSize:'clamp(36px, 6.5vw, 92px)',lineHeight:1.0,color:'var(--text)',marginBottom:28,letterSpacing:1,textTransform:'uppercase' }}>
              Book your<br /><span style={{ color:'var(--orange)',WebkitTextStroke:'0px',textShadow:'0 0 60px rgba(131,199,50,0.4)' }}>discovery call.</span>
            </h2>

            {/* Subtext */}
            <p style={{ fontFamily:'var(--font-body), Degular, sans-serif',fontSize:19,fontWeight:400,color:'var(--text-3)',maxWidth:540,margin:'0 auto 20px',lineHeight:1.8 }}>
              Let&apos;s spend 30 minutes mapping your biggest bottlenecks and showing you exactly what we&apos;d automate first.
            </p>
            <p style={{ fontFamily:'var(--font-body), Degular, sans-serif',fontSize:15,fontWeight:500,color:'var(--orange)',marginBottom:52,letterSpacing:0.5 }}>
              No commitment. No pitch deck. Just clarity.
            </p>

            {/* CTA Buttons */}
            <div style={{ display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' }}>
              <a href="https://cal.com/saim-hussain-9ekrz6" target="_blank" rel="noreferrer" style={{
                fontFamily:'var(--font-body), Degular, sans-serif',fontWeight:700,fontSize:14,letterSpacing:2,
                textTransform:'uppercase',background:'linear-gradient(135deg, #83C732, #7A9137)',color:'#fff',
                padding:'18px 48px',textDecoration:'none',borderRadius:12,
                display:'inline-flex',alignItems:'center',gap:10,transition:'all 0.25s',
                boxShadow:'0 8px 32px rgba(131,199,50,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(-3px)';el.style.boxShadow='0 20px 60px rgba(131,199,50,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform='translateY(0)';el.style.boxShadow='0 8px 32px rgba(131,199,50,0.45), inset 0 1px 0 rgba(255,255,255,0.2)'}}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Schedule a Call →
              </a>
              <a href={GMAIL_LINK} target="_blank" rel="noreferrer" style={{
                fontFamily:'var(--font-body), Degular, sans-serif',fontWeight:600,fontSize:14,letterSpacing:2,
                textTransform:'uppercase',color:'var(--text-3)',textDecoration:'none',
                padding:'18px 48px',borderRadius:12,border:'1px solid var(--border-2)',
                transition:'all 0.25s',display:'inline-flex',alignItems:'center',gap:10,
                backdropFilter:'blur(16px)',background:'rgba(255,255,255,0.05)',
              }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='rgba(131,199,50,0.5)';el.style.color='var(--orange)';el.style.background='rgba(131,199,50,0.08)';el.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor='var(--border-2)';el.style.color='var(--text-3)';el.style.background='rgba(255,255,255,0.05)';el.style.transform='translateY(0)'}}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Send Email
              </a>
            </div>

            {/* Trust strip */}
            <div style={{ marginTop:52,paddingTop:32,borderTop:'1px solid rgba(255,255,255,0.08)',display:'flex',gap:32,justifyContent:'center',flexWrap:'wrap',alignItems:'center' }}>
              {['100% Ownership','No Retainers','48hr Delivery','30-day Support'].map(t=>(
                <div key={t} style={{ display:'flex',alignItems:'center',gap:8 }}>
                  <span style={{ width:6,height:6,borderRadius:'50%',background:'var(--orange)',display:'inline-block' }} />
                  <span style={{ fontFamily:'var(--font-body), Degular, sans-serif',fontSize:13,fontWeight:600,color:'var(--text-4)',letterSpacing:0.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@keyframes gpulse{0%,100%{box-shadow:0 0 0 0 rgba(131,199,50,.5)}70%{box-shadow:0 0 0 10px rgba(131,199,50,0)}}`}</style>
    </section>
  )
}
