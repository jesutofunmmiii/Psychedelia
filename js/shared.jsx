const {TwoToneHeadline, Eyebrow, CTAPill, Supergraphic, GoldAnnotation} = window.PsychedeliaDesignSystem_01aa0c;
const {useState, useEffect, useRef} = React;
const psyIO = ('IntersectionObserver' in window) ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.setAttribute('data-in','1'); psyIO.unobserve(e.target); } }), {threshold: .12, rootMargin: '0px 0px -6% 0px'}) : null;
function useObserve() { const r = useRef(null); useEffect(() => { if (r.current && psyIO) psyIO.observe(r.current); else if (r.current) r.current.setAttribute('data-in','1'); }, []); return r; }
function Reveal({as = 'div', rv = 'up', d = 0, className = '', style, children, ...rest}) { const r = useObserve(); return React.createElement(as, {ref: r, 'data-rv': rv, className, style: {'--d': d + 'ms', ...style}, ...rest}, children); }
function Kinetic({text, per = 55, d = 0, className = '', style}) {
  const r = useObserve();
  const words = String(text).split(' ');
  return <span ref={r} className={'k ' + className} style={style}>{words.map((w, i) => <span key={i} className="k-w"><span className="k-i" style={{transitionDelay: (d + i * per) + 'ms'}}>{w}{i < words.length - 1 ? '\u00A0' : ''}</span></span>)}</span>;
}
function Counter({to, dur = 1500, suffix = '', className, style}) {
  const r = useRef(null); const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const step = t => { const p = Math.min(1, (t - t0) / dur); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, {threshold: .5});
    if (r.current) io.observe(r.current); return () => io.disconnect();
  }, []);
  return <span ref={r} className={className} style={style}>{v.toLocaleString()}{suffix}</span>;
}
function Magnetic({children, strength = 9}) {
  const r = useRef(null);
  const onMove = e => { const b = r.current.getBoundingClientRect(); const x = (e.clientX - b.left - b.width / 2) / b.width, y = (e.clientY - b.top - b.height / 2) / b.height; r.current.style.transform = `translate(${(x * strength * 2).toFixed(1)}px,${(y * strength).toFixed(1)}px)`; };
  const reset = () => { r.current.style.transform = ''; };
  return <div ref={r} onMouseMove={onMove} onMouseLeave={reset} style={{display: 'inline-block', transition: 'transform .3s cubic-bezier(.22,1,.36,1)', willChange: 'transform'}}>{children}</div>;
}
function Lightbox({open, onClose, children}) {
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onClose(); };
    if (open) { document.addEventListener('keydown', k); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  return <div className="lb" onClick={onClose}><button className="lb-x" aria-label="Close">✕</button><div className="lb-in" onClick={e => e.stopPropagation()}>{children}</div></div>;
}
const ICON_PATHS = {
  X: <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.5L6 22H2.9l7.3-8.4L2.5 2H9l4.5 6 5.4-6z" fill="currentColor"></path>,
  Instagram: <g fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5.5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none"></circle></g>,
  Telegram: <path d="M21.9 3.3 2.7 10.8c-1 .4-.9 1.8.1 2.1l4.8 1.5 1.8 5.6c.3.9 1.4 1.1 2 .4l2.6-2.7 5 3.7c.8.6 1.9.2 2.1-.8l3-16c.2-1-.8-1.8-2.2-1.3zM8.5 13.9l9.5-6.1c.4-.3.8.3.5.6l-7.7 7.3-.3 3.2-2-5z" fill="currentColor"></path>,
  TikTok: <path d="M16.2 3c.5 2.5 2.1 4.1 4.8 4.4v3.3c-1.8 0-3.4-.5-4.8-1.5v6.9a6.4 6.4 0 1 1-6.4-6.4c.3 0 .7 0 1 .1v3.4a3.1 3.1 0 1 0 2.2 3V3h3.2z" fill="currentColor"></path>
};
function SocialIcon({name, size = 18}) { return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{ICON_PATHS[name]}</svg>; }
function Nav({page, cta}) {
  const [scr, setScr] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScr(window.scrollY > 24); f(); document.addEventListener('scroll', f, {passive: true}); return () => document.removeEventListener('scroll', f); }, []);
  const links = [['index.html', 'Home'], ['learn.html', 'Learn'], ['work.html', 'Work with Techriz'], ['success.html', 'Success Stories']];
  return <React.Fragment>
    <header className={'psy-nav' + (scr ? ' scr' : '')}>
      <div className="wrap"><div className="bar">
        <a href="index.html" className="psy-logo" aria-label="Psychedelia home"><img src={(window.__resources && window.__resources.logoGradient) || 'assets/logo-gradient.png'} alt=""></img><span>PSYCHEDELIA</span></a>
        <nav className="psy-links" aria-label="Primary">{links.map(([h, l]) => <a key={h} href={h} className={page === h ? 'on' : ''}>{l}</a>)}</nav>
        <div className="psy-nav-cta"><Magnetic strength={7}><CTAPill label={(cta && cta.label) || "Join PSY27' Waitlist"} onClick={() => window.psyGo((cta && cta.href) || 'work.html#cohort')} style={{padding: '11px 24px', fontSize: '15px'}}></CTAPill></Magnetic></div>
        <button className={'psy-burger' + (open ? ' x' : '')} onClick={() => setOpen(!open)} aria-label="Menu"><span></span><span></span><span></span></button>
      </div></div>
    </header>
    <div className={'psy-mnav' + (open ? ' open' : '')}>
      {links.map(([h, l], i) => <a key={h} href={h} style={{'--i': i}}>{l}</a>)}
      <div className="socrow">{PSY.socials.map(([n, u]) => <a key={n} className="socbtn" href={u} target="_blank" rel="noopener" aria-label={n}><SocialIcon name={n}></SocialIcon></a>)}</div>
    </div>
  </React.Fragment>;
}
function Footer() {
  return <footer className="foot">
    <div className="sg-clip"><div className="sg-drift"><Supergraphic src={(window.__resources && window.__resources.logoNavyTone) || 'assets/logo-navy-tone.png'} tone="navy" rotate={-16} width="115%" top="-38%" left="-22%" opacity={0.85}></Supergraphic></div></div>
    <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .55, pointerEvents: 'none'}}></div>
    <div className="wrap" style={{position: 'relative', zIndex: 2, padding: 'clamp(64px,8vw,104px) 24px 40px'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px'}}>
        <div>
          <Eyebrow style={{marginBottom: '14px'}}>Helping traders think differently since 2024</Eyebrow>
          <TwoToneHeadline as="p" lead="If not at Psychedelia," emphasis="then where?" leadColor="var(--psy-periwinkle)" emphasisColor="#fff" style={{fontSize: 'clamp(28px,4.4vw,48px)'}}></TwoToneHeadline>
        </div>
        <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap'}}>
          <Magnetic><CTAPill label="Join the" emphasis="PSY27' Waitlist" emphasisColor="var(--psy-sky)" onClick={() => window.psyGo('work.html#cohort')} style={{border: '1px solid rgba(255,255,255,.25)'}}></CTAPill></Magnetic>
          <a className="ghost onDark" href="learn.html">Explore Learning</a>
        </div>
      </div>
      <div className="cols" style={{borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '48px'}}>
        <div><h4>Explore</h4><ul><li><a href="index.html">Home</a></li><li><a href="learn.html">Learn</a></li><li><a href="work.html">Work with Techriz</a></li><li><a href="success.html">Success Stories</a></li></ul></div>
        <div><h4>Work with Techriz</h4><ul><li><a href="work.html#cohort">Yearly Mentorship Cohort</a></li><li><a href="work.html#private">Private Mentorship</a></li><li><a href="work.html#vip">VIP Signal Room</a></li></ul></div>
        <div><h4>Learn free</h4><ul><li><a href="learn.html#playlists">YouTube Playlists</a></li><li><a href="learn.html#breakdowns">Trade Breakdowns</a></li><li><a href="learn.html#reading">The Reading Room</a></li></ul></div>
        <div><h4>Contact Techriz</h4><div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>{PSY.socials.map(([n, u]) => <a key={n} className="socbtn" href={u} target="_blank" rel="noopener" aria-label={n}><SocialIcon name={n}></SocialIcon></a>)}</div><ul style={{marginTop: '18px'}}><li><a href="tel:+2348166374633">+234 816 637 4633</a></li><li><a href="mailto:techritz@psychedelia.com">techritz@psychedelia.com</a></li></ul></div>
      </div>
      <div className="fnotes">
        <div className="fnotes-title">Disclaimers and footnotes</div>
        <div className="fn-body">
          <p>Psychedelia is an educational platform, not a licensed broker, investment adviser, or financial institution. Trading CFDs, futures, and commodities carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results.</p>
          <ol>
            <li>Psychedelia provides educational content only and does not offer investment, financial, legal, or tax advice. Nothing on this site constitutes a recommendation to buy, sell, or hold any financial instrument. Any trading decisions you make are made independently and at your own risk.</li>
            <li>Contracts for Difference (CFDs) are complex instruments and come with a high risk of losing money rapidly due to leverage. Between 74–89% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</li>
            <li>Futures and commodities trading involves substantial risk of loss and is not suitable for all investors. Leverage can work against you as well as for you, and losses can exceed your initial deposit. Prices can be volatile and influenced by factors including but not limited to political events, weather, and shifts in supply and demand.</li>
            <li>Any performance results, case studies, or examples presented (including in course materials, webinars, or marketing) are hypothetical or historical and do not guarantee similar outcomes. Hypothetical performance results have inherent limitations and do not reflect actual trading.</li>
            <li>Psychedelia is not affiliated with, endorsed by, or sponsored by any exchange, broker, or regulatory body unless explicitly stated. Any third-party platforms, brokers, or tools referenced are for illustrative purposes only.</li>
            <li>Testimonials and results shared by students or members are individual experiences and are not representative of typical outcomes. Trading results vary widely and no outcome is guaranteed.</li>
          </ol>
        </div>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '28px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}><img src={(window.__resources && window.__resources.logoWhite) || 'assets/logo-white.png'} alt="" style={{width: '30px'}}></img><span style={{fontFamily: 'var(--psy-font-display)', letterSpacing: '.14em', fontSize: '12px', fontWeight: 600}}>PSYCHEDELIA</span></div>
        <p style={{margin: 0, fontSize: '12.5px', color: 'var(--psy-periwinkle)', maxWidth: '560px'}}>© 2026 Psychedelia. Africa's most trusted Forex Institute for Serious Traders. Trading involves substantial risk of loss — nothing on this site is financial advice.</p>
      </div>
    </div>
  </footer>;
}
function initShell() {
  const loader = document.getElementById('psy-loader');
  const seen = sessionStorage.getItem('psySeen');
  sessionStorage.setItem('psySeen', '1');
  const done = () => { if (loader) loader.classList.add('done'); };
  if (seen && loader) { loader.querySelectorAll('.mark,.ld-word span,.ld-bar i').forEach(el => { el.style.animation = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; }); }
  const wait = seen ? 250 : 1650;
  if (document.readyState === 'complete') setTimeout(done, seen ? 150 : 1200); else window.addEventListener('load', () => setTimeout(done, wait - 400));
  setTimeout(done, 4000);
  const pr = document.getElementById('psy-progress');
  document.addEventListener('scroll', () => { const h = document.documentElement; const p = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1); if (pr) pr.style.width = (p * 100) + '%'; }, {passive: true});
  window.psyGo = h => {
    if (h.startsWith('#')) { const el = document.querySelector(h); if (el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth'}); else location.hash = h; return; }
    const w = document.getElementById('psy-wipe'); const rm = matchMedia('(prefers-reduced-motion: reduce)').matches; if (!w || rm) { location.href = h; return; } w.classList.add('on'); setTimeout(() => { location.href = h; }, 480); };
  document.addEventListener('click', e => { const a = e.target.closest('a'); if (!a) return; const h = a.getAttribute('href') || ''; if (a.target || !h || h.startsWith('#') || h.startsWith('http') || h.startsWith('mailto')) return; if (/\.html(#|$)/.test(h)) { e.preventDefault(); window.psyGo(h); } });
  window.addEventListener('pageshow', e => { if (e.persisted) { const w = document.getElementById('psy-wipe'); if (w) w.classList.remove('on'); done(); } });
}
initShell();
Object.assign(window, {Reveal, Kinetic, Counter, Magnetic, Lightbox, Nav, Footer, SocialIcon, useObserve});
