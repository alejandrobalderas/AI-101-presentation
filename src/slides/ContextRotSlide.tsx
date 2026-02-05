import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

export function ContextRotSlide() {
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
          style={{ marginBottom: '28px' }}
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
            The Memory Problem
          </p>
          <h2 style={{
            fontSize: '44px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Context <span style={{ color: theme.colors.primary }}>Rot</span>
          </h2>
          <p style={{
            fontSize: '15px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '8px',
          }}>
            Two problems happen as conversations grow longer
          </p>
        </motion.div>

        {/* Main: Two columns with clean visualizations */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}>
          {/* Left: Position Effect - Bar chart style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              background: theme.colors.surface,
              borderRadius: '16px',
              padding: '28px',
              border: `1px solid ${theme.colors.glassBorder}`,
              boxShadow: theme.shadows.sm,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={{
              fontSize: '18px',
              fontFamily: theme.fonts.heading,
              fontWeight: 700,
              color: theme.colors.text,
              margin: '0 0 8px 0',
            }}>
              The "Lost Middle"
            </h3>
            <p style={{
              fontSize: '13px',
              fontFamily: theme.fonts.body,
              color: theme.colors.textMuted,
              margin: '0 0 24px 0',
            }}>
              Where AI pays attention in your conversation
            </p>

            {/* Clean bar visualization */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {/* Y-axis label */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  color: theme.colors.textDim,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  AI Attention Level
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '20px',
                padding: '10px 0',
              }}>
                <AttentionBar label="Start" value={95} delay={0.3} />
                <AttentionBar label="Middle" value={35} delay={0.5} isLow />
                <AttentionBar label="End" value={85} delay={0.7} />
              </div>
            </div>

            {/* Insight */}
            <div style={{
              padding: '14px 18px',
              background: theme.colors.surfaceLight,
              borderRadius: '10px',
              marginTop: 'auto',
            }}>
              <p style={{
                fontSize: '13px',
                fontFamily: theme.fonts.body,
                color: theme.colors.text,
                margin: 0,
              }}>
                <strong style={{ color: theme.colors.primary }}>Middle content gets forgotten.</strong>
                {' '}Put key info at the start or end.
              </p>
            </div>
          </motion.div>

          {/* Right: Length Effect - Degradation bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              background: theme.colors.surface,
              borderRadius: '16px',
              padding: '28px',
              border: `1px solid ${theme.colors.glassBorder}`,
              boxShadow: theme.shadows.sm,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3 style={{
              fontSize: '18px',
              fontFamily: theme.fonts.heading,
              fontWeight: 700,
              color: theme.colors.text,
              margin: '0 0 8px 0',
            }}>
              Quality Drops Over Time
            </h3>
            <p style={{
              fontSize: '13px',
              fontFamily: theme.fonts.body,
              color: theme.colors.textMuted,
              margin: '0 0 24px 0',
            }}>
              Longer conversations = worse AI responses
            </p>

            {/* Quality degradation visualization */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {/* Column headers */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '12px',
                paddingBottom: '8px',
                borderBottom: `1px solid ${theme.colors.glassBorder}`,
              }}>
                <span style={{
                  fontSize: '10px',
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  color: theme.colors.textDim,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  width: '70px',
                  textAlign: 'right',
                }}>
                  Chat Length
                </span>
                <span style={{
                  fontSize: '10px',
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  color: theme.colors.textDim,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  flex: 1,
                  textAlign: 'center',
                }}>
                  Response Quality
                </span>
                <span style={{
                  width: '45px',
                }} />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                <QualityRow quality={95} label="Short" delay={0.4} />
                <QualityRow quality={75} label="Medium" delay={0.5} />
                <QualityRow quality={55} label="Long" delay={0.6} />
                <QualityRow quality={35} label="Very long" delay={0.7} />
              </div>
            </div>

            {/* Insight */}
            <div style={{
              padding: '14px 18px',
              background: theme.colors.surfaceLight,
              borderRadius: '10px',
              marginTop: 'auto',
            }}>
              <p style={{
                fontSize: '13px',
                fontFamily: theme.fonts.body,
                color: theme.colors.text,
                margin: 0,
              }}>
                <strong style={{ color: theme.colors.primary }}>Longer = lower quality.</strong>
                {' '}Start fresh for new topics.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
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
                  The Fix: <span style={{ color: theme.colors.primary }}>Keep It Short & Fresh</span>
                </p>
                <p style={{
                  fontSize: '12px',
                  fontFamily: theme.fonts.body,
                  color: theme.colors.textMuted,
                  margin: '2px 0 0 0',
                }}>
                  Shorter, focused conversations = better AI output
                </p>
              </div>
            </div>

            <div style={{
              width: '1px',
              height: '36px',
              background: theme.colors.glassBorder,
              margin: '0 24px',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span style={{
                fontSize: '11px',
                fontFamily: theme.fonts.body,
                fontWeight: 600,
                color: theme.colors.textDim,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Tips
              </span>
              <TipChip text="Key info at start/end" />
              <TipChip text="New topic → new chat" />
            </div>
          </div>
        </Appear>
      </div>
    </Slide>
  )
}

function AttentionBar({
  label, value, delay, isLow,
}: {
  label: string; value: number; delay: number; isLow?: boolean
}) {
  const maxHeight = 140
  const barHeight = (value / 100) * maxHeight
  const color = theme.colors.primary

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      width: '80px',
    }}>
      {/* Value */}
      <span style={{
        fontSize: '20px',
        fontFamily: theme.fonts.heading,
        fontWeight: 700,
        color: isLow ? theme.colors.textDim : color,
      }}>
        {value}%
      </span>

      {/* Bar */}
      <div style={{
        width: '100%',
        height: `${maxHeight}px`,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '48px',
            height: `${barHeight}px`,
            background: isLow ? `${color}25` : color,
            borderRadius: '8px 8px 4px 4px',
            transformOrigin: 'bottom',
            border: isLow ? `2px dashed ${color}50` : 'none',
          }}
        />
      </div>

      {/* Label */}
      <span style={{
        fontSize: '12px',
        fontFamily: theme.fonts.body,
        fontWeight: 600,
        color: isLow ? theme.colors.primary : theme.colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        {label}
      </span>
    </div>
  )
}

function QualityRow({
  quality, label, delay,
}: {
  quality: number; label: string; delay: number
}) {
  // Opacity based on quality - higher quality = more opaque
  const opacity = 0.3 + (quality / 100) * 0.7
  const color = theme.colors.primary

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}
    >
      {/* Label */}
      <span style={{
        fontSize: '11px',
        fontFamily: theme.fonts.body,
        fontWeight: 500,
        color: theme.colors.textMuted,
        width: '70px',
        textAlign: 'right',
      }}>
        {label}
      </span>

      {/* Bar container */}
      <div style={{
        flex: 1,
        height: '28px',
        background: theme.colors.surfaceLight,
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${quality}%`,
            background: color,
            opacity: opacity,
            borderRadius: '6px',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* Quality % */}
      <span style={{
        fontSize: '13px',
        fontFamily: theme.fonts.mono,
        fontWeight: 600,
        color: theme.colors.primary,
        opacity: opacity,
        width: '45px',
      }}>
        {quality}%
      </span>
    </motion.div>
  )
}

function TipChip({ text }: { text: string }) {
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
