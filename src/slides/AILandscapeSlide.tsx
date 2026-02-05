import { Slide, Appear } from 'spectacle'
import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

const aiCategories = [
  {
    title: 'Language AI',
    examples: 'ChatGPT, Claude, Gemini',
    description: 'Text conversations & writing',
    icon: ChatIcon,
    highlight: true,
  },
  {
    title: 'Image AI',
    examples: 'Midjourney, DALL-E, Stable Diffusion',
    description: 'Generate & edit images',
    icon: ImageIcon,
  },
  {
    title: 'Audio AI',
    examples: 'ElevenLabs, Suno, Udio',
    description: 'Voice & music generation',
    icon: AudioIcon,
  },
  {
    title: 'Video AI',
    examples: 'Sora, Runway, Pika',
    description: 'Generate & edit video',
    icon: VideoIcon,
  },
]

export function AILandscapeSlide() {
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
            The Big Picture
          </p>
          <h2 style={{
            fontSize: '44px',
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            color: theme.colors.text,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            The AI <span style={{ color: theme.colors.primary }}>Landscape</span>
          </h2>
          <p style={{
            fontSize: '16px',
            fontFamily: theme.fonts.body,
            color: theme.colors.textMuted,
            marginTop: '8px',
          }}>
            AI isn't one thing — it's many specialized tools for different creative tasks
          </p>
        </motion.div>

        {/* Main content: 4 cards in a row */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            alignItems: 'stretch',
          }}>
            {aiCategories.map((category, idx) => (
              <Appear key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: category.highlight
                      ? `linear-gradient(135deg, ${theme.colors.primary}08 0%, ${theme.colors.primary}03 100%)`
                      : theme.colors.surface,
                    padding: '28px 24px',
                    borderRadius: '16px',
                    border: category.highlight
                      ? `2px solid ${theme.colors.primary}`
                      : `1px solid ${theme.colors.glassBorder}`,
                    boxShadow: category.highlight ? theme.shadows.lg : theme.shadows.sm,
                    opacity: category.highlight ? 1 : 0.7,
                  }}
                >
                  {/* Focus badge */}
                  {category.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: theme.colors.primary,
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      fontFamily: theme.fonts.body,
                      fontWeight: 700,
                      color: 'white',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      Today's Focus
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: category.highlight ? `${theme.colors.primary}15` : theme.colors.surfaceLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}>
                    <category.icon color={category.highlight ? theme.colors.primary : theme.colors.textMuted} />
                  </div>

                  {/* Content */}
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    color: category.highlight ? theme.colors.text : theme.colors.textMuted,
                    margin: '0 0 8px 0',
                  }}>
                    {category.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    fontFamily: theme.fonts.body,
                    color: theme.colors.textMuted,
                    margin: '0 0 16px 0',
                    lineHeight: 1.4,
                  }}>
                    {category.description}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    fontFamily: theme.fonts.mono,
                    color: theme.colors.textDim,
                    margin: 0,
                    marginTop: 'auto',
                    lineHeight: 1.6,
                  }}>
                    {category.examples}
                  </p>
                </motion.div>
              </Appear>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <Appear>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              marginTop: '24px',
              textAlign: 'center',
            }}
          >
            <p style={{
              fontSize: '15px',
              fontFamily: theme.fonts.body,
              color: theme.colors.textMuted,
              margin: 0,
            }}>
              Today we'll focus on <strong style={{ color: theme.colors.primary, fontWeight: 600 }}>Language AI</strong> — the technology powering ChatGPT, Claude, and similar tools
            </p>
          </motion.div>
        </Appear>
      </div>
    </Slide>
  )
}

function ChatIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ImageIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

function AudioIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function VideoIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}
