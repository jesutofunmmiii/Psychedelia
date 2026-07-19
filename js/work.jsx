const DS = window.PsychedeliaDesignSystem_01aa0c;
const {TwoToneHeadline: TT, Eyebrow: Eb, CTAPill: Pill, Supergraphic: SG, GoldAnnotation: Gold} = DS;
const workCss = `
.whero{position:relative;overflow:hidden;padding:calc(120px + 5vh) 0 56px}
.whero-h{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(40px,6vw,74px);line-height:.98;color:var(--psy-navy);margin:0}
.path-row{display:grid;gap:18px;grid-template-columns:repeat(3,1fr);margin-top:46px}
@media(max-width:800px){.path-row{grid-template-columns:1fr}}
.path-row a.path-card{padding:24px;display:flex;flex-direction:column;gap:8px;color:var(--psy-navy)!important}
.path-card .pn{font-family:var(--psy-font-display);font-weight:700;font-size:14px;color:var(--psy-blue);letter-spacing:.08em}
.path-card b{font-family:var(--psy-font-display);font-size:19px;font-weight:700}
.path-card span{font-size:14px;opacity:.65}
.learnlist{display:flex;flex-direction:column;gap:0;border-top:1px solid var(--psy-frost)}
.learnlist .li{display:flex;align-items:center;gap:18px;padding:20px 4px;border-bottom:1px solid var(--psy-frost);transition:padding-left .3s}
.learnlist .li:hover{padding-left:14px}
.learnlist .ln{font-family:var(--psy-font-display);font-weight:700;color:var(--psy-blue);font-size:15px}
.learnlist .lt{font-family:var(--psy-font-display);font-weight:600;font-size:clamp(19px,2.2vw,24px);color:var(--psy-navy)}
.prize-grid{display:grid;gap:16px;grid-template-columns:repeat(3,1fr)}
@media(max-width:700px){.prize-grid{grid-template-columns:1fr}}
.cert-grid{display:grid;gap:16px;grid-template-columns:repeat(2,1fr)}
@media(max-width:700px){.cert-grid{grid-template-columns:1fr}}
.invest{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.invest .amt{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(52px,6vw,84px);line-height:1;color:var(--psy-navy)}
.wform{display:flex;flex-direction:column;gap:18px}
.wform .frow{display:grid;gap:18px;grid-template-columns:1fr 1fr}
@media(max-width:640px){.wform .frow{grid-template-columns:1fr}}
.modalcard{background:#fff;border-radius:var(--psy-radius-tile);padding:clamp(26px,4vw,42px);width:min(92vw,560px);max-height:86vh;overflow:auto}
.qrcard{background:#fff;border-radius:var(--psy-radius-tile);padding:22px;box-shadow:var(--psy-shadow-soft);display:inline-flex;flex-direction:column;align-items:center;gap:12px}
.qrcard img{width:200px;height:200px;border-radius:14px}
.ok{display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center;padding:26px 0}
.dark-label{font-size:13px;letter-spacing:.06em;text-transform:uppercase;font-weight:600;color:var(--psy-sky)}
.wsec-h{font-size:clamp(30px,4vw,48px);font-weight:700}
`;
function saveLocal(key, entry) {
  try { const all = JSON.parse(localStorage.getItem(key) || '[]'); all.push({...entry, at: new Date().toISOString()}); localStorage.setItem(key, JSON.stringify(all)); } catch (e) {}
}
function OkMark() { return <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="rgba(47,107,255,.1)"></circle><circle cx="32" cy="32" r="22" fill="var(--psy-blue)"></circle><path d="M23 32.5l6.5 6.5L41.5 26" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>; }
function WaitlistModal({open, onClose}) {
  const [done, setDone] = React.useState(false);
  const submit = e => { e.preventDefault(); const f = new FormData(e.target); saveLocal('psy_waitlist', {name: f.get('name'), email: f.get('email'), telegram: f.get('telegram')}); setDone(true); };
  return <Lightbox open={open} onClose={onClose}>
    <div className="modalcard">
      {!done ? <form className="wform" onSubmit={submit}>
        <div><Eb style={{marginBottom: '10px'}}>PSY27' — Enrolment opens soon</Eb><h3 style={{fontSize: '28px', fontWeight: 700}}>Join the waitlist</h3><p style={{margin: '10px 0 0', opacity: .7, fontSize: '15px'}}>Be first in line when the next cohort opens. Investment: $200.</p></div>
        <div className="f-field"><label htmlFor="wl-name">Full name</label><input id="wl-name" name="name" required placeholder="Your name"></input></div>
        <div className="frow">
          <div className="f-field"><label htmlFor="wl-email">Email</label><input id="wl-email" name="email" type="email" required placeholder="you@email.com"></input></div>
          <div className="f-field"><label htmlFor="wl-tg">Telegram handle <span style={{fontWeight: 400, opacity: .5}}>(optional)</span></label><input id="wl-tg" name="telegram" placeholder="@yourhandle"></input></div>
        </div>
        <Pill label="Reserve my" emphasis="PSY27' seat" emphasisColor="var(--psy-sky)"></Pill>
      </form> : <div className="ok"><OkMark></OkMark><h3 style={{fontSize: '26px', fontWeight: 700}}>You're on the list.</h3><p style={{margin: 0, opacity: .7, maxWidth: '380px'}}>We'll reach out the moment PSY27' enrolment opens. Keep an eye on your inbox — and on <a href="https://t.me/Techriztm" target="_blank" rel="noopener">Telegram</a>.</p><button className="ghost" onClick={onClose} style={{marginTop: '8px'}}>Done</button></div>}
    </div>
  </Lightbox>;
}
function WorkHero() {
  return <section className="whero" data-screen-label="Work hero">
    <div className="sg-clip"><div className="sg-drift"><SG src="assets/logo-frost.png" rotate={20} width="115%" top="-36%" left="32%" opacity={0.5}></SG></div></div>
    <div className="wrap" style={{position: 'relative', zIndex: 2}}>
      <Reveal rv="fade" style={{marginBottom: '24px'}}><Eb>Direct access</Eb></Reveal>
      <h1 className="whero-h"><Kinetic text="Three ways to work" per={70}></Kinetic><br></br><Kinetic text="with Techriz." per={70} d={260} style={{color: 'var(--psy-blue)'}}></Kinetic></h1>
      <div className="path-row">
        {[['#cohort', '01', "Yearly Mentorship Cohort", "PSY27' — the full curriculum, prizes and certificate. $200."], ['#private', '02', 'Private Mentorship', 'Apply directly to work with Techriz one-on-one.'], ['#vip', '03', 'VIP Signal Room', 'Techriz × Kelvin Talent. Join via Telegram waitlist.']].map(([h, n, t, d], i) => <Reveal as="a" key={h} href={h} d={i * 110} className="card path-card"><span className="pn">{n}</span><b>{t}</b><span>{d}</span></Reveal>)}
      </div>
    </div>
  </section>;
}
function Cohort({openWaitlist}) {
  return <section className="sec" id="cohort" data-screen-label="Yearly Mentorship Cohort"><div className="wrap">
    <div className="card" style={{padding: 'clamp(28px,5vw,64px)'}}>
      <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px'}}>
        <div><Reveal rv="fade"><Eb style={{marginBottom: '12px'}}>Option 01 — The flagship</Eb></Reveal><h2 className="wsec-h"><Kinetic text="Yearly Mentorship"></Kinetic>{' '}<Kinetic text="Cohort." d={140} style={{color: 'var(--psy-blue)'}}></Kinetic></h2></div>
        <Reveal rv="fade" d={150}><span className="ticket"><span className="dot"></span>PSY27' — Enrolment opens soon</span></Reveal>
      </div>
      <div className="grid2" style={{gap: 'clamp(28px,4vw,56px)', alignItems: 'start'}}>
        <div>
          <Reveal as="p" rv="fade" className="dark-label" style={{color: 'var(--psy-blue)', marginBottom: '6px'}}>What you'll learn</Reveal>
          <div className="learnlist">
            {[['01', 'Technical Analysis'], ['02', 'Expert Advisor Development'], ['03', 'XAUUSD Mastery']].map(([n, t], i) => <Reveal key={n} d={i * 100} className="li"><span className="ln">{n}</span><span className="lt">{t}</span></Reveal>)}
          </div>
          <Reveal d={200} style={{marginTop: '40px'}}>
            <p className="dark-label" style={{color: 'var(--psy-blue)', margin: '0 0 6px'}}>Investment</p>
            <div className="invest"><span className="amt">$200</span><span style={{opacity: .65, fontSize: '16px'}}>for the full year — curriculum, community, prizes & certificate.</span></div>
            <div style={{marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap'}}>
              <Magnetic><Pill label="Join" emphasis="Waitlist" onClick={openWaitlist}></Pill></Magnetic>
              <a className="ghost" href="success.html">See student results</a>
            </div>
          </Reveal>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
          <div>
            <Reveal as="p" rv="fade" className="dark-label" style={{color: 'var(--psy-blue)', margin: '0 0 14px'}}>Top students win prizes</Reveal>
            <Reveal as="p" rv="fade" d={60} style={{margin: '0 0 16px', fontSize: '15px', opacity: .7}}>What last cohort's top 3 took home:</Reveal>
            <div className="prize-grid">
              {PSY.prizes.map((p, i) => <Reveal key={p} d={i * 90} className="zoomer" style={{boxShadow: 'var(--psy-shadow-lift)'}}><img src={p} alt={'Prize won by top student #' + (i + 1)} loading="lazy" style={{aspectRatio: '4/5', objectFit: 'cover'}}></img></Reveal>)}
            </div>
          </div>
          <div>
            <Reveal as="p" rv="fade" className="dark-label" style={{color: 'var(--psy-blue)', margin: '0 0 14px'}}>Earn a Psychedelia certificate</Reveal>
            <Reveal as="p" rv="fade" d={60} style={{margin: '0 0 16px', fontSize: '15px', opacity: .7}}>Complete the mentorship and graduate with proof:</Reveal>
            <div className="cert-grid" style={{gridTemplateColumns: '1fr'}}>
              {PSY.certs.map((c, i) => <Reveal key={c} d={i * 90} className="zoomer" style={{boxShadow: 'var(--psy-shadow-lift)'}}><img src={c} alt="Psychedelia mentorship certificate" loading="lazy" style={{width: '100%'}}></img></Reveal>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></section>;
}
function Private() {
  const [done, setDone] = React.useState(false);
  const submit = e => { e.preventDefault(); const f = new FormData(e.target); saveLocal('psy_applications', {name: f.get('name'), email: f.get('email'), experience: f.get('experience'), reason: f.get('reason')}); setDone(true); };
  return <section className="sec" id="private" style={{paddingTop: 0}} data-screen-label="Private Mentorship"><div className="wrap">
    <div className="darkcard" style={{padding: 'clamp(28px,5vw,64px)'}}>
      <div className="sg-clip"><div className="sg-drift"><SG tone="navy" src="assets/logo-navy-tone.png" rotate={-20} width="110%" top="-40%" left="55%"></SG></div></div>
      <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .45, pointerEvents: 'none'}}></div>
      <div className="grid2" style={{position: 'relative', zIndex: 2, gap: 'clamp(28px,4vw,56px)', alignItems: 'center'}}>
        <div>
          <Reveal rv="fade"><Eb style={{marginBottom: '12px'}}>Option 02 — One-on-one</Eb></Reveal>
          <h2 className="wsec-h" style={{color: '#fff'}}><Kinetic text="Private"></Kinetic>{' '}<Kinetic text="Mentorship." d={110} style={{color: 'var(--psy-sky)'}}></Kinetic></h2>
          <Reveal as="p" d={200} style={{color: 'rgba(255,255,255,.78)', maxWidth: '440px', margin: '20px 0 0'}}>Apply directly to work with Techriz one-on-one. Seats are limited and applications are reviewed personally — tell him where you are and where you're trying to go.</Reveal>
        </div>
        <Reveal rv="right" style={{background: '#fff', borderRadius: 'var(--psy-radius-tile)', padding: 'clamp(22px,3vw,36px)'}}>
          {!done ? <form className="wform" onSubmit={submit}>
            <div className="frow">
              <div className="f-field"><label htmlFor="ap-name">Full name</label><input id="ap-name" name="name" required placeholder="Your name"></input></div>
              <div className="f-field"><label htmlFor="ap-email">Email</label><input id="ap-email" name="email" type="email" required placeholder="you@email.com"></input></div>
            </div>
            <div className="f-field"><label htmlFor="ap-exp">Trading experience</label><select id="ap-exp" name="experience" required defaultValue=""><option value="" disabled>Select your level</option><option>Complete beginner</option><option>Under 1 year</option><option>1–3 years, not yet consistent</option><option>3+ years, seeking refinement</option><option>Funded / professional</option></select></div>
            <div className="f-field"><label htmlFor="ap-why">Why do you want to work with Techriz?</label><textarea id="ap-why" name="reason" required placeholder="Be honest — what's holding your trading back?"></textarea></div>
            <Pill label="Submit" emphasis="application"></Pill>
          </form> : <div className="ok"><OkMark></OkMark><h3 style={{fontSize: '24px', fontWeight: 700, color: 'var(--psy-navy)'}}>Application received.</h3><p style={{margin: 0, opacity: .7, color: 'var(--psy-navy)', maxWidth: '360px'}}>Techriz reviews every application personally. If it's a fit, you'll hear back by email.</p></div>}
        </Reveal>
      </div>
    </div>
  </div></section>;
}
function Vip() {
  const tg = PSY.links.vipTelegram;
  return <section className="sec" id="vip" style={{paddingTop: 0}} data-screen-label="VIP Signal Room"><div className="wrap">
    <div className="card" style={{padding: 'clamp(28px,5vw,64px)'}}>
      <div className="grid2" style={{gap: 'clamp(28px,4vw,56px)', alignItems: 'center'}}>
        <div>
          <Reveal rv="fade"><Eb style={{marginBottom: '12px'}}>Option 03 — Trade beside him</Eb></Reveal>
          <h2 className="wsec-h"><Kinetic text="VIP Signal"></Kinetic>{' '}<Kinetic text="Room." d={110} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
          <Reveal as="p" d={200} style={{opacity: .78, maxWidth: '460px', margin: '20px 0 0'}}>A collaboration between <strong>Techriz & Kelvin Talent</strong>. Live signals, live context, zero guesswork — join the waitlist on Telegram to get in.</Reveal>
          <Reveal d={300} style={{marginTop: '28px'}}><Magnetic><Pill label="Join the" emphasis="Telegram waitlist" onClick={() => window.open(tg, '_blank')}></Pill></Magnetic></Reveal>
        </div>
        <Reveal rv="scale" style={{justifySelf: 'center', textAlign: 'center'}}>
          <div className="qrcard floaty">
            <img src={'https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=8&color=0A1A3F&data=' + encodeURIComponent(tg)} alt="QR code to join the VIP Signal Room Telegram waitlist"></img>
            <span style={{fontFamily: 'var(--psy-font-display)', fontWeight: 600, fontSize: '14px', color: 'var(--psy-navy)'}}>Scan to join the waitlist</span>
          </div>
        </Reveal>
      </div>
    </div>
  </div></section>;
}
function Work() {
  const [wl, setWl] = React.useState(false);
  return <React.Fragment>
    <style>{workCss}</style>
    <Nav page="work.html" cta={{label: 'Join Waitlist', href: '#cohort'}}></Nav>
    <main>
      <WorkHero></WorkHero>
      <Cohort openWaitlist={() => setWl(true)}></Cohort>
      <Private></Private>
      <Vip></Vip>
    </main>
    <Footer></Footer>
    <WaitlistModal open={wl} onClose={() => setWl(false)}></WaitlistModal>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Work></Work>);
