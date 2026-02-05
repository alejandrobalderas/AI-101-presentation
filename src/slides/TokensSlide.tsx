import { Slide, Appear, Stepper } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

interface TokenExample {
  text: string
  tokens: string[]
  colors: string[]
}

const tokenExamples: TokenExample[] = [
  { text: 'Hello', tokens: ['Hello'], colors: [theme.colors.primary] },
  { text: 'Hello world', tokens: ['Hello', ' world'], colors: [theme.colors.primary, theme.colors.success] },
  { text: 'ChatGPT', tokens: ['Chat', 'G', 'PT'], colors: [theme.colors.primary, theme.colors.warning, theme.colors.success] },
  { text: 'I love AI!', tokens: ['I', ' love', ' AI', '!'], colors: [theme.colors.primary, theme.colors.success, theme.colors.warning, theme.colors.error] },
]

export function TokensSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px 32px',
      }}>
        {/* Header - left aligned */}
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
            Under the Hood
          </p>
          <h2 style={{
            fontSize: '44px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            How AI <span style={{ color: theme.colors.primary }}>Reads</span> Your Message
          </h2>
          <p style={{
            fontSize: '15px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '8px',
          }}>
            AI doesn't see words — it sees <strong style={{ color: theme.colors.text }}>tokens</strong>, small chunks of text it processes
          </p>
        </motion.div>

        {/* Main content: Token visualization as HERO */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {/* Token Visualization - the interactive star */}
          <div style={{
            background: theme.colors.surface,
            padding: '28px 36px',
            borderRadius: '16px',
            border: `2px solid ${theme.colors.primary}30`,
            boxShadow: theme.shadows.lg,
          }}>
            <p style={{
              fontSize: '13px',
              fontFamily: theme.fonts.body,
              fontWeight: 600,
              color: theme.colors.text,
              margin: '0 0 20px 0',
            }}>
              See how text breaks into tokens:
            </p>

            <Stepper values={tokenExamples}>
              {(value, step) => {
                const example = (value as TokenExample) ?? tokenExamples[0]
                return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                  }}>
                    {/* Original text */}
                    <div style={{ flex: '0 0 auto' }}>
                      <p style={{
                        fontSize: '10px',
                        fontFamily: theme.fonts.body,
                        color: theme.colors.textDim,
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}>
                        You type:
                      </p>
                      <p style={{
                        fontSize: '28px',
                        fontFamily: theme.fonts.mono,
                        color: theme.colors.text,
                        margin: 0,
                        fontWeight: 500,
                      }}>
                        "{example.text}"
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: theme.colors.textDim,
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '2px',
                        background: theme.colors.textDim,
                      }} />
                      <svg width="12" height="14" viewBox="0 0 12 14">
                        <path d="M1 1l9 6-9 6" stroke={theme.colors.textDim} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>

                    {/* Tokens */}
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontSize: '10px',
                        fontFamily: theme.fonts.body,
                        color: theme.colors.textDim,
                        margin: '0 0 6px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}>
                        AI sees:
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {example.tokens.map((token: string, idx: number) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                              display: 'inline-block',
                              padding: '10px 18px',
                              background: `${example.colors[idx]}15`,
                              border: `2px solid ${example.colors[idx]}`,
                              borderRadius: '10px',
                              fontSize: '20px',
                              fontFamily: theme.fonts.mono,
                              fontWeight: 600,
                              color: example.colors[idx],
                            }}
                          >
                            {token}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Token count */}
                    <div style={{
                      background: theme.colors.surfaceLight,
                      padding: '12px 20px',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}>
                      <p style={{
                        fontSize: '28px',
                        fontFamily: theme.fonts.heading,
                        fontWeight: 800,
                        color: theme.colors.primary,
                        margin: 0,
                      }}>
                        {example.tokens.length}
                      </p>
                      <p style={{
                        fontSize: '11px',
                        fontFamily: theme.fonts.body,
                        color: theme.colors.textMuted,
                        margin: '2px 0 0 0',
                      }}>
                        token{example.tokens.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}}
            </Stepper>

            {/* Navigation hint */}
            <p style={{
              fontSize: '11px',
              fontFamily: theme.fonts.body,
              color: theme.colors.textDim,
              margin: '20px 0 0 0',
              textAlign: 'center',
            }}>
              Press → to see more examples
            </p>
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
              {/* Rule of Thumb */}
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
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
                    Rule of Thumb: <span style={{ color: theme.colors.primary }}>1 token ≈ ¾ word</span>
                  </p>
                  <p style={{
                    fontSize: '12px',
                    fontFamily: theme.fonts.body,
                    color: theme.colors.textMuted,
                    margin: '2px 0 0 0',
                  }}>
                    100 words ≈ 130 tokens • 1 page ≈ 500 tokens
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

              {/* Why it matters */}
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
                  Why it matters
                </span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <ReasonChip icon="💰" text="You pay per token" />
                  <ReasonChip icon="📏" text="Context has limits" />
                  <ReasonChip icon="⚡" text="More = slower" />
                </div>
              </div>
            </div>
          </Appear>
        </div>
      </div>
    </Slide>
  )
}

function ReasonChip({ icon, text }: { icon: string; text: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      background: theme.colors.surfaceLight,
      borderRadius: '6px',
    }}>
      <span style={{ fontSize: '14px' }}>{icon}</span>
      <span style={{
        fontSize: '11px',
        fontFamily: theme.fonts.body,
        color: theme.colors.textMuted,
      }}>
        {text}
      </span>
    </div>
  )
}
