import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

interface Token {
  text: string
  id?: number
}

interface TokenDisplayProps {
  tokens: Token[]
  animated?: boolean
  showIds?: boolean
}

const tokenColors = [
  '#6366f1', // indigo
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#f59e0b', // amber
  '#10b981', // emerald
  '#22d3ee', // cyan
]

export function TokenDisplay({ tokens, animated = true, showIds = false }: TokenDisplayProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
      {tokens.map((token, index) => (
        <motion.div
          key={index}
          initial={animated ? { opacity: 0, scale: 0.8, y: 10 } : false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.3 }}
          style={{
            background: tokenColors[index % tokenColors.length],
            padding: '6px 12px',
            borderRadius: '6px',
            fontFamily: theme.fonts.mono,
            fontSize: '15px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <span>{token.text}</span>
          {showIds && token.id !== undefined && (
            <span style={{ fontSize: '10px', opacity: 0.7 }}>ID: {token.id}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}

export function TokenStream({ tokens, speed = 500 }: { tokens: Token[], speed?: number }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
      {tokens.map((token, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: (index * speed) / 1000,
            type: 'spring',
            stiffness: 200,
            damping: 15
          }}
          style={{
            background: tokenColors[index % tokenColors.length],
            padding: '6px 12px',
            borderRadius: '6px',
            fontFamily: theme.fonts.mono,
            fontSize: '15px',
            color: '#fff',
          }}
        >
          {token.text}
        </motion.div>
      ))}
    </div>
  )
}
