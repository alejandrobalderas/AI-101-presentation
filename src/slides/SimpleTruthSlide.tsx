import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

export function SimpleTruthSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 60px 32px',
      }}>
        {/* Header - centered for impact */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
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
            The Core Concept
          </p>
          <h2 style={{
            fontSize: '48px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.03em',
          }}>
            The Simple <span style={{ color: theme.colors.primary }}>Truth</span>
          </h2>
        </motion.div>

        {/* HERO: Central Flow Diagram - the main attraction */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* The key insight - positioned above the flow */}
          <Appear>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}10 0%, ${theme.colors.primary}05 100%)`,
                padding: '16px 32px',
                borderRadius: '50px',
                marginBottom: '32px',
              }}
            >
              <p style={{
                fontSize: '20px',
                fontFamily: theme.fonts.heading,
                fontWeight: 600,
                color: theme.colors.text,
                margin: 0,
                textAlign: 'center',
              }}>
                An LLM is{' '}
                <span style={{ color: theme.colors.primary, fontWeight: 700 }}>
                  sophisticated autocomplete
                </span>
              </p>
            </motion.div>
          </Appear>

          {/* Horizontal Flow - HERO element */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            <InputBox />
            <HorizontalArrow delay={0.5} />
            <ModelBox />
            <HorizontalArrow delay={0.7} />
            <OutputBox />
          </div>

          {/* Phone analogy - subtle reference below */}
          <Appear>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: theme.colors.surfaceLight,
                borderRadius: '8px',
              }}
            >
              <span style={{ fontSize: '20px' }}>📱</span>
              <p style={{
                fontSize: '14px',
                fontFamily: theme.fonts.body,
                color: theme.colors.textMuted,
                margin: 0,
                fontStyle: 'italic',
              }}>
                Like autocomplete on your phone, but trained on the entire internet
              </p>
            </motion.div>
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
                background: `${theme.colors.primary}12`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
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
                  Remember: <span style={{ color: theme.colors.primary }}>Pattern Matching</span>
                </p>
                <p style={{
                  fontSize: '12px',
                  fontFamily: theme.fonts.body,
                  color: theme.colors.textMuted,
                  margin: '2px 0 0 0',
                }}>
                  It predicts what comes next based on patterns
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

            {/* What it's NOT */}
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
                Not
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <NotChip text="A search engine" />
                <NotChip text="A database" />
                <NotChip text="Actually thinking" />
              </div>
            </div>
          </div>
        </Appear>
      </div>
    </Slide>
  )
}

function InputBox() {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: theme.colors.surface,
        padding: '24px 28px',
        borderRadius: '16px',
        border: `2px solid ${theme.colors.primary}`,
        boxShadow: theme.shadows.lg,
        minWidth: '220px',
        textAlign: 'center',
      }}
    >
      <p style={{
        fontSize: '11px',
        fontFamily: theme.fonts.body,
        color: theme.colors.primary,
        margin: '0 0 10px 0',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        Text In
      </p>
      <p style={{
        fontSize: '14px',
        fontFamily: theme.fonts.mono,
        color: theme.colors.text,
        margin: 0,
        lineHeight: 1.4,
      }}>
        "Help me write<br />a blog post..."
      </p>
    </motion.div>
  )
}

function ModelBox() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: theme.colors.primary,
        padding: '32px 48px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: theme.shadows.xl,
        position: 'relative',
      }}
    >
      {/* Decorative rings */}
      <div style={{
        position: 'absolute',
        inset: '-10px',
        border: `2px solid ${theme.colors.primary}30`,
        borderRadius: '26px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: '-20px',
        border: `1px solid ${theme.colors.primary}15`,
        borderRadius: '32px',
        pointerEvents: 'none',
      }} />

      <p style={{
        fontSize: '36px',
        fontFamily: theme.fonts.heading,
        fontWeight: 800,
        color: 'white',
        margin: 0,
        letterSpacing: '-0.02em',
      }}>
        LLM
      </p>
      <p style={{
        fontSize: '12px',
        fontFamily: theme.fonts.body,
        color: 'rgba(255,255,255,0.8)',
        margin: '6px 0 0 0',
        letterSpacing: '0.02em',
      }}>
        Large Language Model
      </p>
    </motion.div>
  )
}

function OutputBox() {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: theme.colors.surface,
        padding: '24px 28px',
        borderRadius: '16px',
        border: `2px solid ${theme.colors.success}`,
        boxShadow: theme.shadows.lg,
        minWidth: '220px',
        textAlign: 'center',
      }}
    >
      <p style={{
        fontSize: '11px',
        fontFamily: theme.fonts.body,
        color: theme.colors.success,
        margin: '0 0 10px 0',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        Text Out
      </p>
      <p style={{
        fontSize: '14px',
        fontFamily: theme.fonts.mono,
        color: theme.colors.text,
        margin: 0,
        lineHeight: 1.4,
      }}>
        "Here's your<br />blog post..."
      </p>
    </motion.div>
  )
}

function HorizontalArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <div style={{
        width: '40px',
        height: '2px',
        background: theme.colors.textDim,
        borderRadius: '1px',
      }} />
      <svg width="10" height="12" viewBox="0 0 10 12">
        <path
          d="M1 1l7 5-7 5"
          stroke={theme.colors.textDim}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

function NotChip({ text }: { text: string }) {
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
