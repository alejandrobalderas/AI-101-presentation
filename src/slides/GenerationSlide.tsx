import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const prompt = "The capital of France is "

const probabilities = [
  { word: "Paris", prob: 92, example: "Paris." },
  { word: "the", prob: 4, example: "the city of lights..." },
  { word: "a", prob: 2, example: "a beautiful city..." },
  { word: "located", prob: 1, example: "located in Europe..." },
]

export function GenerationSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px 32px',
      }}>
        {/* Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '24px' }}
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
            How It Works
          </p>
          <h2 style={{
            fontSize: '44px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            The Generation <span style={{ color: theme.colors.primary }}>Game</span>
          </h2>
          <p style={{
            fontSize: '15px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '8px',
          }}>
            AI creates responses <strong style={{ color: theme.colors.text }}>one word at a time</strong>, always picking the most likely next word
          </p>
        </motion.div>

        {/* Main content area */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* Generation example + Probability bars side by side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.8fr',
            gap: '24px',
            alignItems: 'stretch',
          }}>
            {/* Left: Generation example */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                background: theme.colors.surface,
                padding: '24px',
                borderRadius: '14px',
                border: `1px solid ${theme.colors.glassBorder}`,
                boxShadow: theme.shadows.md,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <p style={{
                fontSize: '10px',
                fontFamily: theme.fonts.body,
                color: theme.colors.textDim,
                margin: '0 0 12px 0',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                Generating response...
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '20px',
                  fontFamily: theme.fonts.mono,
                  color: theme.colors.textMuted,
                  whiteSpace: 'pre',
                }}>
                  {prompt}
                </span>
                <Appear>
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: '20px',
                      color: theme.colors.success,
                      fontWeight: 700,
                    }}
                  >
                    Paris.
                  </motion.span>
                </Appear>
              </div>
            </motion.div>

            {/* Right: Probability visualization - the HERO */}
            <Appear>
              <div style={{
                background: theme.colors.surface,
                padding: '24px 32px',
                borderRadius: '14px',
                border: `2px solid ${theme.colors.primary}30`,
                boxShadow: theme.shadows.md,
              }}>
                <p style={{
                  fontSize: '13px',
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  color: theme.colors.text,
                  margin: '0 0 20px 0',
                }}>
                  For each position, AI considers possible next words:
                </p>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  justifyContent: 'space-between',
                }}>
                  {probabilities.map((item, idx) => (
                    <motion.div
                      key={item.word}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                      }}
                    >
                      {/* Probability label */}
                      <span style={{
                        fontSize: '16px',
                        fontFamily: theme.fonts.heading,
                        color: idx === 0 ? theme.colors.primary : theme.colors.textMuted,
                        fontWeight: 700,
                        marginBottom: '8px',
                      }}>
                        {item.prob}%
                      </span>

                      {/* Bar */}
                      <div style={{
                        width: '100%',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: idx * 0.1 + 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            width: '80%',
                            height: `${Math.max(item.prob, 8)}px`,
                            background: idx === 0 ? theme.colors.primary : theme.colors.surfaceHover,
                            borderRadius: '6px 6px 0 0',
                            transformOrigin: 'bottom',
                          }}
                        />
                      </div>

                      {/* Word label */}
                      <span style={{
                        fontSize: '15px',
                        fontFamily: theme.fonts.mono,
                        color: idx === 0 ? theme.colors.primary : theme.colors.text,
                        fontWeight: idx === 0 ? 700 : 500,
                        marginTop: '12px',
                        padding: idx === 0 ? '6px 14px' : '6px 0',
                        background: idx === 0 ? `${theme.colors.primary}12` : 'transparent',
                        borderRadius: '8px',
                      }}>
                        {item.word}
                      </span>

                      {/* Example completion */}
                      <span style={{
                        fontSize: '11px',
                        fontFamily: theme.fonts.mono,
                        color: theme.colors.textDim,
                        marginTop: '6px',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        fontStyle: 'italic',
                      }}>
                        {item.example}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Appear>
          </div>

          {/* Bottom: Unified footer strip */}
          <Appear>
            <div style={{
              padding: '18px 28px',
              background: theme.colors.surface,
              borderRadius: '12px',
              border: `1px solid ${theme.colors.glassBorder}`,
              boxShadow: theme.shadows.sm,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {/* Key Insight */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: `${theme.colors.warning}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.colors.warning} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
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
                    Key Insight: <span style={{ color: theme.colors.warning }}>Plausible ≠ True</span>
                  </p>
                  <p style={{
                    fontSize: '12px',
                    fontFamily: theme.fonts.body,
                    color: theme.colors.textMuted,
                    margin: '2px 0 0 0',
                  }}>
                    AI picks likely words, not verified facts
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

              {/* Implications */}
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
                  This means
                </span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <InsightChip text="Answers vary each time" />
                  <InsightChip text="Can be confidently wrong" />
                  <InsightChip text="Always verify facts" />
                </div>
              </div>
            </div>
          </Appear>
        </div>
      </div>
    </Slide>
  )
}

function InsightChip({ text }: { text: string }) {
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
