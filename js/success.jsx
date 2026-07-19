const DS = window.PsychedeliaDesignSystem_01aa0c;
const {TwoToneHeadline: TT, Eyebrow: Eb, CTAPill: Pill, Supergraphic: SG} = DS;
const galCss = `
.ghero{position:relative;overflow:hidden;padding:calc(120px + 5vh) 0 56px;text-align:center}
.ghero-h{font-family:var(--psy-font-display);font-weight:700;font-size:clamp(40px,6vw,74px);line-height:.98;color:var(--psy-navy);margin:0}
.gal{display:grid;gap:18px;grid-template-columns:repeat(2,1fr)}
@media(min-width:760px){.gal{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1080px){.gal{grid-template-columns:repeat(4,1fr)}}
.gal-item{border:0;padding:0;border-radius:var(--psy-radius-card);overflow:hidden;box-shadow:var(--psy-shadow-lift);cursor:zoom-in;background:#fff;transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s;position:relative}
.gal-item img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;transition:transform .6s cubic-bezier(.22,1,.36,1)}
.gal-item:hover{transform:translateY(-8px);box-shadow:var(--psy-shadow-soft);z-index:2}
.gal-item:hover img{transform:scale(1.06)}
.gal-item .zi{position:absolute;right:14px;bottom:14px;width:36px;height:36px;border-radius:50%;background:rgba(10,26,63,.75);color:#fff;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.6);transition:opacity .3s,transform .3s;backdrop-filter:blur(4px)}
.gal-item:hover .zi{opacity:1;transform:none}
.lb-nav{position:fixed;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;font-size:20px;cursor:pointer;transition:background .25s;z-index:2}
.lb-nav:hover{background:var(--psy-blue)}
`;
function Gallery() {
  const [idx, setIdx] = React.useState(null);
  const S = PSY.gallery && PSY.gallery.length ? PSY.gallery : PSY.students;
  const step = d => setIdx(i => (i + d + S.length) % S.length);
  React.useEffect(() => {
    const k = e => { if (idx === null) return; if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); };
    document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k);
  }, [idx]);
  return <React.Fragment>
    <style>{galCss}</style>
    <Nav page="success.html"></Nav>
    <main>
      <section className="ghero" data-screen-label="Gallery hero">
        <div className="sg-clip"><div className="sg-drift"><SG src="assets/logo-frost.png" rotate={-16} width="120%" top="-40%" left="-30%" opacity={0.5}></SG></div></div>
        <div className="wrap" style={{position: 'relative', zIndex: 2}}>
          <Reveal rv="fade" style={{marginBottom: '22px'}}><Eb>Student success gallery</Eb></Reveal>
          <h1 className="ghero-h"><Kinetic text="The results" per={80}></Kinetic>{' '}<Kinetic text="wall." per={80} d={200} style={{color: 'var(--psy-blue)'}}></Kinetic></h1>
          <Reveal as="p" d={360} style={{fontSize: 'clamp(17px,1.6vw,19px)', maxWidth: '560px', opacity: .8, margin: '22px auto 0'}}>Payouts, funded accounts and milestones from Psychedelia students. Click any card to expand — use the arrow keys to browse.</Reveal>
        </div>
      </section>
      <section className="sec" style={{paddingTop: '24px'}} data-screen-label="Results grid"><div className="wrap">
        <div className="gal">
          {S.map((s, i) => <Reveal as="button" key={s} d={(i % 4) * 80} className="gal-item" onClick={() => setIdx(i)} aria-label={'Expand student result ' + (i + 1)}>
            <img src={s} alt={'Psychedelia student result ' + (i + 1)} loading="lazy"></img>
            <span className="zi"><svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true"><path d="M6.5 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM10 10l3.5 3.5M6.5 4.5v4M4.5 6.5h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg></span>
          </Reveal>)}
        </div>
        <Reveal rv="fade" d={120} style={{textAlign: 'center', marginTop: '56px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Magnetic><Pill label="Write your own —" emphasis="join PSY27'" onClick={() => window.psyGo('work.html#cohort')}></Pill></Magnetic>
          <a className="ghost" href="learn.html">Start learning free</a>
        </Reveal>
      </div></section>
    </main>
    <Footer></Footer>
    <Lightbox open={idx !== null} onClose={() => setIdx(null)}>
      <button className="lb-nav" style={{left: '18px'}} onClick={() => step(-1)} aria-label="Previous">‹</button>
      {idx !== null && <img src={S[idx]} alt={'Student result ' + (idx + 1)} style={{maxHeight: '84vh', maxWidth: '100%', borderRadius: '20px', display: 'block'}}></img>}
      <button className="lb-nav" style={{right: '18px'}} onClick={() => step(1)} aria-label="Next">›</button>
    </Lightbox>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<Gallery></Gallery>);
