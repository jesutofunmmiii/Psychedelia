const DS = window.PsychedeliaDesignSystem_01aa0c;
const {TwoToneHeadline: TT, Eyebrow: Eb, CTAPill: Pill, Supergraphic: SG, GoldAnnotation: Gold} = DS;
const learnCss = `
.lhero{position:relative;overflow:hidden;padding:calc(120px + 5vh) 0 64px}
.lhero-h{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(40px,6vw,74px);line-height:.98;color:var(--psy-navy);margin:0}
.pl-grid{display:grid;gap:22px;grid-template-columns:repeat(2,1fr)}
@media(max-width:880px){.pl-grid{grid-template-columns:1fr}}
.pl-card{padding:clamp(24px,3.4vw,38px);display:flex;flex-direction:column;gap:14px;cursor:pointer;border:0;text-align:left;font-family:var(--psy-font-body)}
.pl-card .num{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(44px,5vw,64px);line-height:1;color:transparent;-webkit-text-stroke:1.5px rgba(169,196,255,.55)}
.pl-card h3{font-size:clamp(20px,2.2vw,26px);font-weight:700;color:#fff}
.pl-card p{margin:0;color:rgba(255,255,255,.72);font-size:15.5px;line-height:1.5}
.pl-card .row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:auto;padding-top:10px}
.pl-play{display:inline-flex;align-items:center;gap:10px;font-family:var(--psy-font-display);font-weight:600;font-size:15px;color:var(--psy-sky)}
.pl-play .pb{width:38px;height:38px;border-radius:50%;background:var(--psy-blue);display:flex;align-items:center;justify-content:center;transition:transform .3s,background .3s}
.pl-card:hover .pb{transform:scale(1.15);background:var(--psy-sky)}
.pl-card.active{outline:2px solid var(--psy-sky);outline-offset:3px}
.player{border-radius:var(--psy-radius-tile);overflow:hidden;background:var(--psy-midnight);box-shadow:var(--psy-shadow-soft);animation:lbPop .5s cubic-bezier(.22,1,.36,1) both}
.player iframe{display:block;width:100%;aspect-ratio:16/9;border:0}
.player .pbar{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 20px;color:#fff;font-family:var(--psy-font-display);font-weight:600;font-size:15px}
.cmt{width:min(360px,78vw);flex:none;background:#fff;border-radius:var(--psy-radius-card);padding:22px;box-shadow:var(--psy-shadow-lift);display:flex;flex-direction:column;gap:12px}
.cmt p{margin:0;font-size:15px;line-height:1.5;color:var(--psy-navy)}
.cmt .who{display:flex;align-items:center;gap:10px;font-size:13px}
.cmt .who b{color:var(--psy-blue);font-weight:600}
.cmt .who span{color:var(--psy-navy);opacity:.55}
.tk-grid{display:grid;gap:16px;grid-template-columns:repeat(2,1fr)}
@media(min-width:680px){.tk-grid{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1000px){.tk-grid{grid-template-columns:repeat(4,1fr)}}
.tk-card{position:relative;border:0;cursor:pointer;aspect-ratio:3/4;border-radius:var(--psy-radius-card);overflow:hidden;background:var(--psy-grad-navy-depth);color:#fff;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:18px;font-family:var(--psy-font-body);transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s}
.tk-card:hover{transform:translateY(-7px);box-shadow:var(--psy-shadow-soft)}
.tk-card .tnum{font-family:var(--psy-font-display);font-weight:700;font-size:34px;color:transparent;-webkit-text-stroke:1.3px rgba(169,196,255,.5)}
.tk-card .tplay{width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;align-self:center;transition:background .3s,transform .3s;backdrop-filter:blur(4px)}
.tk-card:hover .tplay{background:var(--psy-blue);transform:scale(1.12)}
.tk-card .tl{font-family:var(--psy-font-display);font-weight:600;font-size:14.5px;color:var(--psy-periwinkle)}
.tk-frame{width:min(90vw,340px);height:min(80vh,600px);border:0;border-radius:20px;background:#000;display:block}
.book{padding:26px;display:flex;flex-direction:column;gap:10px}
.book .bt{font-family:var(--psy-font-display);font-weight:700;font-size:20px;color:var(--psy-navy)}
.book .ba{font-size:14px;opacity:.6}
.book a{margin-top:auto;padding-top:14px;font-weight:600;display:inline-flex;align-items:center;gap:8px}
.pdfcard{display:grid;gap:28px;align-items:center;grid-template-columns:1fr;padding:clamp(26px,4vw,48px)}
@media(min-width:880px){.pdfcard{grid-template-columns:1.4fr 1fr}}
.pl-thumb{position:relative;border-radius:14px;overflow:hidden;aspect-ratio:16/9;background:#0b102a}
.pl-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s cubic-bezier(.22,1,.36,1)}
.pl-card:hover .pl-thumb img{transform:scale(1.06)}
.tk-thumb{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .55s cubic-bezier(.22,1,.36,1)}
.tk-card:hover .tk-thumb{transform:scale(1.07)}
.tk-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,16,42,.62),rgba(11,16,42,.12) 42%,rgba(11,16,42,.82))}
.tk-card .tnum,.tk-card .tplay,.tk-card .tl{position:relative;z-index:2}
.pl-expand{grid-column:1/-1;display:grid;gap:18px;grid-template-columns:1fr;align-items:start;animation:lbPop .5s cubic-bezier(.22,1,.36,1) both}
@media(min-width:880px){.pl-expand{grid-template-columns:1.55fr 1fr}}
.pl-list{display:flex;flex-direction:column;gap:6px;max-height:min(62vh,560px);overflow:auto;padding:8px;background:#fff;border-radius:var(--psy-radius-card);box-shadow:var(--psy-shadow-lift)}
.pl-vid{display:flex;align-items:center;gap:12px;border:0;background:transparent;cursor:pointer;text-align:left;padding:9px 12px;border-radius:14px;font-family:var(--psy-font-body);transition:background .25s}
.pl-vid:hover{background:rgba(47,107,255,.07)}
.pl-vid.now{background:rgba(47,107,255,.12)}
.pl-vid .vn{font-family:var(--psy-font-display);font-weight:600;font-size:12px;color:var(--psy-blue);flex:none;width:20px}
.pl-vid img{width:66px;aspect-ratio:16/9;object-fit:cover;border-radius:8px;flex:none;background:#0b102a}
.pl-vid .vt{font-size:14px;font-weight:500;color:var(--psy-navy);line-height:1.35;flex:1}
.pl-vid .vp{flex:none;width:26px;height:26px;border-radius:50%;background:var(--psy-blue);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .25s}
.pl-vid:hover .vp{opacity:1}
.pl-vid .vp.on{width:auto;height:auto;background:transparent;opacity:1;color:var(--psy-blue);font-family:var(--psy-font-display);font-weight:600;font-size:12px}
`;
function PlayGlyph({size = 14}) { return <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.8v10.4c0 .8.9 1.3 1.6.9l8-5.2c.6-.4.6-1.4 0-1.8l-8-5.2C3.9.5 3 1 3 1.8z" fill="#fff"></path></svg>; }
function LearnHero() {
  return <section className="lhero" data-screen-label="Learn hero">
    <div className="sg-clip"><div className="sg-drift"><SG src={(window.__resources && window.__resources.logoFrost) || 'assets/logo-frost.png'} rotate={-14} width="115%" top="-42%" left="34%" opacity={0.5}></SG></div></div>
    <div className="wrap" style={{position: 'relative', zIndex: 2}}>
      <Reveal rv="fade" style={{marginBottom: '24px'}}><Eb>The educational hub</Eb></Reveal>
      <h1 className="lhero-h"><Kinetic text="Get started" per={80}></Kinetic>{' '}<Kinetic text="for free." per={80} d={180} style={{color: 'var(--psy-blue)'}}></Kinetic></h1>
      <Reveal as="p" d={380} style={{fontSize: 'clamp(17px,1.6vw,20px)', maxWidth: '600px', opacity: .82, margin: '24px 0 0'}}>Everything below is free — the same lessons students paid for, released to the public. Five playlists, 49 videos, watched right here without leaving the site.</Reveal>
    </div>
  </section>;
}
function Playlists() {
  const [active, setActive] = React.useState(null);
  const [vid, setVid] = React.useState(null);
  const P = PSY.playlists;
  const open = i => { if (active === i) { setActive(null); } else { setActive(i); setVid(P[i].videos[0].id); } };
  return <section className="sec" id="playlists" style={{paddingTop: '24px'}} data-screen-label="YouTube playlists"><div className="wrap">
    <div className="pl-grid">
      {P.map((p, i) => <React.Fragment key={p.list}><Reveal as="button" d={i * 80} className={'darkcard pl-card' + (active === i ? ' active' : '')} onClick={() => open(i)} aria-label={'Play playlist: ' + p.title}>
        <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .45, pointerEvents: 'none'}}></div>
        <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', width: '100%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}><span className="num">{p.n}</span><span className="ticket" style={{borderColor: 'rgba(169,196,255,.5)', color: 'var(--psy-periwinkle)', background: 'rgba(47,107,255,.12)', fontSize: '12.5px', padding: '7px 13px'}}>{p.count} videos</span></div>
          <div className="pl-thumb"><img src={'https://i.ytimg.com/vi/' + p.vid + '/hqdefault.jpg'} alt={'Playlist preview: ' + p.title} loading="lazy"></img></div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="row"><span className="pl-play"><span className="pb"><PlayGlyph></PlayGlyph></span>{active === i ? 'Now playing — click to close' : 'Watch playlist'}</span></div>
        </div>
      </Reveal>
      {active === i && <div className="pl-expand">
        <div className="player">
          <div className="pbar"><span>{p.n} — {p.title}</span><button className="lb-x" style={{position: 'static', width: '38px', height: '38px'}} onClick={() => setActive(null)} aria-label="Close player">✕</button></div>
          <iframe src={'https://www.youtube.com/embed/' + vid + '?list=' + p.list + '&autoplay=1&rel=0'} title={p.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="pl-list">
          {p.videos.map((v, vi) => <button key={v.id} className={'pl-vid' + (vid === v.id ? ' now' : '')} onClick={() => setVid(v.id)}>
            <span className="vn">{String(vi + 1).padStart(2, '0')}</span>
            <img src={'https://i.ytimg.com/vi/' + v.id + '/default.jpg'} alt="" loading="lazy"></img>
            <span className="vt">{v.t}</span>
            {vid === v.id ? <span className="vp on">Playing</span> : <span className="vp"><PlayGlyph size={10}></PlayGlyph></span>}
          </button>)}
        </div>
      </div>}
      </React.Fragment>)}
      <Reveal className="darkcard pl-card" as="a" href="https://www.youtube.com/@Techriztm" target="_blank" rel="noopener" d={400} style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '18px', textDecoration: 'none'}}>
        <span className="pl-play" style={{flexDirection: 'column', gap: '14px'}}><span className="pb" style={{width: '52px', height: '52px'}}><PlayGlyph size={18}></PlayGlyph></span>More on the channel</span>
        <p style={{color: 'rgba(255,255,255,.65)'}}>New lessons drop regularly. Subscribe so you never miss one.</p>
      </Reveal>
    </div>
  </div></section>;
}
function Comments() {
  const C = PSY.comments;
  const rows = [C.slice(0, 17), C.slice(17, 34), C.slice(34, 50)];
  return <section className="sec" style={{paddingLeft: 0, paddingRight: 0, overflow: 'hidden'}} data-screen-label="YouTube comments">
    <div className="wrap" style={{textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>Real comments, real traders</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="6,006 comments"></Kinetic>{' '}<Kinetic text="don't lie." d={140} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
      <Reveal as="p" d={220} style={{opacity: .78, marginTop: '18px'}}>Fifty of the 6,006 comments left on Techriz's videos — hover any row to pause and read.</Reveal>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      {rows.map((row, ri) => <div key={ri} className={'mq mq-fade' + (ri === 1 ? ' rev' : '')}><div className="mq-track" style={{'--t': (95 + ri * 14) + 's'}}>{row.concat(row).map((c, i) => <div key={i} className="cmt"><p>“{c[2]}”</p><div className="who"><b>{c[0]}</b><span>on “{c[1]}” — YouTube</span></div></div>)}</div></div>)}
    </div>
  </section>;
}
const tkTitle = m => { if (!m || !m.title) return null; const t = m.title.replace(/#[^\s#]+/g, '').replace(/\s+/g, ' ').trim(); return t ? (t.length > 54 ? t.slice(0, 52) + '\u2026' : t) : null; };
function Breakdowns() {
  const [tk, setTk] = React.useState(null);
  const [meta, setMeta] = React.useState({});
  React.useEffect(() => { PSY.tiktoks.forEach(id => { fetch('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@techriztm/video/' + id).then(r => r.ok ? r.json() : null).then(j => { if (j && j.thumbnail_url) setMeta(m => ({...m, [id]: j})); }).catch(() => {}); }); }, []);
  return <section className="sec" id="breakdowns" data-screen-label="Trade breakdowns"><div className="wrap">
    <div style={{textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>Part B — From the charts</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="Trade"></Kinetic>{' '}<Kinetic text="breakdowns." d={110} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
      <Reveal as="p" d={200} style={{opacity: .78, marginTop: '18px'}}>Seventeen real trades, broken down move by move on TikTok — tap any card to watch it right here.</Reveal>
    </div>
    <div className="tk-grid">
      {PSY.tiktoks.map((id, i) => <Reveal as="button" key={id} d={(i % 4) * 70} className="tk-card" onClick={() => setTk(id)} aria-label={'Play trade breakdown ' + (i + 1)}>
        <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .4, pointerEvents: 'none'}}></div>
        {meta[id] ? <React.Fragment><img className="tk-thumb" src={meta[id].thumbnail_url} alt="" loading="lazy"></img><span className="tk-shade"></span></React.Fragment> : null}
        <span className="tnum">{String(i + 1).padStart(2, '0')}</span>
        <span className="tplay"><PlayGlyph size={17}></PlayGlyph></span>
        <span className="tl">{tkTitle(meta[id]) || 'Trade Breakdown'}<br></br><span style={{color: 'rgba(255,255,255,.75)', fontWeight: 400, fontSize: '12.5px', fontFamily: 'var(--psy-font-body)'}}>@techriztm on TikTok</span></span>
      </Reveal>)}
    </div>
    <Lightbox open={!!tk} onClose={() => setTk(null)}>{tk && <iframe className="tk-frame" src={'https://www.tiktok.com/embed/v2/' + tk} title="Trade breakdown video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>}</Lightbox>
  </div></section>;
}
function Reading() {
  return <section className="sec" id="reading" style={{paddingTop: 0}} data-screen-label="Reading room"><div className="wrap">
    <div style={{textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px'}}>
      <Reveal rv="fade"><Eb style={{marginBottom: '14px'}}>The reading room</Eb></Reveal>
      <h2 style={{fontSize: 'clamp(32px,4.2vw,52px)', fontWeight: 700}}><Kinetic text="Download,"></Kinetic>{' '}<Kinetic text="then digest." d={120} style={{color: 'var(--psy-blue)'}}></Kinetic></h2>
    </div>
    <Reveal className="darkcard pdfcard" style={{marginBottom: '24px'}}>
      <div className="psy-wave" style={{position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none'}}></div>
      <div style={{position: 'relative', zIndex: 2}}>
        <span className="ticket" style={{borderColor: 'var(--psy-amber)', color: 'var(--psy-amber)', background: 'rgba(249,168,37,.08)', marginBottom: '18px'}}>Free PDF guide</span>
        <h3 style={{fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#fff', margin: '16px 0 12px'}}>Understanding Draw on Liquidity</h3>
        <p style={{margin: 0, color: 'rgba(255,255,255,.75)', maxWidth: '480px'}}>Techriz's written companion to the liquidity series — where price is drawn, why it gets there, and how to position before it does.</p>
      </div>
      <div style={{position: 'relative', zIndex: 2, justifySelf: 'start'}}><Magnetic><Pill label="Download the" emphasis="PDF" emphasisColor="var(--psy-amber)" onClick={() => window.open((window.__resources && window.__resources.pdfGuide) || PSY.pdf.url, '_blank')} style={{border: '1px solid rgba(255,255,255,.25)'}}></Pill></Magnetic></div>
    </Reveal>
    <div className="grid4">
      {PSY.books.map((b, i) => <Reveal key={b.t} d={i * 80} className="card book">
        <span style={{fontFamily: 'var(--psy-font-display)', fontWeight: 700, fontSize: '13px', color: 'var(--psy-blue)', letterSpacing: '.08em'}}>{String(i + 1).padStart(2, '0')}</span>
        <span className="bt">{b.t}</span><span className="ba">{b.a}</span>
        <a href={(window.__resources && window.__resources['book' + i]) || b.url} download={b.t + '.pdf'}>Download<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1v8m0 0L3.5 5.5M7 9l3.5-3.5M2 12.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
      </Reveal>)}
    </div>
  </div></section>;
}
function Learn() {
  return <React.Fragment>
    <style>{learnCss}</style>
    <Nav page="learn.html"></Nav>
    <main>
      <LearnHero></LearnHero>
      <Playlists></Playlists>
      <Comments></Comments>
      <Breakdowns></Breakdowns>
      <Reading></Reading>
    </main>
    <Footer></Footer>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Learn></Learn>);
