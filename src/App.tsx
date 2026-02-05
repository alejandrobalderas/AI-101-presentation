import { Deck } from 'spectacle'
import { useState, useEffect, useCallback } from 'react'
import { theme } from './styles/theme'
import { NavigationBar } from './components/NavigationBar'

// Import slides
import { TitleSlide } from './slides/TitleSlide'
import { AILandscapeSlide } from './slides/AILandscapeSlide'
import { SimpleTruthSlide } from './slides/SimpleTruthSlide'
import { TokensSlide } from './slides/TokensSlide'
import { GenerationSlide } from './slides/GenerationSlide'
import { ContextRotSlide } from './slides/ContextRotSlide'
import { PromptingSlide } from './slides/PromptingSlide'
import { UseCasesSlide } from './slides/UseCasesSlide'
import { TakeawaysSlide } from './slides/TakeawaysSlide'

const spectacleTheme = {
  colors: {
    primary: theme.colors.text,
    secondary: theme.colors.textMuted,
    tertiary: theme.colors.background,
    quaternary: theme.colors.primary,
  },
  fonts: {
    header: theme.fonts.heading,
    text: theme.fonts.body,
    monospace: theme.fonts.mono,
  },
  fontSizes: {
    h1: '72px',
    h2: '56px',
    h3: '40px',
    text: '24px',
    monospace: '18px',
  },
}

const TOTAL_SLIDES = 9

// Fullscreen toggle hook
function useFullscreen() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        // Don't trigger if user is typing in an input
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return
        }

        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {
            // Fullscreen request failed, ignore
          })
        } else {
          document.exitFullscreen().catch(() => {
            // Exit fullscreen failed, ignore
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}

// Standalone navigation component using URL query params
function Navigation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const updateSlideFromURL = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    const slideIndex = params.get('slideIndex')
    if (slideIndex !== null) {
      setCurrentSlide(parseInt(slideIndex, 10))
    } else {
      setCurrentSlide(0)
    }
  }, [])

  useEffect(() => {
    // Initial check
    updateSlideFromURL()

    // Poll for URL changes since popstate doesn't catch all Spectacle navigation
    const interval = setInterval(updateSlideFromURL, 100)

    // Also listen for popstate
    window.addEventListener('popstate', updateSlideFromURL)

    return () => {
      clearInterval(interval)
      window.removeEventListener('popstate', updateSlideFromURL)
    }
  }, [updateSlideFromURL])

  const goToSlide = (index: number) => {
    const params = new URLSearchParams(window.location.search)
    params.set('slideIndex', index.toString())
    params.set('stepIndex', '0')
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
    // Dispatch popstate to trigger Spectacle's navigation
    window.dispatchEvent(new PopStateEvent('popstate'))
    setCurrentSlide(index)
  }

  return (
    <NavigationBar
      currentSlide={currentSlide}
      totalSlides={TOTAL_SLIDES}
      goToSlide={goToSlide}
    />
  )
}

function App() {
  useFullscreen()

  return (
    <>
      <Deck theme={spectacleTheme} template={() => null}>
        <TitleSlide />
        <AILandscapeSlide />
        <SimpleTruthSlide />
        <TokensSlide />
        <GenerationSlide />
        <ContextRotSlide />
        <PromptingSlide />
        <UseCasesSlide />
        <TakeawaysSlide />
      </Deck>
      <Navigation />
    </>
  )
}

export default App
