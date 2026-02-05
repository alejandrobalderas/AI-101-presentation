import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

interface ContextWindowVizProps {
  maxTokens: number
  usedTokens: number
  label?: string
}

export function ContextWindowViz({ maxTokens, usedTokens, label }: ContextWindowVizProps) {
  const percentage = (usedTokens / maxTokens) * 100

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <div style={{
          marginBottom: '6px',
          fontSize: '14px',
          color: theme.colors.textMuted
        }}>
          {label}
        </div>
      )}
      <div style={{
        width: '100%',
        height: '32px',
        background: theme.colors.surface,
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: percentage > 90
              ? theme.colors.error
              : percentage > 70
                ? theme.colors.warning
                : theme.colors.primary,
            borderRadius: '6px',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: theme.fonts.mono,
          fontSize: '12px',
          fontWeight: 500,
        }}>
          {usedTokens.toLocaleString()} / {maxTokens.toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export function ContextWindowGrid({ totalSlots = 20, filledSlots = 0 }: { totalSlots?: number, filledSlots?: number }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: '3px',
      maxWidth: '400px',
    }}>
      {Array.from({ length: totalSlots }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: index < filledSlots ? theme.colors.primary : theme.colors.surface
          }}
          transition={{
            delay: index * 0.03,
            duration: 0.2,
          }}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '3px',
            border: `1px solid ${theme.colors.surfaceLight}`,
          }}
        />
      ))}
    </div>
  )
}
