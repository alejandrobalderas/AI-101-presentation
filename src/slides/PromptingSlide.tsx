import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const techniques = [
  {
    number: '01',
    title: 'Be Specific',
    bad: 'Write about dogs',
    good: 'Write 200 words about golden retrievers for families',
  },
  {
    number: '02',
    title: 'Give Context',
    bad: 'Write about productivity',
    good: "I'm a coach for busy parents. Write tips about morning routines",
  },
  {
    number: '03',
    title: 'Use Examples',
    bad: 'Make it professional',
    good: 'Match this tone: [paste your example here]',
  },
  {
    number: '04',
    title: 'Assign a Role',
    bad: 'Help me write an email',
    good: 'Act as an experienced copywriter. Help me draft...',
  },
]

export function PromptingSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px 32px',
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
        >
          <p style={{
            fontSize: '12px',
            fontFamily: theme.fonts.body,
            fontWeight: 600,
            color: theme.colors.primary,
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Practical Skills
          </p>
          <h2 style={{
            fontSize: '44px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            The Art of <span style={{ color: theme.colors.primary }}>Prompting</span>
          </h2>
          <p style={{
            fontSize: '15px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '6px',
          }}>
            Small changes in how you ask → big differences in what you get
          </p>
        </motion.div>

        {/* Main: Technique rows */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {techniques.map((tech, idx) => (
            <Appear key={tech.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '32px',
                  padding: '20px 28px',
                  background: theme.colors.surface,
                  borderRadius: '12px',
                  border: `1px solid ${theme.colors.glassBorder}`,
                  boxShadow: theme.shadows.sm,
                  alignItems: 'center',
                }}
              >
                {/* Left: Number + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{
                    fontSize: '13px',
                    fontFamily: theme.fonts.mono,
                    fontWeight: 600,
                    color: theme.colors.primary,
                    opacity: 0.6,
                  }}>
                    {tech.number}
                  </span>
                  <span style={{
                    fontSize: '17px',
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    color: theme.colors.text,
                  }}>
                    {tech.title}
                  </span>
                </div>

                {/* Right: Transformation */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}>
                  {/* Vague prompt - struck through */}
                  <div style={{
                    width: '200px',
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontFamily: theme.fonts.mono,
                      color: theme.colors.textDim,
                      textDecoration: 'line-through',
                      textDecorationColor: theme.colors.textSubtle,
                      opacity: 0.7,
                    }}>
                      "{tech.bad}"
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.08 + 0.2, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      flexShrink: 0,
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '2px',
                      background: theme.colors.primary,
                      borderRadius: '1px',
                    }} />
                    <svg width="8" height="10" viewBox="0 0 8 10">
                      <path
                        d="M1 1l5 4-5 4"
                        stroke={theme.colors.primary}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  {/* Better prompt */}
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontSize: '14px',
                      fontFamily: theme.fonts.mono,
                      fontWeight: 600,
                      color: theme.colors.text,
                      lineHeight: 1.5,
                    }}>
                      "{tech.good}"
                    </span>
                  </div>
                </div>
              </motion.div>
            </Appear>
          ))}
        </div>

        {/* Bottom: Unified footer strip */}
        <Appear>
          <div style={{
            marginTop: '20px',
            padding: '18px 28px',
            background: theme.colors.surface,
            borderRadius: '12px',
            border: `1px solid ${theme.colors.glassBorder}`,
            boxShadow: theme.shadows.sm,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            {/* Golden Rule */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: `${theme.colors.primary}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9" />
                  <polyline points="21 3 21 9 15 9" />
                </svg>
              </div>
              <div>
                <p style={{
                  fontSize: '14px',
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.text,
                  margin: 0,
                }}>
                  Golden Rule: <span style={{ color: theme.colors.primary }}>Iterate!</span>
                </p>
                <p style={{
                  fontSize: '12px',
                  fontFamily: theme.fonts.body,
                  color: theme.colors.textMuted,
                  margin: '2px 0 0 0',
                }}>
                  Don't expect perfection on try #1
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              width: '1px',
              height: '36px',
              background: theme.colors.glassBorder,
              margin: '0 24px',
            }} />

            {/* Common Mistakes */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flex: 1,
            }}>
              <span style={{
                fontSize: '11px',
                fontFamily: theme.fonts.body,
                fontWeight: 600,
                color: theme.colors.textDim,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}>
                Avoid
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <MistakeChip text="Being too vague" />
                <MistakeChip text="No context" />
                <MistakeChip text="Giving up after one try" />
                <MistakeChip text="Too many questions at once" />
              </div>
            </div>
          </div>
        </Appear>
      </div>
    </Slide>
  )
}

function MistakeChip({ text }: { text: string }) {
  return (
    <span style={{
      fontSize: '11px',
      fontFamily: theme.fonts.body,
      color: theme.colors.textMuted,
      background: theme.colors.surfaceLight,
      padding: '6px 12px',
      borderRadius: '6px',
    }}>
      {text}
    </span>
  )
}
