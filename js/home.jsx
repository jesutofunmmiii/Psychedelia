const DS = window.PsychedeliaDesignSystem_01aa0c;
const {TwoToneHeadline: TT, Eyebrow: Eb, CTAPill: Pill, Supergraphic: SG, GoldAnnotation: Gold} = DS;
const homeCss = `
.hero{position:relative;overflow:hidden;padding:calc(120px + 6vh) 0 72px}
.hero-h{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(42px,6.6vw,82px);line-height:.98;color:var(--psy-navy);margin:0;max-width:1000px}
.hero-sub{font-size:clamp(17px,1.6vw,20px);max-width:560px;color:var(--psy-navy);opacity:.82;margin:26px 0 34px}
.ticker{background:var(--psy-grad-navy-depth);color:#fff;padding:16px 0;position:relative;overflow:hidden}
.ticker .ti{display:flex;align-items:center;gap:14px;font-family:var(--psy-font-display);font-weight:600;font-size:15px;letter-spacing:.08em;white-space:nowrap}
.ticker .ti i{width:6px;height:6px;border-radius:50%;background:var(--psy-amber);flex:none}
.statrow{display:grid;gap:24px;grid-template-columns:repeat(3,1fr);text-align:center}
@media(max-width:720px){.statrow{grid-template-columns:1fr;gap:36px}}
.founder-img{position:relative;border-radius:var(--psy-radius-tile);overflow:hidden;transform:rotate(-3deg);box-shadow:var(--psy-shadow-soft);transition:transform .5s cubic-bezier(.22,1,.36,1)}
.founder-img:hover{transform:rotate(0deg) scale(1.02)}
.founder-img img{display:block;width:100%}
.fchip{position:absolute;left:18px;bottom:18px;background:var(--psy-amber);color:var(--psy-navy);font-weight:700;font-size:12px;letter-spacing:.06em;text-transform:uppercase;padding:9px 16px;border-radius:999px;font-family:var(--psy-font-body)}
.collage{display:grid;gap:18px;grid-template-columns:repeat(4,1fr)}
@media(max-width:880px){.collage{grid-template-columns:repeat(2,1fr)}}
.coll-item{border-radius:var(--psy-radius-card);overflow:hidden;box-shadow:var(--psy-shadow-lift);transform:rotate(var(--r,0deg));transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s;cursor:zoom-in;background:#fff;border:0;padding:0}
.coll-item img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover}
.coll-item:hover{transform:rotate(0deg) translateY(-8px) scale(1.03);box-shadow:var(--psy-shadow-soft);z-index:2;position:relative}
.plat-copy p{margin:0 0 14px;font-size:16px;line-height:1.55}
.plat-check{display:flex;align-items:center;gap:12px;font-weight:600;font-size:16px}
.plat-check svg{flex:none}
.tweetcols{display:grid;gap:20px;grid-template-columns:repeat(3,1fr);height:min(74vh,720px)}
@media(max-width:880px){.tweetcols{grid-template-columns:repeat(2,1fr)}.tc3{display:none}}
@media(max-width:580px){.tweetcols{grid-template-columns:1fr}.tc2{display:none}}
.tweetcard{display:block;background:#fff;border-radius:var(--psy-radius-card);padding:10px;box-shadow:var(--psy-shadow-lift);position:relative;transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s}
.tweetcard img{display:block;width:100%;border-radius:16px}
.tweetcard:hover{transform:translateY(-6px);box-shadow:var(--psy-shadow-soft)}
.tweetcard .xb{position:absolute;top:18px;right:18px;width:34px;height:34px;border-radius:50%;background:var(--psy-navy);color:#fff;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.6);transition:opacity .3s,transform .3s}
.tweetcard:hover .xb{opacity:1;transform:none}
`;
const TICKER = ["XAUUSD", "Market Structure", "Liquidity", "Orderblocks", "Entry Models", "Risk Sizing", "Discipline", "EURUSD", "Think Differently", "PSY27'", "Expert Advisors", "Serious Traders Only"];
function Check() { return <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="11" fill="rgba(62,198,245,.18)"></circle><path d="M6.5 11.5l3 3 6-6.5" fill="none" stroke="var(--psy-sky)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>; }
function Hero() {
  return <section className="hero" data-screen-label="Hero">
    <div className="sg-clip"><div className="sg-drift"><SG src="assets/logo-frost.png" rotate={16} width="120%" top="-30%" left="28%" opacity={0.55}></SG></div></div>
    <div className="wrap" style={{position: 'relative', zIndex: 2}}>
      <Reveal rv="fade" d={0} style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '26px'}}>
        <span className="ticket"><span className="dot"></span>PSY27' — Enrolment opens soon</span>
        <Eb>For Serious Traders</Eb>
      </Reveal>
      <h1 className="hero-h"><Kinetic text="Africa's Most" per={70}></Kinetic>{' '}<Kinetic text="Trusted" per={70} d={140}></Kinetic>{' '}<Kinetic text="Forex Institute" per={70} d={210} style={{color: 'var(--psy-blue)'}}></Kinetic><br></br><Kinetic text="for Serious Traders." per={70} d={380}></Kinetic></h1>
      <Reveal as="p" d={550} className="hero-sub">Helping traders think differently since 2024. Learn free on YouTube, join the yearly mentorship cohort, or trade beside Techriz in the VIP signal room.</Reveal>
      <Reveal d={680} style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
        <Magnetic><Pill label="Explore Learning" onClick={() => window.psyGo('learn.html')}></Pill></Magnetic>
        <a className="ghost" href="work.html">Work with Techriz</a>
      </Reveal>
    </div>
  </section>;
}
function Ticker() {
  const items = TICKER.concat(TICKER);
  return <div className="ticker psy-wave"><div className="mq"><div className="mq-track" style={{'--t': '36s', gap: '32px', padding: '0 16px'}}>{items.map((t, i) => <span key={i} className="ti"><i></i>{t}</span>)}</div></div></div>;
}
function Stats() {
  return <section className="sec" style={{paddingBottom: 0}}><div className="wrap statrow">
    <Reveal d={0}><div className="stat-num"><Counter to={100} suffix="+"></Counter></div><p style={{margin: '8px 0 0', fontWeight: 500, opacity: .75}}>Funded Students</p></Reveal>
    <Reveal d={120}><div className="stat-num" style={{color: 'var(--psy-blue)'}}><Counter to={250} suffix="k+"></Counter></div><p style={{margin: '8px 0 0', fontWeight: 500, opacity: .75}}>Total Following</p></Reveal>
    <Reveal d={240}><div className="stat-num"><Counter to={45000} suffix="+"></Counter></div><p style={{margin: '8px 0 0', fontWeight: 500, opacity: .75}}>Community Members</p></Reveal>
  </div></section>;
}
function Founder() {
  return <section className="sec" data-screen-label="Founder spotlight"><div className="wrap">
    <div className="darkcard" style={{padding: 'clamp(28px,5vw,72px)'}}>
      <div className="sg-clip"><div className="sg-drift"><SG tone="navy" src="assets/logo-navy-tone.png" rotate={-18} width="110%" top="-35%" left="-30%"></SG></div></div>
      <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none'}}></div>
      <div className="grid2" style={{position: 'relative', zIndex: 2, alignItems: 'center', gap: 'clamp(28px,5vw,64px)'}}>
        <Reveal rv="left" style={{maxWidth: '440px', justifySelf: 'center', width: '100%'}}>
          <div className="founder-img"><img src={PSY.founderImg} alt="Techriz, Founder & Head Analyst of Psychedelia"></img><span className="fchip">Founder & Head Analyst, Psychedelia Academy</span></div>
        </Reveal>
        <div>
          <Reveal rv="fade"><Eb style={{marginBottom: '16px'}}>The face of the brand</Eb></Reveal>
          <h2 style={{fontSize: 'clamp(34px,4.4vw,56px)', fontWeight: 700, color: '#fff'}}><Kinetic text="Meet"></Kinetic>{' '}<Kinetic text="Techriz." d={90} style={{color: 'var(--psy-sky)'}}></Kinetic></h2>
          <Reveal as="p" d={150} style={{fontFamily: 'var(--psy-font-display)', fontWeight: 600, fontSize: 'clamp(19px,2vw,24px)', lineHeight: 1.3, margin: '22px 0 16px', color: 'var(--psy-periwinkle)'}}>“6 Figure Max Funded Day Trader. Leading Africa's Fastest Growing Trading Community.”</Reveal>
          <Reveal as="p" d={260} style={{margin: '0 0 30px', maxWidth: '520px', color: 'rgba(255,255,255,.78)'}}>Since 2024, Techriz has taught serious traders across Africa to read the market with logic — through free YouTube lessons, the yearly mentorship cohort, and the VIP signal room.</Reveal>
          <Reveal d={370} style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
            <Magnetic><Pill label="Work with" emphasis="Techriz" emphasisColor="var(--psy-sky)" onClick={() => window.psyGo('work.html')} style={{border: '1px solid rgba(255,255,255,.25)'}}></Pill></Magnetic>
            <div style={{display: 'flex', gap: '10px'}}>{PSY.socials.map(([n, u]) => <a key={n} className="socbtn" href={u} target="_blank" rel="noopener" aria-label={n}><SocialIcon name={n}></SocialIcon></a>)}</div>
          </Reveal>
        </div>
      </div>
    </div>
  </div></section>;
}
function Students() {
  const [lb, setLb] = React.useState(null);
  const rots = ['-2deg', '1.6deg', '-1.2deg', '2deg', '1.4deg', '-1.8deg', '2.2deg', '-1.5deg'];
  return <section className="sec" data-screen-label="Student success preview"><div className="wrap">
    <div style={{textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>Student success</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="Proof,"></Kinetic>{' '}<Kinetic text="not promises." d={100} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
      <Reveal as="p" d={200} style={{opacity: .78, marginTop: '18px'}}>Payouts, funded accounts and milestones from the Psychedelia community — click any card to look closer.</Reveal>
    </div>
    <div className="collage">{PSY.students.map((s, i) => <Reveal as="button" key={s} d={i * 70} className="coll-item" style={{'--r': rots[i]}} onClick={() => setLb(s)} aria-label={'Student result ' + (i + 1)}><img src={s} alt={'Psychedelia student result ' + (i + 1)} loading="lazy"></img></Reveal>)}</div>
    <Reveal rv="fade" d={200} style={{textAlign: 'center', marginTop: '44px'}}><a className="ghost" href="success.html">See Full Success Stories</a></Reveal>
    <Lightbox open={!!lb} onClose={() => setLb(null)}><img src={lb || ''} alt="Student result" style={{maxHeight: '84vh', maxWidth: '100%', borderRadius: '20px', display: 'block'}}></img></Lightbox>
  </div></section>;
}
function Platforms() {
  return <section className="sec" data-screen-label="Recommended platforms"><div className="wrap">
    <div style={{textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>Techriz recommends</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="Trade with the"></Kinetic>{' '}<Kinetic text="right environment." d={160} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
      <Reveal as="p" d={240} style={{opacity: .78, marginTop: '18px'}}>Curated endorsements — the prop firm and broker Techriz personally builds with.</Reveal>
    </div>
    <div className="grid2" style={{alignItems: 'stretch'}}>
      <Reveal rv="left" className="card" style={{padding: 'clamp(26px,4vw,44px)', display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px'}}><h3 style={{fontSize: '26px', fontWeight: 700}}>FundedNext</h3><span className="ticket" style={{padding: '7px 14px', fontSize: '12.5px'}}>Prop firm</span></div>
        <div className="plat-copy" style={{flex: 1}}>
          <p>The best prop firms don't just give you capital. They keep removing every unnecessary obstacle between you and your money.</p>
          <p><strong>FundedNext just introduced On-Demand Rewards for Stellar Challenges.</strong></p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0'}}>
            <span className="plat-check"><Check></Check>Request your rewards whenever you're eligible.</span>
            <span className="plat-check"><Check></Check>Receive them the same day.</span>
            <span className="plat-check"><Check></Check>Keep <Gold variant="underline"><span>95% of your profits</span></Gold> from Day One.</span>
          </div>
          <p>This is exactly the kind of innovation traders should be asking for. Less waiting. More trading. Faster access to what you've earned.</p>
          <p>If you've been looking for the right prop firm to build with, this is another reason FundedNext keeps staying ahead.</p>
        </div>
        <div style={{marginTop: '22px'}}><Magnetic><Pill label="Get started with" emphasis="FundedNext" onClick={() => window.open(PSY.links.fundedNext, '_blank')}></Pill></Magnetic></div>
      </Reveal>
      <Reveal rv="right" className="darkcard" style={{padding: 'clamp(26px,4vw,44px)', display: 'flex', flexDirection: 'column'}}>
        <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px'}}><h3 style={{fontSize: '26px', fontWeight: 700, color: '#fff'}}>Assex Markets</h3><span className="ticket" style={{padding: '7px 14px', fontSize: '12.5px', borderColor: 'var(--psy-sky)', color: 'var(--psy-sky)', background: 'rgba(62,198,245,.08)'}}>Broker</span></div>
          <div className="plat-copy" style={{flex: 1, color: 'rgba(255,255,255,.85)'}}>
            <p>Most traders are genuinely one proper trading environment away from leveling up massively.</p>
            <p>Broker conditions matter more than most traders admit. That's why I keep recommending Assex Markets.</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0', color: '#fff'}}>
              <span className="plat-check"><Check></Check>Tight spreads</span>
              <span className="plat-check"><Check></Check>Zero commission</span>
              <span className="plat-check"><Check></Check>Fast withdrawals</span>
              <span className="plat-check"><Check></Check>Withdraw up to $20k before KYC</span>
            </div>
          </div>
          <div style={{marginTop: '22px'}}><Magnetic><Pill label="Sign up with" emphasis="Assex Markets" emphasisColor="var(--psy-sky)" onClick={() => window.open(PSY.links.assex, '_blank')} style={{border: '1px solid rgba(255,255,255,.25)'}}></Pill></Magnetic></div>
        </div>
      </Reveal>
    </div>
  </div></section>;
}
function TweetCol({items, t, rev, extra}) {
  const doubled = items.concat(items);
  return <div className={'vmq vmq-fade ' + (extra || '')}><div className={'vmq-track'} style={{'--t': t, animationDirection: rev ? 'reverse' : 'normal'}}>{doubled.map((tw, i) => <a key={i} className="tweetcard" href={tw.url} target="_blank" rel="noopener"><img src={tw.img} alt="Tweet by @Techriztm" loading="lazy"></img><span className="xb"><SocialIcon name="X" size={15}></SocialIcon></span></a>)}</div></div>;
}
function Tweets() {
  const T = PSY.tweets;
  return <section className="sec" data-screen-label="Social proof — X"><div className="wrap">
    <div style={{textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>@Techriztm on X</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="Straight from"></Kinetic>{' '}<Kinetic text="the charts." d={120} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
      <Reveal as="p" d={200} style={{opacity: .78, marginTop: '18px'}}>Daily market thinking, live trades and lessons — click any card to read the full post on X.</Reveal>
    </div>
    <Reveal rv="fade"><div className="tweetcols">
      <TweetCol items={T.slice(0, 4)} t="70s"></TweetCol>
      <TweetCol items={T.slice(4, 8)} t="88s" rev extra="tc2"></TweetCol>
      <TweetCol items={T.slice(8, 11)} t="62s" extra="tc3"></TweetCol>
    </div></Reveal>
    <Reveal rv="fade" d={150} style={{textAlign: 'center', marginTop: '44px'}}><a className="ghost" href="https://x.com/Techriztm" target="_blank" rel="noopener">Follow @Techriztm</a></Reveal>
  </div></section>;
}
function Community() {
  const perks = ['Free weekly reviews', 'Occasional trade calls', 'Exclusive deals & discounts from partners', 'Prop-firm account giveaways'];
  return <section className="sec" data-screen-label="Telegram community"><div className="wrap">
    <div className="darkcard" style={{padding: 'clamp(32px,5vw,72px)', textAlign: 'center'}}>
      <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none'}}></div>
      <div style={{position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto'}}>
        <Reveal rv="fade"><Eb style={{marginBottom: '16px'}}>45,000+ strong</Eb></Reveal>
        <h2 style={{fontSize: 'clamp(30px,4vw,50px)', fontWeight: 700, color: '#fff'}}><Kinetic text="Join the fastest virtual community"></Kinetic>{' '}<Kinetic text="of 45,000+ traders in Africa." d={280} style={{color: 'var(--psy-sky)'}}></Kinetic></h2>
        <Reveal d={320} style={{display: 'flex', flexWrap: 'wrap', gap: '12px 28px', justifyContent: 'center', margin: '32px 0 36px', color: '#fff'}}>
          {perks.map(p => <span key={p} className="plat-check" style={{fontSize: '15.5px'}}><Check></Check>{p}</span>)}
        </Reveal>
        <Reveal d={440}><Magnetic><Pill label="Join the" emphasis="Telegram channel" emphasisColor="var(--psy-sky)" onClick={() => window.open('https://t.me/Techriztm', '_blank')} style={{border: '1px solid rgba(255,255,255,.25)'}}></Pill></Magnetic></Reveal>
      </div>
    </div>
  </div></section>;
}
function Home() {
  return <React.Fragment>
    <style>{homeCss}</style>
    <Nav page="index.html"></Nav>
    <main>
      <Hero></Hero>
      <Ticker></Ticker>
      <Stats></Stats>
      <Founder></Founder>
      <Students></Students>
      <Platforms></Platforms>
      <Tweets></Tweets>
      <Community></Community>
    </main>
    <Footer></Footer>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Home></Home>);
