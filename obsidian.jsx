// Direction 3 — "OBSIDIAN"
// Dark, opinionated, refined. Deep ink + warm cream + a single saturated accent.

const OBSIDIAN_FONTS = {
  'Fraunces + Inter': {
    display: '"Fraunces", Georgia, serif',
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  'Playfair + Inter': {
    display: '"Playfair Display", Georgia, serif',
    sans: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
  'Instrument Serif + Geist': {
    display: '"Instrument Serif", Georgia, serif',
    sans: '"Geist", "Inter", system-ui, sans-serif',
    mono: '"Geist Mono", "JetBrains Mono", ui-monospace, monospace',
  },
  'DM Serif + DM Sans': {
    display: '"DM Serif Display", Georgia, serif',
    sans: '"DM Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
  },
};

function ObsidianResume({ accent = '#cae92f', density = 'compact', fontPair = 'DM Serif + DM Sans' }) {
  const R = window.RESUME;

  const ink = '#0e0e10';
  const ink2 = '#16161a';
  const cream = '#ece4d4';
  const dim = '#8a8479';
  const subtle = '#5a564f';
  const border = '#26262a';

  const fp = OBSIDIAN_FONTS[fontPair] || OBSIDIAN_FONTS['DM Serif + DM Sans'];
  const display = fp.display;
  const sans = fp.sans;
  const mono = fp.mono;

  const pad = density === 'compact' ? 64 : density === 'comfy' ? 120 : 88;
  const blockGap = density === 'compact' ? 64 : density === 'comfy' ? 128 : 96;

  // Skip the second project ("TDOL UI Modernization") — keep just Qwiver.
  const projects = R.projects.filter(p => p.name !== 'TDOL UI Modernization');

  const SectionFrame = ({ id, label, hint, children }) => (
    <section id={id} style={{ padding: `${blockGap}px ${pad}px`, position: 'relative', borderTop: `1px solid ${border}` }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        marginBottom: 48, gap: 24, flexWrap: 'wrap',
      }}>
        <h2 style={{
          fontFamily: display, fontSize: 64, fontWeight: 400, lineHeight: 1,
          letterSpacing: -1.6, margin: 0, color: cream,
        }}>
          {label}
        </h2>
        {hint && (
          <span style={{ fontFamily: mono, fontSize: 12, color: subtle, letterSpacing: 0.6 }}>
            {hint}
          </span>
        )}
      </div>
      <div style={{ maxWidth: 880 }}>{children}</div>
    </section>
  );

  const navLink = { color: dim, textDecoration: 'none' };

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: ink, color: cream, fontFamily: sans,
      backgroundImage: `radial-gradient(${border} 1px, transparent 1px)`,
      backgroundSize: '32px 32px',
      backgroundPosition: '0 0',
    }}>
      {/* Top bar */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: ink + 'd0', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        padding: `16px ${pad}px`,
        display: 'flex', alignItems: 'center', gap: 22,
        fontFamily: mono, fontSize: 12, color: dim,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: cream }}>
          <span style={{
            width: 10, height: 10, background: accent, borderRadius: 1,
            transform: 'rotate(45deg)', display: 'inline-block',
          }} />
          <span style={{ fontFamily: display, fontSize: 17, fontWeight: 500, letterSpacing: -0.3 }}>
            Joseph Berlucchi
          </span>
        </span>
        <span style={{ flex: 1 }} />
        <a href="#about" style={navLink}>About</a>
        <a href="#work" style={navLink}>Work</a>
        <a href="#projects" style={navLink}>Projects</a>
        <a href="#skills" style={navLink}>Skills</a>
        <a href="#education" style={navLink}>Education</a>
        <a href="#contact" style={{
          color: ink, textDecoration: 'none', background: accent, padding: '6px 14px',
          borderRadius: 999, fontWeight: 600,
        }}>
          Get in touch →
        </a>
      </header>

      {/* Hero */}
      <section style={{ padding: `${blockGap * 1.4}px ${pad}px ${blockGap * 0.8}px`, position: 'relative' }}>
        <div style={{
          fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 2.4,
          textTransform: 'uppercase', marginBottom: 36, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ width: 32, height: 1, background: accent, display: 'inline-block' }} />
          <span>Software Engineer · {R.location}</span>
        </div>
        <h1 style={{
          fontFamily: display, fontSize: 152, lineHeight: 0.88, letterSpacing: -6,
          fontWeight: 400, margin: 0, color: cream,
        }}>
          Joseph<br/>
          <span style={{ fontStyle: 'italic', color: accent }}>Berlucchi</span>
        </h1>
        <p style={{
          marginTop: 56, maxWidth: 620, fontSize: 22, lineHeight: 1.45, color: cream,
          fontFamily: display, fontWeight: 400, textWrap: 'pretty',
        }}>
          {R.intro}
        </p>
        <div style={{
          marginTop: 56, display: 'flex', gap: 36, paddingTop: 28,
          borderTop: `1px solid ${border}`, fontFamily: mono, fontSize: 12, color: dim,
        }}>
          <div>
            <div style={{ color: subtle, marginBottom: 6, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 10 }}>Currently</div>
            <div style={{ color: cream, fontSize: 14 }}>Northrop Grumman</div>
          </div>
          <div>
            <div style={{ color: subtle, marginBottom: 6, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 10 }}>Experience</div>
            <div style={{ color: cream, fontSize: 14 }}>3+ years, full-stack</div>
          </div>
          <div>
            <div style={{ color: subtle, marginBottom: 6, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 10 }}>Stack</div>
            <div style={{ color: cream, fontSize: 14 }}>TS · React · Python · Java</div>
          </div>
          <div>
            <div style={{ color: subtle, marginBottom: 6, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 10 }}>Status</div>
            <div style={{ color: accent, fontSize: 14 }}>● open to chat</div>
          </div>
        </div>
      </section>

      {/* About */}
      <SectionFrame id="about" label="About">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          {R.about.map((p, i) => (
            <p key={i} style={{
              margin: 0, fontFamily: display, fontSize: 26, lineHeight: 1.45, color: cream,
              fontWeight: 400, textWrap: 'pretty',
            }}>
              {p}
            </p>
          ))}
        </div>
      </SectionFrame>

      {/* Experience */}
      <SectionFrame id="work" label="Experience" hint={`${R.experience.length} roles`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          {R.experience.map((job, i) => (
            <article key={i}>
              <div style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                borderBottom: `1px solid ${border}`, paddingBottom: 10, marginBottom: 18,
                gap: 16, flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                  <h3 style={{
                    fontFamily: display, fontSize: 36, fontWeight: 400, fontStyle: 'italic',
                    letterSpacing: -0.6, margin: 0, color: cream,
                  }}>
                    {job.role}
                  </h3>
                  <span style={{ fontFamily: mono, fontSize: 13, color: accent }}>@ {job.company}</span>
                </div>
                <div style={{ fontFamily: mono, fontSize: 12, color: dim, letterSpacing: 0.6 }}>
                  {job.start} → {job.end}
                </div>
              </div>
              <p style={{
                fontFamily: display, fontSize: 21, fontStyle: 'italic', fontWeight: 400,
                color: dim, margin: '0 0 22px', lineHeight: 1.45, textWrap: 'pretty',
              }}>
                {job.summary}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{
                    fontSize: 16, lineHeight: 1.6, color: cream, display: 'flex', gap: 14,
                    fontFamily: sans, textWrap: 'pretty',
                  }}>
                    <span style={{ fontFamily: mono, color: accent, flexShrink: 0, fontSize: 12, paddingTop: 4 }}>
                      →
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* Projects */}
      <SectionFrame id="projects" label="Projects">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {projects.map((p, i) => (
            <article key={i} style={{
              background: ink2, border: `1px solid ${border}`, borderRadius: 4, padding: 32,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6, gap: 16, flexWrap: 'wrap' }}>
                <h3 style={{
                  fontFamily: display, fontSize: 40, fontWeight: 400, fontStyle: 'italic',
                  letterSpacing: -0.8, margin: 0, color: cream, lineHeight: 1,
                }}>
                  {p.name}
                </h3>
                <span style={{ fontFamily: mono, fontSize: 12, color: dim }}>
                  {p.start} → {p.end}
                </span>
              </div>
              <div style={{ fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 1, textTransform: 'uppercase', marginTop: 6 }}>
                {p.role}
              </div>
              <p style={{
                fontFamily: display, fontSize: 21, fontWeight: 400, lineHeight: 1.5,
                color: cream, margin: '18px 0', textWrap: 'pretty',
              }}>
                {p.summary}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 15, lineHeight: 1.55, color: dim, display: 'flex', gap: 12 }}>
                    <span style={{ color: accent }}>·</span><span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: mono, fontSize: 11, color: dim,
                    border: `1px solid ${border}`, padding: '3px 10px', borderRadius: 999,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionFrame>

      {/* Skills */}
      <SectionFrame id="skills" label="Toolkit">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {Object.entries(R.skills).map(([cat, items]) => (
            <div key={cat} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr', gap: 28, alignItems: 'baseline',
              paddingBottom: 18, borderBottom: `1px solid ${border}`,
            }}>
              <div style={{
                fontFamily: mono, fontSize: 12, color: accent, letterSpacing: 1.4,
                textTransform: 'uppercase',
              }}>
                {cat}
              </div>
              <div style={{ fontFamily: display, fontSize: 22, fontWeight: 400, color: cream, lineHeight: 1.5, textWrap: 'pretty' }}>
                {items.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </SectionFrame>

      {/* Education */}
      <SectionFrame id="education" label="Education">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12, gap: 16, flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: display, fontSize: 36, fontWeight: 400, fontStyle: 'italic',
            letterSpacing: -0.6, margin: 0, color: cream,
          }}>
            {R.education.school}
          </h3>
          <span style={{ fontFamily: mono, fontSize: 13, color: dim }}>{R.education.graduated}</span>
        </div>
        <p style={{ fontFamily: mono, fontSize: 13, color: accent, margin: '0 0 24px' }}>
          {R.education.degree} · {R.education.location}
        </p>
        <div style={{
          fontFamily: mono, fontSize: 11, color: dim, letterSpacing: 1.4, textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          Coursework
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {R.education.coursework.map(c => (
            <span key={c} style={{
              fontFamily: mono, fontSize: 13, color: cream,
              border: `1px solid ${border}`, padding: '5px 12px', borderRadius: 4,
              background: ink2,
            }}>{c}</span>
          ))}
        </div>
      </SectionFrame>

      {/* Contact */}
      <footer id="contact" style={{
        padding: `${blockGap * 1.2}px ${pad}px`, borderTop: `1px solid ${border}`,
        background: `linear-gradient(180deg, ${ink} 0%, ${ink2} 100%)`,
      }}>
        <div style={{
          fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 2.4,
          textTransform: 'uppercase', marginBottom: 28,
        }}>
          ✦ Get in touch
        </div>
        <h2 style={{
          fontFamily: display, fontSize: 96, lineHeight: 0.95, letterSpacing: -3.6,
          fontWeight: 400, margin: 0, color: cream,
        }}>
          Working on something <span style={{ fontStyle: 'italic', color: accent }}>interesting?</span>
        </h2>
        <p style={{
          marginTop: 32, fontSize: 21, color: dim, fontFamily: display, fontWeight: 400, maxWidth: 560,
          textWrap: 'pretty',
        }}>
          Always happy to talk shop — defense, full-stack, AI tooling, or anything weird and ambitious.
        </p>
        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
          border: `1px solid ${border}`, borderRadius: 4, overflow: 'hidden',
        }}>
          {[
            { label: 'Email', value: R.email, href: `mailto:${R.email}` },
            { label: 'LinkedIn', value: '/in/jberlucchi', href: R.links.linkedin },
            { label: 'GitHub', value: '@joeberlucchi', href: R.links.github },
            { label: 'Résumé', value: 'Download PDF ↓', href: '#' },
          ].map((row, i) => (
            <a key={i} href={row.href} style={{
              padding: '24px 28px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              borderRight: i % 2 === 0 ? `1px solid ${border}` : 'none',
              borderBottom: i < 2 ? `1px solid ${border}` : 'none',
              textDecoration: 'none', color: cream, background: ink2,
            }}>
              <span style={{
                fontFamily: mono, fontSize: 11, color: dim, letterSpacing: 1.4, textTransform: 'uppercase',
              }}>
                {row.label}
              </span>
              <span style={{ fontFamily: display, fontSize: 19, fontStyle: 'italic', fontWeight: 400 }}>
                {row.value} <span style={{ color: accent }}>↗</span>
              </span>
            </a>
          ))}
        </div>
        <div style={{
          marginTop: 56, fontFamily: mono, fontSize: 11, color: subtle,
          display: 'flex', justifyContent: 'space-between', letterSpacing: 0.6,
        }}>
          <span>© 2026 Joseph Berlucchi</span>
          <span>Built by hand · San Diego, CA</span>
        </div>
      </footer>
    </div>
  );
}

window.ObsidianResume = ObsidianResume;
