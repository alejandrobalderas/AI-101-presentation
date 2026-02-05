import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const takeaways = [
  { number: '1', title: 'AI is sophisticated autocomplete', description: 'Predicts text, not truth' },
  { number: '2', title: 'How you prompt matters', description: 'Be specific, give context' },
  { number: '3', title: 'Know the limits', description: 'Context windows, knowledge cutoffs' },
  { number: '4', title: 'Use it for the right tasks', description: 'Drafting, not final decisions' },
  { number: '5', title: 'Keep your voice', description: 'AI assists, you decide' },
]

export function TakeawaysSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px 32px',
      }}>
        {/* Header - centered for finale impact */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '24px' }}
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
            Wrapping Up
          </p>
          <h2 style={{
            fontSize: '52px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.03em',
          }}>
            Key <span style={{ color: theme.colors.primary }}>Takeaways</span>
          </h2>
          <p style={{
            fontSize: '16px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '8px',
          }}>
            AI as your creative partner — not your replacement
          </p>
        </motion.div>

        {/* Main: 5 takeaway cards in a horizontal row */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '16px',
          }}>
            {takeaways.map((item, idx) => (
              <Appear key={item.number}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: theme.colors.surface,
                    padding: '24px 20px',
                    borderRadius: '16px',
                    border: `1px solid ${theme.colors.glassBorder}`,
                    boxShadow: theme.shadows.md,
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* Large number */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: theme.colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: theme.shadows.md,
                  }}>
                    <span style={{
                      fontSize: '20px',
                      fontFamily: theme.fonts.heading,
                      fontWeight: 800,
                      color: 'white',
                    }}>
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ marginTop: '16px' }}>
                    <p style={{
                      fontSize: '15px',
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      color: theme.colors.text,
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      fontFamily: theme.fonts.body,
                      color: theme.colors.textMuted,
                      margin: '8px 0 0 0',
                      lineHeight: 1.4,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Appear>
            ))}
          </div>
        </div>

        {/* Bottom: Mindset shift + Q&A */}
        <Appear>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '24px',
            marginTop: '20px',
          }}>
            {/* Mindset shift */}
            <div style={{
              background: theme.colors.surface,
              padding: '20px 28px',
              borderRadius: '16px',
              border: `1px solid ${theme.colors.glassBorder}`,
              boxShadow: theme.shadows.sm,
            }}>
              <p style={{
                fontSize: '11px',
                fontFamily: theme.fonts.body,
                fontWeight: 600,
                color: theme.colors.textDim,
                margin: '0 0 14px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                The Mindset Shift
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}>
                {/* Old mindset */}
                <div style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: theme.colors.surfaceLight,
                  borderRadius: '10px',
                  opacity: 0.7,
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: theme.fonts.body,
                    color: theme.colors.textDim,
                    margin: 0,
                    textDecoration: 'line-through',
                  }}>
                    "Will AI replace me?"
                  </p>
                </div>

                {/* Arrow */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke={theme.colors.primary}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* New mindset */}
                <div style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: `${theme.colors.primary}10`,
                  borderRadius: '10px',
                  borderLeft: `3px solid ${theme.colors.primary}`,
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: theme.fonts.heading,
                    fontWeight: 600,
                    color: theme.colors.primary,
                    margin: 0,
                  }}>
                    "How can AI help me do more?"
                  </p>
                </div>
              </div>
            </div>

            {/* Q&A Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}12 0%, ${theme.colors.primary}06 100%)`,
                padding: '24px 28px',
                borderRadius: '16px',
                border: `2px solid ${theme.colors.primary}30`,
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: theme.colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontSize: '28px' }}>🙋</span>
              </div>
              <div>
                <p style={{
                  fontSize: '20px',
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.text,
                  margin: 0,
                }}>
                  Questions?
                </p>
                <p style={{
                  fontSize: '14px',
                  fontFamily: theme.fonts.body,
                  color: theme.colors.textMuted,
                  margin: '4px 0 0 0',
                }}>
                  Let's discuss!
                </p>
              </div>
            </motion.div>
          </div>
        </Appear>
      </div>
    </Slide>
  )
}
