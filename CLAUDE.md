# AI 101 Presentation Project

## Purpose

This is an interactive web-based presentation for an **AI 101 Live Workshop** hosted by Alejandro Balderas. The goal is to explain how Large Language Models (LLMs) work in digestible, beginner-friendly ways for content creators who want to understand AI without feeling overwhelmed.

**Core philosophy**: "You don't need to be an engineer to be a good driver, but understanding the basics helps."

## Workshop Details

- **Date**: February 6th, 2025
- **Time**: 12:00 PM ET | 9:00 AM PT | 6:00 PM CET
- **Audience**: Content creators curious about AI
- **Format**: Live workshop with Q&A

## Target Audience

People who:
- Are curious about AI but feel overwhelmed
- Have used ChatGPT a little but don't know about other AI tools
- Want practical help for content creation
- Want to become more efficient and organized in their workflow

**No prior AI knowledge needed.**

## Presentation Slides (9 total)

1. **Welcome & The Driver Analogy** - Set the tone, car analogy intro
2. **The AI Landscape** - Overview of AI types (Language, Image, Audio, Video)
3. **The Simple Truth** - What is an LLM? Text in → text out, sophisticated autocomplete
4. **How AI Reads Your Message** - Tokens explained simply (pricing & limits)
5. **The Generation Game** - How AI writes word-by-word, probability, hallucinations
6. **The Memory Problem** - Context windows, why AI "forgets"
7. **The Art of Prompting** - Practical prompting techniques with examples
8. **Real Use Cases for Creators** - What AI is great for vs. keep human
9. **Key Takeaways** - Summary, mindset shift, Q&A

## Technical Stack

- **React** with TypeScript
- **Vite** for development
- **Spectacle** for presentation slides
- **Framer Motion** for animations
- **Port**: 5000 (http://localhost:5000/)

## Project Structure

```
src/
├── App.tsx                # Main app with Deck and Navigation
├── components/
│   └── NavigationBar.tsx  # Progress bar with prev/next controls
├── slides/
│   ├── TitleSlide.tsx
│   ├── AILandscapeSlide.tsx
│   ├── SimpleTruthSlide.tsx
│   ├── TokensSlide.tsx
│   ├── GenerationSlide.tsx
│   ├── ContextRotSlide.tsx  # Memory/Context Window slide
│   ├── PromptingSlide.tsx
│   ├── UseCasesSlide.tsx
│   └── TakeawaysSlide.tsx
├── styles/
│   ├── theme.ts           # Color palette, fonts, spacing
│   └── global.css         # Global styles
docs/
└── SLIDES_OUTLINE.md      # Detailed outline, speaker notes, design guidelines
```

## Navigation

- **Arrow keys**: Navigate slides (Spectacle default)
- **Progress bar**: Visual indicator at bottom
- **Buttons**: Restart, Previous, Next
- **F key**: Toggle fullscreen

Spectacle uses URL query params for navigation: `?slideIndex=X&stepIndex=Y`

## Design Principles

1. **Audience-focused** - Practical, not technical jargon
2. **Compact layouts** - Content must fit without scrolling
3. **Visual animations** - Explain concepts through motion, not just text
4. **Dark theme** - Professional, easy on the eyes
5. **Consistent sizing** - 42px headings, 14-18px body text, 20px padding

## Running the Project

```bash
npm install
npm run dev
```

Opens at http://localhost:5000/
