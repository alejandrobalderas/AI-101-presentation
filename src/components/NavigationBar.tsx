import { motion } from 'framer-motion'
import { theme } from '../styles/theme'

interface NavigationBarProps {
  currentSlide: number
  totalSlides: number
  goToSlide: (slideIndex: number) => void
}

export function NavigationBar({
  currentSlide,
  totalSlides,
  goToSlide,
}: NavigationBarProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  const handlePrevious = () => {
    if (!isFirst) {
      goToSlide(currentSlide - 1)
    }
  }

  const handleNext = () => {
    if (!isLast) {
      goToSlide(currentSlide + 1)
    }
  }

  const handleRestart = () => {
    goToSlide(0)
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(250, 248, 245, 0.95)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderTop: `1px solid ${theme.colors.glassBorder}`,
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      zIndex: 1000,
    }}>
      {/* Restart Button */}
      <NavButton
        onClick={handleRestart}
        disabled={isFirst}
        title="Restart (Home)"
      >
        <RestartIcon />
      </NavButton>

      {/* Previous Button */}
      <NavButton
        onClick={handlePrevious}
        disabled={isFirst}
        title="Previous (←)"
      >
        <ChevronLeftIcon />
      </NavButton>

      {/* Progress Bar */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          flex: 1,
          height: '4px',
          background: theme.colors.surfaceLight,
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: '100%',
              background: theme.colors.primary,
              borderRadius: '2px',
            }}
          />
        </div>
        <span style={{
          fontFamily: theme.fonts.mono,
          fontSize: '12px',
          color: theme.colors.textMuted,
          minWidth: '50px',
          textAlign: 'center',
          fontWeight: 500,
        }}>
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      {/* Next Button */}
      <NavButton
        onClick={handleNext}
        disabled={isLast}
        title="Next (→)"
      >
        <ChevronRightIcon />
      </NavButton>

      {/* Fullscreen hint */}
      <div style={{
        fontSize: '11px',
        fontFamily: theme.fonts.body,
        color: theme.colors.textDim,
        marginLeft: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        Press{' '}
        <kbd style={{
          background: theme.colors.surfaceLight,
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '10px',
          fontFamily: theme.fonts.mono,
          border: `1px solid ${theme.colors.surfaceHover}`,
          color: theme.colors.textMuted,
        }}>
          F
        </kbd>
        {' '}for fullscreen
      </div>
    </div>
  )
}

function NavButton({
  children,
  onClick,
  disabled,
  title,
}: {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  title?: string
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      title={title}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      style={{
        width: '34px',
        height: '34px',
        borderRadius: '8px',
        border: `1px solid ${disabled ? 'transparent' : theme.colors.surfaceHover}`,
        background: disabled ? theme.colors.surfaceLight : theme.colors.surface,
        color: disabled ? theme.colors.textSubtle : theme.colors.textMuted,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: disabled ? 'none' : theme.shadows.sm,
      }}
    >
      {children}
    </motion.button>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function RestartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  )
}
