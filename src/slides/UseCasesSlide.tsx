import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const greatFor = [
  { title: 'Brainstorming', description: 'Generate ideas, break creative blocks' },
  { title: 'Drafting', description: 'First drafts, outlines, structures' },
  { title: 'Research', description: 'Summarize, explain, gather info' },
  { title: 'Editing', description: 'Rewrite, shorten, adjust tone' },
  { title: 'Repurposing', description: 'Transform for different platforms' },
]

const keepHuman = [
  'Final creative decisions',
  'Personal stories & experiences',
  'Expert opinions in your field',
  'Current events & breaking news',
  'Fact-checking everything',
]

export function UseCasesSlide() {
  return (
    <Slide backgroundColor={theme.colors.background}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 72px',
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <p style={{
            fontSize: '11px',
            fontFamily: theme.fonts.body,
            fontWeight: 600,
            color: theme.colors.primary,
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
          }}>
            Practical Applications
          </p>
          <h2 style={{
            fontSize: '48px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Real Use Cases <span style={{ color: theme.colors.primary }}>for Creators</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '64px',
        }}>
          {/* Left: AI is Great For */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
                paddingBottom: '16px',
                borderBottom: `2px solid ${theme.colors.success}`,
              }}
            >
              <span style={{
                fontSize: '20px',
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                color: theme.colors.success,
              }}>
                AI is great for
              </span>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {greatFor.map((item, idx) => (
                <Appear key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{
                      fontSize: '14px',
                      fontFamily: theme.fonts.mono,
                      fontWeight: 500,
                      color: theme.colors.success,
                      minWidth: '24px',
                      paddingTop: '2px',
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p style={{
                        fontSize: '18px',
                        fontFamily: theme.fonts.heading,
                        fontWeight: 600,
                        color: theme.colors.text,
                        margin: 0,
                        lineHeight: 1.3,
                      }}>
                        {item.title}
                      </p>
                      <p style={{
                        fontSize: '14px',
                        fontFamily: theme.fonts.body,
                        color: theme.colors.textMuted,
                        margin: '4px 0 0 0',
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

          {/* Right: Keep Human */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
                paddingBottom: '16px',
                borderBottom: `2px solid ${theme.colors.warning}`,
              }}
            >
              <span style={{
                fontSize: '20px',
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                color: theme.colors.warning,
              }}>
                Keep human
              </span>
            </motion.div>

            <Appear>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {keepHuman.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.5, duration: 0.3 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: theme.colors.warning,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '16px',
                        fontFamily: theme.fonts.body,
                        color: theme.colors.text,
                        fontWeight: 500,
                      }}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom note */}
                <div style={{
                  marginTop: '32px',
                  padding: '20px 24px',
                  background: theme.colors.surfaceLight,
                  borderRadius: '12px',
                  borderLeft: `3px solid ${theme.colors.warning}`,
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: theme.fonts.body,
                    color: theme.colors.textMuted,
                    margin: 0,
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: theme.colors.text, fontWeight: 600 }}>Remember:</span> AI doesn't have your experiences, your audience knowledge, or your unique perspective.
                  </p>
                </div>
              </motion.div>
            </Appear>
          </div>
        </div>
      </div>
    </Slide>
  )
}
