// Direction 3 — "OBSIDIAN"
// Dark, opinionated, refined. Deep ink + warm cream + a single saturated accent.
// Mobile-first fluid typography (clamp), centered text, accessible focus + landmarks.

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

function ObsidianResume({ accent = '#cae92f', fontPair = 'DM Serif + DM Sans' }) {
  const R = window.RESUME;

  const ink = '#0e0e10';
  const ink2 = '#16161a';
  const cream = '#ece4d4';
  const dim = '#a8a299';     // bumped from #8a8479 for AA contrast on dark
  const subtle = '#7a766d';  // bumped from #5a564f for AA contrast on dark
  const border = '#26262a';

  const fp = OBSIDIAN_FONTS[fontPair] || OBSIDIAN_FONTS['DM Serif + DM Sans'];
  const display = fp.display;
  const sans = fp.sans;
  const mono = fp.mono;

  // Fluid horizontal padding + vertical block gap.
  const pad = 'clamp(20px, 5vw, 64px)';
  const blockGap = 'clamp(56px, 9vw, 96px)';

  // Skip the second project ("TDOL UI Modernization") — keep just Qwiver.
  const projects = R.projects.filter(p => p.name !== 'TDOL UI Modernization');

  const SectionFrame = ({ id, label, hint, children, ariaLabel }) => (
    <section
      id={id}
      aria-label={ariaLabel || label}
      className="section-frame"
      style={{
        padding: `${blockGap} ${pad}`,
        position: 'relative',
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'center',
        marginBottom: 'clamp(28px, 5vw, 48px)', gap: 16, flexWrap: 'wrap',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: display,
          fontSize: 'clamp(40px, 9vw, 64px)',
          fontWeight: 400, lineHeight: 1,
          letterSpacing: '-0.025em', margin: 0, color: cream,
        }}>
          {label}
        </h2>
        {hint && (
          <span style={{ fontFamily: mono, fontSize: 12, color: subtle, letterSpacing: 0.6 }}>
            {hint}
          </span>
        )}
      </div>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        {children}
      </div>
    </section>
  );

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: ink, color: cream, fontFamily: sans,
      backgroundImage: `radial-gradient(${border} 1px, transparent 1px)`,
      backgroundSize: '32px 32px',
      backgroundPosition: '0 0',
      overflowX: 'hidden',
    }}>
      {/* Top bar */}
      <header
        role="banner"
        className="header-bar"
        style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: ink + 'd0', backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${border}`,
          padding: `12px ${pad}`,
          display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
          fontFamily: mono, fontSize: 12, color: dim,
        }}
      >
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: cream, textDecoration: 'none' }}>
          <span aria-hidden="true" style={{
            width: 10, height: 10, background: accent, borderRadius: 1,
            transform: 'rotate(45deg)', display: 'inline-block',
          }} />
          <span style={{ fontFamily: display, fontSize: 17, fontWeight: 500, letterSpacing: -0.3 }}>
            Joseph Berlucchi
          </span>
        </a>
        <span style={{ flex: 1 }} />
        <nav aria-label="Primary" className="nav-secondary" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <a href="#about" className="nav-link" style={{ color: dim }}>About</a>
          <a href="#work" className="nav-link" style={{ color: dim }}>Work</a>
          <a href="#projects" className="nav-link" style={{ color: dim }}>Projects</a>
          <a href="#skills" className="nav-link" style={{ color: dim }}>Skills</a>
          <a href="#education" className="nav-link" style={{ color: dim }}>Education</a>
        </nav>
        <a
          href="#contact"
          className="cta-link"
          style={{
            color: ink, textDecoration: 'none', background: accent,
            padding: '8px 16px', borderRadius: 999, fontWeight: 600,
          }}
        >
          Get in touch →
        </a>
      </header>

      <main id="top" role="main">
        {/* Hero */}
        <section
          aria-label="Introduction"
          className="hero"
          style={{
            padding: `clamp(72px, 14vw, 134px) ${pad} clamp(56px, 8vw, 76px)`,
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div style={{
            fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 2.4,
            textTransform: 'uppercase', marginBottom: 28,
            display: 'inline-flex', alignItems: 'center', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <span aria-hidden="true" style={{ width: 32, height: 1, background: accent, display: 'inline-block' }} />
            <span>Software Engineer · {R.location}</span>
          </div>
          <h1 style={{
            fontFamily: display,
            fontSize: 'clamp(56px, 18vw, 152px)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            fontWeight: 400, margin: 0, color: cream,
            wordBreak: 'break-word',
          }}>
            Joseph<br/>
            <span style={{ fontStyle: 'italic', color: accent }}>Berlucchi</span>
          </h1>
          <p style={{
            marginTop: 'clamp(32px, 6vw, 56px)',
            marginInline: 'auto',
            maxWidth: 620,
            fontSize: 'clamp(17px, 2.4vw, 22px)',
            lineHeight: 1.5, color: cream,
            fontFamily: display, fontWeight: 400, textWrap: 'pretty',
          }}>
            {R.intro}
          </p>
          <div
            className="meta-grid"
            style={{
              marginTop: 'clamp(40px, 6vw, 56px)',
              display: 'flex', flexWrap: 'wrap',
              gap: 'clamp(20px, 4vw, 36px)',
              paddingTop: 28,
              borderTop: `1px solid ${border}`,
              fontFamily: mono, fontSize: 12, color: dim,
              justifyContent: 'center', textAlign: 'center',
              maxWidth: 880, marginInline: 'auto',
            }}
          >
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {R.about.map((p, i) => (
              <p key={i} style={{
                margin: 0, fontFamily: display,
                fontSize: 'clamp(18px, 2.6vw, 26px)',
                lineHeight: 1.5, color: cream,
                fontWeight: 400, textWrap: 'pretty',
              }}>
                {p}
              </p>
            ))}
          </div>
        </SectionFrame>

        {/* Experience */}
        <SectionFrame id="work" label="Experience" hint={`${R.experience.length} roles`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 6vw, 56px)' }}>
            {R.experience.map((job, i) => (
              <article key={i}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'center',
                  borderBottom: `1px solid ${border}`, paddingBottom: 12, marginBottom: 18,
                  gap: 14, flexWrap: 'wrap', textAlign: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <h3 style={{
                      fontFamily: display,
                      fontSize: 'clamp(26px, 4.5vw, 36px)',
                      fontWeight: 400, fontStyle: 'italic',
                      letterSpacing: '-0.015em', margin: 0, color: cream,
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
                  fontFamily: display,
                  fontSize: 'clamp(17px, 2.3vw, 21px)',
                  fontStyle: 'italic', fontWeight: 400,
                  color: dim, margin: '0 0 22px', lineHeight: 1.5, textWrap: 'pretty',
                }}>
                  {job.summary}
                </p>
                <ul style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexDirection: 'column', gap: 12,
                  textAlign: 'left',
                }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: 'clamp(14px, 1.7vw, 16px)',
                      lineHeight: 1.6, color: cream, display: 'flex', gap: 14,
                      fontFamily: sans, textWrap: 'pretty',
                    }}>
                      <span aria-hidden="true" style={{ fontFamily: mono, color: accent, flexShrink: 0, fontSize: 12, paddingTop: 4 }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {projects.map((p, i) => (
              <article key={i} style={{
                background: ink2, border: `1px solid ${border}`, borderRadius: 6,
                padding: 'clamp(20px, 3.5vw, 32px)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'center',
                  marginBottom: 6, gap: 14, flexWrap: 'wrap', textAlign: 'center',
                }}>
                  <h3 style={{
                    fontFamily: display,
                    fontSize: 'clamp(28px, 5vw, 40px)',
                    fontWeight: 400, fontStyle: 'italic',
                    letterSpacing: '-0.02em', margin: 0, color: cream, lineHeight: 1.05,
                  }}>
                    {p.name}
                  </h3>
                  <span style={{ fontFamily: mono, fontSize: 12, color: dim }}>
                    {p.start} → {p.end}
                  </span>
                </div>
                <div style={{
                  fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 1,
                  textTransform: 'uppercase', marginTop: 6, textAlign: 'center',
                }}>
                  {p.role}
                </div>
                <p style={{
                  fontFamily: display,
                  fontSize: 'clamp(17px, 2.3vw, 21px)',
                  fontWeight: 400, lineHeight: 1.55,
                  color: cream, margin: '18px 0', textWrap: 'pretty',
                  textAlign: 'center',
                }}>
                  {p.summary}
                </p>
                <ul style={{
                  listStyle: 'none', padding: 0, margin: '0 0 20px',
                  display: 'flex', flexDirection: 'column', gap: 8,
                  textAlign: 'left',
                }}>
                  {p.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: 'clamp(13px, 1.6vw, 15px)',
                      lineHeight: 1.6, color: dim, display: 'flex', gap: 12,
                    }}>
                      <span aria-hidden="true" style={{ color: accent }}>·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center',
                }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontFamily: mono, fontSize: 11, color: cream,
                      border: `1px solid ${border}`, padding: '4px 10px', borderRadius: 999,
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {Object.entries(R.skills).map(([cat, items]) => (
              <div
                key={cat}
                className="skills-row"
                style={{
                  display: 'grid', gridTemplateColumns: '160px 1fr',
                  gap: 28, alignItems: 'baseline',
                  paddingBottom: 18, borderBottom: `1px solid ${border}`,
                  textAlign: 'left',
                }}
              >
                <div style={{
                  fontFamily: mono, fontSize: 12, color: accent, letterSpacing: 1.4,
                  textTransform: 'uppercase',
                }}>
                  {cat}
                </div>
                <div style={{
                  fontFamily: display,
                  fontSize: 'clamp(17px, 2.4vw, 22px)',
                  fontWeight: 400, color: cream, lineHeight: 1.55, textWrap: 'pretty',
                }}>
                  {items.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </SectionFrame>

        {/* Education */}
        <SectionFrame id="education" label="Education">
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'center',
            marginBottom: 12, gap: 14, flexWrap: 'wrap', textAlign: 'center',
          }}>
            <h3 style={{
              fontFamily: display,
              fontSize: 'clamp(26px, 4.5vw, 36px)',
              fontWeight: 400, fontStyle: 'italic',
              letterSpacing: '-0.015em', margin: 0, color: cream,
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
            marginBottom: 12,
          }}>
            Coursework
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
            {R.education.coursework.map(c => (
              <span key={c} style={{
                fontFamily: mono, fontSize: 13, color: cream,
                border: `1px solid ${border}`, padding: '6px 12px', borderRadius: 4,
                background: ink2,
              }}>{c}</span>
            ))}
          </div>
        </SectionFrame>
      </main>

      {/* Contact */}
      <footer
        id="contact"
        role="contentinfo"
        className="section-frame"
        style={{
          padding: `clamp(72px, 12vw, 116px) ${pad}`,
          borderTop: `1px solid ${border}`,
          background: `linear-gradient(180deg, ${ink} 0%, ${ink2} 100%)`,
          textAlign: 'center',
        }}
      >
        <div style={{
          fontFamily: mono, fontSize: 11, color: accent, letterSpacing: 2.4,
          textTransform: 'uppercase', marginBottom: 24,
        }}>
          ✦ Get in touch
        </div>
        <h2 style={{
          fontFamily: display,
          fontSize: 'clamp(44px, 11vw, 96px)',
          lineHeight: 1, letterSpacing: '-0.035em',
          fontWeight: 400, margin: 0, color: cream,
        }}>
          Working on something <span style={{ fontStyle: 'italic', color: accent }}>interesting?</span>
        </h2>
        <p style={{
          marginTop: 28, marginInline: 'auto',
          fontSize: 'clamp(17px, 2.3vw, 21px)',
          color: dim, fontFamily: display, fontWeight: 400, maxWidth: 560,
          textWrap: 'pretty',
        }}>
          Always happy to talk shop — defense, full-stack, AI tooling, or anything weird and ambitious.
        </p>
        <div
          className="contact-grid"
          style={{
            marginTop: 'clamp(40px, 6vw, 56px)',
            marginInline: 'auto',
            maxWidth: 720,
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
            border: `1px solid ${border}`, borderRadius: 6, overflow: 'hidden',
          }}
        >
          {[
            { label: 'Email', value: R.email, href: `mailto:${R.email}` },
            { label: 'LinkedIn', value: '/in/jberlucchi', href: R.links.linkedin },
            { label: 'GitHub', value: '@joeberlucchi', href: R.links.github },
            { label: 'Résumé', value: 'Download PDF ↓', href: '#' },
          ].map((row, i) => (
            <a
              key={i}
              href={row.href}
              className="contact-cell"
              style={{
                padding: '20px 22px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, flexWrap: 'wrap',
                borderRight: i % 2 === 0 ? `1px solid ${border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${border}` : 'none',
                textDecoration: 'none', color: cream, background: ink2,
                minHeight: 56,
              }}
            >
              <span style={{
                fontFamily: mono, fontSize: 11, color: dim, letterSpacing: 1.4, textTransform: 'uppercase',
              }}>
                {row.label}
              </span>
              <span style={{ fontFamily: display, fontSize: 18, fontStyle: 'italic', fontWeight: 400 }}>
                {row.value} <span style={{ color: accent }}>↗</span>
              </span>
            </a>
          ))}
        </div>
        <div
          className="footer-meta"
          style={{
            marginTop: 'clamp(40px, 6vw, 56px)',
            fontFamily: mono, fontSize: 11, color: subtle,
            display: 'flex', justifyContent: 'space-between', letterSpacing: 0.6,
            maxWidth: 880, marginInline: 'auto',
          }}
        >
          <span>© 2026 Joseph Berlucchi</span>
          <span>Built by hand · San Diego, CA</span>
        </div>
      </footer>
    </div>
  );
}

window.ObsidianResume = ObsidianResume;
